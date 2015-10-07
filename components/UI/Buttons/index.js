/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Button extends React.Component {
  render(): ?ReactElement {
    return (
      <button className={`Button ${this.props.class}`} >
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Button;
