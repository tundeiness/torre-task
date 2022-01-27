/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDirectionsRun } from 'react-icons/md';
import { BiCycling } from 'react-icons/bi';
import { loadPerson } from '../features/personSlice';

import Portrait from '../static/assets/img/christopher-campbell.jpg';

const User = () => {
  // const { person, pending, error } = useSelector((state) => state.person);
  // const { personInfo, pending, error } = useSelector((state) => state.person);
  // const dispatch = useDispatch();
  const singlePersonRecord = useSelector(loadPerson);
  // useEffect(() => {
  //   dispatch(fetchPerson());
  // }, [dispatch]);

  console.log(singlePersonRecord);

  const one = 1;
  return (

    <aside className="border border-primary">
      <div className="avatar-details mt-5 mb-5 border border-primary">
        <div className="avatar">
          <div className="avatar--image">
            <img src={Portrait} alt="username" />
          </div>
        </div>
        <p className="text-center">Here is the body of the app</p>
      </div>
      <div className="skill-data border border-danger mt-3">
        <p className="skill-data__heading ms-3">Skills and interests:</p>
        <div className="skill-data__master border border-primary mx-3 mb-2">
          <div className="skill-data__master--wrapper d-flex">
            <BiCycling />
            <h6 className="mt-1 ms-2">Master/Influencer</h6>
          </div>
          <div className="skill-data__master--content d-flex justify-content-evenly flex-wrap">
            <span className="px-2 py-1">Software development</span>
            <span className="px-2 py-1">Team management</span>
          </div>
        </div>
        <div className="skill-data__proficiency border border-primary  mx-3">
          <div className="d-flex skill-data__proficiency--wrapper mb-2">
            <MdDirectionsRun />
            <h6 className="mt-1 ms-2">Proficient</h6>
          </div>
          <div className="skill-data__proficiency--content d-flex justify-content-start flex-wrap me-2">
            <span className="px-2 py-1 me-2">Unit Testing</span>
            <span className="px-2 py-1">Data Analysis</span>
            <span className="px-2 py-1">Functional programming</span>
            <span className="px-2 py-1">Reactive Programming</span>
          </div>
        </div>
      </div>
    </aside>

  );
};
export default User;
