import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import edocLogoWhite from './../assets/images/edoc2022-tyrol-date-place-white-contour-large.png';
import unibzBuilding from './../assets/images/unibz-main-building.jpg';

import unibz from './../assets/images/supporter-unibz.png';
import twente from './../assets/images/supporter-twente.png';
import noi from './../assets/images/supporter-noi.jpg';
import springer from './../assets/images/supporter-springer.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <Link to="/">
            <img
              src={edocLogoWhite}
              className="img-fluid"
              alt="The Enterprise Computing Conference"
            />
          </Link>
        </div>
      </div>
    </header>

    <section id="supporters" className="content-section text-center">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-2" />
          <div className="col-4">
            <div className="btn mr-4 ml-4 mt-4 mb-4 btn-primary">
              <Link className="text-white" to="https://coopisconference.org/">
                CoopIS 2022
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="btn mr-4 ml-4 mt-4 mb-4 btn-primary">
              <Link className="text-white" to="/call-for-papers">
                Call for Papers
              </Link>
            </div>
          </div>
          <div className="col-2" />
        </div>
      </div>
    </section>

    <section id="about" className="content-section text-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto">
            <p className="text-black text-justify">
              EDOC 2022 is the 26<sup>th</sup> conference in the{' '}
              <Link to="http://edocconference.org/">EDOC series</Link> that
              provides a key forum for researchers and practitioners in the
              field of Enterprise Computing. EDOC addresses the full range of
              models, methodologies, and engineering technologies contributing
              to building and evolving intra- and inter-enterprise software
              systems. From 2022 on, EDOC will be spelled-out "Enterprise
              Design, Operations and Computing" to reflect the broad range of
              aspects of interest to the conference.
              <br />
              <br />
              EDOC 2022 calls for contributions with a special emphasis on the
              theme of designing and operating "Flexible Enterprises". This
              year's theme reflects an ever changing world under the influence
              of disruptive events, trends and technologies, as well as the
              increasing role of artificial intelligence.
              <br />
              <br />
              In this context, new concepts and approaches are required: (a) to
              address pressing challenges in domains like healthcare, advanced
              manufacturing, finance, environmental management and sustainable
              agriculture, supply chain management and others, while ensuring
              compliance with ethical and legal principles, as well as long-term
              interoperability and resilience of enterprise systems; and (b) to
              leverage technologies such as digital twins, machine learning,
              IoT, big data analytics, distributed ledgers/blockchain in trusted
              enterprise practices. A particular challenge of interest in this
              scenario is the combined use of data-driven approaches (including
              machine learning) and other AI techniques with established
              modeling approaches for Enterprise Computing (including Enterprise
              Architecture Modeling, Business Process Modeling, Model-Driven
              Enterprise Systems Engineering, Conceptual Modeling, etc.) towards
              "augmented" enterprise systems.
            </p>

            <p className="text-black text-justify">
              Please subscribe <Link to="http://eepurl.com/cGLBwf">here</Link>{' '}
              to receive updates from the conference and future EDOC events.
              Watch a teaser video and come back soon for more details!
            </p>
          </div>
        </div>
      </div>
      <img
        src={unibzBuilding}
        className="img-fluid"
        alt="Main building of the Free University of Bozen-Bolzano."
      />
    </section>

    <section id="coopis" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-black mb-4">CoopIS 2022</h2>
            <p className="text-black text-justify">
              EDOC 2022 is co-located with{' '}
              <Link to="https://coopisconference.org/">CoopIS 2022</Link>. The
              CoopIS conference series, currently in its 28<sup>th</sup>{' '}
              edition, is an established international event for presenting and
              discussing scientific contributions about technical, economical,
              and societal aspects of distributed information systems at scale.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="venue" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-black mb-4">The Venue</h2>
            <p className="text-black text-justify">
              EDOC 2022 is hosted by the Free University of Bozen-Bolzano,
              located in the city of Bolzano, Northern Italy. The valley of the
              river Adige, which carves the Italian Alps, is the home of a
              vibrant research community with leading researchers in the fields
              of ontology engineering, knowledge representation, and enterprise
              architecture. In every available opportunity, Bolzano welcomes you
              to come to visit, learn, and celebrate its nature, history, and
              culture in a unique place in the heart of Europe.
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
      </div>
    </section>

    <section id="supporters" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-black mb-4">Supported By</h2>
          </div>
        </div>

        <br />
        <br />

        <div className="row align-items-center">
          <div className="col">
            <Link to="https://www.unibz.it/">
              <img
                src={unibz}
                className="img-fluid img-responsive"
                alt="Unibz - logo"
              />
            </Link>
          </div>
          <div className="col">
            <Link to="https://www.utwente.nl/">
              <img
                src={twente}
                className="img-fluid img-responsive"
                alt="University of Twente - logo"
              />
            </Link>
          </div>
          <div className="col">
            <Link to="https://noi.bz.it/en">
              <img
                src={noi}
                className="img-fluid img-responsive"
                alt="NOI Techpark - logo"
              />
            </Link>
          </div>
          <div className="col">
            <Link to="https://www.springer.com/gp">
              <img
                src={springer}
                className="img-fluid img-responsive"
                alt="Springer - logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
