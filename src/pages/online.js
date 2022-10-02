import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

const OnlineProgramPage = () => (
  <Layout>
    <Header />

    <SimpleLogoHeader />

    <section id="online" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="mx-auto mb-5 text-uppercase">Online Program</h1>

            <p className="pb-5 text-black text-justify">
              EDOC 2022 goes back to a fully in-person conference format, but
              maintaining the flexibility to accommodate virtual solutions where
              necessary. Here you can find all resources and activities for the
              online part of EDOC's program.
            </p>

            <h2 className="mx-auto my-5 text-uppercase">
              Online Presentations
            </h2>

            <div className="session text-black text-left">
              <div className="session-title-link">EDOC Forum Papers</div>
              <div className="session-chair font-weight-bold">
                Learning-aided Adaptation - A Case Study from Wellness Ecosystem
              </div>
              <div className="session-place">
                Suman Roychoudhury, Mayur Selukar, Deepali Kholkar, Suraj Thapa,
                Namrata Choudhary, Vinay Kulkarni, and Sreedhar Reddy
              </div>
            </div>
          </div>

          <div className="col-lg-12 my-2 text-center">
            <iframe
              width="90%"
              height="500"
              src="https://player.vimeo.com/video/756081059?h=0ec0dd0e54&amp;app_id=122963"
              title="EDOC 2022 - Learning-aided adaptation"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default OnlineProgramPage;
