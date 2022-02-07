/* eslint-disable max-len */
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

  console.log(singlePersonRecord);
  return (
    <aside className="cont border border-primary">
      <h1>The navbar stays in place while you are scrolling the web page.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam
        ipsum, maximus eu metus ac, semper tristique neque. Suspendisse sed
        finibus metus, dignissim blandit lorem. Praesent ornare lectus metus, ut
        aliquet est suscipit et. Quisque sollicitudin, lorem a efficitur
        euismod, elit elit interdum est, nec vehicula tortor est ut velit. Morbi
        blandit consequat lectus a auctor. Nulla sed dolor auctor, congue enim
        vel, blandit mi. Fusce arcu augue, cursus in mollis vitae, porta non
        magna.
      </p>
      <p>
        Integer condimentum id nisl in lacinia. Ut congue ante sit amet ligula
        scelerisque, nec gravida erat tempor. Pellentesque venenatis pulvinar
        aliquam. Sed consectetur dapibus faucibus. Ut volutpat eget turpis sed
        ultricies. Nunc ut risus sit amet tortor feugiat facilisis sit amet non
        dolor. Morbi elementum arcu tortor, eu vulputate sapien sollicitudin a.
      </p>
      <p>
        Duis dapibus dui eget est pellentesque, tristique pharetra elit
        imperdiet. Suspendisse quis quam sed nisi sodales faucibus. Donec quis
        sodales ex. Etiam molestie est ac ipsum scelerisque, ut bibendum metus
        molestie. Mauris porttitor ullamcorper faucibus.
      </p>
      <p>
        Integer vulputate venenatis iaculis. Vestibulum fermentum sodales
        lectus, in posuere lacus interdum eget. Suspendisse maximus, lectus id
        pellentesque molestie, mi ante placerat est, vel condimentum orci nisl
        vel lacus. Duis leo diam, viverra nec nulla et, accumsan commodo mauris.
        Sed id sollicitudin nunc. Praesent aliquet efficitur odio eget
        imperdiet.
      </p>
      <p>
        Mauris mollis ante a velit molestie elementum. Sed sollicitudin dui
        diam, laoreet placerat purus laoreet ut. Duis vehicula scelerisque
        metus, ac interdum massa tempor sit amet. Mauris auctor ante ut turpis
        vulputate venenatis. Suspendisse luctus condimentum leo vitae auctor.
        Donec tellus urna, luctus at sollicitudin eu, cursus sit amet tellus.
        Donec pellentesque blandit consectetur. Ut ac velit ac sem auctor
        vulputate id in ex. Fusce cursus urna at aliquam sagittis. Proin
        sagittis risus nisi, eget euismod orci euismod id. Nullam elementum
        finibus tristique.
      </p>
      <p>
        Nullam sagittis enim id laoreet ullamcorper. Duis nec dictum elit, id
        sollicitudin enim. Nulla sed tortor in nunc placerat semper sit amet
        eget justo. Maecenas consectetur ligula in nisi euismod, nec tristique
        arcu pulvinar. Sed ullamcorper facilisis urna, vitae sollicitudin nisi
        pretium vitae. Aliquam lacus lacus, auctor non suscipit sit amet, congue
        sed nisi. Praesent rutrum a leo eget placerat. Nunc ut enim vitae tortor
        ullamcorper gravida sed vel ex. Nullam sed laoreet mauris. Pellentesque
        quis interdum arcu. Ut vitae elit non diam congue congue at a nunc. Duis
        porttitor posuere urna, non tristique urna vehicula malesuada.
        Vestibulum scelerisque vehicula porttitor. Nam ornare fringilla
        ultricies. Proin molestie mi id bibendum sagittis.
      </p>
      <p>
        Mauris mollis ante a velit molestie elementum. Sed sollicitudin dui
        diam, laoreet placerat purus laoreet ut. Duis vehicula scelerisque
        metus, ac interdum massa tempor sit amet. Mauris auctor ante ut turpis
        vulputate venenatis. Suspendisse luctus condimentum leo vitae auctor.
        Donec tellus urna, luctus at sollicitudin eu, cursus sit amet tellus.
        Donec pellentesque blandit consectetur. Ut ac velit ac sem auctor
        vulputate id in ex. Fusce cursus urna at aliquam sagittis. Proin
        sagittis risus nisi, eget euismod orci euismod id. Nullam elementum
        finibus tristique.
      </p>
      <p>
        Mauris mollis ante a velit molestie elementum. Sed sollicitudin dui
        diam, laoreet placerat purus laoreet ut. Duis vehicula scelerisque
        metus, ac interdum massa tempor sit amet. Mauris auctor ante ut turpis
        vulputate venenatis. Suspendisse luctus condimentum leo vitae auctor.
        Donec tellus urna, luctus at sollicitudin eu, cursus sit amet tellus.
        Donec pellentesque blandit consectetur. Ut ac velit ac sem auctor
        vulputate id in ex. Fusce cursus urna at aliquam sagittis. Proin
        sagittis risus nisi, eget euismod orci euismod id. Nullam elementum
        finibus tristique.
      </p>
      <p>
        Mauris mollis ante a velit molestie elementum. Sed sollicitudin dui
        diam, laoreet placerat purus laoreet ut. Duis vehicula scelerisque
        metus, ac interdum massa tempor sit amet. Mauris auctor ante ut turpis
        vulputate venenatis. Suspendisse luctus condimentum leo vitae auctor.
        Donec tellus urna, luctus at sollicitudin eu, cursus sit amet tellus.
        Donec pellentesque blandit consectetur. Ut ac velit ac sem auctor
        vulputate id in ex. Fusce cursus urna at aliquam sagittis. Proin
        sagittis risus nisi, eget euismod orci euismod id. Nullam elementum
        finibus tristique.
      </p>
    </aside>

  // <aside className="border border-primary">
  //   <div className="avatar-details mt-5 mb-5 border border-primary">
  //     <div className="avatar">
  //       <div className="avatar--image">
  //         <img src={Portrait} alt="username" />
  //       </div>
  //     </div>
  //     <p className="text-center">Here is the body of the app</p>
  //   </div>
  //   <div className="skill-data border border-danger mt-3">
  //     <p className="skill-data__heading ms-3">Skills and interests:</p>
  //     <div className="skill-data__master border border-primary mx-3 mb-2">
  //       <div className="skill-data__master--wrapper d-flex">
  //         <BiCycling />
  //         <h6 className="mt-1 ms-2">Master/Influencer</h6>
  //       </div>
  //       <div className="skill-data__master--content d-flex justify-content-evenly flex-wrap">
  //         <span className="px-2 py-1">Software development</span>
  //         <span className="px-2 py-1">Team management</span>
  //       </div>
  //     </div>
  //     <div className="skill-data__proficiency border border-primary  mx-3">
  //       <div className="d-flex skill-data__proficiency--wrapper mb-2">
  //         <MdDirectionsRun />
  //         <h6 className="mt-1 ms-2">Proficient</h6>
  //       </div>
  //       <div className="skill-data__proficiency--content d-flex justify-content-start flex-wrap me-2">
  //         <span className="px-2 py-1 me-2">Unit Testing</span>
  //         <span className="px-2 py-1">Data Analysis</span>
  //         <span className="px-2 py-1">Functional programming</span>
  //         <span className="px-2 py-1">Reactive Programming</span>
  //       </div>
  //     </div>
  //   </div>
  // </aside>
  );
};
export default User;
