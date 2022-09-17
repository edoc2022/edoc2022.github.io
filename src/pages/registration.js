import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

import pagoPaLang from './../assets/images/pago-pa-language.png';

const RegistrationPage = () => (
  <Layout>
    <Header />
    <SimpleLogoHeader />

    <h2 className='bg-warning p-3 text-center py-4'>
      <Link to="/registration" className='warning'>
        Registration deadline: September 23, 2022
      </Link>
    </h2>

    <section id="title" className="content-section text-center pt-5">
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
              <div className="btn mb-4 btn-primary text-white">
                <Link
                  className="text-white"
                  to="https://www.conftool.com/edoc2022"
                >
                  Register here
                </Link>
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
                  the conference reception, the conference dinner, and a wine tasting. <br />
                  <b>Registration early-bird fee: EUR 750,00</b>
                  <br />
                  <s>
                    Registration late fee (after September 01, 2022): EUR 850,00
                  </s>
                  <br/>
                  <b>
                    Early-Bird Discount Extended!
                  </b>
                </li>
                <br />
                <li>
                  <b className="text-uppercase">Workshop-Only:</b> Gives access
                  to the first day of activities, which includes the workshops,
                  a tutorial, and the conference reception.{' '}
                  <br />
                  <b>Registration early-bird fee: EUR 300,00</b>
                  <br />
                  <s>
                    Registration late fee (after September 01, 2022): EUR 350,00
                  </s>
                  <br/>
                  <b>
                    Early-Bird Discount Extended!
                  </b>
                </li>
              </ul>
            </p>

            <p className="text-black">
              When proceeding with the payment of your registration, please
              notice that you can change the language of the interface, as shown
              in the image below.
            </p>

            <img
              src={pagoPaLang}
              className="img-fluid"
              alt="PagoPA payment system - interface language language selection."
            />

            <br />
            <br />
            <br />
            <br />
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
              <ul>
                <li>The registration of participation is binding.</li>
                <li>
                  If you have to cancel the registration, you get 90% back until
                  30 days before the start of the event and 50% if you cancel
                  within 15 days prior to the event. After that, no
                  reimbursements will be possible anymore.
                </li>
                <li>The participation fees are owed upon registration.</li>
                <li>
                  Participation is not granted until full payment of the
                  registration fee is received.
                </li>
                <li>The conference program is subject to changes.</li>
                <li>
                  Payments will be refunded if the conference will be canceled
                  by the organizer. In that case, the organizer will have no
                  further liability to the client. Registrations remain valid if
                  the conference has to be postponed.
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

export default RegistrationPage;
