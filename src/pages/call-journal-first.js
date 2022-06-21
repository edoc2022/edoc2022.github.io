import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

const CallJournalFirst = () => (
  <Layout>
    <Header />
    <SimpleLogoHeader />

    <section id="title" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="mx-auto my-0 text-uppercase">
              CALL FOR JOURNAL-FIRST PAPER PRESENTATIONS
            </h1>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-black text-justify">
              EDOC 2022 will feature <b>*journal-first paper presentations*</b>{' '}
              for the first time. Authors of papers that fit EDOC's topics and
              that have been published recently in journals (from 2020 on) can
              submit their papers for consideration.
              <br />
              <br />
              Authors should submit their proposals through EasyChair,
              including:
              <br />
              <br />
              <ul>
                <li>(i) paper title and abstract,</li>
                <li>(ii) a pre-print in PDF,</li>
                <li>(iii) a link to the published version (or DOI)</li>
              </ul>
              <br />
              <Link
                to="https://easychair.org/conferences/?conf=edoc2022"
                target="_blank"
              >
                https://easychair.org/conferences/?conf=edoc2022
              </Link>
              <br />
              <br />
              Papers will be selected by the EDOC Program Committee, with a focus on fit of topics for the conference and relevance for the community. Detailed technical reviews will not be performed, since published papers have already gone through rigorous review processes.
              <br />
              <br />
              By submitting a proposal, the authors declare that the work was not published as part of a conference special issue. At least one author of the paper commits to registering and presenting their paper at the conference. Papers will not be part of the EDOC proceedings; they will be listed in the program, with links to the original publication made available to the EDOC audience.
              <br />
              <br />
              Please see <Link
                to="/call-for-papers"
              >
                https://edocconference.org/2022/call-for-papers
              </Link> for a description of the relevant topics for EDOC.
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
                <li>Proposals due: July 22, 2022</li>
                <li>Author notification: August 5, 2022</li>
                <li>Author registration: August 15, 2022</li>
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

export default CallJournalFirst;
