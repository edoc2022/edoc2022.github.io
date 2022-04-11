import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';

import edocLogoWhite from './../assets/images/edoc2022-tyrol-date-place-white-contour-large.png';

const IndexPage = () => (
  <Layout>    
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <Link to="http://edocconference.org/2022">
            <img src={edocLogoWhite} className="img-fluid" alt="The Enterprise Computing Conference" />
          </Link>

          <br/> <br/>

          <Link to="http://edocconference.org/2022">
            <div className="btn btn-primary">
              Visit EDOC 2022
            </div>
          </Link>
        </div>
      </div>
    </header>
  </Layout>
);

export default IndexPage;
