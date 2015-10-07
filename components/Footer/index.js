/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Footer extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Footer">
        <div className="Footer-container">
        
        </div>
        <div className="Footer-legal">
          <div className="Footer-legal-container">

          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Footer;
