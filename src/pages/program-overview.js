import React, { Component } from 'react';
import { Link } from 'gatsby';

import config from '../../config';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

import unibzBuilding from './../assets/images/EDOC-and-CoopIS-program-03-10-2022.jpg';

function AnchorToStaticFile(props) {
  return (
    <a
      href={config.manifestStartUrl + props.staticPath}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
}

function PdfIcon(props) {
  const size = props.size ?? 30;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      class="bi bi-filetype-pdf"
      viewBox="0 0 16 16"
      className='pl-2'
    >
      <path
        fill-rule="evenodd"
        d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
      />
    </svg>
  );
}

const ProgramOverviewPage = () => (
  <Layout>
    <Header />
    <SimpleLogoHeader />

    <section id="title" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 id="program" className="mx-auto pb-5 text-uppercase">
              Program
            </h1>
          </div>
        </div>

        <div className="row mx-auto pb-5 justify-content-around">
          <div className="col-lg-2 mx-auto">
            <div className="btn m-4 btn-primary">
              <Link className="text-white" to="/program-overview#monday">
                Monday
              </Link>
            </div>
          </div>
          <div className="col-lg-2 mx-auto">
            <div className="btn m-4 btn-primary">
              <Link className="text-white" to="/program-overview#tuesday">
                Tuesday
              </Link>
            </div>
          </div>
          <div className="col-lg-2 mx-auto">
            <div className="btn m-4 btn-primary">
              <Link className="text-white" to="/program-overview#wednesday">
                Wednesday
              </Link>
            </div>
          </div>
          <div className="col-lg-2 mx-auto">
            <div className="btn m-4 btn-primary">
              <Link className="text-white" to="/program-overview#thursday">
                Thursday
              </Link>
            </div>
          </div>
          <div className="col-lg-2 mx-auto">
            <div className="btn m-4 btn-primary">
              <Link className="text-white" to="/program-overview#friday">
                Friday
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mx-auto">
            <a
              href={
                config.manifestStartUrl +
                '/EDOC-and-CoopIS-program-03-10-2022.pdf'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={unibzBuilding}
                className="img-fluid pb-4"
                alt="Program overview of EDOC 2022 and CoopIS 2022."
              />
            </a>

            <p className="text-black text-center">(click to download)</p>
          </div>
        </div>
      </div>
    </section>

    <section id="title" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <span class="anchor" id="monday"></span>
            <h4 className="text-black mb-4 text-uppercase">
              Monday, October 03
            </h4>

            <p className="text-black text-left">
              <b>08:30 - 09:00</b>
              <div className="session">
                <div className="session-title">Registration</div>
                <div className="session-place">Seminar Area</div>
              </div>

              <b>09:00 - 10:30</b>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://tear-series.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TEAR Workshop Session: Studying Enterprise Architecture
                </a>
                <div className="session-chair">Chair: Sybren de Kinderen</div>
                <div className="session-place">Seminar Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Areas Where Enterprise Architecture Contributes to
                        Organizational Goals – A Quantitative Study
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Henk Plessius, Marlies van Steenbergen, Pascal
                        Ravesteijn and Johan Versendaal
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Achieving Alignment by Means of EA Artifacts
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Hong Guo and Shang Gao
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Contextuality and Temporality of Enterprise Architecture
                        Problems: A Comparative Case Study
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Ari Rouvari and Samuli Pekkola
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://easychair.org/cfp/IDAMS2022"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IDAMS Workshop Session: Fundamentals
                </a>
                <div className="session-chair">Chair: Rainer Schmidt</div>
                <div className="session-place">Seminar Room 3</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Constructing Digital Architectures Under Society 5.0:
                        An Enterprise Architecture Perspective
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Jean Paul Sebastian Piest, Yoshimasa Masuda, and
                        Maria-Eugenia Iacob
                      </span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/idams-piest.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Towards a Framework for Context Awareness Based on
                        Textual Process Data
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Aleksandra Revina, Nina Rizun, and Ünal Aksu
                      </span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/idams-revina.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Digital Technologies Supporting Digitalization: A
                        Maturity Model to Manage their Usage Risks
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Lamiae Benhayoun, and Imed Boughzala
                      </span>
                      &nbsp;
                      <AnchorToStaticFile staticPath="/pre-proceedings/idams-benhayoun.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>
                </ul>
              </div>

              <b>10:30 - 11:00</b>
              <div className="session">
                <div className="session-title">Coffee Break</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>11:00 - 12:30</b>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://tear-series.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TEAR Workshop Session: Enterprise Architecture Modeling
                </a>
                <div className="session-chair">Chair: Dominik Bork</div>
                <div className="session-place">Seminar Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Zooming in on Competences in Ontology-Based Enterprise
                        Architecture Modeling
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Rodrigo Calhau and João Paulo Almeida
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        A Knowledge-Graph Based Integrated Digital EA Maturity
                        and Performance Framework
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Nujud Alsufyani and Asif Gill
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Workplace Topology Model for Assessment of Static and
                        Dynamic Interactions Among Employees
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">Jānis Grabis</span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/tear-grabis.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://easychair.org/cfp/IDAMS2022"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IDAMS Workshop Session: Model Extensions
                </a>
                <div className="session-chair">Chair: Rainer Schmidt</div>
                <div className="session-place">Seminar Room 3</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        A DSML for Modelling and Reasoning about Digital Twins
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Flavio Corradini, Arianna Fedeli, Fabrizio Fornari,
                        Andrea Polini, and Barbara Re
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Adaptive Management of Cyber-Physical Workflows by Means
                        of Case-Based Reasoning and Automated Planning
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Lukas Malburg, Florian Brand, Maximilian Hoffmann, and
                        Ralph Bergmann
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        An Optimization Ontology for Goal Modelling Frameworks
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Novarun Deb, Swasti Khurana, Krishna Gaur, Raghu Raj
                        Sodani, Akshat Dobriyal, Anuj Mohan Pillai, Sajib
                        Mistry, and Aditya K. Ghose
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <b>12:30 - 13:30</b>
              <div className="session">
                <div className="session-title">Lunch</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>13:30 - 15:00</b>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://tear-series.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TEAR/SoEA4EE Keynote: Making Enterprise Architecture Viewpoint
                  Frameworks Fitter for Purpose
                </a>
                <div className="session-speaker">by Colin Atkinson</div>
                <div className="session-chair">Chair: Sybren de Kinderen</div>
                <div className="session-place">Seminar Room 2</div>
              </div>

              <div className="session">
                <Link className="session-title-link" to="/tutorials#wagner">
                  Tutorial: Business Process Modeling and Simulation with DPMN
                </Link>
                <div className="session-speaker">by Gerd Wagner</div>
                <div className="session-chair">Chair: Giancarlo Guizzardi</div>
                <div className="session-place">Seminar Room 3</div>
              </div>

              <b>15:00 - 15:30</b>
              <div className="session">
                <div className="session-title">Coffee Break</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>15:30 - 17:00</b>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://www.soea4ee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SoEA4EE Workshop Session
                </a>
                <div className="session-place">Seminar Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">Workshop Opening</span>,
                      by&nbsp;
                      <span className="paper-authors">
                        Selmin Nurcan and Rainer Schmidt
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Visual Description of Digital IT Consulting Services
                        using DITCOS-DN: Proposal and Evaluation of a Graphical
                        Editor
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Meikel Bode, Maya Daneva and Marten van Sinderen
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Implementing a service-oriented rural smartness
                        platform: lessons learned from a technical action
                        research in West Java, Indonesia
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        {' '}
                        Iqbal Yulizar Mukti, Setiaji Setiaji, Indah Dwianti,
                        Adina Aldea and Maria Iacob
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="session">
                <Link className="session-title-link" to="/tutorials#wagner">
                  Tutorial: Business Process Modeling and Simulation with DPMN
                </Link>
                <div className="session-speaker">by Gerd Wagner</div>
                <div className="session-chair">Chair: Giancarlo Guizzardi</div>
                <div className="session-place">Seminar Room 3</div>
              </div>

              <b>17:00 - 17:30</b>

              <div className="session">
                <div className="session-title">Networking Time!</div>
                <div className="session-place">Seminar Area</div>
              </div>

              <b>17:30 - 20:30</b>

              <div className="session">
                <div className="session-title">Conference Reception</div>
                <div className="session-place">Noisteria</div>
              </div>

              <div className="btn btn-primary">
                <Link to="#program" className="text-white">
                  Back to the top
                </Link>
              </div>
            </p>

            <hr />

            <span class="anchor" id="tuesday"></span>
            <h4 className="text-black mb-4 text-uppercase day">
              Tuesday, October 04
            </h4>

            <p className="text-black text-left">
              <b>08:30 - 09:00</b>
              <div className="session">
                <div className="session-title">Registration</div>
                <div className="session-place">Seminar Area</div>
              </div>

              <b>09:00 - 09:30</b>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://coopisconference.org/assets/files/CoopIS2022-Program.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CoopIS Welcome Session
                </a>
                <div className="session-place">Seminar Room 2</div>
              </div>

              <b>09:30 - 10:30</b>

              <div className="session">
                <Link className="session-title-link" to="/keynotes#isaacs">
                  Keynote: Understanding the Nature of Digital Twin
                </Link>
                <div>
                  Digital Twin Challenges {'&'} Values; Empowering Businesses
                </div>
                <div className="session-speaker">by Daniel Isaacs</div>
                <div className="session-place">Seminar Room 2</div>
              </div>

              <b>10:30 - 11:00</b>
              <div className="session">
                <div className="session-title">Coffee Break</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>11:00 - 12:30</b>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://coopisconference.org/assets/files/CoopIS2022-Program.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CoopIS Main Track Session 1
                </a>
                <div className="session-place">Seminar Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Quantifying Temporal Privacy Leakage in Continuous Event
                        Data Publishing
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Majid Rafiei, Gamal Elkoumy and Wil M.P. van der Aalst
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        A Distributed Architecture for Privacy-Preserving
                        Optimization Using Genetic Algorithms and Multi-Party
                        Computation
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Christoph G. Schuetz, Thomas Loruenser, Samuel Jaburek,
                        Kevin Schuetz, Florian Wohner, Roman Karl and Eduard
                        Gringinger
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        A Data Connector Store for International Data Spaces
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Danniar Reza Firdausy, Patrício de Alencar Silva, Marten
                        van Sinderen and Maria-Eugenia Iacob
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="session">
                <div className="session-title">EDOC Demonstration Track</div>
                <div className="session-place">Seminar Room 3</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        The Deployment Model Abstraction Framework
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Marcel Weller, Uwe Breitenbücher, Sandro Speth and
                        Steffen Becker
                      </span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/edoc-demo-weller.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Dromi: A Tool for Automatically Reporting the Impacts of
                        Sagas implemented in Microservice Architectures on the
                        Business Processes
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Sandro Speth, Uwe Breitenbücher, Sarah Stieß and Steffen
                        Becker
                      </span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/edoc-demo-speth.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Exploring Enterprise Architecture Knowledge Graphs in
                        Archi: The EAKG Toolkit
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Philipp-Lorenz Glaser, Syed Juned Ali, Emanuel Sallinger
                        and Dominik Bork
                      </span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/edoc-demo-glaser.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Interactive Design of Time-Aware Business Processes
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Keti Lila, Marco Franceschetti and Julius Köpke
                      </span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/edoc-demo-lila.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Prosimos: Discovering and Simulating Business Processes
                        With Differentiated Resources
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Orlenys López-Pintado, Iryna Halenok and Marlon Dumas
                      </span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/edoc-demo-pintado.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>
                </ul>
              </div>

              <b>12:30 - 13:30</b>
              <div className="session">
                <div className="session-title">Lunch</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>13:30 - 14:30</b>

              <div className="session">
                <Link
                  className="session-title-link"
                  to="/panels#digital-health-and-ethics-panel"
                >
                  Panel: Digital Health and Ethics
                </Link>
                <div className="session-speaker">
                  with the participation of Giorgio Cangioli, Nikola Cihoric,
                  Luiz Olavo da Silva Santos, and Floriano Zini
                </div>
                <div className="session-chair">Chair: Zoran Milosevic</div>
                <div className="session-place">Seminar Room 2</div>
              </div>

              <b>14:30 - 15:00</b>

              <div className="session">
                <div className="session-title">
                  Open Data Hub: Data Space to Promote Research, Development,
                  and Innovation in Smart Green Regions
                </div>
                <div className="session-speaker">by Patrick Ohnewein</div>
                <div className="session-chair">Chair: Giancarlo Guizzardi</div>
                <div className="session-place">Seminar Room 2</div>
              </div>

              <b>15:00 - 15:30</b>
              <div className="session">
                <div className="session-title">Coffee Break</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>15:30 - 17:00</b>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://coopisconference.org/assets/files/CoopIS2022-Program.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CoopIS Main Track Session 2
                </a>
                <div className="session-place">Seminar Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Bi2E: Bidirectional Knowledge Graph Embeddings Based on
                        Subject-Object Feature Spaces
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Zhe Wang, Xiaomei Li and Zhongwen Guo
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        PK-Graph: Partitioned k²-Trees to Enable Compact and
                        Dynamic Graphs in Spark GraphX
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Bruno Morais, Miguel Coimbra and Luís Veiga
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Validating Vector-label Propagation for Graph Embedding
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Valerio Bellandi, Ernesto Damiani, Samira Maghool, Fedra
                        Negri and Valerio Ghirimoldi
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <b>15:00 - 15:30</b>
              <div className="session">
                <div className="session-title">Coffee Break</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>15:30 - 17:30</b>

              <div className="session">
                <div className="session-title">EDOC Doctoral Consortium</div>
                <div className="session-place">Seminar Room 3</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">PhD Lessons Learned</span>,
                      by&nbsp;
                      <span className="paper-authors">Claudenir Fonseca</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Data analytics and machine learning for smart decision
                        making in automotive sector
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">Hamid Ahaggach</span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/edoc-dc-ahaggach.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Value-Based Analysis of the Return on Modeling Effort in
                        Ontology-Driven Conceptual Modeling Ecosystems
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">Isadora Valle Sousa</span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/edoc-dc-sousa.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Intent-Based Configuration of ICT Components for
                        Industry 4.0 Applications
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">Kaoutar Sadouki</span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/edoc-dc-sadouki.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="btn btn-primary">
                <Link to="#program" className="text-white">
                  Back to the top
                </Link>
              </div>
            </p>

            <hr />

            <span class="anchor" id="wednesday"></span>
            <h4 className="text-black mb-4 text-uppercase day">
              Wednesday, October 05
            </h4>

            <b>08:30 - 09:00</b>
            <div className="session">
              <div className="session-title">Registration</div>
              <div className="session-place">Seminar Area</div>
            </div>

            <p className="text-black text-left">
              <b>09:00 - 09:30</b>

              <div className="session">
                <div className="session-title">EDOC Welcome Session</div>
                <div className="session-place">Seminar Room 2</div>
              </div>

              <b>09:30 - 10:30</b>

              <div className="session">
                <Link className="session-title-link" to="/keynotes#mellor">
                  Keynote: Trustworthiness in Industrial IoT Systems
                </Link>
                <div>
                  Trends and Issues for the Future Collaborative and Computing
                  Enterprise
                </div>
                <div className="session-speaker">by Stephen Mellor</div>
                <div className="session-chair">Chair: Paolo Ceravolo</div>
                <div className="session-place">Seminar Room 2</div>
              </div>

              <b>10:30 - 11:00</b>
              <div className="session">
                <div className="session-title">Coffee Break</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>11:00 - 12:30</b>

              <div className="session">
                <div className="session-title">
                  EDOC Main Track Session: Enterprise Security
                </div>
                <div className="session-chair">Chair: Sylvain Hallé</div>
                <div className="session-place">Seminar Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Computable consent – from regulatory, legislative, and
                        organizational policies to security
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Zoran Milosevic and Frank Pyefinch
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Multi-Level Cyber-Security Reference Model in Support of
                        Vulnerability Analysis
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Simon Hacks, Monika Kaczmarek-Heß, Sybren de Kinderen
                        and Daniel Töpel
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Security Ontologies: A Systematic Literature Review
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Malina Adach, Kaj Hänninen and Kristina Lundqvist
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://coopisconference.org/assets/files/CoopIS2022-Program.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CoopIS Main Track Session 3
                </a>
                <div className="session-place">Seminar Room 3</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Collaborative patterns for workflows with collaborative
                        robots
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Stefan Samhaber and Maria Leitner{' '}
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Enabling Multi-Process Discovery on Graph Databases{' '}
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Ali Nour Eldin, Nour Assy, Meriana Kobeissi, Jonathan
                        Baudot and Walid Gaaloul
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Data-Driven Evolution of Activity Forms in Object- and
                        Process-Aware Information Systems
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Marius Breitmayer, Lisa Arnold and Manfred Reichert
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <b>12:30 - 13:30</b>
              <div className="session">
                <div className="session-title">Lunch</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>13:30 - 15:00</b>

              <div className="session">
                <div className="session-title">
                  EDOC Main Track Session: Business Process Modeling and
                  Monitoring
                </div>
                <div className="session-chair">Chair: Fabrizio Maria Maggi</div>
                <div className="session-place">Seminar Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Modeling, Executing and Monitoring IoT-Driven Business
                        Rules in BPMN and DMN: Current Support and Challenges
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Yusuf Kirikkayis, Florian Gallik and Manfred Reichert
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Enhanced Transformation of BPMN Models with Cancellation
                        Features
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Giorgi Lomidze, Daniel Schuster, Chiao-Yun Li and
                        Sebastiaan van Zelst
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Next-Activity Prediction for Non-stationary Processes
                        with Unseen Data Variability
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Amolkirat Singh Mangat and Stefanie Rinderle-Ma
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://coopisconference.org/assets/files/CoopIS2022-Program.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CoopIS Main Track Session 4
                </a>
                <div className="session-place">Seminar Room 3</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        DATA-IMP: An Interactive Approach to Specify Data
                        Imputation Transformations on Large Datasets
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Michael Behringer, Manuel Fritz, Holger Schwarz and
                        Bernhard Mitschang
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Dynamic Forest for Learning from Data Streams with
                        Varying Feature Spaces
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Christian Schreckenberger, Christian Bartelt and Heiner
                        Stuckenschmidt
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        At Design-Time Approach for Supervisory Control of
                        Opacity
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Nourelhouda Souid, Kais Klai, Chiheb Ameur Abid and
                        Samir Benahmed
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <b>15:00 - 15:30</b>
              <div className="session">
                <div className="session-title">Coffee Break</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>15:30 - 17:00</b>

              <div className="session">
                <div className="session-title-link">EDOC Forum Papers</div>
                <div className="session-chair">Chair: Walid Gaaloul</div>
                <div className="session-place">Seminar Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Optimized Throttling for OAuth-based Authorization
                        Servers
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Peter Schuller, Julia Siedl, Nicolas Getto, Sebastian
                        Thomas Schork, and Christian Zirpins
                      </span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/edoc-forum-schuller.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        A Concept and a Multitenant Web Application for
                        Interactive Software Architecture Analysis
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Stefan Gudenkauf, Uwe Bachmann, and Niklas Hartmann
                      </span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/edoc-forum-gudenkauf.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        An ontology for software patterns: application to
                        blockchain-based software development
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Nicolas Six, Camilo Correa-Restrepo, Nicolas Herbaut,
                        and Camille Salinesi
                      </span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/edoc-forum-six.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title font-italic">
                        Learning-aided Adaptation - A Case Study from Wellness
                        Ecosystem*
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Suman Roychoudhury, Mayur Selukar, Deepali Kholkar,
                        Suraj Thapa, Namrata Choudhary, Vinay Kulkarni, and
                        Sreedhar Reddy
                      </span>{' '}
                      <span className="font-italic font-weight-bold">
                        (online presentation)
                      </span>
                      <AnchorToStaticFile staticPath="/pre-proceedings/edoc-forum-roychoudhury.pdf">
                        <PdfIcon/>
                      </AnchorToStaticFile>
                      <iframe
                        width="90%"
                        height="400"
                        src="https://player.vimeo.com/video/756081059?h=0ec0dd0e54&amp;app_id=122963"
                        title="EDOC 2022 - Learning-aided adaptation"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullscreen
                      />
                    </div>
                  </li>
                </ul>
              </div>

              <b>17:00 - 18:00</b>

              <div className="session">
                <div className="session-title">Networking Time!</div>
                <div className="session-place">Seminar Area</div>
              </div>

              <b>18:00 - 18:30</b>

              <div className="session">
                <div className="session-title-link">
                  Trasnportation from NOI to Castel Flavon
                </div>
                <div className="session-place">NOI</div>
                <div className="session-detail">
                  Busses will be available to transport participants from NOI to
                  Castel Flavon. Departures are scheduled for 18:00 and 18:30.
                  Castel Flavon cannot be easily accessed via public transit.
                </div>
              </div>

              <b>19:00 - 21:30</b>

              <div className="session">
                <div className="session-title-link">
                  Joint Conference Dinner {'&'} Awards Announcement
                </div>
                <div className="session-place">Castel Flavon</div>
              </div>

              <b>21:30 - 22:00</b>

              <div className="session">
                <div className="session-title-link">
                  Transportation from Castel Flavon to NOI and to the city
                  center
                </div>
                <div className="session-place">Castel Flavon</div>
                <div className="session-detail">
                  Busses will be available to transport participants back to the
                  city with stops at NOI and in the city center. Departures are
                  scheduled for at 21:30 and 22:00. Castel Flavon cannot be
                  easily accessed via public transit.
                </div>
              </div>

              <div className="btn btn-primary">
                <Link to="#program" className="text-white">
                  Back to the top
                </Link>
              </div>
            </p>

            <hr />

            <span class="anchor" id="thursday"></span>
            <h4 className="text-black mb-4 text-uppercase day">
              Thursday, October 06
            </h4>

            <p className="text-black text-left">
              <b>09:00 - 10:30</b>

              <div className="session">
                <Link className="session-title-link" to="/keynotes#baldwin">
                  Keynote: "We Are All Digital Now"
                </Link>
                <div>
                  Platform Systems and Flow Processes in Modern Enterprises
                </div>
                <div className="session-speaker">by Carliss Y. Baldwin</div>
                <div className="session-chair">
                  Chair: João Paulo A. Almeida
                </div>
                <div className="session-place">Seminar Room 2</div>
              </div>

              <b>10:30 - 11:00</b>
              <div className="session">
                <div className="session-title">Coffee Break</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>11:00 - 12:30</b>

              <div className="session">
                <div className="session-title">
                  EDOC Main Track Session: Enterprise Architecture
                </div>
                <div className="session-chair">Chair: Colin Atkinson</div>
                <div className="session-place">Seminar Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Model-based Construction of Enterprise Architecture
                        Knowledge Graphs
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Philipp-Lorenz Glaser, Syed Juned Ali, Emanuel Sallinger
                        and Dominik Bork
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Enterprise Architecture Management Support for Digital
                        Transformation Projects in Very Large Enterprises: A
                        Case Study at a European Mobility Provider
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Oleg Kanin and Paul Drews
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Interoperability of digital government services: A
                        Brazilian Reference Architecture Model to promote
                        communication, management, and reuse of solutions
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Adriana Xisto, Felipe Sommer, Marcus Vinicius Costa,
                        Vanessa Nunes and Claudia Cappelli
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://coopisconference.org/assets/files/CoopIS2022-Program.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CoopIS Short Papers Session
                </a>
                <div className="session-place">Seminar Room 3</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Conformance Checking for Trace Fragments Using Infix-
                        and Postfix-Alignments
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Daniel Schuster, Niklas Föcking, Sebastiaan J. van Zelst
                        and Wil M. P. van der Aalst
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Generating Plugs and Data Sockets for Plug-and-Play
                        Database Web Services
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Arihant Jain, Curtis Dyreson and Sourav S Bhowmick
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Design and Implementation of Education and Training
                        Management System based on Blockchain
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Ran Chen, Xiaoming Wu, Xiangzhi Liu and Junlong Liang
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        A Method for Integrated Modeling of KiPs and Contextual
                        Goals
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Zeynep Ozturk Yurt, Rik Eshuis, Banu Aysolmaz, Anna
                        Wilbik and Irene Vanderfeesten
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        An Experimental Study of Intuitive Representations of
                        Process Task Annotations
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Myriel Fichtner, Urs A. Fichtner and Stefan Jablonski
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <b>12:30 - 13:30</b>
              <div className="session">
                <div className="session-title">Lunch</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>13:30 - 15:00</b>

              <div className="session">
                <div className="session-title">
                  EDOC Main Track Session: Business Process Mining and Discovery
                </div>
                <div className="session-chair">Chair: Iris Beerepoot</div>
                <div className="session-place">Seminar Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        On the Origin of Questions in Process Mining Projects
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Francesca Zerbato, Jelmer J. Koorn, Iris Beerepoot,
                        Barbara Weber and Hajo A. Reijers
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Extracting business process entities and relations from
                        text using pre-trained language models and in-context
                        learning
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Patrizio Bellan, Mauro Dragoni and Chiara Ghidini
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Discovering Sound Free-choice Workflow Nets With
                        Non-block Structures
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Tsung-Hao Huang and Wil M. P. van der Aalst
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://coopisconference.org/assets/files/CoopIS2022-Program.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CoopIS Main Track Session 5
                </a>
                <div className="session-place">Seminar Room 3</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Random-value payment tokens for on-chain
                        privacy-preserving payments
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Tiphaine Henry, Julien Hatin, Léo Kazmierczak, Nassim
                        Laga, Walid Gaaloul and Emmanuel Bertin
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Relevance-based Big Data Exploration for Smart Road
                        Maintenance
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Devis Bianchini, Valeria De Antonellis and Massimiliano
                        Garda
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Automating process discovery through meta-learning
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Gabriel Marques Tavares, Sylvio Barbon Junior and
                        Ernesto Damiani
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <b>15:00 - 15:30</b>
              <div className="session">
                <div className="session-title">Coffee Break</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>15:30 - 16:30</b>

              <div className="session">
                <Link
                  className="session-title-link"
                  to="/panels#augmented-process-panel"
                >
                  Panel: Augmented Business Process Management
                </Link>
                <div className="session-speaker">
                  with the participation of Chiara Ghidini, Hajo Reijers, Gerd
                  Wagner, and Marco Montali
                </div>
                <div className="session-chair">Chair: Fabrizio Maria Maggi</div>
                <div className="session-place">Seminar Room 2</div>
              </div>

              <b>16:30 - 17:00</b>

              <div className="session">
                <a
                  className="session-title-link"
                  href="https://coopisconference.org/assets/files/CoopIS2022-Program.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CoopIS Closing Session
                </a>
                <div className="session-place">Seminar Room 2</div>
              </div>

              <b>19:00 - 20:30</b>

              <div className="session">
                <Link className="session-title-link" to="/keynotes#sartor">
                  Keynote: Modelling Ethical and Legal Norms/Explaining
                  Compliance and Violation
                </Link>
                <div className="session-speaker">by Giovanni Sartor</div>
                <div className="session-chair">Chair: Zoran Milosevic</div>
                <div className="session-place">Maretsch Castle</div>
              </div>

              <b>20:30 - 22:00</b>

              <div className="session">
                <div className="session-title-link" to="/keynotes">
                  Wine Tasting
                </div>
                <div className="session-place">Maretsch Castle</div>
              </div>

              <div className="btn btn-primary">
                <Link to="#program" className="text-white">
                  Back to the top
                </Link>
              </div>
            </p>

            <hr />

            <span class="anchor" id="friday"></span>
            <h4 className="text-black mb-4 text-uppercase day">
              Friday, October 07
            </h4>

            <p className="text-black text-left">
              <b>09:00 - 10:30</b>

              <div className="session">
                <Link className="session-title-link" to="/keynotes#cabot">
                  Keynote: Smart Modeling of Smart Software
                </Link>
                <div className="session-speaker">by Jordi Cabot</div>
                <div className="session-chair">Chair: Giancarlo Guizzardi</div>
                <div className="session-place">Seminar Room 2</div>
              </div>

              <b>10:30 - 11:00</b>
              <div className="session">
                <div className="session-title">Coffee Break</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>11:00 - 12:30</b>

              <div className="session">
                <div className="session-title">
                  EDOC Journal-First Session 1
                </div>
                <div className="session-chair">Chair: Marco Montali</div>
                <div className="session-place">Seminar Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <a
                        href="https://doi.org/10.18417/emisa.15.2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="paper-title">
                          A Deep Perspective on the ArchiMate Modeling Language
                          and Standard
                        </span>
                      </a>
                      , by&nbsp;
                      <span className="paper-authors">
                        Colin Atkinson and Thomas Kühne
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <a
                        href="https://doi.org/10.1016/j.is.2019.101484"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="paper-title">
                          Discovering instance and process spanning constraints
                          from process execution logs
                        </span>
                      </a>
                      , by&nbsp;
                      <span className="paper-authors">
                        Karolin Winter, Florian Stertz and Stefanie Rinderle-Ma
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <a
                        href="https://doi.org/10.3233/SW-200419"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="paper-title">
                          Knowledge Graph OLAP: A multidimensional model and
                          query operations for contextualized knowledge graphs
                        </span>
                      </a>
                      , by&nbsp;
                      <span className="paper-authors">
                        Christoph Schuetz, Loris Bozzato, Bernd Neumayr, Michael
                        Schrefl and Luciano Serafini
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <b>12:30 - 13:30</b>
              <div className="session">
                <div className="session-title">Lunch</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>13:30 - 15:00</b>

              <div className="session">
                <div className="session-title">
                  EDOC Main Track Session: Process Mining and Process-Driven
                  Applications
                </div>
                <div className="session-chair">Chair: Sylvain Hallé</div>
                <div className="session-place">Seminar Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Shape Your Process: Discovering Declarative Business
                        Processes from Positive and Negative Traces Taking into
                        Account User Preferences
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Federico Chesani, Chiara Di Francescomarino, Chiara
                        Ghidini, Giulia Grundler, Daniela Loreti, Fabrizio Maria
                        Maggi, Paola Mello, Marco Montali and Sergio Tessaris
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Semi-Automated Test Migration for BPMN-based
                        Process-Driven Applications
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Konrad Schneid, Sebastian Thöne and Herbert Kuchen
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">
                        Splitting Quantum-Classical Scripts for the Generation
                        of Quantum Workflows
                      </span>
                      , by&nbsp;
                      <span className="paper-authors">
                        Daniel Vietz, Johanna Barzen, Frank Leymann and Benjamin
                        Weder
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <b>15:00 - 15:30</b>
              <div className="session">
                <div className="session-title">Coffee Break</div>
                <div className="session-place">Crane Hall</div>
              </div>

              <b>15:30 - 17:00</b>

              <div className="session">
                <div className="session-title">
                  EDOC Journal-First Session 2
                </div>
                <div className="session-chair">Chair: Giancarlo Guizzardi</div>
                <div className="session-place">Seminar Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <a
                        href="https://doi.org/10.1007/978-3-030-38677-1_6"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="paper-title">
                          Smart Contracts-Enabled Simulation for Hyperconnected
                          Logistics
                        </span>
                      </a>
                      , by&nbsp;
                      <span className="paper-authors">
                        Quentin Betti, Benoit Montreuil, Raphael Khoury and
                        Sylvain Hallé
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <a
                        href="https://doi.org/10.1016/j.compind.2021.103442"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="paper-title">
                          Extraction of dimension requirements from engineering
                          drawings for supporting quality control in production
                          processes
                        </span>
                      </a>
                      , by&nbsp;
                      <span className="paper-authors">
                        Beate Scheibel, Juergen Mangler and Stefanie Rinderle-Ma
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <a
                        href="https://doi.org/10.1016/j.compind.2021.103482"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="paper-title">
                          Interactive Process Automation based on lightweight
                          object detection in manufacturing processes
                        </span>
                      </a>
                      , by&nbsp;
                      <span className="paper-authors">
                        Amolkirat Singh Mangat, Stefanie Rinderle-Ma and Juergen
                        Mangler
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <b>17:00 - 17:30</b>

              <div className="session">
                <div className="session-title-link">EDOC Closing Session</div>
                <div className="session-place">Seminar Room 2</div>
              </div>

              <div className="btn btn-primary">
                <Link to="#program" className="text-white">
                  Back to the top
                </Link>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default ProgramOverviewPage;
