/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import './App.scss';
import React, { useRef, useState, useEffect } from 'react';
import UserBody from './Views/user';
import Scroll from './Components/scrollTo/scrollToArrow';
import Header from './Components/header/Header';

const App = () => {
  const [showButton, setShowButton] = useState(false);

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [more, setMore] = useState('moreHidden');

  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
    // window.removeEventListener();
  }, [showButton]);

  return (
    <main className="container-fluid border border-danger App gx-0">
      <Header />
      <UserBody />
      <section className="row  App__column-row">
        {/* <Header /> */}
        {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12 border border-danger gx-0 App__column-row--wrapper"> */}
        {/* <UserBody /> */}
        {/* <Scroll /> */}
        {/* </div> */}
      </section>
    </main>
  );
};

export default App;
