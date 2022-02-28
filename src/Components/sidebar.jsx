/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Item from './sidebarItem';

const sidebar = ({ onClick }) => {
  const unlow = 0;
  // const [toggleMenu, setToggleMenu] = useState(toggl);
  // console.log(toggl);
  return (
    <>
      <ul className="d-flex flex-column border border-danger sidebar">
        <li className="sidebar__wrapper">
          <button
            type="button"
            onClick={onClick}
            className="sidebar__wrapper--button"
          >
            <AiOutlineClose className="close" />
          </button>
        </li>
        {[
          'Search',
          'jobs/gigs',
          'Post a job',
          'Your jobs(posted or applied)',
          'Preferences',
          'Your genome',
          'Signals',
        ].map((itms, indx) => (
          <Item key={itms.id} title={itms} />
        ))}
        <hr />
        {['Messages', 'Torres Product roadmap', 'Request features'].map(
          (itms, indx) => (
            <Item key={itms.id} title={itms} />
          ),
        )}
        <hr />
      </ul>
    </>
  );
};

export default sidebar;
