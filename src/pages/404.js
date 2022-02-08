import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import { Link } from 'gatsby';

import edocLogoWhite from '../assets/images/edoc2022-tyrol-white-contour-large.png';

const NotFoundPage = () => (
  <Layout>
    <Header />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <img src={edocLogoWhite} className="img-fluid" alt="The Enterprise Computing Conference" />
          <h2 className="text-white mx-auto mt-2 mb-5">Page not found</h2>

          <Link to="/" className="btn btn-primary">
            HOME
          </Link>
        </div>
      </div>
    </header>
  </Layout>
);

export default NotFoundPage;
