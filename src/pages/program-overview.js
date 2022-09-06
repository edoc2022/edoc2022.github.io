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
            <h1 className="mx-auto my-0 text-uppercase">Program Overview</h1>

            <br />

            <a href={config.manifestStartUrl + '/EDOC-and-CoopIS-program-05-09-2022.pdf'}>
              <img
                src={unibzBuilding}
                className="img-fluid"
                alt="Program overview of EDOC 2022 and CoopIS 2022."
              />
            </a>

            <br />
            <br />

            <p className="text-black text-center">
              (click to download)
            </p>

            <h4 className="text-black mb-4 text-uppercase">
              Monday, October 03
            </h4>

            <p className="text-black text-justify">
              <b>09:00 - 10:30</b>

              <br />
              <br />

              <ul>
                <li><Link to='/workshops'>TEAR Workshop</Link> - Room 2</li>
                <li><Link to='/workshops'>IDAMS Workshop</Link> - Room 3</li>
              </ul>

              <br />

              <b>11:00 - 12:30</b>

              <br />
              <br />

              <ul>
                <li><Link to='/workshops'>TEAR Workshop</Link> - Room 2</li>
                <li><Link to='/workshops'>IDAMS Workshop</Link> - Room 3</li>
              </ul>

              <br />

              <b>13:30 - 15:00</b>

              <br />
              <br />

              <ul>
                <li><Link to='/workshops'>TEAR Workshop</Link> - Room 2</li>
                <li><Link to='/workshops'>SoEA4EE Workshop</Link> - Room 3</li>
                <li><Link to='/tutorials'>Tutorial with Prof. Gerd Wagner</Link> - Room 4</li>
              </ul>

              <br />

              <b>15:30 - 17:00</b>

              <br />
              <br />

              <ul>
                <li><Link to='/workshops'>SoEA4EE Workshop</Link> - Room 3</li>
                <li><Link to='/tutorials'>Tutorial with Prof. Gerd Wagner</Link> - Room 4</li>
              </ul>

              <br />

              <b>18:30 - 21:30</b>

              <br />
              <br />

              <ul>
                <li>Event Reception</li>
              </ul>
            </p>

            <h4 className="text-black mb-4 text-uppercase">
              Tuesday, October 04
            </h4>

            <p className="text-black text-justify">
              <b>09:00 - 09:30</b>

              <br />
              <br />

              <ul>
                <li><Link to='https://coopisconference.org/'>CoopIS Welcome Session</Link> - Room 2</li>
              </ul>

              <br />

              <b>09:30 - 10:30</b>

              <br />
              <br />

              <ul>
                <li><Link to='/keynotes'>Keynote with Daniel Isaacs</Link> - Room 2</li>
              </ul>

              <br />

              <b>11:00 - 12:30</b>

              <br />
              <br />

              <ul>
                <li><Link to='https://coopisconference.org/'>CoopIS Session</Link> - Room 2</li>
                <li>EDOC Demo Session - Room 3</li>
              </ul>

              <br />

              <b>13:30 - 14:30</b>

              <br />
              <br />

              <ul>
                <li><Link to='/panels'>Digital Health and Ethics Panel</Link> - Room 2</li>
              </ul>

              <br />

              <b>14:30 - 15:00</b>

              <br />
              <br />

              <ul>
                <li>NOI Presentation - Room 2</li>
              </ul>

              <br />

              <b>15:30 - 17:00</b>

              <br />
              <br />

              <ul>
                <li><Link to='https://coopisconference.org/'>CoopIS Session</Link> - Room 2</li>
                <li>EDOC Doctoral Consortium Session - Room 3</li>
              </ul>
            </p>

            <h4 className="text-black mb-4 text-uppercase">
              Wednesday, October 05
            </h4>

            <p className="text-black text-justify">
              <b>09:00 - 09:30</b>

              <br />
              <br />

              <ul>
                <li>EDOC Welcome Session - Room 2</li>
              </ul>

              <br />

              <b>09:30 - 10:30</b>

              <br />
              <br />

              <ul>
                <li><Link to='/keynotes'>Keynote by Stephen Mellor</Link> - Room 2</li>
              </ul>

              <br />

              <b>11:00 - 12:30</b>

              <br />
              <br />

              <ul>
                <li>EDOC Session: Enterprise Security - Room 2</li>
                <li><Link to='https://coopisconference.org/'>CoopIS Session</Link> - Room 3</li>
              </ul>

              <br />

              <b>13:30 - 15:00</b>

              <br />
              <br />

              <ul>
                <li>EDOC Session: Business Process Modeling and Monitoring - Room 2</li>
                <li><Link to='https://coopisconference.org/'>CoopIS Session</Link> - Room 3</li>
              </ul>

              <br />

              <b>15:30 - 17:00</b>

              <br />
              <br />

              <ul>
                <li>Flash Talks and Posters Session (joint session EDOC and CoopIS) - Room 2</li>
              </ul>

              <br />

              <b>18:00 - 22:00</b>

              <br />
              <br />

              <ul>
                <li>Event Dinner {'&'} Awards Announcement (transportation to and back included, please be at NOI on time)</li>
              </ul>
            </p>

            <h4 className="text-black mb-4 text-uppercase">
              Thursday, October 06
            </h4>

            <p className="text-black text-justify">
              <b>09:00 - 10:30</b>

              <br />
              <br />

              <ul>
                <li><Link to='/keynotes'>Keynote by Prof. Carliss Y. Baldwin</Link> - Room 2</li>
              </ul>

              <br />

              <b>11:00 - 12:30</b>

              <br />
              <br />

              <ul>
                <li>EDOC Session: Enterprise Architecture - Room 2</li>
                <li><Link to='https://coopisconference.org/'>CoopIS Session</Link> - Room 3</li>
              </ul>

              <br />

              <b>13:30 - 15:00</b>

              <br />
              <br />

              <ul>
                <li>EDOC Session: Business Process Mining and Discovery - Room 2</li>
                <li><Link to='https://coopisconference.org/'>CoopIS Session</Link> - Room 3</li>
              </ul>

              <br />

              <b>15:30 - 16:30</b>

              <br />
              <br />

              <ul>
                <li><Link to='/panels'>Augmented Process Panel</Link> - Room 2</li>
              </ul>

              <br />

              <b>16:30 - 17:00</b>

              <br />
              <br />

              <ul>
                <li><Link to='https://coopisconference.org/'>CoopIS Closing Session</Link> - Room 2</li>
              </ul>

              <br />

              <b>19:00 - 22:00</b>

              <br />
              <br />

              <ul>
                <li><Link to='/keynotes'>Keynote by Prof. Giovanni Sartor</Link> and Wine Tasting at city center castle (no transportation included)</li>
              </ul>
            </p>

            <h4 className="text-black mb-4 text-uppercase">
              Friday, October 07
            </h4>

            <p className="text-black text-justify">
              <b>09:00 - 10:30</b>

              <br />
              <br />

              <ul>
                <li><Link to='/keynotes'>Keynote by Prof. Jordi Cabot</Link> - Room 2</li>
              </ul>

              <br />

              <b>11:00 - 12:30</b>

              <br />
              <br />

              <ul>
                <li>EDOC Journal-First Session - Room 2</li>
              </ul>

              <br />

              <b>13:30 - 15:00</b>

              <br />
              <br />

              <ul>
                <li>EDOC Session: Process Mining and Process-Driven Applications - Room 2</li>
              </ul>

              <br />

              <b>15:30 - 17:00</b>

              <br />
              <br />

              <ul>
                <li>EDOC Journal-First Session - Room 2</li>
              </ul>

              <br />

              <b>17:00 - 17:30</b>

              <br />
              <br />

              <ul>
                <li>EDOC Closing Session - Room 2</li>
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

export default ProgramOverviewPage;
