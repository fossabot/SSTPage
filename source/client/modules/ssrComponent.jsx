import React from 'react'
import PropTypes from 'prop-types'

import SmallLoading from '../components/Layout/SmallLoading'

const ssr = (ComposedComponent, apiUrl = null, apiUrlRule = null) => {
  class SSRC extends React.Component{
    constructor(props, context) {
      super (props, context)

      this.apiUrl = apiUrl;
      this.state  = {
        pageData: (context.pageData && context.pageData.data) || window.__pageData || null,
        isFetchingPageData: false,
        pageDataDidFetched: false,
        pageDataErrorMessage: null,
      }

      if(apiUrlRule) 
        apiUrlRule.map(i => {this.apiUrl = this.apiUrl.replace(`%${i}%`, props.params[i])});
    }

    componentWillUnmount() {
      window.__directMark = false;
      window.__pageData = null;
    }

    fetchApi(apiUrl) {
      this.setState({isFetchingPageData: true});

      fetch(apiUrl)
        .then(response => response.json())
        .then(
          json => this.setState({
            pageData: json,
            isFetchingPageData: false,
            pageDataDidFetched: true,
            }),
          error => this.setState({
            isFetchingPageData: false,
            pageDataDidFetched: false,
            pageDataErrorMessage: error.message,
          })
        );
    }

    componentDidMount() {
      if(this.apiUrl && window && !window.__directMark) this.fetchApi(this.apiUrl);
    }

    render(){
      if( this.state.isFetchingPageData ) return <SmallLoading />
      if( this.apiUrl && this.state.pageData === null ) return <SmallLoading />
      if( this.state.pageDataErrorMessage ) return <div>Error</div>
      return <ComposedComponent {...this.props} pageData={this.state.pageData} />
    }
  }

  SSRC.contextTypes = {
    pageData: PropTypes.object
  };

  return SSRC
};

export default ssr