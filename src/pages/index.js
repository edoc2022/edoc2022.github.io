import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import edocLogoWhite from '../assets/images/edoc2022-tyrol-date-place-white-contour-large-2.png';
import ipad from '../assets/images/unibz-main-building.jpg';
import { Link } from 'gatsby';

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
            The <b>26<sup>th</sup> Enterprise Design, Operations and Computing</b> conference (<b>EDOC 2022</b>) provides the key forum for researchers and practitioners in the field of enterprise computing. Since its conception in 1997, the <Link to="http://edocconference.org/">EDOC conference series</Link> brings together leading computer science researchers, IT decision-makers, enterprise architects, solution designers, and practitioners to discuss enterprise computing challenges, models, and solutions from the perspectives of academia, industry, and government.
          </p>

          <p className="text-black text-justify">
            The EDOC’s unique emphasis is on a holistic view on enterprise applications engineering and management, fostering integrated approaches that address and relate business models, business processes, business policies, people, and technology - within and across enterprises. This emphasis has established its credibility and longevity and made it the premier enterprise distributed computing conference for addressing the full range of models, methodologies, and engineering technologies involved in building and evolving effective enterprise systems.
          </p>
            
          <p className="text-black text-justify">
            Please subscribe <Link to='http://eepurl.com/cGLBwf'>here</Link> to receive updates from the conference and future EDOC events. Watch a teaser video and come back soon for more details!
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
