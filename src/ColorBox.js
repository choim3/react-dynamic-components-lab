import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    let newOpacity = this.props.opacity;

      return (
        <div className="color-box" style={{opacity: newOpacity}}>
          {this.props.opacity >= .2 ? <ColorBox opacity= {newOpacity - .1}/> : null}
        </div>
      )
  }

}
