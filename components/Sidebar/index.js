/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';
var {PropTypes} = React;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidUpdate() {
    if (!this.state.isLoaded) {
        this.setState({isLoaded: true});
    }
  }

  render(): ?ReactElement {
    var isOpen = this.props.isOpen;
    var className = '';
    if (!this.state.isLoaded) {
        className="Sidebar";
    } else {
        className = isOpen ? 'Sidebar is-open' : 'Sidebar is-closed';    
    }
    
    return (
      <div className={className}>
        <div className="Sidebar-container">
            <Link className='Sidebar-link' to='home'>Home</Link>
            <Link className='Sidebar-link' to='about'>About</Link>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Sidebar;
