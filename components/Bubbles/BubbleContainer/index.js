/** @flow */

require('./styles.css');
// var cloud = require('../../images/cloud.svg');
//import cloud from '../../images/cloud.svg';

import React from 'react';
import Bubble from 'Bubbles/Bubble';
var {PropTypes} = React;

class BubbleContainer extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="BubbleContainer">
        {this.props.bubbles.map((bubble, length) =>(
          (length = this.props.bubbles.length),
          <Bubble width={100/length} text={bubble.text} image={bubble.image} />
        ))}
      </div>
    );
  }
}

BubbleContainer.propTypes = {
  id: PropTypes.any.isRequired,
};

export default BubbleContainer;
