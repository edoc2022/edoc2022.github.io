import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

import funivia from './../assets/images/funivia-del-renon.jpeg';
import viaDeiProtici from './../assets/images/via-dei-portici.jpeg';
import otzi from './../assets/images/otzi.jpeg';

const Venue = () => (
  <Layout>
    <Header />
    <SimpleLogoHeader />

    <section id="where-to-stay" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h3 className="text-black mb-4">Where to stay in Bolzano</h3>

            <p className="text-black text-justify">
              There are many accommodation options in Bolzano and surroundings, the majority being in the city center.
              <br />
              <br />
              <b>Hotels in Bolzano</b>
              <br />
              <br />
              <ul>
                <li>
                  <b>KOLPINGHAUS:</b>{' '}
                  <a href={`mailto:info@kolpingbozen.it`}>
                    info@kolpingbozen.it
                  </a>
                </li>
                <li>
                  <b>YOUTHOSTEL:</b>{' '}
                  <a href={`mailto:bolzano@ostello.bz`}>bolzano@ostello.bz</a>
                </li>
                <li>
                  <b>HOTEL FIGL:</b>{' '}
                  <a href={`mailto:info@figl.net`}>info@figl.net</a>
                </li>
                <li>
                  <b>HOTEL FEICHTER:</b>{' '}
                  <a href={`mailto:info@hotelfeichter.it`}>
                    info@hotelfeichter.it
                  </a>
                </li>
                <li>
                  <b>HOTEL GREIF:</b>{' '}
                  <a href={`mailto:info@greif.it`}>info@greif.it</a>
                </li>
                <li>
                  <b>PARKHOTEL LUNA MONDSCHEIN:</b>{' '}
                  <a href={`mailto:info@parkhotelmondschein.com`}>
                    info@parkhotelmondschein.com
                  </a>
                </li>
              </ul>
              <br />
              <br />
              Please note that Bolzano offers also many options on{' '}
              <Link to="https://www.airbnb.it/">Airbnb</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default Venue;
