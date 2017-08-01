import React from 'react'

import classNames from 'classnames'

import Face from './Face'

import './stylesheets/faceList.less'

class FaceList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let listClassName, elementCount, elementKeys, faceSize;
    listClassName = classNames({
      face_list: true,
      flexbox: true,
      fold: this.props.fold !== false && !this.props.showName,
      with_name: this.props.showName,
    });
    elementKeys = Object.keys(this.props.listContent);
    elementCount = elementKeys.length + 2;
    faceSize = this.props.faceSize ? this.props.faceSize : 'small';

    return (
      <div className={listClassName}>
        <ul className="flexbox">
          {
            elementKeys.map(i => {
              elementCount --;
              return (
                <li key={i}>
                  <div className="face_wrap" style={{zIndex: elementCount}}>
                    <Face peopleName={this.props.listContent[i].name} 
                          faceImage={this.props.listContent[i].image} faceSize={faceSize} />
                    {this.props.showName ? <p className="name">{this.props.listContent[i].name}</p> : null}
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default FaceList