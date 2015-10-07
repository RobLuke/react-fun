/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Quote extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Quote">
        <div className="Quote-image">
          <img scr={this.props.image} />
        </div>
        <div className="Quote-content">
          <h2 className="h2 Quote-content-name">{this.props.name}</h2>
          <h3 className="h3 Quote-content-title">{this.props.title}</h3>
          <p className="Quote-content-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

class Quotes extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Quotes">
        <Quote 
          image=""
          name="Russell Glass"
          title="Head of B2B product for LinkedIn"
          text="With the cost of processing, storage and tools having gone down so much, if you’re not using data to make your decisions, or at least to inform your decisions, you’re probably not doing your job." />
        <Quote 
          image=""
          name="M. Larence Light"
          title="former Chief Marketing Officer for McDonald’s"
          text="It no longer makes economic sense to send an advertising message to the many in hopes of persuading the few." />
        <Quote 
          image=""
          name="Nate Silver"
          title="Statistician and Author"
          text="We're not that much smarter than we used to be, even though we have much more information - and that means the real skill now is learning how to pick out the useful information from all this noise." />
        <Quote 
          image=""
          name="Peppers & Rogers"
          title="Marketing Authors"
          text="When two marketers are competing for the same customers business, all other things being equal, the marketer with the greatest scope of information about that particular customer -- the marketer with the most extensive and intimate relationship with that customer -- will be the more efficient competitor." />
        <Quote 
          image=""
          name="Peter Fader"
          title="Author of Customer Centricity"
          text="By talking about “the customer” or by talking about “the average customer,” that doesn’t do justice to the vast heterogeneity and the incredible differences across our customers in terms of their propensity to buy, to talk to each other and to respond to different kinds of offers." />
        <Quote 
          image=""
          name="Marc Benioff"
          title="CEO of Salesforce.com"
          text="Every organization , every company across the line, needs to go from a relatively anonymous relationship to a one-to-one relationship with the customer.  They need to think 'how do I connect with my customer in a whole new way?'  No industry is exempt from this transformation." />
      </div>
    );
  }
}

Quotes.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Quotes;
