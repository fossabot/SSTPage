import React from 'react'

import { Route } from 'react-router'

class A extends React.Component{
  render(){
    return <Route path="**" render={({history}) => (
        <div className="a" onClick={() => history.push(this.props.to)}>
          {this.props.children}
        </div>
      )} />
  }
}

export default A