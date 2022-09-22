import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

import giorgio from '../assets/images/panel-dr-giorgio-cangioli.jpeg';
import nikola from '../assets/images/panel-dr-nikola-cihoric.jpeg';
import luiz from '../assets/images/panel-dr-luiz-olavo-da-silva-santos.jpeg';
import floriano from '../assets/images/panel-dr-floriano-zini.jpeg';
import zoran from '../assets/images/panel-dr-zoran-milosevic.jpeg';
import chiara from '../assets/images/panel-dr-chiara-ghidini.png';
import hajo from '../assets/images/panel-dr-hajo-reijers.jpeg';
import gerd from '../assets/images/tutorial-gerd-wagner.jpg';
import marco from '../assets/images/panel-dr-marco-montali.jpeg';
import fabrizio from '../assets/images/panel-dr-fabrizio-maggi.jpeg';

const PanelsPage = () => (
  <Layout>
    <Header />

    <SimpleLogoHeader />

    <section id="keynotes" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">panels</h1>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <h2 id="digital-health-and-ethics-panel" className="mx-auto my-0 text-uppercase">
              Towards Flexible Digital Health Ecosystems
            </h2>

            <br />

            <h3 className="mx-auto my-0 text-uppercase">
              Challenges and Opportunities from International Experience
            </h3>

            <br />
            <br />
            <br />

            <p className="text-black text-justify">
              Digital health requirements increasingly require crossing organisational and jurisdictional boundaries while engaging patients to pro-actively participate in their own care. This in turn requires delivery of interoperability solutions over standards-based APIs leveraging common agreement on the clinical semantics, as well as patient-controlled access to their data by various providers, private and government based.
            </p>

            <p className="text-black text-justify">
              The concepts of interoperability, ontology, computable policy expressions for privacy, consent and ethics, trust, analytics, ML, AI, IoT and Digital Twins, are widely discussed within EDOC community and the purpose of this panel is to bring together digital health practitioners and EDOC researchers in discussing challenges and opportunities relating to designing, operating and evolving flexible digital health ecosystems.
            </p>

            <p className="text-black text-justify">
              In collaboration with the EDOC2022 conference, the renown medical software provider from Australia, <Link to="https://bpsoftware.net/">Best Practice Software</Link>, would like to stimulate conversation about challenges and opportunities from primary care perspective to the problem of designing patient-facing interoperable digital health ecosystems.  Each panel member will present their position statement to shed light on the challenges and highlight recent advances in the field. The presentations will be followed by a {'Q&A'} session with the audience.
            </p>
          </div>

          <br />
          <br />
          <br />

          <div className="row justify-content-center align-items-center no-gutters bg-black">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid bg-black"
                src={giorgio}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Dr. Giorgio Cangioli (Italy)</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to='https://healthmanagement.org/viewProfile/124034/Giorgio_Cangioli'>International clinical standards perspective (interoperability, FAIR, FHIR).</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Giorgio is a Senior Consultant - Technical Lead, Vice-Chair HL7 Italy, Board member HL7 Europe, HL7 International Technical Steering Committee and CDA Management Group member, Co-facilitator of HL7 International Patient Summary (IPS) and FAIRness for FHIR projects, and  ISO/TC 215 WG1, WG3 and WG6 member.
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center no-gutters bg-black">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid bg-black"
                src={nikola}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Dr. Nikola Cihoric (Switzerland)</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to='https://ch.linkedin.com/in/dr-nikola-cihoric'>Clinician's perspective on the advanced ontology requirements (oncology, ontology)</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Nikola is a clinical doctor, radiation oncologist, clinical informatician, and passionate pursuer of exceptional user experience and usability in software. He is an oncology consultant at the Insel Group, Bern, Switzerland, and Founder of Wemedoo AG, involved in designing and implementing cutting-edge technology solutions that will advance healthcare, improve clinical work, empower research, and expedite clinical trials.
                    </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center no-gutters bg-black">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid bg-black"
                src={luiz}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Dr. Luiz Olavo da Silva Santos (The Netherlands)</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to='https://scholar.google.nl/citations?user=ZppZjc4AAAAJ&hl=en'>Policy perspective, from the use of FAIR and GDPR for digital health research (FAIR, Digital Twins)</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Dr. Luiz Olavo is an Associate Prof at The University of Twente, and an Associate Professor in the BioSemantics Group at the Leiden University Medica Center, in Leiden, the Netherlands. He has been closely involved in the FAIR principles (findable, accessible, interoperable and reusable) movement, and published a highly cited paper The FAIR Guiding Principles for scientific data management and stewardship, in 2016.
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center no-gutters bg-black">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid bg-black"
                src={floriano}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Dr. Floriano Zini (Italy)</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to='https://www.unibz.it/en/faculties/computer-science/academic-staff/person/29416-floriano-luca-zini'>Local perspective on the use of ML/AI for several industry projects in Bolzano area; Free University of Bozen-Bolzano, Smart Data Factory - Knowledge and Technology Transfer Lab</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Floriano is an academic technologist at Smart Data Factory, the technology transfer laboratory of the Faculty of Computer Science at the Free University of Bozen-Bolzano. Over the past 10 years, his research activity has focused on the design, development and evaluation of mobile and web-based information systems for personalized health care, through the application of Human Computer Interaction and Artificial Intelligence methodologies and algorithms, particularly Machine Learning. 
                    </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center no-gutters bg-black">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid bg-black"
                src={zoran}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Dr. Zoran Milosevic (Australia)</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to='https://www.linkedin.com/in/zorandmilosevic/'>Moderator</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Dr. Zoran Milosevic is an interoperability and AI consultant with <Link to="https://bpsoftware.net/">Best Practice Software</Link>, Australia. He has been involved in many digital health interoperability projects and standards, in Australia, USA and Europe. He endeavours to bring the latest research results and established architecture practices from enterprise distributed systems, such as ISO/ITU-T RM-ODP standards, into the evolving digital health ecosystems.
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <br />
        <br />
        <br />

        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <h2 id="augmented-process-panel" className="mx-auto my-0 text-uppercase">
              Augmented Process Panel
            </h2>

            <br />
            <br />
            <br />

            {/* <p className="text-black text-justify">
              Digital health requirements increasingly require crossing organisational and jurisdictional boundaries while engaging patients to pro-actively participate in their own care. This in turn requires delivery of interoperability solutions over standards-based APIs leveraging common agreement on the clinical semantics, as well as patient-controlled access to their data by various providers, private and government based.
            </p>

            <p className="text-black text-justify">
              The concepts of interoperability, ontology, computable policy expressions for privacy, consent and ethics, trust, analytics, ML, AI, IoT and Digital Twins, are widely discussed within EDOC community and the purpose of this panel is to bring together digital health practitioners and EDOC researchers in discussing challenges and opportunities relating to designing, operating and evolving flexible digital health ecosystems.
            </p>

            <p className="text-black text-justify">
              In collaboration with the EDOC2022 conference, the renown medical software provider from Australia, <Link to="https://bpsoftware.net/">Best Practice Software</Link>, would like to stimulate conversation about challenges and opportunities from primary care perspective to the problem of designing patient-facing interoperable digital health ecosystems.  Each panel member will present their position statement to shed light on the challenges and highlight recent advances in the field. The presentations will be followed by a {'Q&A'} session with the audience.
            </p> */}
          </div>

          <br />
          <br />
          <br />

          <div className="row justify-content-center align-items-center no-gutters bg-black">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid bg-black"
                src={chiara}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Dr. Chiara Ghidini (Italy)</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to='https://www.fbk.eu'>Fondazione Bruno Kessler (FBK).</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                    Chiara Ghidini is a senior Research Scientist at Fondazione Bruno Kessler (FBK), Trento, Italy, where she heads the Process & Data Intelligence (PDI) research unit and is responsible of the scientific ordination of the new centre of digital Health & Well Being. Her scientific work in the areas of Semantic Web, Knowledge Engineering and Representation, and Process Mining is internationally well known and recognised. She has actively been involved in the organisation of several andconferences and has served as programme co-chair for EKAW 2018, ISWC 2019 and BPM 2020. She has been involved in a number of international and national research projects, and is currently vice-president of the Italian Association for Artificial Intelligence (AIxIA).
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center no-gutters bg-black">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid bg-black"
                src={hajo}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Prof. Hajo Reijers (Netherlands)</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to='https://www.uu.nl/en'>Utrecht University</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                    Hajo Reijers is a full professor in the Department of Information and Computing Sciences of Utrecht University, where he leads the Business Process (BPM) Management & Analytics group. He is also a part-time, full professor in the Department of Mathematics and Computer Science of Eindhoven University of Technology. Previously, he worked for various management consultancy companies and led the BPM research group at Lexmark. Hajo's research and teaching focus on BPM, data analytics, and information systems engineering. On these and other topics, he published over 300 scientific papers, chapters in edited books, and articles in professional journals.
                    </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center no-gutters bg-black">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid bg-black"
                src={gerd}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Prof. Gerd Wagner (Germany)</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to='https://www.b-tu.de/'> Brandenburg University of Technology</Link>
                    </p>

                    <br />

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
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center no-gutters bg-black">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid bg-black"
                src={marco}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Prof. Marco Montali (Italy)</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to='https://www.unibz.it/'>Free University of Bozen-Bolzano</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                    Marco Montali is a Full Professor at the KRDB Research Centre for Knowledge and Data, Faculty of Computer Science. He devises techniques based on artificial intelligence, logic, and formal methods for the intelligent management of business processes and data. He loves connecting theory and practice. In 2015, He received the  “Marco Somalvico” Prize from the Italian Association for Artificial Intelligence. The prize is assigned to the best under-35 Italian researcher who contributed to the advancement of the state-of-the-art in Artificial Intelligence.
                    </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center no-gutters bg-black">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid bg-black"
                src={fabrizio}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Prof. Fabrizio Maria Maggi (Italy)</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to='https://www.linkedin.com/in/zorandmilosevic/'>Moderator</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                    Fabrizio Maria Maggi is currently Associate Professor at the Research Centre for Knowledge and Data (KRDB)—Faculty of Computer Science—Free University of Bozen-Bolzano. His research interest has focused in the last years on the application of Artificial Intelligence to Business Process Management. He authored more than 150 articles on process mining, declarative and hybrid business process notations, business constraint verification and monitoring, predictive business process monitoring. He serves as program committee member of the top conferences in the field of Business Process Management and Information Systems. He is leading the Rule Mining (RuM) initiative in collaboration with the University of Tartu aimed at providing tool support for declarative process mining
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
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

export default PanelsPage;
