/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  IoCompassOutline,
  IoMegaphoneOutline,
} from 'react-icons/io5';

import { IoMdBriefcase } from 'react-icons/io';

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
      <ul className="d-flex flex-column sidebar">
        <li className="sidebar__brand-wrapper">
          <a className="sidebar-brand" href="./">
            torre
          </a>
        </li>
        {[
          ['Search', <BsSearch key="0" className="bssearch" />],
          ['jobs/gigs', <IoCompassOutline key="1" className="job" />],
          ['Post a job', <IoMegaphoneOutline key="2" className="post" />],
          ['Your jobs(posted or applied)', <IoMdBriefcase key="3" className="applied" />],
          ['Preferences', <GoSettings key="4" className="preference" />],
          ['Your genome', <TiMessages key="5" className="genome" />],
          ['Signals', <GiRoad key="6" className="signal" />],
        ].map((itms, indx) => (
          <span className="d-flex flex-row ms-3 pt-4" key={itms.id}>
            <span className="d-flex flex-column justify-content-center">{itms[1]}</span>
            <Item key={itms.id} title={itms[0]} />
          </span>
        ))}
        <hr />
        {[
          ['Messages', <GrLanguage key="0" className="grlanguage" />],
          ['Torres Product roadmap', <BiCode key="1" className="product" />],
          ['Request features', <AiOutlineBulb key="2" className="request" />],
        ].map((itms, _indx) => (
          <span className="d-flex flex-row ms-3 pt-4" key={itms.id}>
            <span className="d-flex flex-column justify-content-center">{itms[1]}</span>
            <Item key={itms.id} title={itms[0]} />
          </span>
        ))}
        <hr />
      </ul>
    </>
  );
};

export default sidebar;
