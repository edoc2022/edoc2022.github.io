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

import chiara from '../assets/images/panel-dr-chiara-ghidini.jpg';
import hajo from '../assets/images/panel-dr-hajo-reijers.jpeg';
import gerd from '../assets/images/tutorial-gerd-wagner.jpg';
import marco from '../assets/images/panel-dr-marco-montali.jpeg';
import fabrizio from '../assets/images/panel-dr-fabrizio-maggi.jpeg';

import clifford from '../assets/images/cm-panel-clifford-heath.jpeg';
import enrico from '../assets/images/cm-panel-enrico-franconi.jpeg';
import heather from '../assets/images/cm-panel-heather-hedden.jpeg';
import marcoWobben from '../assets/images/cm-panel-marco-wobben.jpeg';
import tomas from '../assets/images/cm-panel-tomas-sabat.jpeg';

const PanelsPage = () => (
  <Layout>
    <Header />

    <SimpleLogoHeader />

    <section id="keynotes" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center pb-5">
          <div className="col-lg-10 mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">panels</h1>
          </div>
        </div>

        <span id='conceptual-modeling-panel'/>
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center py-5">
            <h2
              // id="conceptual-modeling-panel"
              className="mx-auto my-0 text-uppercase mb-4"
            >
              Different Perspectives of Conceptual Modelling
            </h2>

            <div className="btn m-2 btn-primary">
              <Link className="text-white" to="https://forms.gle/8GDCBfnf4eRUmR1P8">
                Virtual Panel - Registration Free Required
              </Link>
            </div>

            {/* <br />
            <br />
            <br />

            <p className="text-black text-justify">
              In a recent{' '}
              <Link to="https://arxiv.org/abs/2201.12855">
                research manifesto
              </Link>
              , promiment researchers at the intersection of artificial
              intelligence and business process management have layed out the
              vision of "augmented business process management systems" (ABPMs).
              In their definition, an ABPMS is an AI-empowered, trustworthy, and
              process-aware information system that reasons and acts upon data
              within a set of constraints and assumptions, with the aim to
              continuously adapt and improve a set of business processes with
              respect to one or more performance indicators. How does an ABPMS
              differ to a standard BPMS and a generic AI system? What
              opportunities emerge from the interplay of AI and BPM? What are
              the implications for enterprise information systems? We will try
              to answer these and more questions in a lively panel with
              colleagues and friends.
            </p>*/}
          </div>

          <div className="row justify-content-center align-items-center no-gutters bg-black">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid bg-black"
                src={marcoWobben}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Marco Wobben</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://casetalk.com">CEO of CaseTalk</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50 mb-4">
                      Hi, my name is Marco Wobben. I started my career as an
                      independent software developer in the early nineties. As
                      an entrepreneur I continued development of the FCO-IM
                      casetool in 2001 under the name of CaseTalk. As owner of
                      the company, consultant, developer, trainer and presenter,
                      I'm considered the driving force behind CaseTalk and I'm
                      enjoying every bit of it.
                    </p>

                    <p className="mb-0 text-white-50">
                      With contributions from researchers, teachers, professors,
                      students, developers, consultants, customers, and
                      enthusiasts, we made CaseTalk what it is today. I thank
                      them to help me make CaseTalk the preferred choice of fact
                      oriented information modeling tool to many.
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center no-gutters bg-black">
            <div className="col-lg-6 text-center order-lg-first">
              <img
                className="img-fluid bg-black"
                src={tomas}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Tomás Sabat</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://vaticle.com">COO of Vaticle - TypeDB</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Tomás is the Chief Operating Officer at Vaticle. He works
                      closely with Vaticle's open source and enterprise users
                      who use TypeDB to build applications in a wide number of
                      industries including financial services, life sciences,
                      cyber security and supply chain management. A graduate of
                      the University of Cambridge, Tomás has spent the last
                      sevenyears founding and building businesses in the
                      technology industry.
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
                src={clifford}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Clifford Heath</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="http://dataconstellation.com">
                        CEO of Data Constellation
                      </Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50 mb-4">
                      Clifford Heath is a software innovator, toolmaker, product
                      architect and designer with an enviable record (several
                      worldwide patents) and who has co-founded companies which
                      have produced several successful enterprise software
                      products that are sold internationally.
                    </p>

                    <p className="mb-0 text-white-50 mb-4">
                      Clifford is experienced in leading teams designing and
                      progressively developing and maintaining enterprise-scale
                      software products across many years and many release
                      cycles, managing both technical and business risk in
                      rapidly-changing markets.
                    </p>

                    <p className="mb-0 text-white-50">
                      His technical interests are subjugated to the purpose of
                      building truly effective organisations, for which he is
                      innovating new approaches to accurate communication and
                      collaboration.
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center no-gutters bg-black">
            <div className="col-lg-6 text-center order-lg-first">
              <img
                className="img-fluid bg-black"
                src={heather}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Heather Hedden</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://semantic-web.com">
                        Semantic Web Company
                      </Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      She has been a taxonomist for over 25 years in various
                      organizations and as an independent consultant. She
                      currently works for professional services team of Semantic
                      Web Company (vendor of PoolParty Semantic Suite software).
                      Previously Ms. Hedden was a senior vocabulary editor at an
                      educational publisher, the taxonomist at an enterprise
                      search engine software developer, taxonomy manager for
                      SharePoint document management at a wind energy company,
                      and an instructor at Simmons University School of Library
                      and Information Science. She has designed and developed,
                      taxonomies, thesauri, ontologies, and metadata schema for
                      internal and externally published content, including
                      websites, intranets, and content management systems. Ms.
                      Hedden has given workshops on taxonomy creation at
                      numerous conferences and as corporate training. She is
                      author of the book The Accidental Taxonomist.
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
                src={enrico}
                alt=""
                width="300"
                height="300"
              />
            </div>

            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-justify">
                    <h4 className="mb-0 text-white-50">Enrico Franconi</h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://unibz.it">
                        Free University of Bozen-Bolzano (Moderator)
                      </Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50 mb-4">
                      The research area I am working on is related to the
                      application of database, artificial intelligence, and
                      semantic technologies to concrete problems in information
                      systems design and maintenance, in data integration,
                      intelligent access, analysis and restructuring of big
                      data. This subject area is quite vast, and involves both
                      theoretical and applicative skills: the appropriate
                      balance between these two aspects can provide a unique
                      added value to the research area. My goal is to let
                      practitioners to apply foundational results, and push
                      theoreticians to understand the complex nature of the real
                      issues. This can be achieved together with a research
                      group which has a critical mass to include a variety of
                      perspectives in the entire range from theory to practice.
                      The interdisciplinary aspects of this research area are
                      also crucial: together with the theory vs practice aspect,
                      these are system aspects, methodological aspects,
                      interaction and communication aspects, usability aspects,
                      complexity aspects, correctness aspects, efficiency
                      aspects, deployability aspects.
                    </p>

                    <p className="mb-0 text-white-50">
                      The KRDB Research Centre for Knowledge and Data at the
                      Faculty of Computer Science of the Free University of
                      Bozen-Bolzano was founded by me in 2002, and it aims at
                      being an international centre of excellence in basic and
                      applied research on KRDB technologies and at proposing to
                      selected enterprises innovative ideas and technologies
                      based on the research developed in the centre.
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
          <div className="col-lg-8 mx-auto text-center py-5">
            <h2
              id="digital-health-and-ethics-panel"
              className="mx-auto my-0 text-uppercase"
            >
              Towards Flexible Digital Health Ecosystems: Challenges and
              Opportunities from International Experience
            </h2>

            <br />
            <br />
            <br />

            <p className="text-black text-justify">
              Digital health requirements increasingly require crossing
              organisational and jurisdictional boundaries while engaging
              patients to pro-actively participate in their own care. This in
              turn requires delivery of interoperability solutions over
              standards-based APIs leveraging common agreement on the clinical
              semantics, as well as patient-controlled access to their data by
              various providers, private and government based.
            </p>

            <p className="text-black text-justify">
              The concepts of interoperability, ontology, computable policy
              expressions for privacy, consent and ethics, trust, analytics, ML,
              AI, IoT and Digital Twins, are widely discussed within EDOC
              community and the purpose of this panel is to bring together
              digital health practitioners and EDOC researchers in discussing
              challenges and opportunities relating to designing, operating and
              evolving flexible digital health ecosystems.
            </p>

            <p className="text-black text-justify">
              In collaboration with the EDOC2022 conference, the renown medical
              software provider from Australia,{' '}
              <Link to="https://bpsoftware.net/">Best Practice Software</Link>,
              would like to stimulate conversation about challenges and
              opportunities from primary care perspective to the problem of
              designing patient-facing interoperable digital health ecosystems.
              Each panel member will present their position statement to shed
              light on the challenges and highlight recent advances in the
              field. The presentations will be followed by a {'Q&A'} session
              with the audience.
            </p>
          </div>

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
                    <h4 className="mb-0 text-white-50">
                      Dr. Giorgio Cangioli (Italy)
                    </h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://healthmanagement.org/viewProfile/124034/Giorgio_Cangioli">
                        International clinical standards perspective
                        (interoperability, FAIR, FHIR).
                      </Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Giorgio is a Senior Consultant - Technical Lead,
                      Vice-Chair HL7 Italy, Board member HL7 Europe, HL7
                      International Technical Steering Committee and CDA
                      Management Group member, Co-facilitator of HL7
                      International Patient Summary (IPS) and FAIRness for FHIR
                      projects, and ISO/TC 215 WG1, WG3 and WG6 member.
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
                    <h4 className="mb-0 text-white-50">
                      Dr. Nikola Cihoric (Switzerland)
                    </h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://ch.linkedin.com/in/dr-nikola-cihoric">
                        Clinician's perspective on the advanced ontology
                        requirements (oncology, ontology)
                      </Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Nikola is a clinical doctor, radiation oncologist,
                      clinical informatician, and passionate pursuer of
                      exceptional user experience and usability in software. He
                      is an oncology consultant at the Insel Group, Bern,
                      Switzerland, and Founder of Wemedoo AG, involved in
                      designing and implementing cutting-edge technology
                      solutions that will advance healthcare, improve clinical
                      work, empower research, and expedite clinical trials.
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
                    <h4 className="mb-0 text-white-50">
                      Dr. Luiz Olavo da Silva Santos (The Netherlands)
                    </h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://scholar.google.nl/citations?user=ZppZjc4AAAAJ&hl=en">
                        Policy perspective, from the use of FAIR and GDPR for
                        digital health research (FAIR, Digital Twins)
                      </Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Dr. Luiz Olavo is an Associate Prof at The University of
                      Twente, and an Associate Professor in the BioSemantics
                      Group at the Leiden University Medica Center, in Leiden,
                      the Netherlands. He has been closely involved in the FAIR
                      principles (findable, accessible, interoperable and
                      reusable) movement, and published a highly cited paper The
                      FAIR Guiding Principles for scientific data management and
                      stewardship, in 2016.
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
                    <h4 className="mb-0 text-white-50">
                      Dr. Floriano Zini (Italy)
                    </h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://www.unibz.it/en/faculties/computer-science/academic-staff/person/29416-floriano-luca-zini">
                        Local perspective on the use of ML/AI for several
                        industry projects in Bolzano area; Free University of
                        Bozen-Bolzano, Smart Data Factory - Knowledge and
                        Technology Transfer Lab
                      </Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Floriano is an academic technologist at Smart Data
                      Factory, the technology transfer laboratory of the Faculty
                      of Computer Science at the Free University of
                      Bozen-Bolzano. Over the past 10 years, his research
                      activity has focused on the design, development and
                      evaluation of mobile and web-based information systems for
                      personalized health care, through the application of Human
                      Computer Interaction and Artificial Intelligence
                      methodologies and algorithms, particularly Machine
                      Learning.
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
                    <h4 className="mb-0 text-white-50">
                      Dr. Zoran Milosevic (Australia)
                    </h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://www.linkedin.com/in/zorandmilosevic/">
                        Moderator
                      </Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Dr. Zoran Milosevic is an interoperability and AI
                      consultant with{' '}
                      <Link to="https://bpsoftware.net/">
                        Best Practice Software
                      </Link>
                      , Australia. He has been involved in many digital health
                      interoperability projects and standards, in Australia, USA
                      and Europe. He endeavours to bring the latest research
                      results and established architecture practices from
                      enterprise distributed systems, such as ISO/ITU-T RM-ODP
                      standards, into the evolving digital health ecosystems.
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
          <div className="col-lg-8 mx-auto text-center py-5">
            <h2
              id="augmented-process-panel"
              className="mx-auto my-0 text-uppercase"
            >
              Augmented Business Process Management and Enterprise Information
              Systems
            </h2>

            <br />
            <br />
            <br />

            <p className="text-black text-justify">
              In a recent{' '}
              <Link to="https://arxiv.org/abs/2201.12855">
                research manifesto
              </Link>
              , promiment researchers at the intersection of artificial
              intelligence and business process management have layed out the
              vision of "augmented business process management systems" (ABPMs).
              In their definition, an ABPMS is an AI-empowered, trustworthy, and
              process-aware information system that reasons and acts upon data
              within a set of constraints and assumptions, with the aim to
              continuously adapt and improve a set of business processes with
              respect to one or more performance indicators. How does an ABPMS
              differ to a standard BPMS and a generic AI system? What
              opportunities emerge from the interplay of AI and BPM? What are
              the implications for enterprise information systems? We will try
              to answer these and more questions in a lively panel with
              colleagues and friends.
            </p>
          </div>

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
                    <h4 className="mb-0 text-white-50">
                      Dr. Chiara Ghidini (Italy)
                    </h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://www.fbk.eu">
                        Fondazione Bruno Kessler (FBK).
                      </Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Chiara Ghidini is a senior Research Scientist at
                      Fondazione Bruno Kessler (FBK), Trento, Italy, where she
                      heads the Process & Data Intelligence (PDI) research unit
                      and is responsible of the scientific ordination of the new
                      centre of digital Health & Well Being. Her scientific work
                      in the areas of Semantic Web, Knowledge Engineering and
                      Representation, and Process Mining is internationally well
                      known and recognised. She has actively been involved in
                      the organisation of several andconferences and has served
                      as programme co-chair for EKAW 2018, ISWC 2019 and BPM
                      2020. She has been involved in a number of international
                      and national research projects, and is currently
                      vice-president of the Italian Association for Artificial
                      Intelligence (AIxIA).
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
                    <h4 className="mb-0 text-white-50">
                      Prof. Hajo Reijers (Netherlands)
                    </h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://www.uu.nl/en">Utrecht University</Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Hajo Reijers is a full professor in the Department of
                      Information and Computing Sciences of Utrecht University,
                      where he leads the Business Process (BPM) Management &
                      Analytics group. He is also a part-time, full professor in
                      the Department of Mathematics and Computer Science of
                      Eindhoven University of Technology. Previously, he worked
                      for various management consultancy companies and led the
                      BPM research group at Lexmark. Hajo's research and
                      teaching focus on BPM, data analytics, and information
                      systems engineering. On these and other topics, he
                      published over 300 scientific papers, chapters in edited
                      books, and articles in professional journals.
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
                    <h4 className="mb-0 text-white-50">
                      Prof. Gerd Wagner (Germany)
                    </h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://www.b-tu.de/">
                        {' '}
                        Brandenburg University of Technology
                      </Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Gerd Wagner is Professor of Internet Technology at
                      Brandenburg University of Technology, Cottbus, Germany.
                      After studying Mathematics, Philosophy and Informatics in
                      Heidelberg, San Francisco and Berlin, he (1) investigated
                      the semantics of negation in knowledge representation
                      formalisms, (2) developed concepts and techniques for
                      agent-oriented modeling and simulation, (3) participated
                      in the development of a foundational ontology for
                      conceptual modeling, the Unified Foundational Ontology
                      (UFO), and (4) created a new Discrete Event Simulation
                      paradigm: Object Event Modeling and Simulation (OEM{'&'}
                      S), and a new process modeling language: the Discrete
                      Event Process Modeling Notation (DPMN). He also runs the
                      websites <a href="https://dpmn.info">
                        dpmn.info
                      </a> and <a href="https://sim4edu.com">sim4edu.com</a>.
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
                    <h4 className="mb-0 text-white-50">
                      Prof. Marco Montali (Italy)
                    </h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://www.unibz.it/">
                        Free University of Bozen-Bolzano
                      </Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Marco Montali is Full Professor and Vice-Dean for Studies
                      at the Faculty of Computer Science, Free University of
                      Bozen-Bolzano, Italy, where he also coordinates the MSc
                      Program in Computational Data Science. He develops novel,
                      foundational and applied techniques grounded in artificial
                      intelligence, logics, and formal methods, to create
                      intelligent agents and information systems that combine
                      processes and data, with a particular interest in the
                      combination of model-driven and data-driven techniques. He
                      has served as PC Chair of BPM 2018, RuleML+RR 2019, ICPM
                      2020, and CBI 2021, is serving as General Chair of ICPM
                      2022 and EDOC 2022, and is steering committee member of
                      the IEEE task force on process mining. He is co-author of
                      more than 230 papers, many of which in top-tier
                      conferences and journals, and recipient of 10 best paper
                      awards and 2 test-of-time awards. He received the “Marco
                      Cadoli 2015” award, given by the Italian Association of
                      Artificial Intelligence to the best under 35 Italian
                      researcher who autonomously contributed to advance the
                      state-of-the-art in Artificial Intelligence.
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
                    <h4 className="mb-0 text-white-50">
                      Prof. Fabrizio Maria Maggi (Italy)
                    </h4>

                    <br />

                    <p className="mb-0 text-white-50">
                      <Link to="https://www.linkedin.com/in/zorandmilosevic/">
                        Moderator
                      </Link>
                    </p>

                    <br />

                    <p className="mb-0 text-white-50">
                      Fabrizio Maria Maggi is currently Associate Professor at
                      the Research Centre for Knowledge and Data (KRDB)—Faculty
                      of Computer Science—Free University of Bozen-Bolzano. His
                      research interest has focused in the last years on the
                      application of Artificial Intelligence to Business Process
                      Management. He authored more than 150 articles on process
                      mining, declarative and hybrid business process notations,
                      business constraint verification and monitoring,
                      predictive business process monitoring. He serves as
                      program committee member of the top conferences in the
                      field of Business Process Management and Information
                      Systems. He is leading the Rule Mining (RuM) initiative in
                      collaboration with the University of Tartu aimed at
                      providing tool support for declarative process mining.
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
