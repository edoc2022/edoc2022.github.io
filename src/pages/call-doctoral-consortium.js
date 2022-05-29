import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

const CallDoctoralConsortiumPage = () => (
  <Layout>
    <Header />
    <SimpleLogoHeader />

    <section id="title" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="mx-auto my-0 text-uppercase">
              EDOC 2022 Doctoral Consortium
            </h1>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-black text-justify">
              The Doctoral Consortium (DC) is a forum of exchange organized to
              encourage PhD students present their early work, exchange with
              other researchers in their fields. Senior researchers will provide
              feedback and advice on the work and advice on managing research
              projects. The Doctoral Consortium is also a place to establish a
              social network with the peers in the field of the conference. In
              addition, there will be an opportunity to engage with some
              industry participants interested in this domain.
              <br />
              <br />
              The technical scope of the Doctoral Consortium is that of EDOC
              2022, as described by the list of the topics in the EDOC 2022 call
              for papers. This Conference series emphasizes a holistic view of
              enterprise applications engineering and management, fostering
              integrated approaches that can address and relate processes,
              people and technology.
              <br />
              <br />
              We encourage submissions from Ph.D. students at an early stage of
              their research project, i.e., typically in their first or second
              year using a variety of research methodologies including
              engineering and empirical methodologies. A submission to the DC
              should clearly describe motivation, goal, expected results and the
              research approach taken. Participants will be expected to actively
              discuss and argue about their work by reading each other's work
              prior to the Consortium, giving a presentation at the Consortium,
              debating together, and listening to senior researchers' feedback.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto text-justify">
            <h3 className="text-black mb-4 text-uppercase text-center">
              Submission
            </h3>

            <p className="text-black">
              To participate at the Doctoral Consortium, students should submit
              a paper (of 6 pages) that should cover the following aspects:
              <br />
              <br />
              <ul className="text-left">
                <li>The context and goal of the research;</li>

                <li>
                  The scientific problem addressed in the PhD project and its
                  relevance to the conference field. Any observation or case
                  study that justifies or substantiates the problem should be
                  given. The problem can be further specified with research
                  questions and hypotheses;
                </li>

                <li>
                  Earlier works that have addressed a similar problem.
                  Explanations why the problem is not solved (i.e. open issues
                  and controversies) should be underlined;
                </li>

                <li>
                  The scientific method proposed to address the problem at hand;
                </li>

                <li>
                  The expected results, and any result that has already been
                  obtained so far;
                </li>

                <li>A plan for the evaluation of results.</li>
              </ul>
              <br />
              <b>
                Doctoral Consortium papers will be submitted through EasyChair.
                The link will be available soon.
              </b>
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto text-justify">
            <h3 className="text-black mb-4 text-uppercase text-center">
              Formatting instructions
            </h3>

            <p className="text-black">
              Papers should be written in English, following Springer LNCS style
              - including all text, references, appendices, and figures. For
              formatting instructions and templates, see the Springer Web page:
              <Link
                to="http://www.springer.de/comp/lncs/authors.html"
                target="_blank"
              >
                http://www.springer.de/comp/lncs/authors.html
              </Link>
              . All submissions must be made in PDF format.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto text-justify">
            <h3 className="text-black mb-4 text-uppercase text-center">
              Selection Process
            </h3>

            <p className="text-black">
              Papers will be evaluated by at least three members of the Doctoral
              Consortium Committee using the following criteria:
              <br />
              <br />
              <ul className="text-left">
                <li>
                  technical quality, clarity, soundness, precision, and adequacy
                  of the problem statement, related work, self-contained and
                  feasible method description, realistic expected results and
                  sensible evaluation plan.
                </li>

                <li>overall quality.</li>
              </ul>
              <br />
              Please note that the best Doctoral Consortium papers will be
              invited to publish their work in the LNBIP Springer companion
              proceedings together with EDOC 2022 Demo, Industrial Track and
              Workshops.
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
                <li>Paper submission deadline: 1 July 2022</li>
                <li>Notification of acceptance: 1 August 2022</li>
                <li>Camera ready paper: 2 September 2022</li>
                <li>Conference registration: 2 September 2022</li>
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
              id="advisory-committee"
              className="text-black mb-4 text-uppercase text-center"
            >
              DC Advisory Committee
            </h3>

            <p className="text-black">
              <ul>
                <li>Colin Atkinson, University of Mannheim, Germany</li>
                <li>
                  Georg Grossmann, University of South Australia, Australia
                </li>
                <li>
                  Marten van Sinderen, University of Twente, The Netherlands
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
            <h3
              id="dc-chairs"
              className="text-black mb-4 text-uppercase text-center"
            >
              DC Chairs
            </h3>

            <p className="text-black">
              <ul>
                <li>
                  Felix Mannhardt, Eindhoven University of Technology - The
                  Netherlands
                </li>
                <li>
                  Chiara Di Francescomarino, Fondazione Bruno Kessler - Italy
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

export default CallDoctoralConsortiumPage;
