import React from 'react';

import Layout from '../components/Layout';

import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import People from '../assets/misc/people';
import edocLogoWhite from '../assets/images/edoc2022-tyrol-white-contour-large.png';

const {
  chairs,
  programChairs,
  workshopChairs,
  proceedingsChair,
  organizationChairs,
  steeringCommittee,
  programCommittee,
} = People;

const OrganizationPage = () => (
  <Layout>
    <Header />

    <header className="secondaryhead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <img src={edocLogoWhite} className="img-fluid" alt="The Enterprise Computing Conference" />
        </div>
      </div>
    </header>

    <section id="chairs" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="mx-auto my-0 text-uppercase">Organization</h1>

            <br/><br/><br/>


            <h2 className="text-black mb-4">{chairs.name}</h2>
            
            <ul className='text-black text-justify'>
              {
                chairs.members.map(member => (
                  <li><b>{member.name}</b>, {member.institution}</li>
                ))
              }
            </ul>

            <br/><br/>

            <h2 className="text-black mb-4">{programChairs.name}</h2>

            <ul className='text-black text-justify'>
              {
                programChairs.members.map(member => (
                  <li><b>{member.name}</b>, {member.institution}</li>
                ))
              }
            </ul>

            <br/><br/>

            <h2 className="text-black mb-4">{workshopChairs.name}</h2>

            <ul className='text-black text-justify'>
              {
                workshopChairs.members.map(member => (
                  <li><b>{member.name}</b>, {member.institution}</li>
                ))
              }
            </ul>

            <br/><br/>

            <h2 className="text-black mb-4">{proceedingsChair.name}</h2>

            <ul className='text-black text-justify'>
              {
                proceedingsChair.members.map(member => (
                  <li><b>{member.name}</b>, {member.institution}</li>
                ))
              }
            </ul>

            <br/><br/>

            <h2 className="text-black mb-4">{organizationChairs.name}</h2>

            <ul className='text-black text-justify'>
              {
                organizationChairs.members.map(member => (
                  <li><b>{member.name}</b>, {member.institution}</li>
                  ))
                }
            </ul>

            <br/><br/><br/><br/>

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

            <br/><br/><br/><br/>

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
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default OrganizationPage;
