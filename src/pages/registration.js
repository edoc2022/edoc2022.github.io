import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

const RegistrationPage = () => (
  <Layout>
    <Header />
    <SimpleLogoHeader />

    <section id="title" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="mx-auto my-0 text-uppercase">Registration</h1>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="container">
          <div className="row justify-content-around">
            <div className="col-5">
              <div className="btn mr-4 ml-4 mt-4 mb-4 btn-primary text-white">
                Register here (TBA)
                {/* <Link className="text-white" to="https://coopisconference.org/">
                  Register here
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto text-justify">
            <h3
              id="fees"
              className="text-black mb-4 text-uppercase text-center"
            >
              Registration Fees
            </h3>

            <p className="text-black">
              The conference has two types of registration.
              <br />
              <br />
              <ul>
                <li>
                  <b className="text-uppercase">Full Conference:</b> Gives
                  access to all week's activities, including EDOC, CoopIS,
                  workshops, demos, doctoral consortium, keynotes, panels,
                  social events, and more.{' '}
                  <br/>
                  <b>Registration early-bird fee: EUR 750,00</b>
                  <br/>
                  <b>Registration late fee (after September 01, 2022): EUR 850,00</b>
                </li>
                <br/>
                <li>
                  <b className="text-uppercase">Workshop-Only:</b> Gives access
                  to the first day of activities, which includes the workshops,
                  a tutorial, and a panel (TBC), as well as a social event.{' '}
                  <br/>
                  <b>Registration early-bird fee: EUR 300,00</b>
                  <br/>
                  <b>Registration late fee (after September 01, 2022): EUR 350,00</b>
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto text-justify">
            <h3
              id="authors"
              className="text-black mb-4 text-uppercase text-center"
            >
              Authors
            </h3>

            <p className="text-black">
              Each accepted paper must be associated with one registration of an
              author to the conference. Each author registration can only be
              associated with a single accepted paper. Every author registration
              must be performed before the camera-ready deadline, according to
              the instructions provided by the chairs of the associated track.
              <br />
              <br />
              Accepted workshop papers may be associated with workshop-only
              registrations. Other accepted papers must be associated with full
              registrations.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-8 mx-auto text-justify">
            <h3
              id="cancellation"
              className="text-black mb-4 text-uppercase text-center"
            >
              Cancellation Policy
            </h3>

            <p className="text-black">
              Registrations can be canceled up to four weeks before the
              beginning of the conference, i.e., before September 05, 2022. If
              the cancellation is requested, a processing fee of EUR 40,00 shall
              be deducted. Registrations made by authors to secure the inclusion
              of their works in the conference's proceedings shall not be
              canceled. Non-attendance and non-participation in the social
              events of the conference shall not be considered as a reason for
              refund.
            </p>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default RegistrationPage;
