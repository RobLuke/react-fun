import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';

class About extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="About">
        <Hero color='#33495F' textH1='About Page'/>
      </div>
    );
  }
}

About.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

About.displayName = 'About';

export default Resolver.createContainer(About, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
