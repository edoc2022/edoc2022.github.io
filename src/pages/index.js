import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import edocLogoWhite from '../assets/images/edoc2022-tyrol-date-place-white-contour-large.png';
import ipad from '../assets/images/unibz-main-building.jpg';

const IndexPage = () => (
  <Layout>    
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <img src={edocLogoWhite} className="img-fluid" alt="The Enterprise Computing Conference" />
        </div>
      </div>
    </header> 

    <section id="about" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-black text-justify">
              EDOC 2022 is the 26<sup>th</sup> conference in the <Link to="http://edocconference.org/">EDOC series</Link> that provides a key forum for researchers and practitioners in the field of Enterprise Computing. EDOC addresses the full range of models, methodologies, and engineering technologies contributing to building and evolving intra- and inter-enterprise software systems. From 2022 on, EDOC will be spelled-out "Enterprise Design, Operations and Computing" to reflect the broad range of aspects of interest to the conference.
            </p>

            <p className="text-black text-justify">
              EDOC 2022 calls for contributions with a special emphasis on the theme of designing and operating "Flexible Enterprises". This year's theme reflects an ever changing world under the influence of disruptive events, trends and technologies, as well as the increasing role of artificial intelligence.
            </p>

            <p className="text-black text-justify">
              In this context, new concepts and approaches are required: (a) to address pressing challenges in domains like healthcare, advanced manufacturing, finance, environmental management and sustainable agriculture, supply chain management and others, while ensuring compliance with ethical and legal principles, as well as long-term interoperability and resilience of enterprise systems; and (b) to leverage technologies such as digital twins, machine learning, IoT, big data analytics, distributed ledgers/blockchain in trusted enterprise practices. A particular challenge of interest in this scenario is the combined use of data-driven approaches (including machine learning) and other AI techniques with established modeling approaches for Enterprise Computing (including Enterprise Architecture Modeling, Business Process Modeling, Model-Driven Enterprise Systems Engineering, Conceptual Modeling, etc.) towards "augmented" enterprise systems.
            </p>
              
            <p className="text-black text-justify">
              Please subscribe <Link to="http://eepurl.com/cGLBwf">here</Link> to receive updates from the conference and future EDOC events. Watch a teaser video and come back soon for more details!
            </p>
          </div>
        </div>
      </div>
      <img src={ipad} className="img-fluid" alt="Main building of the Free University of Bozen-Bolzano." />
    </section>

    <section id="venue" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
          <h2 className="text-black mb-4">The Venue</h2>
          <p className="text-black text-justify">
            EDOC 2022 is hosted by the Free University of Bozen-Bolzano, located in the city of Bolzano, Northern Italy. The valley of the river Adige, which carves the Italian Alps, is the home of a vibrant research community with leading researchers in the fields of ontology engineering, knowledge representation, and enterprise architecture. In every available opportunity, Bolzano welcomes you to come to visit, learn, and celebrate its nature, history, and culture in a unique place in the heart of Europe.
          </p>
          </div>
        </div>
        <iframe width="90%" height="500" src="https://www.youtube-nocookie.com/embed/g5V3mJEE6bw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
