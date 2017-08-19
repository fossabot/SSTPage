import React from 'react'

import Face from '../Face/Face'

class TechTest extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <Face showName src="LCM.jpg" faceSize="medium" name="测试项"/>
        <Face showName withCard src="LCM.jpg" faceSize="small" name="测试项" id="chunming"/>
      </div>
    )
  }
}

export default TechTest