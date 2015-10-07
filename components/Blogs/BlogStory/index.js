/** @flow */

require('./styles.css');

import React from 'react';
import Button from 'UI/Buttons';
var {PropTypes} = React;

class BlogStory extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="BlogStory">
        <div className="BlogStory-image">
          <img className="BlogStory-image-back" src={this.props.image} />
          <img className="BlogStory-image-front" src={this.props.imageFade} />
          <div className="BlogStory-image-overlay"></div>
        </div>
        <h2 className="h2 BlogStory-header">
          {this.props.header}
        </h2>
        <div className="BlogStory-details" style={{display: this.props.display}}>
          <h3 className="h3 BlogStory-detail-author">
            by {this.props.author} |
          </h3>
          <h3 className="h3 BlogStory-detail-date">
            {this.props.date} |
          </h3>
          <h3 className="h3 BlogStory-detail-tag">
            {this.props.tag}
          </h3>
        </div>
        <p className="BlogStory-content" style={{display: this.props.display}}>
          {this.props.content}
        </p>
        <div className="BlogStory-button" style={{display: this.props.display}}>
          <Button class="red" text="Read More"/>
        </div>
      </div>
    );
  }
}

BlogStory.propTypes = {
  id: PropTypes.any.isRequired,
};

export default BlogStory;
