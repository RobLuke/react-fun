import React from "react";
import {Resolver} from "react-resolver";
import Hero from "Hero";
import Section from "Section";
import Quotes from "Quotes";
import Text from "Text";
import BlogsRecent from "Blogs/BlogsRecent";
import BubbleContainer from "Bubbles/BubbleContainer";

class Home extends React.Component {

  render(): ?ReactElement {
    var bubbles = [{text: 'Marketing Consulting Services', image: '/images/whiteboard.svg'},
                    {text: 'Cloud-based Customer Equity Platform', image: '/images/cloud.svg'},
                    {text: 'Marketing Technology Applications', image: '/images/mobile.svg'}];
    return (
      <div className="Home">
        <Hero color="#FFB200" image="/images/heroGraph.svg" calloutImage="/images/eighty.svg" calloutText="More Quality Customers Captured in 1 year" displayText="none"/>
        <Section display="none" >
          <BubbleContainer bubbles={bubbles}/>
        </Section>
        <Section text="THE CASE FOR SMARTER MARKETING" >
          <Quotes />
        </Section>
        <Section text="Customer Centricity" >
          <Text />
        </Section>
        <Section text="Recent Blog Posts" >
          <BlogsRecent />
        </Section>
      </div>
    );
  }
}

Home.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

Home.displayName = "Home";

export default Resolver.createContainer(Home, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
