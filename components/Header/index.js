/** @flow */

require("./styles.css");

import React from "react";
import {Link} from "react-router";
import NavLink from "NavLink";
var {PropTypes} = React;

class Header extends React.Component {
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
    var className = "";
    if (!this.state.isLoaded) {
        className="nav-links";
    } else {
        className = isOpen ? "nav-links is-active" : "nav-links not-active";    
    }

    return (
      <div className="Header">
        <nav className="nav">
          <div className="nav-container">
            <Link className="nav-logo" to="home">Company
              <span className="light" >Logo</span>
            </Link>
            <ul className={className}>
              <NavLink name="Home"/>
              <NavLink name="About"/>
              <NavLink name="Blog"/>
              <NavLink name="Products" children={["Home", "Home", "Home"]} />
              {/*<li className='nav-link link js-login'>
                <div className="nav-login">Login</div>
              </li>
            */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Header;
