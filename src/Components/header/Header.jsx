/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoSearchSharp } from 'react-icons/io5';
import { fetchPerson } from '../../features/personSlice';
// import '../../static/sass/components/_header.scss';

const Header = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!username) return;
    dispatch(fetchPerson(username));
    setUsername('');
  };

  return (
    <nav className="navigation border border-danger">
      <div className="test d-flex border border-primary">
        <div className="toggler-brand d-flex border border-danger ms-2 py-1">
          <button className="navbar-toggler pe-1 ps-1 ms-1 me-2" type="button">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="border border-dark ms-2 me-3">
            <a className="navbar-brand" href="./">
              torre.
              <span>co</span>
            </a>
          </div>
        </div>

        <form className="search-form d-flex" onSubmit={submitHandler}>
          <input
            type="text"
            value={username}
            placeholder="search"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit" onClick={submitHandler}>
            <IoSearchSharp className="search-form__icon me-3" />
          </button>
        </form>
      </div>

      {/* <div className="auth-search d-flex me-3">
        <form
          className="search-form d-flex flex-grow-1"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            value={username}
            placeholder="search"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit" onClick={submitHandler}>
            <IoSearchSharp className="search-form__icon me-3" />
          </button>
        </form>
        <a className="signin" href="./">
          sign in
        </a>
      </div> */}
      {/* <a className="navbar-brand" href="./">
        Brand
      </a>
      <button
        className="navbar-toggler collapsed border-0"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsingNavbar">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/themes">
              Themes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/pages" data-toggle="dropdown">
              Pages
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="blog">
                Blog
              </a>
              <a className="dropdown-item" href="gallery">
                Gallery
              </a>
              <a className="dropdown-item" href="list">
                List
              </a>
            </div>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Header;
