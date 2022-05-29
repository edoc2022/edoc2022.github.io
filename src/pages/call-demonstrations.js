import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

const CallDemonstrationPage = () => (
  <Layout>
    <Header />
    <SimpleLogoHeader />

    <section id="title" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="mx-auto my-0 text-uppercase">
              EDOC 2022 Demonstration Track
            </h1>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-black text-justify">
              The EDOC 2022 Demonstration Track offers an exciting and highly
              interactive way to present prototypes and applications in the
              context of enterprise computing. Prototypes and applications may
              originate either from research projects or from industry.
              Proposals for demonstrations should focus on innovative concepts
              or technologies that address models, methodologies, and
              engineering technologies contributing to intra- and
              inter-enterprise application systems. Authors of accepted
              conference papers are also invited to propose demonstrations of
              their work.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto text-justify">
            <h3 className="text-black mb-4 text-uppercase text-center">
              Topics of Interest
            </h3>

            <p className="text-black">
              Areas of interest for demonstrations include all topics of the
              EDOC conference. Specific topics of interest include but are not
              limited to:
              <br />
              <br />
              <ul className="text-left">
                <li>
                  Enterprise Architecture (EA) and Enterprise Service
                  Architecture (ESA)
                </li>
                <li>Service-Oriented Architecture (SOA)</li>
                <li>Business Process Management (BPM) and Business Rules</li>
                <li>Process Mining,</li>
                <li>Business Intelligence and Business Process Analytics</li>
                <li>Big Data {'&'} Data Mining</li>
                <li>Information Integration and Interoperability</li>
                <li>Model-based Approaches</li>
                <li>Enterprise Applications Deployment and Governance</li>
                <li>Security Solutions for Enterprises</li>
                <li>Internet of Things (IoT)</li>
                <li>Digital Twins</li>
                <li>Advanced Manufacturing</li>
                <li>
                  AI-based Approaches applied to Business Intelligence and
                  Business Process Analytics, Enterprise Architecture and
                  Service-Oriented Architecture.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto text-justify">
            <h3 className="text-black mb-4 text-uppercase text-center">
              Submission Guidelines and Review Process
            </h3>

            <p className="text-black">
              Full papers should be written in English, following Springer LNCS
              style - including all text, references, appendices, and figures.
              For formatting instructions and templates, see the Springer Web
              page:{' '}
              <Link
                to="http://www.springer.de/comp/lncs/authors.html"
                target="_blank"
              >
                http://www.springer.de/comp/lncs/authors.html
              </Link>
              . All submissions must be made in PDF format.
              <br />
              <br />
              The workshop papers will be published by Springer as a
              post-workshop proceedings volume in the series{' '}
              <b>Lecture Notes in Business Information Processing (LNBIP)</b>.
              <br />
              <br />
              <b>
                Demonstration papers should address the aforementioned topics.
              </b>
              <br />
              <br />
              <b>The paper must not be more than 6-pages long</b>, and should
              include the following information:
              <br />
              <br />
              <ul className="text-left">
                <li>Title and authors</li>
                <li>
                  Abstract: A brief description of the prototype or application,
                  together with a statement on how conference participants
                  benefit from attending the demonstration
                </li>
                <li>System overview</li>
                <li>
                  Summary of innovative concepts and significance for the EDOC
                  domain as well as functions or features to be demonstrated. If
                  applicable, include brief descriptions of case studies
                  performed using the prototype or application, provide
                  scalability data or pointers indicating where readers can find
                  more information about these case studies.
                </li>
                <li>
                  Link (optional): A link to a Web page where to download or use
                  the tool.
                </li>
              </ul>
              <br />
              Additionally, authors will be requested to provide a link to a
              short online video or screencast not exceeding 6 minutes in length
              (hard limit) of their demonstration. The video must be playable
              using a wide variety of media players.
              <br />
              <br />
              <b>
                Demonstration papers will be submitted via Easychair. The
                submission link will be soon be published here.
              </b>
              <br />
              <br />
              At least one presenter of each accepted demonstration must
              register for the conference and be present at the conference
              during the dedicated timeslot(s) to carry out the demonstration in
              person.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto text-justify">
            <h3
              id="important-dates"
              className="text-black mb-4 text-uppercase text-center"
            >
              Important Dates
            </h3>

            <p className="text-black">
              <ul>
                <li>Paper submission deadline: 16 July 2021</li>
                <li>Notification of acceptance: 16 August 2021</li>
                <li>Camera-ready paper submission: 27 August 2021</li>
                <li>Conference dates: 3-7 October 2022</li>
              </ul>
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto text-justify">
            <h3
              id="demo-chairs"
              className="text-black mb-4 text-uppercase text-center"
            >
              Demonstration Track Chairs
            </h3>

            <p className="text-black">
              <ul>
                <li>
                  Massimiliano de Leoni, University of Padova, Padova, Italy
                </li>
                <li>
                  Cristine Griffo, Free University of Bozen-Bolzano, Bolzano,
                  Italy
                </li>
                <li>
                  Ivan Donadello, Free University of Bozen-Bolzano, Bolzano,
                  Italy
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default CallDemonstrationPage;
