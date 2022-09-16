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
            <h2 id="digital-health-and=ethics-panel" className="mx-auto my-0 text-uppercase">
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
                    <h4 className="mb-0 text-white-50">Dr Giorgio Cangioli (Italy)</h4>

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
                    <h4 className="mb-0 text-white-50">Dr Nikola Cihoric (Switzerland)</h4>

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
                    <h4 className="mb-0 text-white-50">Dr Luiz Olavo da Silva Santos (The Netherlands)</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to='https://scholar.google.nl/citations?user=ZppZjc4AAAAJ&hl=en'>Policy perspective, from the use of FAIR and GDPR for digital health research (FAIR, Digital Twins)</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Dr Luiz Olavo is an Associate Prof at The University of Twente, and an Associate Professor in the BioSemantics Group at the Leiden University Medica Center, in Leiden, the Netherlands. He has been closely involved in the FAIR principles (findable, accessible, interoperable and reusable) movement, and published a highly cited paper The FAIR Guiding Principles for scientific data management and stewardship, in 2016.
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
                    <h4 className="mb-0 text-white-50">Dr Floriano Zini (Italy)</h4>

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
                    <h4 className="mb-0 text-white-50">Dr Zoran Milosevic (Australia)</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to='https://www.linkedin.com/in/zorandmilosevic/'>Moderator</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Dr Zoran Milosevic is an interoperability and AI consultant with <Link to="https://bpsoftware.net/">Best Practice Software</Link>, Australia. He has been involved in many digital health interoperability projects and standards, in Australia, USA and Europe. He endeavours to bring the latest research results and established architecture practices from enterprise distributed systems, such as ISO/ITU-T RM-ODP standards, into the evolving digital health ecosystems.
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
