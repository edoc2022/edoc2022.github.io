import React from 'react';
import { Link } from 'gatsby';

import config from '../../config';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

import unibzBuilding from './../assets/images/EDOC-and-CoopIS-program-05-09-2022.png';

const ProgramOverviewPage = () => (
  <Layout>
    <Header />
    <SimpleLogoHeader />

    <section id="title" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="mx-auto pb-5 text-uppercase">Program</h1>
          </div>
        </div>

        <div className="row mx-auto pb-5 justify-content-around">
          <div className="col-lg-2 mx-auto">
            <div className="btn m-4 btn-primary">
              <Link className="text-white" to='/program-overview#monday'>Monday</Link>
            </div>
          </div>
          <div className="col-lg-2 mx-auto">
            <div className="btn m-4 btn-primary">
              <Link className="text-white" to='/program-overview#tuesday'>Tuesday</Link>
            </div>
          </div>
          <div className="col-lg-2 mx-auto">
            <div className="btn m-4 btn-primary">
              <Link className="text-white" to='/program-overview#wednesday'>Wednesday</Link>
            </div>
          </div>
          <div className="col-lg-2 mx-auto">
            <div className="btn m-4 btn-primary">
              <Link className="text-white" to='/program-overview#thursday'>Thursday</Link>
            </div>
          </div>
          <div className="col-lg-2 mx-auto">
            <div className="btn m-4 btn-primary">
              <Link className="text-white" to='/program-overview#friday'>Friday</Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mx-auto">
            <a href={config.manifestStartUrl + '/EDOC-and-CoopIS-program-05-09-2022.pdf'}>
              <img
                src={unibzBuilding}
                className="img-fluid"
                alt="Program overview of EDOC 2022 and CoopIS 2022."
              />
            </a>
          </div>
        </div>
      </div>
    </ section>

    <section id="title" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">

            <br />
            <br />

            <p className="text-black text-center">
              (click to download)
            </p>

            <h4 id='monday' className="text-black mb-4 text-uppercase">
              Monday, October 03
            </h4>

            <p className="text-black text-left">
              <b>09:00 - 10:30</b>

              <div className="session">
                <a className="session-title-link" href='https://tear-series.org' target="_blank" rel="noopener noreferrer">Workshop: TEAR Session 1</a>
                <div className="session-place">Room 2</div>
              </div>

              <div className="session">
                <a className="session-title-link" href='https://easychair.org/cfp/IDAMS2022' target="_blank" rel="noopener noreferrer">Workshop: IDAMS Session 1</a>
                <div className="session-place">Room 3</div>
              </div>

              <b>11:00 - 12:30</b>

              <div className="session">
                <a className="session-title-link" href='https://tear-series.org' target="_blank" rel="noopener noreferrer">Workshop: TEAR Session 2</a>
                <div className="session-place">Room 2</div>
              </div>

              <div className="session">
                <a className="session-title-link" href='https://easychair.org/cfp/IDAMS2022' target="_blank" rel="noopener noreferrer">Workshop: IDAMS Session 2</a>
                <div className="session-place">Room 3</div>
              </div>

              <b>13:30 - 15:00</b>

              <div className="session">
                <a className="session-title-link" href='https://tear-series.org' target="_blank" rel="noopener noreferrer">Workshop: TEAR Session 3</a>
                <div className="session-place">Room 2</div>
              </div>

              <div className="session">
                <a className="session-title-link" href='https://www.soea4ee.org' target="_blank" rel="noopener noreferrer">Workshop: SoEA4EE Session 1</a>
                <div className="session-place">Room 3</div>
              </div>

              <div className="session">
                <Link className="session-title-link" to='/tutorials#wagner'>
                  Tutorial: Business Process Modeling and Simulation with DPMN
                </Link>
                <div className="session-speaker">with Prof. Gerd Wagner</div>
                <div className="session-place">Room 4</div>
              </div>

              <b>15:30 - 17:00</b>

              <div className="session">
                <a className="session-title-link" href='https://www.soea4ee.org' target="_blank" rel="noopener noreferrer">Workshop: SoEA4EE Session 2</a>
                <div className="session-place">Room 3</div>
              </div>

              <div className="session">
                <Link className="session-title-link" to='/tutorials#wagner'>
                  Tutorial: Business Process Modeling and Simulation with DPMN
                </Link>
                <div className="session-speaker">with Prof. Gerd Wagner</div>
                <div className="session-place">Room 4</div>
              </div>

              <b>18:30 - 21:30</b>

              <div className="session">
                <div className="session-title">Conference Reception</div>
                <div className="session-place">Noisteria</div>
              </div>

            </p>

            <hr />

            <h4 id='tuesday' className="text-black mb-4 text-uppercase day">
              Tuesday, October 04
            </h4>

            <p className="text-black text-left">
              <b>09:00 - 09:30</b>

              <div className="session">
                <a className="session-title-link" href='https://coopisconference.org/assets/files/CoopIS2022-Program.pdf' target="_blank" rel="noopener noreferrer">CoopIS Welcome Session</a>
                <div className="session-place">Room 2</div>
              </div>

              <b>09:30 - 10:30</b>

              <div className="session">
                <Link className="session-title-link" to='/keynotes#isaacs'>Keynote: Understanding the Nature of Digital Twin</Link>
                <div>Digital Twin Challenges {'&'} Values; Empowering Businesses</div>
                <div className='session-speaker'>by Daniel Isaacs</div>
                <div className="session-place">Room 2</div>
              </div>

              <b>11:00 - 12:30</b>

              <div className="session">
                <a className="session-title-link" href='https://coopisconference.org/assets/files/CoopIS2022-Program.pdf' target="_blank" rel="noopener noreferrer">CoopIS Main Track Session 1</a>
                <div className="session-place">Room 2</div>
              </div>

              <div className="session">
                <div className="session-title">EDOC Demonstration Track</div>
                <div className="session-place">Room 3</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">The Deployment Model Abstraction Framework</span>
                      , by&nbsp;
                      <span className="paper-authors">Marcel Weller, Uwe Breitenbücher, Sandro Speth and Steffen Becker</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Dromi: A Tool for Automatically Reporting the Impacts of Sagas implemented in Microservice Architectures on the Business Processes</span>
                      , by&nbsp;
                      <span className="paper-authors">Sandro Speth, Uwe Breitenbücher, Sarah Stieß and Steffen Becker</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Exploring Enterprise Architecture Knowledge Graphs in Archi: The EAKG Toolkit</span>
                      , by&nbsp;
                      <span className="paper-authors">Philipp-Lorenz Glaser, Syed Juned Ali, Emanuel Sallinger and Dominik Bork</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Interactive Design of Time-Aware Business Processes</span>
                      , by&nbsp;
                      <span className="paper-authors">Keti Lila, Marco Franceschetti and Julius Köpke</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Prosimos: Discovering and Simulating Business Processes With Differentiated Resources</span>
                      , by&nbsp;
                      <span className="paper-authors">Orlenys López-Pintado, Iryna Halenok and Marlon Dumas</span>
                    </div>
                  </li>
                </ul>
              </div>

              <b>13:30 - 14:30</b>

              <div className="session">
                <Link className="session-title-link" to='/panels#digital-health-and=ethics-panel'>Panel: Digital Health and Ethics</Link>
                <div className="session-speaker">with the participation of Dr. Giorgio Cangioli, Dr. Nikola Cihoric, Dr. Luiz Olavo da Silva Santos, and Dr. Floriano Zini, and hosted by Dr. Zoran Milosevic</div>
                <div className="session-place">Room 2</div>
              </div>

              <b>14:30 - 15:00</b>

              <div className="session">
                <div className="session-title-link">NOI Presentation</div>
                <div className="session-place">Room 2</div>
              </div>

              <b>15:30 - 17:00</b>

              <div className="session">
                <a className="session-title-link" href='https://coopisconference.org/assets/files/CoopIS2022-Program.pdf' target="_blank" rel="noopener noreferrer">CoopIS Main Track Session 2</a>
                <div className="session-place">Room 2</div>
              </div>

              <div className="session">
                <div className="session-title">EDOC Doctoral Consortium</div>
                <div className="session-place">Room 3</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">PhD Lessons Learned</span>
                      , by&nbsp;
                      <span className="paper-authors">Claudenir Fonseca</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Data analytics and machine learning for smart decision making in automotive sector</span>
                      , by&nbsp;
                      <span className="paper-authors">Hamid Ahaggach</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Value-Based Analysis of the Return on Modeling Effort in Ontology-Driven Conceptual Modeling Ecosystems</span>
                      , by&nbsp;
                      <span className="paper-authors">Isadora Valle Sousa</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Intent-Based Configuration of ICT Components for Industry 4.0 Applications</span>
                      , by&nbsp;
                      <span className="paper-authors">Kaoutar Sadouki</span>
                    </div>
                  </li>
                </ul>
              </div>

            </p>

            <hr />
            <h4 id='wednesday' className="text-black mb-4 text-uppercase day">
              Wednesday, October 05
            </h4>

            <p className="text-black text-left">
              <b>09:00 - 09:30</b>

              <div className="session">
                <div className="session-title">EDOC Welcome Session</div>
                <div className="session-place">Room 2</div>
              </div>

              <b>09:30 - 10:30</b>

              <div className="session">
                <Link className="session-title-link" to='/keynotes#mellor'>Keynote: Trustworthiness in Industrial IoT Systems</Link>
                <div>Trends and Issues for the Future Collaborative and Computing Enterprise</div>
                <div className='session-speaker'>by Stephen Mellor</div>
                <div className="session-place">Room 2</div>
              </div>

              <b>11:00 - 12:30</b>


              <div className="session">
                <div className="session-title">EDOC Main Track Session: Enterprise Security</div>
                <div className="session-place">Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">Computable consent – from regulatory, legislative, and organizational policies to security</span>
                      , by&nbsp;
                      <span className="paper-authors">Zoran Milosevic and Frank Pyefinch</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Multi-Level Cyber-Security Reference Model in Support of Vulnerability Analysis</span>
                      , by&nbsp;
                      <span className="paper-authors">Simon Hacks, Monika Kaczmarek-Heß, Sybren de Kinderen and Daniel Töpel</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Security Ontologies: A Systematic Literature Review</span>
                      , by&nbsp;
                      <span className="paper-authors">Malina Adach, Kaj Hänninen and Kristina Lundqvist</span>
                    </div>
                  </li>
                </ul>
              </div>


              <div className="session">
                <a className="session-title-link" href='https://coopisconference.org/assets/files/CoopIS2022-Program.pdf' target="_blank" rel="noopener noreferrer">CoopIS Main Track Session 3</a>
                <div className="session-place">Room 3</div>
              </div>

              <b>13:30 - 15:00</b>

              <div className="session">
                <div className="session-title">EDOC Main Track Session: Business Process Modeling and Monitoring</div>
                <div className="session-place">Room 2</div>

                <ul>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Modeling, Executing and Monitoring IoT-Driven Business Rules in BPMN and DMN: Current Support and Challenges</span>
                      , by&nbsp;
                      <span className="paper-authors">Yusuf Kirikkayis, Florian Gallik and Manfred Reichert</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Enhanced Transformation of BPMN Models with Cancellation Features</span>
                      , by&nbsp;
                      <span className="paper-authors">Giorgi Lomidze, Daniel Schuster, Chiao-Yun Li and Sebastiaan van Zelst</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Next-Activity Prediction for Non-stationary Processes with Unseen Data Variability</span>
                      , by&nbsp;
                      <span className="paper-authors">Amolkirat Singh Mangat and Stefanie Rinderle-Ma</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="session">
                <a className="session-title-link" href='https://coopisconference.org/assets/files/CoopIS2022-Program.pdf' target="_blank" rel="noopener noreferrer">CoopIS Main Track Session 4</a>
                <div className="session-place">Room 3</div>
              </div>

              <b>15:30 - 17:00</b>

              <div className="session">
                <div className="session-title-link">Flash Talks and Posters Session</div>
                <div className='session-detail'>Joint session between EDOC and CoopIS</div>
                <div className="session-place">Room 2</div>
              </div>

              <b>18:00 - 22:00</b>

              <div className="session">
                <div className="session-title-link">Joint Conference Dinner {'&'} Awards Announcement</div>
                <div className='session-detail'>transportation to and back included, please be at NOI on time!</div>
                <div className="session-place">Castel Flavon</div>
              </div>

            </p>

            <hr />
            <h4 id='thursday' className="text-black mb-4 text-uppercase day">
              Thursday, October 06
            </h4>

            <p className="text-black text-left">
              <b>09:00 - 10:30</b>

              <div className="session">
                <Link className="session-title-link" to='/keynotes#baldwin'>Keynote: "We Are All Digital Now"</Link>
                <div>Platform Systems and Flow Processes in Modern Enterprises</div>
                <div className="session-speaker">by Prof. Carliss Y. Baldwin</div>
                <div className="session-place">Room 2</div>
              </div>


              <b>11:00 - 12:30</b>

              <div className="session">
                <div className="session-title">EDOC Main Track Session: Enterprise Architecture</div>
                <div className="session-place">Room 2</div>

                <ul>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Model-based Construction of Enterprise Architecture Knowledge Graphs</span>
                      , by&nbsp;
                      <span className="paper-authors">Philipp-Lorenz Glaser, Syed Juned Ali, Emanuel Sallinger and Dominik Bork</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Enterprise Architecture Management Support for Digital Transformation Projects in Very Large Enterprises: A Case Study at a European Mobility Provider</span>
                      , by&nbsp;
                      <span className="paper-authors">Oleg Kanin and Paul Drews</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Interoperability of digital government services: A Brazilian Reference Architecture Model to promote communication, management, and reuse of solutions</span>
                      , by&nbsp;
                      <span className="paper-authors">Adriana Xisto, Felipe Sommer, Marcus Vinicius Costa, Vanessa Nunes and Claudia Cappelli</span>
                    </div>
                  </li>


                </ul>

              </div>

              <div className="session">
                <a className="session-title-link" href='https://coopisconference.org/assets/files/CoopIS2022-Program.pdf' target="_blank" rel="noopener noreferrer">CoopIS Short Papers Session</a>
                <div className="session-place">Room 3</div>
              </div>

              <b>13:30 - 15:00</b>

              <div className="session">
                <div className="session-title">EDOC Main Track Session:  Business Process Mining and Discovery</div>
                <div className="session-place">Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">On the Origin of Questions in Process Mining Projects</span>
                      , by&nbsp;
                      <span className="paper-authors">Francesca Zerbato, Jelmer J. Koorn, Iris Beerepoot, Barbara Weber and Hajo A. Reijers</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Extracting business process entities and relations from text using pre-trained language models and in-context learning</span>
                      , by&nbsp;
                      <span className="paper-authors">Patrizio Bellan, Mauro Dragoni and Chiara Ghidini</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Discovering Sound Free-choice Workflow Nets With Non-block Structures</span>
                      , by&nbsp;
                      <span className="paper-authors">Tsung-Hao Huang and Wil M. P. van der Aalst</span>
                    </div>
                  </li>
                </ul>

              </div>

              <div className="session">
                <a className="session-title-link" href='https://coopisconference.org/assets/files/CoopIS2022-Program.pdf' target="_blank" rel="noopener noreferrer">CoopIS Main Track Session 5</a>
                <div className="session-place">Room 3</div>
              </div>

              <b>15:30 - 16:30</b>

              <div className="session">
                <div className="session-title-link">Panel: Augmented Process</div>
                {/* <Link className="session-title-link" to='/panels'>Panel: Augmented Process</Link> */}
                <div className="session-place">Room 2</div>
              </div>

              <b>16:30 - 17:00</b>

              <div className="session">
                <a className="session-title-link" href='https://coopisconference.org/assets/files/CoopIS2022-Program.pdf' target="_blank" rel="noopener noreferrer">CoopIS Closing Session</a>
                <div className="session-place">Room 2</div>
              </div>

              <b>19:00 - 20:30</b>

              <div className="session">
                <Link className="session-title-link" to='/keynotes#sartor'>Keynote: Modelling Ethical and Legal Norms/Explaining Compliance and Violation</Link>
                <div className="session-speaker">by Prof. Giovanni Sartor</div>
                <div className="session-place">Maretsch Castle</div>
              </div>

              <b>20:30 - 22:00</b>

              <div className="session">
                <div className="session-title-link" to='/keynotes'>Wine Tasting</div>
                <div className="session-place">Maretsch Castle</div>
              </div>

            </p>

            <hr />
            <h4 id='friday' className="text-black mb-4 text-uppercase day">
              Friday, October 07
            </h4>

            <p className="text-black text-left">
              <b>09:00 - 10:30</b>


              <div className="session">
                <Link className="session-title-link" to='/keynotes#cabot'>Keynote: Smart Modeling of Smart Software</Link>
                <div className="session-speaker">by Prof. Jordi Cabot</div>
                <div className="session-place">Room 2</div>
              </div>

              <b>11:00 - 12:30</b>

              <div className="session">
                <div className="session-title">EDOC Journal-First Session 1</div>
                <div className="session-place">Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">A Deep Perspective on the ArchiMate Modeling Language and Standard</span>
                      , by&nbsp;
                      <span className="paper-authors">Colin Atkinson and Thomas Kühne</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Discovering instance and process spanning constraints from process execution logs</span>
                      , by&nbsp;
                      <span className="paper-authors">Karolin Winter, Florian Stertz and Stefanie Rinderle-Ma</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Knowledge Graph OLAP: A multidimensional model and query operations for contextualized knowledge graphs</span>
                      , by&nbsp;
                      <span className="paper-authors">Christoph Schuetz, Loris Bozzato, Bernd Neumayr, Michael Schrefl and Luciano Serafini</span>
                    </div>
                  </li>
                </ul>
              </div>


              <b>13:30 - 15:00</b>

              <div className="session">
                <div className="session-title">EDOC Main Track Session: Process Mining and Process-Driven Applications</div>
                <div className="session-place">Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">Shape Your Process: Discovering Declarative Business Processes from Positive and Negative Traces Taking into Account User Preferences</span>
                      , by&nbsp;
                      <span className="paper-authors">Federico Chesani, Chiara Di Francescomarino, Chiara Ghidini, Giulia Grundler, Daniela Loreti, Fabrizio Maria Maggi, Paola Mello, Marco Montali and Sergio Tessaris</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Semi-Automated Test Migration for BPMN-based Process-Driven Applications</span>
                      , by&nbsp;
                      <span className="paper-authors">Konrad Schneid, Sebastian Thöne and Herbert Kuchen</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Splitting Quantum-Classical Scripts for the Generation of Quantum Workflows</span>
                      , by&nbsp;
                      <span className="paper-authors">Daniel Vietz, Johanna Barzen, Frank Leymann and Benjamin Weder</span>
                    </div>
                  </li>
                </ul>
              </div>

              <b>15:30 - 17:00</b>


              <div className="session">
                <div className="session-title">EDOC Journal-First Session 2</div>
                <div className="session-place">Room 2</div>

                <ul>
                  <li>
                    <div className="paper">
                      <span className="paper-title">Smart Contracts-Enabled Simulation for Hyperconnected Logistics</span>
                      , by&nbsp;
                      <span className="paper-authors">Quentin Betti, Benoit Montreuil, Raphael Khoury and Sylvain Hallé</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Extraction of dimension requirements from engineering drawings for supporting quality control in production processes</span>
                      , by&nbsp;
                      <span className="paper-authors">Beate Scheibel, Juergen Mangler and Stefanie Rinderle-Ma</span>
                    </div>
                  </li>

                  <li>
                    <div className="paper">
                      <span className="paper-title">Interactive Process Automation based on lightweight object detection in manufacturing processes</span>
                      , by&nbsp;
                      <span className="paper-authors">Amolkirat Singh Mangat, Stefanie Rinderle-Ma and Juergen Mangler</span>
                    </div>
                  </li>
                </ul>
              </div>


              <b>17:00 - 17:30</b>

              <div className="session">
                <div className="session-title-link">EDOC Closing Session</div>
                <div className="session-place">Room 2</div>
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
