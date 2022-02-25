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
        <button type="button" onClick={onClick}>
          <AiOutlineClose className="close" />
        </button>
        {['Market', 'Exchange', 'Rollon', 'Rolloff'].map((itms, indx) => (
          <Item key={itms.id} title={itms} />
        ))}
      </ul>
    </>
  );
};

export default sidebar;
