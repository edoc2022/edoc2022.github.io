import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import edocLogoWhite from '../assets/images/edoc2022-tyrol-white-contour-large.png';
import carliss from '../assets/images/keynote-carliss-baldwin.jpeg';
import jordi from '../assets/images/keynote-jordi-cabot.jpeg';
import stephen from '../assets/images/keynote-stephen-mellor.jpeg';

const KeynotesPage = () => (
  <Layout>
    <Header />

    <header className="secondaryhead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <img
            src={edocLogoWhite}
            className="img-fluid"
            alt="The Enterprise Computing Conference"
          />
        </div>
      </div>
    </header>

    <section id="keynote-1" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">keynotes</h1>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto text-center">
            <h2 className="mx-auto my-0 text-uppercase">Carliss Y. Baldwin</h2>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row justify-content-center align-items-center no-gutters bg-black">
          <div className="col-lg-6 text-center">
            <img className="img-fluid bg-black" src={carliss} alt="" />
          </div>

          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Short Bio</h4>
                  <p className="mb-0 text-white-50">
                    Carliss Y. Baldwin is the William L. White Professor of
                    Business Administration at the Harvard Business School. She
                    studies the process of design and its impact of design
                    architecture on firm strategy, platforms, and business
                    ecosystems. With Kim Clark, she authored{' '}
                    <Link to="http://www.amazon.com/exec/obidos/ASIN/0262024667/qid=986224094/sr=1-2/ref=sc_b_3/104-0738556-5238322">
                      Design Rules, Volume 1: The Power of Modularity
                    </Link>
                    . Her work has been published in a variety of leading
                    journals including Strategic Management Journal,
                    Organization Science, Management Science, Research Policy
                    and Harvard Business Review. She has won numerous awards for
                    research: most recently, she received a Doctor honoris causa
                    from the Technical University Munich in 2014, and in 2015
                    was named the Distinguished Scholar of the Technology and
                    Innovation Management (TIM) division of the Academy of
                    Management.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto text-center">
            <h2 className="mx-auto my-0 text-uppercase">Jordi Cabot</h2>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row justify-content-center align-items-center no-gutters bg-black">
          <div className="col-lg-6 text-center order-lg-first">
            <img className="img-fluid bg-black" src={jordi} alt="" />
          </div>

          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Short Bio</h4>
                  <p className="mb-0 text-white-50">
                    I'm an <Link to="https://www.icrea.cat/">ICREA</Link>{' '}
                    Research Professor at{' '}
                    <Link to="http://in3.uoc.edu/">
                      Internet Interdisciplinary Institute
                    </Link>
                    , the Research center of the Open University of Catalonia (
                    <Link to="http://www.uoc.edu/portal/en/index.html">
                      UOC
                    </Link>
                    ) where I'm leading the{' '}
                    <Link to="http://som-research.uoc.edu/">
                      SOM Research Lab
                    </Link>
                    . I'm also Visiting Professor at the{' '}
                    <Link to="https://hvl.no/en/">
                      Western Norway University of Applied Sciences
                    </Link>
                    . Previously, I've been at École des Mines de Nantes, Inria,
                    University of Toronto, Politecnico di Milano and the
                    Technical University of Catalonia.
                  </p>

                  <p className="mb-0 text-white-50">
                    My research falls into the broad area of{' '}
                    <b>systems and software engineering</b>, especially
                    promoting the rigorous use of software <b>models</b> in all
                    software tasks while keeping an eye on the most
                    unpredictable element in any project: the people involved in
                    it. Current research topics include
                    <b>pragmatic formal verification</b> techniques, analysis of{' '}
                    <b>open source</b> communities, <b>open data</b>{' '}
                    exploitation and the role <b>AI</b>
                    can play in software development (and vice versa). Let's use
                    all the tools at our disposal to build{' '}
                    <b>
                      <i>Better Software Faster</i>
                    </b>
                    .
                  </p>

                  <p className="mb-0 text-white-50">
                    Beyond scientific publications, the results of our research
                    are available as{' '}
                    <Link to="https://som-research.uoc.edu/research-tools/">
                      open-source tools
                    </Link>{' '}
                    or as part of transfer contracts. As an example,{' '}
                    <Link to="https://xatkit.com/">Xatkit</Link> is a spin-off
                    of the team.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto text-center">
            <h2 className="mx-auto my-0 text-uppercase">Stephen Mellor</h2>

            <br />

            <h4 className="mx-auto my-0">(Joint session with CoopIS 2022)</h4>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row justify-content-center align-items-center no-gutters bg-black">
          <div className="col-lg-6 text-center">
            <img className="img-fluid bg-black" src={stephen} alt="" />
          </div>

          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Short Bio</h4>
                  <p className="mb-0 text-white-50">
                    Stephen Mellor is the Chief Technical Officer for the
                    Industry IoT Consortium, where he aligns groups for
                    business, technology, trustworthiness and industry for the
                    Industrial Internet.
                  </p>

                  <p className="mb-0 text-white-50">
                    He is a well-known technology consultant on methods for the
                    construction of real-time and embedded systems, a signatory
                    to the Agile Manifesto, and one-time adjunct professor at
                    the Australian National University in Canberra, ACT,
                    Australia. Stephen is the author of Structured Development
                    for Real-Time Systems, Object Lifecycles, Executable UML,
                    MDA Distilled and Models to Code.
                  </p>

                  <p className="mb-0 text-white-50">
                    Stephen was Chief Scientist of the Embedded Software
                    Division at Mentor Graphics, and founder and past president
                    of Project Technology, Inc., before its acquisition. He
                    participated in multiple UML and modeling-related activities
                    at the Object Management Group (OMG), and was a member of
                    the OMG Architecture Board, which is the final technical
                    gateway for all OMG standards. Stephen was the Chairman of
                    the Advisory Board to IEEE Software for ten years and a
                    two-time Guest Editor of the magazine.
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

export default KeynotesPage;
