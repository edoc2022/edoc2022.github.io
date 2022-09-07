import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

import carliss from '../assets/images/keynote-carliss-baldwin.jpeg';
import jordi from '../assets/images/keynote-jordi-cabot.jpeg';
import sartor from '../assets/images/keynote-giovanni-sartor.jpeg';
import stephen from '../assets/images/keynote-stephen-mellor.jpeg';
import isaacs from '../assets/images/keynote-daniel-isaacs.jpeg';

const KeynotesPage = () => (
  <Layout>
    <Header />

    <SimpleLogoHeader />

    <section id="keynotes" className="projects-section bg-light">
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
          <div className="col-lg-8 mx-auto text-center">
            <h2 id="baldwin" className="mx-auto my-0 text-uppercase">
              Carliss Y. Baldwin
            </h2>

            <br />

            <h3 className="mx-auto my-0 text-uppercase">
              "We Are All Digital Now": Platform Systems and Flow Processes in
              Modern Enterprises
            </h3>

            <br />
            <br />
            <br />

            <p className="text-black text-justify">
              In the last 25 years, modern enterprises have become centered on
              digital systems. IT applications, knit together by enterprise
              architectures, now pervade all business functions. But there is
              still doubt and confusion as to how a firm's digital
              infrastructure should be managed and maintained. On the one hand,
              modern enterprises must be flexible, capable of generating a
              stream of new products and providing customers with numerous
              options. On the other hand, they must be efficient providing
              timely solutions at low cost.
            </p>

            <p className="text-black text-justify">
              These contrasting requirements are exemplified by two opposing
              technical paradigms: flow processes and platform systems. In the
              talk, I will characterize flow processes and platform systems in
              terms of their innate properties and organizational implications.
              I will also indicate when and why each patterns is more valuable.
              In modern establishments, the two patterns are not mutually
              exclusive: technologically sophisticated organizations must use
              both. At the end of the talk, I will speculate on where each
              pattern is likely to be needed and invite comments on the tensions
              they are likely to cause within organizations.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row justify-content-center align-items-center no-gutters bg-black">
          <div className="col-lg-6 text-center">
            <img
              className="img-fluid bg-black"
              src={carliss}
              alt=""
              width="400"
              height="400"
            />
          </div>

          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-justify">
                  <p className="mb-0 text-white-50">
                    Carliss Y. Baldwin is the William L. White Professor of
                    Business Administration, Emerita, at the Harvard Business
                    School. She studies the process of design and its impact of
                    design architecture on firm strategy, platforms, and
                    business ecosystems. With Kim Clark, she authored{' '}
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
                    Management. She is currently working on Design Rules, Volume
                    2: How Technology Shapes Organizations.
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
          <div className="col-lg-8 mx-auto text-center">
            <h2 id="cabot" className="mx-auto my-0 text-uppercase">
              Jordi Cabot
            </h2>

            <br />

            <h3 className="mx-auto my-0 text-uppercase">
              Smart modeling of smart software
            </h3>

            <br />
            <br />
            <br />

            <p className="text-black text-justify">
              There is an increasing demand for embedding intelligence in
              software systems as part of its core set of features both in the
              front-end (e.g. conversational user interfaces) and back-end (e.g.
              prediction services). This combination is usually referred to as
              AI-enhanced software or, simply, smart software.
            </p>

            <p className="text-black text-justify">
              The development of smart software poses new engineering
              challenges, as now we need to deal with the engineering of the
              “traditional” components, the engineering of the “AI” ones but
              also of the interaction between both types that need to co-exist
              and collaborate.
            </p>

            <p className="text-black text-justify">
              In this talk we'll see how modeling can help tame the complexity
              of engineering smart software by enabling software engineers
              specify and generate smart software systems starting from
              higher-level and platform-independent modeling primitives.
            </p>

            <p className="text-black text-justify">
              But, unavoidably, these models will be more diverse and complex
              than our usual ones. Don't despair, we'll also see how some of
              these same AI techniques that are making our modeling life
              challenging can be turned into allies and be transformed into
              modeling assistants to tackle the engineering of smart software
              with a new breed of smart modeling tools.
            </p>
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
                <div className="project-text w-100 my-auto text-justify">
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

                  <br />

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

                  <br />

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
          <div className="col-lg-8 mx-auto text-center">
            <h2 id="sartor" className="mx-auto my-0 text-uppercase">
              Giovanni Sartor
            </h2>

            <br />

            <h3 className="mx-auto my-0 text-uppercase">
              Modelling ethical and legal norms/explaining compliance and
              violation
            </h3>

            <br />
            <br />
            <br />

            <p className="text-black text-justify">
              Automation-supported compliance checking has become necessary in increasingly automated socio-technical contexts. AI {'&'} law research, since the 70's has addressed ways to model ethical and legal knowledge, and has developed approaches that are relevant to compliance-checking.
            </p>

            <p className="text-black text-justify">
              I will shortly review approaches to the modeling of legal content: Rules- and logic-based models; Argumentation-based models; Case-based reasoning models.
            </p>

            <p className="text-black text-justify">
              I will the address some recent approaches aimed at providing logical models in a way which is understandable to non-technical people, and consider whether this idea may support developments in automated compliance checking. I will also consider the significance of argumentation-based models and ontologies to provide rationales for compliance assessments.
            </p>

            <p className="text-black text-justify">
              I will argue for the construction of human-understandable models of law and ethics, to be used for the purpose of compliance checking, also over the functioning of machine-learning based systems. How to integrate logical modeling and machine learning, in eliciting and applying normative knowledge is a challenging task for the future.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row justify-content-center align-items-center no-gutters bg-black">
          <div className="col-lg-6 text-center">
            <img
              className="img-fluid bg-black"
              src={sartor}
              alt=""
              width="400"
              height="400"
            />
          </div>

          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-justify">
                  <p className="mb-0 text-white-50">
                    Giovanni Sartor is professor in Legal Informatics at the
                    University of Bologna, professor in Legal informatics and
                    Legal Theory at the European University Institute of
                    Florence, visiting professor of Artificial Intelligence and
                    Law at the University of Surrey. He coordinates the
                    CIRSFID-AI for Law and Governance unit at the Alma-AI
                    research center of the University of Bologna. He holds the
                    ERC-advanced grant (2018) for the project Compulaw (2019 -
                    2024).
                  </p>

                  <br />

                  <p className="mb-0 text-white-50">
                    He obtained a PhD at the European University Institute
                    (Florence), was a researcher at the Italian National Council
                    of Research (ITTIG, Florence), held the chair in
                    Jurisprudence at Queen's University of Belfast, and was
                    Marie-Curie professor at the European University of
                    Florence. He has been President of the International
                    Association for Artificial Intelligence and Law.
                  </p>

                  <br />

                  <p className="mb-0 text-white-50">
                    He has published widely in legal philosophy, computational
                    logic, and computer law, AI {'&'} law. He is co-director of
                    the Artificial Intelligence and Law Journal and co-editor of
                    the Ratio Juris Journal. His research interests include
                    legal theory, early modern legal philosophy, logic,
                    argumentation theory, modal and deontic logics, logic
                    programming, multiagent systems, computer and Internet law,
                    data protection, e-commerce, law and technology.
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
          <div className="col-lg-8 mx-auto text-center">
            <h2 id="mellor" className="mx-auto my-0 text-uppercase">
              Stephen Mellor
            </h2>

            <br />

            <h3 className="mx-auto my-0 text-uppercase">
              Trustworthiness in Industrial IoT Systems: trends and issues for
              the future Collaborative and Computing Enterprise
            </h3>

            <br />

            <h4 className="mx-auto my-0">(Joint session with CoopIS 2022)</h4>

            <br />
            <br />
            <br />

            <p className="text-black text-justify">
              Trustworthiness, the combination of security, privacy, resilience,
              reliability and safety, is especially critical in industrial
              systems. Life, limb and the environment are at risk.
            </p>

            <p className="text-black text-justify">
              Unfortunately, these trustworthiness characteristics often
              conflict. Security would suggest locking that door, but safety
              demands it be able to be opened in case of emergency. This is
              resolvable, but often further factors must then be considered. (A
              bad actor could open the door from the inside. Now what?)
            </p>

            <p className="text-black text-justify">
              The Industry IoT Consortium has published the Trustworthiness
              Foundation, which outlines eleven principles to help guide you
              through the maze. This presentation will show how these principles
              can help you build a trustworthy system.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row justify-content-center align-items-center no-gutters bg-black">
          <div className="col-lg-6 text-center">
            <img className="img-fluid bg-black" src={stephen} alt="" />
          </div>

          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-justify">
                  <p className="mb-0 text-white-50">
                    Stephen Mellor is the Chief Technical Officer for the
                    Industry IoT Consortium, where he aligns groups for
                    business, technology, trustworthiness and industry for the
                    Industrial Internet.
                  </p>

                  <br />

                  <p className="mb-0 text-white-50">
                    He is a well-known technology consultant on methods for the
                    construction of real-time and embedded systems, a signatory
                    to the Agile Manifesto, and one-time adjunct professor at
                    the Australian National University in Canberra, ACT,
                    Australia. Stephen is the author of Structured Development
                    for Real-Time Systems, Object Lifecycles, Executable UML,
                    MDA Distilled and Models to Code.
                  </p>

                  <br />

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
          <div className="col-lg-8 mx-auto text-center">
            <h2 id="isaacs" className="mx-auto my-0 text-uppercase">
              Daniel R. Isaacs
            </h2>

            <br />

            <h3 className="mx-auto my-0 text-uppercase">
              Understanding the Nature of Digital Twin - Digital Twin Challenges{' '}
              {'&'} Values; Empowering Businesses
            </h3>

            <br />

            <h4 className="mx-auto my-0">(Keynote session of CoopIS 2022)</h4>

            <br />
            <br />
            <br />

            <p className="text-black text-justify">
              The term digital twin is being used with increasing frequency, but
              with little consistency, across multiple industries today. Digital
              Twin Consortium is working to address this and help industries
              better understand the advantages and value over the continum of
              digital twins from discrete to complex.
            </p>

            <p className="text-black text-justify">
              Learn about the challenges the Digital Twin Consortium membership
              is working to address and its priorities. Gain a clear
              understanding through real-world use cases how businesses are
              recognizing value today through use of digital twins an enabling
              technologies.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row justify-content-center align-items-center no-gutters bg-black">
          <div className="col-lg-6 text-center">
            <img
              className="img-fluid bg-black"
              src={isaacs}
              alt=""
              width="400"
              height="400"
            />
          </div>

          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-justify">
                  <p className="mb-0 text-white-50">
                    Dan Isaacs is Chief Technology Officer of Digital Twin
                    Consortium, where he is responsible for setting the
                    technical direction for the Member Consortium, liaison
                    partnerships and business development support for new
                    memberships.
                  </p>

                  <br />

                  <p className="mb-0 text-white-50">
                    Previously, Dan was Director of Strategic Marketing and
                    Business Development at Xilinx where he was responsible for
                    emerging technologies including AI/Machine Learning,
                    including defining and executing the ecosystem strategy for
                    the Industrial IoT. Prior to joining the Digital Twin
                    Consortium, Dan was responsible for Automotive Business
                    Development focused on Automated Driving and ADAS systems.
                  </p>

                  <br />

                  <p className="mb-0 text-white-50">
                    Dan represented Xilinx to the Industrial Internet Consortium
                    (IIC). He has more than 25 years of experience working in
                    automotive, Mil/Aerospace and consumer-based companies
                    including Ford, NEC, LSI Logic and Hughes Aircraft.
                  </p>
                  <p className="mb-0 text-white-50">
                    An accomplished speaker, Dan has delivered keynotes,
                    presentations and served as panellist and moderator for IIC
                    World Forums, Industrial IOT Global conferences, Embedded
                    World, Embedded Systems, and FPGA Conferences. He is a
                    member of international advisory boards and holds degrees in
                    Computer Engineering: EE from Cal State University, B.S.
                    Geophysics from ASU.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
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
