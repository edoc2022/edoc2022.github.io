import React from 'react';

import Layout from '../components/Layout';
// import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
// import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import ipad from '../assets/images/unibz-main-building.jpg';
// import demoImage1 from '../assets/images/demo-image-01.jpg';
// import demoImage2 from '../assets/images/demo-image-02.jpg';
// import bgMaster from '../assets/images/lake-and-mountains_liane-metzler.jpg';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          {/* <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll> */}
        </div>
      </div>
    </header>

    <section id="about" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {/* <h2 className="text-black mb-4">Built with Bootstrap 4</h2>
            <p className="text-black-50">
            Grayscale is a free Bootstrap theme created by Start Bootstrap. It
            can be yours right now, simply download the starter on
            <a href="https://github.com/anubhavsrivastava/gatsby-starter-grayscale">
            the github repo
            </a>
            .
          </p> */}
          <p className="text-black text-justify">
            <b>EDOC 2022</b> is the twenty-sixth conference in a series that provides the key forum for researchers and practitioners in the field of enterprise computing. EDOC conferences address the full range of models, methodologies, and engineering technologies contributing to intra-enterprise and inter-enterprise application systems. Since 1997, EDOC has brought together leading computer scientists, IT decision-makers, enterprise architects, solution designers, and practitioners to discuss enterprise computing challenges, models, and solutions from the perspectives of academia, industry, and government. The EDOC conference series emphasizes a holistic view on enterprise applications engineering and management, fostering integrated approaches that address and relate business models, business processes, people, and technology.
            <br/><br/><br/>

            EDOC is the nº 1 enterprise conference (on e.g. enterprise computing, enterprise architecture, enterprise engineering) according to Google Scholar's h5-index:
            <br/><br/>

            <ol>
              <li>
                IEEE EDOC, the enterprise computing conference, 17
              </li>
              <li>
                Enterprise, Business-Process and Information Systems Modeling (BPMDS and EMMSAD), 12
              </li>
              <li>
                International Conference on Enterprise Information Systems (ICEIS), 20
              </li>
              <li>
                Practice of Enterprise Modeling (PoEM), 12
              </li>
              <li>
                International Conference on Operations Reserach and Enterprise Systems (ICORES), 10
              </li>
            </ol>
            <br/>
            
            Please subscribe <Link to='http://www.ieee-edoc.org/mailinglist.html'>here</Link> to receive updates from the conference and future EDOC events. Watch a teaser video and come back soon for more details!
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

    {/* <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Shoreline</h4>
              <p className="text-black-50 mb-0">
                Grayscale is open source and MIT licensed. This means you can
                use it for any project - even commercial projects! Download it,
                customize it, and publish your website!
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Misty</h4>
                  <p className="mb-0 text-white-50">
                    An example of where you can put an image of a project, or
                    anything else, along with a description.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Mountains</h4>
                  <p className="mb-0 text-white-50">
                    Another example of a project with its respective
                    description. These sections work well responsively as well,
                    try this theme on a small screen!
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    {/* <Subscribe /> */}

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
