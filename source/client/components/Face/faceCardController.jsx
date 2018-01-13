import React from 'react'

const faceCardController = (ComposedComponent) => {
  class FCC extends React.Component{
    constructor(){
      super()

      this.state = {
        loading: false,
        error: null,
        data: null,
      }

      this.fetchApi = this.fetchApi.bind(this);
    }

    fetchApi() {
      if(window.__memberDetail[this.props.id])
        return this.setState({data: window.__memberDetail[this.props.id]})

      this.setState({loading: true});
      fetch(`/api/member/card/${this.props.id}.json`)
        .then(response => response.json())
        .then(
          json => {
            window.__memberDetail[json.__fileName] = json;
            this.setState({loading: false, data: json});
          },
          error => this.setState({loading: false, error: error})
        );
    }

    render(){
      return <ComposedComponent {...this.props} {...this.state} fetchApi={this.fetchApi}/>
    }
  }

  return FCC
}

export default faceCardController