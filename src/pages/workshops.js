import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import edocLogoWhite from '../assets/images/edoc2022-tyrol-white-contour-large.png';
import gerd from '../assets/images/tutorial-gerd-wagner.jpg';
import Workshop from '../components/Workshop';

const TutorialsPage = () => (
  <Layout>
    <Header />

    <header className="secondaryhead">
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

    <section className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Workshops</h1>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <Workshop
          id="idams"
          title={
            <div>
              IDAMS - Intelligent Digital Architecture, Methods, and Services
              for Industry 4.0 and Society 5.0
            </div>
          }
          description="The EDOC Workshop - Intelligent Digital Architecture, Methods, and Services for Industry 4.0 and Society 5.0 - covers fundamental and practical aspects to support digital transformation. This disruptive change interacts with all information processes and systems, which are important business enablers for the digital transformation for years. Intelligent digital architectures enable intense interaction with customers and products. The customer is closely integrated with business processes and interacts like a co-worker by using implicit touchpoints, which are provided by mobility and wearable systems and the Internet of Things. In this way, customer experience is fostered with disruptive transformation and continuous improvement."
          workshopLink={
            <Link to="https://easychair.org/cfp/IDAMS2022">
              https://easychair.org/cfp/IDAMS2022
            </Link>
          }
          submissionLink={
            <Link to="https://easychair.org/conferences/?conf=idams2022">
              https://easychair.org/conferences/?conf=idams2022
            </Link>
          }
        />

        <br />
        <br />
        <br />
        <br />
        <br />

        <Workshop
          id="tear"
          title={<div>TEAR - Trends in Enterprise Architecture Research</div>}
          description="The international TEAR workshop series brings together Enterprise Architecture (EA) researchers from different research communities and provides a forum to present EA research results and to discuss future EA research directions. EA covers the entire “business-to-IT stack” of an enterprise by explicitly incorporating business-related artifacts in addition to conventional IS/IT artifacts. This is in contrast to conventional architecture management approaches such as IT architecture, software architecture, or IS architecture, which often focus on one (IT centric) aspect only. We invite submissions on original EA research results, i.e., submissions that have not been accepted or submitted for publication elsewhere. Selected best papers of TEAR 2022 will be invited to a special issue of the well established Software and Systems Modeling journal."
          workshopLink={
            <Link to="https://tear-series.org/">https://tear-series.org/</Link>
          }
          submissionLink={
            <Link to="https://easychair.org/conferences/?conf=tear2022">
              https://easychair.org/conferences/?conf=tear2022
            </Link>
          }
        />

        <br />
        <br />
        <br />
        <br />
        <br />

        <Workshop
          id="flpm"
          title={<div>FLPM - Forward-Looking Process Mining</div>}
          description="Forward-looking techniques in process mining enable organizations to create their own digital twins. Process mining provides data-driven support for businesses to make their processes transparent. Most process mining techniques are backward-looking. They generate descriptive process models based on historical data and identify performance and compliance issues. Forward-looking process mining focuses on turning the results of backward-looking techniques into actions. Process mining is capable of providing insights into the future of processes given the provided insight, i.e., the currently discovered insights. The purpose of this workshop is to present and discuss the potential forward-looking process mining techniques where they play a role in an organization's digital twin. The scope of the workshop includes approaches such as data-driven process model generation, simulation, and prediction, as well as a human role in these approaches."
          workshopLink={
            <Link to="https://flpm-workshop.github.io/">
              https://flpm-workshop.github.io/
            </Link>
          }
          submissionLink={
            <Link to="https://easychair.org/conferences/?conf=flpm2022">
              https://easychair.org/conferences/?conf=flpm2022
            </Link>
          }
        />

        <br />
        <br />
        <br />
        <br />
        <br />

        <Workshop
          id="soea4ee"
          title={
            <div>
              SOEA4EE - Service oriented Enterprise Architecture for Enterprise
              Engineering
            </div>
          }
          description="Enterprise Engineering (EE) is the application of engineering principles to the design of Enterprise Architectures. It enables deriving the Enterprise Architecture from the enterprise goals and strategy and aligning it with the enterprise resources. Enterprise architecture is used to map the enterprise goal and strategy to the enterprise’s resources (actors, assets, IT supports) and to support the evolution of this mapping. It also provides documentation on the assignment of enterprise resources to the enterprise goals and strategy. There are different paradigms for creating enterprise architecture. The most important is to encapsulate the functionalities of IT resources as services. By this means, it is possible to clearly describe the contributions of IT both in terms of functionality and quality and to define a service-oriented enterprise architecture (SoEA)."
          workshopLink={
            <Link to="https://www.soea4ee.org/">https://www.soea4ee.org/</Link>
          }
          submissionLink="TBA"
        />
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default TutorialsPage;
