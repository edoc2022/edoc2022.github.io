import React from 'react';

import Layout from '../components/Layout';

import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import People from '../assets/misc/people';

const { programCommittee, academicStaff, steeringCommittee } = People;

const OrganizationPage = () => (
  <Layout>
    <Header />

    <header className="secondaryhead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">EDOC 2022</h1>
        </div>
      </div>
    </header>

    <section id="academicStaff" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="mx-auto my-0 text-uppercase">Organization</h1>
          </div>
        </div>
      </div>
    </section>

    <section id="academicStaff" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-black mb-4">{academicStaff.name}</h2>
            <ul className='text-black text-justify'>
              {
                academicStaff.members.map(member => (
                  <li><b>{member.name}</b>, {member.institution}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* <section id="programCommittee" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-black mb-4">{programCommittee.name}</h2>
            <ul className='text-black text-justify'>
              {
                programCommittee.members.map(member => (
                  <li><b>{member.name}</b>, {member.institution}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section> */}

    <section id="steeringCommittee" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-black mb-4">{steeringCommittee.name}</h2>
            <h3 className="text-black mb-4 text-justify">Committee Chair</h3>
            <ul className='text-black text-justify'>
              <li><b>{steeringCommittee.chair.name}</b>, {steeringCommittee.chair.institution}</li>
            </ul>

            <h3 className="text-black mb-4 text-justify">Committee Members</h3>
            <ul className='text-black text-justify'>
              {
                steeringCommittee.members.map(member => (
                  <li><b>{member.name}</b>, {member.institution}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default OrganizationPage;
