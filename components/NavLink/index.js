/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';
var {PropTypes} = React;

class NavLink extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      isOpen: false,
      hasToggled: false,
    };

    this.toggleLink = this.toggleLink.bind(this);

  }

  toggleLink() {
    this.setState({isOpen: !this.state.isOpen, hasToggled: true});
  }

  convertNameToLink(name) {
    return name.replace(' ', '').toLowerCase();
  }

  render(): ?ReactElement {
    if (!this.props.hasOwnProperty('children')) {
        return (
          <li className='nav-link link'>
            <Link to={this.convertNameToLink(this.props.name)}>{this.props.name}</Link>
          </li>
        );
    }

    var className = "";
    if (!this.state.hasToggled) {
        className="nav-link";
    } else {
      className = this.state.isOpen ? "nav-link is-active" : "nav-link not-active";
    }

    return (
        <li onClick={this.toggleLink} className={className}>{this.props.name}
            <ul className='nav-sublinks'>
            {this.props.children.map(name=>(
                <li className='nav-sublink'>
                    <Link to={this.convertNameToLink(name)}>{name}</Link>
                </li>
            ))}
            </ul>
        </li>
    );
    
  }
}

NavLink.propTypes = {
  id: PropTypes.any.isRequired,
};

export default NavLink;
