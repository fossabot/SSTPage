import React from 'react'

import classNames from 'classnames'

import Face from './Face'

import './stylesheets/faceList.less'

class FaceList extends React.Component{
  render(){
    let listContent, listClassName, elementCount, elementKeys, faceSize, showName;
    listClassName = classNames({
      face_list: true,
      fold     : this.props.fold,
    });
    listContent  = this.props.listContent || [];
    elementKeys  = Object.keys(listContent);
    elementCount = elementKeys.length + 2;
    faceSize     = this.props.faceSize ? this.props.faceSize : 'small';
    showName     = this.props.showName;

    return (
      <div className={listClassName}>
        <ul>
          {
            elementKeys.map((i, n) => {
              let withCard;
              withCard = this.props.withCard && !listContent[i].__offStaff;
              return (
                <li key={i}>
                  <div className="face_wrap" style={{zIndex: elementCount - n}}>
                    <Face id={listContent[i].__fileName} name={listContent[i].name} src={listContent[i].image} 
                          size={faceSize} showName={showName} withCard={withCard} />
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