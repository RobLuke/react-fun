/** @flow */

require('./styles.css');

import React from 'react';
import BlogStory from "Blogs/BlogStory";
var {PropTypes} = React;

class BlogsRecent extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="BlogsRecent">
        <BlogStory 
          image="/images/blogPhotos/pic.jpg"
          header="Test Title One" 
          display="none" />
        <BlogStory 
          image="/images/blogPhotos/pic.jpg"
          header="Test Title Two"
          display="none" />
        <BlogStory
          image="/images/blogPhotos/pic.jpg"
          header="Test Title Three"
          display="none" />
      </div>
    );
  }
}

BlogsRecent.propTypes = {
  id: PropTypes.any.isRequired,
};

export default BlogsRecent;
