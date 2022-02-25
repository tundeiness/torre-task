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
        <li>new</li>
        <li>Task</li>
      </ul>
      <Item />
    </>
  );
};

export default sidebar;
