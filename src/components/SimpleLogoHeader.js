import { Link } from 'gatsby';
import React, { Component } from 'react';
import edocLogoWhite from '../assets/images/edoc2022-tyrol-white-contour-large.png';

export default class SimpleLogoHeader extends Component {
  render() {
    return (
      <header className="secondaryhead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <Link to="/">
              <img
                src={edocLogoWhite}
                className="img-fluid"
                alt="The Enterprise Computing Conference"
                style={{ maxHeight: '35vh' }}
              />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
