/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import Header from 'Header';
import Footer from 'Footer';

class AppBase extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render(): ?ReactElement {
    return (
      <div>
        <button onClick={this.toggleNav} className='burger-button'></button>
        <Header isOpen={this.state.isOpen}/>
        <RouteHandler />
        <Footer />
      </div>
    );
  }
}

export default AppBase;

