/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Section extends React.Component {
  render(): ?ReactElement {
    return (
      <section className={`Section ${this.props.class}`}>
        <div className="Section-Title" style={{display: this.props.display}} >
          <h2 className="h2">{this.props.text}</h2>
        </div>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Section;
