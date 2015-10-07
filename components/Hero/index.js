/** @flow */

require('./styles.css');

import React from 'react';
import Button from 'UI/Buttons';
var {PropTypes} = React;

class Hero extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Hero" style={{background: this.props.color}} >
        <div className="Hero-container">
          <div className="Hero-text" style={{display: this.props.displayText}}>
            <h1 className="heroTitle">{this.props.heroTitle}</h1>
            <p className="heroSubtitle">{this.props.heroSubtitle}</p>
          </div>
          <div className="Hero-callout" style={{display: this.props.displayCallout}}>
            <div className="Hero-callout-image">
              <img src={this.props.calloutImage} />
            </div>
            <p className="Hero-callout-text">{this.props.calloutText}</p>
            <Button class="Hero-callout-button" text="Learn More" />
          </div>
          <div className="Hero-image" style={{display: this.props.display}}>
            <img src={this.props.image} />
          </div>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Hero;
