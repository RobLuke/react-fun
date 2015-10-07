import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import Section from 'Section';
import BlogList from 'Blogs/BlogList';

class Blog extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Blog">
        <Hero 
          color='#FFB200'
          heroTitle='Blog'
          heroSubtitle='Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
          displayCallout='none' />
        <BlogList />
      </div>
    );
  }
}

Blog.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

Blog.displayName = 'Blog';

export default Resolver.createContainer(Blog, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
