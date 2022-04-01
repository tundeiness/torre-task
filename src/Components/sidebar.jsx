/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  IoCompassOutline,
  IoMegaphoneOutline,
  IoMdBriefcase,
} from 'react-icons/io';

import { GoSettings } from 'react-icons/go';
import { TiMessages } from 'react-icons/ti';
import { GiRoad } from 'react-icons/gi';
import { AiOutlineBulb } from 'react-icons/ai';
import { BiCode, BiHelpCircle } from 'react-icons/bi';
import { GrLanguage } from 'react-icons/gr';
import Item from './sidebarItem';

const sidebar = () => {
  const unlow = 0;
  // const [toggleMenu, setToggleMenu] = useState(toggl);
  // console.log(toggl);
  return (
    <>
      <ul className="d-flex flex-column border border-danger sidebar">
        <li className="sidebar__brand-wrapper">
          <a className="sidebar-brand" href="./">
            torre
          </a>
        </li>
        {[
          'Search',
          'jobs/gigs',
          'Post a job',
          'Your jobs(posted or applied)',
          'Preferences',
          'Your genome',
          'Signals',
        ].map((itms, _indx) => (
          <Item key={itms.id} title={itms} />
        ))}
        <hr />
        {['Messages', 'Torres Product roadmap', 'Request features'].map(
          (itms, _indx) => (
            <Item key={itms.id} title={itms} />
          ),
        )}
        <hr />
      </ul>
    </>
  );
};

export default sidebar;
