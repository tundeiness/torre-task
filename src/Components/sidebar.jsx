/* eslint-disable no-unused-vars */
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Item from './sidebarItem';

const sidebar = ({ toggle }) => {
  const unlow = 0;
  return (
    <>
      <ul className="d-flex flex-column border border-danger sidebar">
        <button type="button">
          <AiOutlineClose
            className="close"
            onClick={() => toggle}
          />
        </button>
        <li>new</li>
        <li>Task</li>
      </ul>
      <Item />
    </>
  );
};

export default sidebar;
