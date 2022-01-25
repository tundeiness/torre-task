/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDirectionsRun } from 'react-icons/md';
import { BiCycling } from 'react-icons/bi';
import userApi from '../common/apis/userApi';
// import { fetchPerson } from '../containers/redux/actions/person';
// import { fetchPer } from '../containers/redux/action';
// import { getPerson } from '../containers/redux/selectors';
// import { fetchPersons } from '../api/index';

import { getPerson } from '../features/person/personSlice';
import Portrait from '../static/assets/img/christopher-campbell.jpg';

const User = () => {
  const dispatch = useDispatch();
  // const singlePerson = useSelector(getPerson);
  // const user = useSelector((state) => state.data);
  // const userText = 'alexander';
  // console.log(user);
  const [person, setPerson] = useState({});
  // const [args, setArgs] = useState('');

  // useEffect(() => dispatch(fetchPer()), [dispatch]);
  // console.log(singlePerson);

  // setArgs(singlePerson);
  // console.log(args);

  // useEffect(() => {
  //   fetchPersons('torrenegra').then((res) => {
  //     setPerson(res.data);
  //   });
  // }, [fetchPersons]);
  const one = 1;
  // const users = useSelector(getUsers);
  // console.log(users);
  // const usertext = 'john';
  // useEffect(() => {
  //   const res = fetch(`http://localhost:3001/api/v1/persons/${userText}`);
  // dispatch(getUsers(userText));
  // console.log(getUsers(userText));
  //   console.log(res);
  // }, [dispatch]);

  // console.log(person);
  const perText = 'john';

  useEffect(() => {
    const fetchPerson = async () => {
      const res = await userApi.get(`${perText}`)
      // dispatch(getPerson(res.data));
      // console.log(res.data);
        .catch((err) => {
          console.log('Err :', err);
        });

      console.log(res.data);
      dispatch(getPerson(res.data));
    };
    fetchPerson();
  }, []);

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
