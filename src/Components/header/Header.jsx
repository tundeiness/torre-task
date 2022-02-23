/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoSearchSharp } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { fetchPerson } from '../../features/personSlice';
// import '../../static/sass/components/_header.scss';

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const [toggleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();

  const options = [
    { value: 'name', label: 'Search people by name:' },
    { value: 'skills', label: 'Search people by skills:' },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    if (!keyword) return;
    dispatch(fetchPerson(keyword));
    setKeyword('');
  };

  // const handleSearch = (searchType) => {
  //   if (searchType) {
  //     doSearch({ name, skill });
  //   } else {
  //     doSearch({ name });
  //   }
  // };

  return (
    <nav className="navigation container-fluid gx-0 border border-danger">
      <div className="row d-flex justify-content-between navigation--row">
        <div className="col-7 col-md-8 col-lg-7 navigation--row__large-col">
          <div className="brand-search d-flex justify-content-between border border-primary">
            <div className="brand-search--toggler-brand d-flex border border-danger ms-0 ms-lg-2 py-1">
              {/* <button
                className="navbar-toggler pe-1 ps-1 ms-1 me-2  border border-primary"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button> */}
              <button
                className="navbar-toggler pe-1 ps-1 ms-1 me-2  border border-primary"
                type="button"
              >
                {toggleMenu ? (
                  <AiOutlineClose onClick={() => setToggleMenu(false)} />
                ) : (
                  <HiMenuAlt4 onClick={() => setToggleMenu(true)} />
                )}
              </button>
              <div className="border border-dark ms-2 me-3">
                <a className="navbar-brand" href="./">
                  torre.
                  <span>co</span>
                </a>
              </div>
            </div>

            <form
              className="brand-search--search-form d-flex border border-danger"
              onSubmit={submitHandler}
            >
              <input
                type="search"
                value={keyword}
                placeholder="search"
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button type="submit" onClick={submitHandler}>
                <IoSearchSharp className="search-form__icon me-3" />
              </button>
              {/* {Boolean(keyword) && (
            <div onClick={submitHandler('name')}>
              {keyword}
              {' '}
              - Search people by name:
            </div>
          )} */}
            </form>
          </div>
        </div>

        <div className="col-4 col-md-4 col-lg-2 d-flex justify-content-end navigation--row__small-col">
          <div className="sign-in border border-danger d-flex flex-column align-items-center justify-content-center">
            <a className="sign-in--signin" href="./">
              sign in
            </a>
          </div>
        </div>
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
