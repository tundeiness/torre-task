/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React from 'react';
import { MdDirectionsRun } from 'react-icons/md';
import { BiCycling } from 'react-icons/bi';
import Portrait from '../static/assets/img/christopher-campbell.jpg';

const User = () => {
  const userProfile = 1;
  return (
    <aside className="border border-primary">
      <div className="avatar-details mt-4">
        <div className="avatar">
          <div className="avatar--image">
            <img src={Portrait} alt="username" />
          </div>
        </div>
        <p className="text-center">Here is the body of the app</p>
      </div>
      <div className="skill-data border border-danger">
        <p className="skill-data__heading ms-3">Skills and interests:</p>
        <div className="skill-data__master border border-primary mx-3">
          <div className="skill-data__master--wrapper d-flex">
            <BiCycling />
            <h6 className="mt-1 ms-2">Master/Influencer</h6>
          </div>

          <p>Software development</p>
          <p>Team management</p>
        </div>
        <div className="skill-data__proficiency border border-primary mx-3">
          <div className="d-flex skill-data__proficiency--wrapper">
            <MdDirectionsRun />
            <h6 className="mt-1 ms-2">Proficient</h6>
          </div>
          <p>Software development</p>
          <p>Unit Testing</p>
          <p>Data Analysis</p>
          <p>functional programming</p>
          <p>Reactive Programming</p>
        </div>
      </div>
    </aside>
  );
};

export default User;
