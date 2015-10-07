/** @flow */

require('./styles.css');

import React from 'react';
import BlogStory from 'Blogs/BlogStory';
var {PropTypes} = React;

class BlogList extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="BlogList">
        <BlogStory 
          image="/images/blogPhotos/pic.jpg"
          header="Test Title One"
          author="Rob Luke"
          date="September 20, 2015"
          tag="test tag"
          content="Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermen…" />
        <BlogStory 
          image="/images/blogPhotos/pic.jpg"
          header="Test Title Two"
          author="Rob Luke"
          date="September 17, 2015"
          tag="test tag"
          content="Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermen…" />
      </div>
    );
  }
}

BlogList.propTypes = {
  id: PropTypes.any.isRequired,
};

export default BlogList;
