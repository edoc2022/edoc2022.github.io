import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import edocLogoWhite from '../assets/images/edoc2022-tyrol-white-contour-large.png';
import gerd from '../assets/images/tutorial-gerd-wagner.jpg';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

const TutorialsPage = () => (
  <Layout>
    <Header />
    <SimpleLogoHeader />

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">tutorials</h1>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 id="wagner" className="mx-auto my-0 text-uppercase text-center">
              Prof. Dr. Gerd Wagner
            </h2>

            <br />

            <h3 className="mx-auto my-0 text-uppercase text-center">
              Business Process Modeling and Simulation with DPMN
            </h3>

            <br />
            <br />
            <br />

            <p className="text-black text-justify">
              The Business Process Modeling Notation (BPMN) has been
              successfully established as the defacto standard in Business
              Process (BP) Management. However, BPMN does not have a convincing
              formal semantics and lacks several important elements needed for
              BP simulation. BPMN is also not well-aligned with the
              Processing/Queuing Network paradigm of Operations Research (OR)
              and the related business process simulation paradigm pioneered by
              the Discrete Event Simulation (DES) languages/tools GPSS and
              SIMAN/Arena. The Discrete Event Process Modeling Notation (DPMN)
              is based on the Object Event Modeling and Simulation (OEM{'&'}S)
              paradigm and on Event Graphs (Schruben 1983), which capture the
              event scheduling paradigm of DES. DPMN supports modeling
              resource-constrained activities (with resource roles and resource
              pools) in Activity Networks and Processing Networks, as well as
              basic agent concepts (perception, action, communication) and
              agent-based BP modeling.
            </p>
          </div>
        </div>

        <br />
        <br />

        <div className="row justify-content-center align-items-center no-gutters bg-black">
          <div className="col-lg-6 text-center">
            <img className="img-fluid bg-black" src={gerd} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Short Bio</h4>
                  <p className="mb-0 text-white-50">
                    Gerd Wagner is Professor of Internet Technology at
                    Brandenburg University of Technology, Cottbus, Germany.
                    After studying Mathematics, Philosophy and Informatics in
                    Heidelberg, San Francisco and Berlin, he (1) investigated
                    the semantics of negation in knowledge representation
                    formalisms, (2) developed concepts and techniques for
                    agent-oriented modeling and simulation, (3) participated in
                    the development of a foundational ontology for conceptual
                    modeling, the Unified Foundational Ontology (UFO), and (4)
                    created a new Discrete Event Simulation paradigm: Object
                    Event Modeling and Simulation (OEM{'&'}S), and a new process
                    modeling language: the Discrete Event Process Modeling
                    Notation (DPMN). He also maintains the website{' '}
                    <a href="https://web-engineering.info/">
                      web-engineering.info
                    </a>{' '}
                    and the web-based simulation portal
                    <a href="https://sim4edu.com/">sim4edu.com</a>.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default TutorialsPage;
