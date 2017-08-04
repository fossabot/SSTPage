import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  pageData: state.pageData,
  isFetchingPageData: state.isFetchingPageData,
  pageDataDidFetched: state.pageDataDidFetched,
  pageDataErrorMessage: state.pageDataErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  emptyPageData: () => dispatch({type: 'emptyPageData'}),
  fetchApi: (apiUrl) => dispatch(fetchApi(apiUrl)),
});

const fetchApi = apiUrl => (dispatch, getState) => {
  dispatch({type: 'startFetchingApi'});
  return fetch(apiUrl)
    .then(response => response.json())
    .then(
      json => dispatch({type: 'fetchingSuccess', pageData: json}),
      error => dispatch({type: 'fetchingFailed', msg: error})
    );
};

const ssr = (ComposedComponent, apiUrl = null, apiUrlRule = null) => {
  class SSRC extends React.Component{
    constructor(props) {
      super (props)

      this.apiUrl = apiUrl;
      if(apiUrlRule) 
        apiUrlRule.map(i => {this.apiUrl = this.apiUrl.replace(`%${i}%`, props.params[i])});
    }

    componentWillUnmount() {
      window.__directMark = false;
      window.__pageData = null;
      this.props.emptyPageData();
    }

    componentDidMount() {
      // We must use '===' here.
      if(this.apiUrl && window && window.__directMark === false) this.props.fetchApi(this.apiUrl);
    }

    render(){
      //let { isFetchingPageData, pageDataErrorMessage } = this.props;
      if( this.apiUrl && this.props.pageData === null ) return <div>Initing</div>
      if( this.props.pageDataErrorMessage !== '' ) return <div>Error</div>
      if( this.props.isFetchingPageData ) return <div>Loading</div>
      return <ComposedComponent {...this.props} />
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(SSRC)
};

export default ssr