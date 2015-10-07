/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Bubble extends React.Component { 
  render(): ?ReactElement {
    return (
      <div className="Bubble" style={{width: `${this.props.width}%`}}>
        <div className="Bubble-image">
          <img src={this.props.image} />
        </div>
        <p className="Bubble-text">{this.props.text}</p>
      </div>
    );
  }
}

Bubble.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Bubble;
