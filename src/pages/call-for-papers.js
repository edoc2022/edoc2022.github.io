import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

const CallForPapersPage = () => (
  <Layout>
    <Header />
    <SimpleLogoHeader />

    <section id="title" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="mx-auto my-0 text-uppercase">Call for Papers</h1>

            <br />
            <br />
            <br />

            <h2 className="text-black mb-4 text-uppercase">
              26<sup>th</sup> International EDOC Conference (EDOC 2022)
            </h2>
            <h3 className="text-black mb-4">
              Enterprise Design, Operations and Computing
            </h3>
            <h3 className="text-black mb-4">
              3-7 October 2022, Bozen-Bolzano, Italy <b>(on-site)</b>
            </h3>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-black text-justify">
              EDOC 2022 is the 26<sup>th</sup> conference in the{' '}
              <Link to="http://edocconference.org/">EDOC series</Link> that
              provides a key forum for researchers and practitioners in the
              field of Enterprise Computing. EDOC addresses the full range of
              models, methodologies, and engineering technologies contributing
              to building and evolving intra- and inter-enterprise software
              systems. From 2022 on, EDOC will be spelled-out "Enterprise
              Design, Operations and Computing" to reflect the broad range of
              aspects of interest to the conference.
              <br />
              <br />
              EDOC 2022 will be collocated with the 28th International
              Conference on Cooperative Information Systems (CoopIS), and will
              take place in the beautiful region of South Tyrol in the Italian
              Alps.
              <br />
              <br />
              EDOC 2022 calls for contributions with a special emphasis on the
              theme of designing and operating "Flexible Enterprises". This
              year's theme reflects an ever changing world under the influence
              of disruptive events, trends and technologies, as well as the
              increasing role of artificial intelligence.
              <br />
              <br />
              In this context, new concepts and approaches are required: (a) to
              address pressing challenges in domains like healthcare, advanced
              manufacturing, finance, environmental management and sustainable
              agriculture, supply chain management and others, while ensuring
              compliance with ethical and legal principles, as well as long-term
              interoperability and resilience of enterprise systems; and (b) to
              leverage technologies such as digital twins, machine learning,
              IoT, big data analytics, distributed ledgers/blockchain in trusted
              enterprise practices. A particular challenge of interest in this
              scenario is the combined use of data-driven approaches (including
              machine learning) and other AI techniques with established
              modeling approaches for Enterprise Computing (including Enterprise
              Architecture Modeling, Business Process Modeling, Model-Driven
              Enterprise Systems Engineering, Conceptual Modeling, etc.) towards
              "augmented" enterprise systems.
              <br />
              <br />
              EDOC 2022 welcomes high-quality scientific submissions as well as
              experience papers on enterprise computing from industry. Expert
              panel discussions and keynotes will address current topics and
              issues in this domain. (A separate call-for-papers will be issued
              for a demonstration track, a doctoral consortium and specific
              workshops.)
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto text-justify">
            <h3
              id="topics"
              className="text-black mb-4 text-uppercase text-center"
            >
              Topics
            </h3>

            <p className="text-black">
              Suggested topics include, but are not limited to:
              <br />
              <br />
              <ul className="text-left">
                <li>Enterprise and Systems Architecture</li>

                <ul>
                  <li>Methods, Frameworks and Tools supporting Architecture</li>
                  <li>
                    Reference Architectures, Architecture Conceptualisation &
                    Evaluation
                  </li>
                  <li>System architectures</li>
                  <li>Interoperability and collaboration</li>
                  <li>
                    Cloud computing and the evolution of enterprise
                    architectures
                  </li>
                </ul>

                <br />

                <li>Service-Oriented IT- and Enterprise Architectures</li>

                <ul>
                  <li>Service composition, orchestration and choreography</li>
                  <li>Quality of Service (QoS) and Cost of Service (CoS)</li>
                  <li>
                    Governance in Service-oriented architectures (SOA/SOEA)
                  </li>
                  <li>Service policies, contract definition and enforcement</li>
                  <li>Flexibility and Sustainability</li>
                  <li>Cloud-based IT and Enterprise Architectures</li>
                </ul>

                <br />

                <li>Software Architecture & Engineering</li>

                <ul>
                  <li>Software engineering methods for enterprise computing</li>
                  <li>Software architecture modeling approaches</li>
                  <li>
                    Analysis and design techniques for non-functional
                    requirements
                  </li>
                  <li>Architectures for cyber-physical systems</li>
                  <li>Security in software intensive enterprise-systems</li>
                </ul>

                <br />

                <li>Model Based Enterprise Engineering</li>

                <ul>
                  <li>Model-driven architectures and software development</li>
                  <li>Modeling based on domain specific languages (DSL)</li>
                  <li>Domain specific reference models</li>
                  <li>Approaches based on reference architectures</li>
                  <li>Methodologies for the construction of digital twins</li>
                </ul>

                <br />

                <li>Enterprise Security</li>

                <ul>
                  <li>Sensing and Awareness</li>
                  <li>
                    Threat modeling, attack simulation, intrusion detection and
                    prevention
                  </li>
                  <li>Access control & SOA security</li>
                  <li>Blockchain and enterprise security</li>
                </ul>

                <br />

                <li>Business Process and Business rules</li>

                <ul>
                  <li>
                    Process modeling, verification, configuration, architectures
                    and implementations
                  </li>
                  <li>Process mining and business analytics</li>
                  <li>Cloud impact on BPM, business processes in the cloud</li>
                  <li>
                    Business process agility/flexibility and decision management
                  </li>
                  <li>
                    Business rule languages and engines, process compliance
                  </li>
                  <li>Robotic process automation</li>
                  <li>Data processing pipelines and workflows</li>
                </ul>

                <br />

                <li>Semantics and Information Management</li>

                <ul>
                  <li>Business object modeling methodologies and approaches</li>
                  <li>
                    Taxonomies, ontologies and business knowledge integration
                  </li>
                  <li>Enterprise ontologies</li>
                  <li>
                    Master data management, data mining and (real-time) data
                  </li>
                  <li>warehousing, data lakes</li>
                  <li>
                    Complex event processing and event-driven architectures
                  </li>
                  <li>Data quality and trustworthiness</li>
                  <li>
                    Combining data-driven and symbolic modeling approaches
                  </li>
                </ul>
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
              id="guidelines"
              className="text-black mb-4 text-uppercase text-center"
            >
              Submission Guidelines
            </h3>

            <p className="text-black">
              Two types of submissions are solicited:
              <br />
              <br />
              <ul>
                <li>a) scientific research papers, and</li>
                <li>b) industry experience reports or case studies.</li>
              </ul>
              <br />
              Scientific papers should describe original results, not having
              been accepted or submitted for publication elsewhere. These papers
              will be peer reviewed based on their scientific and technical
              contribution, originality, and relevance.
              <br />
              <br />
              Industry experience reports should provide insights into applying
              enterprise computing technology in practice, feedback about the
              state of practice, and/or pose challenges for researchers. These
              reports must be based on actual implementation and have at least
              one author with industry affiliation. These papers will be
              evaluated based on appropriateness, significance, and clarity.
              <br />
              <br />
              All papers will be refereed by at least 3 members of the
              international programme committee. The proceedings will be
              published by Springer in the Lecture Notes in Computer Science
              (LNCS) series.
              <br />
              <br />
              Full papers should follow the{' '}
              <Link to="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">
                Springer LNCS style
              </Link>
              . The page limit for submitted papers (as well as for final,
              camera-ready papers) is 16 pages (including references). An{' '}
              <Link to="https://www.overleaf.com/latex/templates/springer-lecture-notes-in-computer-science/kzwwpvhwnvfj#.WuA4JS5uZpi">
                Overleaf LaTeX template
              </Link>{' '}
              is available for your convenience.
              <br />
              <br />
              Each paper must have one of its authors registered to EDOC’22
              before the camera ready deadline. The organizers reserve the right
              to remove a paper from the proceedings if no author is registered
              by the camera ready deadline. Only papers presented during the
              conference will be published in the proceedings.
              <br />
              <br />
              Papers should be submitted at{' '}
              <Link to="https://easychair.org/my/conference?conf=edoc2022">
                <i>https://easychair.org/my/conference?conf=edoc2022</i>
              </Link>
              <br />
              <br />
              <div className="bg-light-warning">
                <br />
                <div className="d-flex justify-content-center">
                  <div className="col-lg-11">
                    <b>
                      *If you are a returning contributor to EDOC, please note
                      the paper format change as well as the adoption of a
                      strict deadline policy and mandatory abstract submission.*
                    </b>
                  </div>
                </div>
                <br />
              </div>
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto text-justify">
            <h3 className="text-black mb-4 text-uppercase text-center">
              Post-Conference Publication
            </h3>

            <p className="text-black">
              The authors of selected papers will be invited to prepare a
              substantially revised and extended version to a Special Issue in{' '}
              <i>Elsevier's Information Systems</i> (JCR 2020 Impact Factor
              2.309).
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
                <li>
                  Mandatory abstract submission{' '}
                  <b>(strict deadline): 20 May 2022</b>
                </li>
                <li>
                  Full paper submission <b>(strict deadline): 27 May 2022</b>
                </li>
                <li>Full paper notification: 4 July 2022</li>
                <li>Workshop paper submission deadline: 6 July 2022</li>
                <li>Workshop paper notification: 10 August 2022</li>
                <li>
                  Camera ready paper & author registration (main conference and
                  workshops): 15 August 2022
                </li>
                <li>Conference dates: 3-7 October 2022</li>
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

export default CallForPapersPage;
