// import Scroll from './Scroll';
import React, { Component } from 'react';
import config from '../../config';
import { Link } from 'gatsby';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
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
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Program
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/program-overview">Detailed Program</Link>
                  <Link className="dropdown-item" to="/keynotes">Keynotes</Link>
                  {/* <Link className="dropdown-item" to="/online">Online Program</Link> */}
                  <Link className="dropdown-item" to="/panels">Panels</Link>
                  <Link className="dropdown-item" to="/tutorials">Tutorial</Link>
                  <Link className="dropdown-item" to="/workshops">Workshops</Link>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://link.springer.com/book/10.1007/978-3-031-17604-3" role="button" aria-haspopup="true" aria-expanded="false">
                  Proceedings
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Venue
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/about">About Bolzano</Link>
                  <Link className="dropdown-item" to="/how-to-get">How to Arrive</Link>
                  <Link className="dropdown-item" to="/accommodation">Accommodation</Link>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Conference
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/call-for-papers">Call for Papers</Link>
                  <Link className="dropdown-item" to="/call-doctoral-consortium">Call for Doctoral Consortium</Link>
                  <Link className="dropdown-item" to="/call-demonstrations">Call for Demonstrations</Link>
                  <Link className="dropdown-item" to="/call-journal-first">Call for Journal-First Papers</Link>
                  <Link className="dropdown-item" to="/organization">Organization</Link>
                  <Link className="dropdown-item" to="/registration">Registration</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
