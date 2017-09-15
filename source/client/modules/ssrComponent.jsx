import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatic from 'hoist-non-react-statics'

import SmallLoading from '../components/Layout/SmallLoading'
import OfflinePage from '../components/Error/OfflinePage'
import NotFoundPage from '../components/Error/NotFoundPage'
import ServerErrorPage from '../components/Error/ServerErrorPage'

const ssr = (ComposedComponent) => {
  class SSRC extends React.Component{
    constructor(props, context) {
      super (props, context)

      this.state  = {
        pageData: (context.pageData && context.pageData.data) || window.__pageData || null,
        isFetchingPageData: false,
        pageDataDidFetched: false,
        pageDataErrorMessage: null,
      }

      if(props.routerInfo && props.routerInfo.api){
        this.apiUrl = props.routerInfo.api;
        Object.keys(props.match.params)
              .map(i => this.apiUrl = this.apiUrl.replace(`:${i}`, props.match.params[i]));
      }
    }

    componentWillUnmount() {
      window.__directMark = false;
      window.__pageData = null;
    }

    fetchApi(apiUrl) {
      this.setState({isFetchingPageData: true});

      fetch(apiUrl)
        .then(response => response.json())
        .then(json => this.setState({
          pageData: json,
          isFetchingPageData: false,
          pageDataDidFetched: true,
        }))
        .catch(error => this.setState({
            isFetchingPageData: false,
            pageDataDidFetched: false,
            pageDataErrorMessage: error,
        }));
    }

    componentDidMount() {
      if(this.apiUrl && window && !window.__directMark) this.fetchApi(this.apiUrl);
      if(window) window.scrollTo(0, 0);
    }

    render(){
      if( this.state.pageDataErrorMessage ) return <OfflinePage {...this.props} />
      if( this.state.isFetchingPageData ) return <SmallLoading />
      if( this.apiUrl && this.state.pageData === null ) return <SmallLoading />
      if (this.state.pageData.code === 404) return <NotFoundPage />
      if (this.state.pageData.code) return <ServerErrorPage message={this.state.pageData.error} />
      return <ComposedComponent {...this.props} pageData={this.state.pageData} />
    }
  }

  SSRC.contextTypes = {
    pageData: PropTypes.object
  };

  hoistNonReactStatic(SSRC, ComposedComponent);

  return SSRC
};

export default ssr