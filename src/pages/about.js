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

    <section id="venue" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-black mb-4">About Bolzano</h2>

            <p className="text-black text-justify">
              The conference will take place on-site in the charming town of
              Bolzano-Bozen in South Tyrol at the heart of the Dolomites - the
              pink mountains of the Alps. The nature around the city is a
              tourist haven for people interested in hiking in the mountains,
              mountain climbing, biking along the valley and in winter skiing
              brings millions of tourists to the area.
            </p>
          </div>
        </div>

        <iframe
          width="90%"
          height="500"
          src="https://www.youtube-nocookie.com/embed/g5V3mJEE6bw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-black text-justify">
              The region is trilingual between the major languages Italian and
              German and the minority language Ladin. Due to the large degree of
              tourism in the city, the majority of the population also speaks
              English.
            </p>
          </div>
        </div>

        <img
          src={funivia}
          className="img-fluid"
          alt="Funivia del Renon."
          style={{ maxWidth: '90%' }}
        />
        {/* img funivia renon */}

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-black text-justify">
              The colourful medieval, Gothic and Belle Époque buildings, with
              their stepped gables, turrets and attractively faded frescoes,
              have a north European feel. Yet the main commercial street feels
              Mediterranean, and at Piazza delle Erbe, described with pleasure
              by Goethe in his Italian Journey, the two flavours meet. Some of
              the cosiest bars and cafés are hidden behind the stalls of fruit
              and flowers, spices and cheeses.
            </p>
          </div>
        </div>

        <img
          src={viaDeiProtici}
          className="img-fluid"
          alt="Via dei Portici."
          style={{ maxWidth: '90%' }}
        />
        {/* img via dei portici */}

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-black text-justify">
              Bolzano is also the home of Ötzi the Iceman; found in melting
              glacier ice in 1991, he is one of the oldest human mummies at
              roughly 5000 years. Currently he enjoys his final rest at the
              South Tyrol Museum of Archeology, in downtown Bolzano, where
              anyone interested can pay him a visit.
            </p>
          </div>
        </div>

        <img
          src={otzi}
          className="img-fluid"
          alt="Statue of Otzi."
          style={{ maxWidth: '90%' }}
        />
        {/* img otzi */}

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-black text-justify">
              Please check the local tourism information for more information on
              what to do:{' '}
              <Link to="https://www.bolzano-bozen.it/">
                https://www.bolzano-bozen.it/
              </Link>
              .
              <br />
              <br />
              See also{' '}
              <Link to="https://youtu.be/g5V3mJEE6bw">
                https://youtu.be/g5V3mJEE6bw
              </Link>{' '}
              for an overview of the South Tyrol region.
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
