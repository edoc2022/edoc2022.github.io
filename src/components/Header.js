import React, { Component } from 'react';
import Scroll from './Scroll';
import config from '../../config';
import { Link } from 'gatsby';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: true,
      // openMenu: false,
      visibilityClass: '',
    };
  }

  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // TODO: use Scroll to move to the top of the page when clicking on "EDOC 2022" from the homepage
  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">{config.siteTitle}</Link>
          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            Menu <i className="fas fa-bars"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {/* <a className="nav-link" href="/call-for-papers">
                  Call for Papers
                </a> */}
                <Link className="nav-link" to="/call-for-papers">Call for Papers</Link>
                {/* <Link to="http://edocconference.org/">EDOC series</Link> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/organization">Organization</Link>
              </li>
              {/*
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="about"
                  >
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </Scroll>
              </li>
              */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
