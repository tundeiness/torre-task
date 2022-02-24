/* eslint-disable no-unused-vars */
import React from 'react';

const sidebarItem = ({ title, classProps }) => {
  const check = 'here';
  return (
    <li className={`d-flex  flex-column ${classProps}`}>{title}</li>
  );
};

export default sidebarItem;
