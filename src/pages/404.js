import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import { Link } from 'gatsby';

// import edocLogoWhite from '../assets/images/edoc2022-tyrol-white-contour-large.png';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

const NotFoundPage = () => (
  <Layout>
    <Header />
    <SimpleLogoHeader />

    <section className="content-section text-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-black mx-auto mt-2 mb-5">Page not found</h2>

            <Link to="/" className="btn btn-primary">
              HOME
            </Link>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
