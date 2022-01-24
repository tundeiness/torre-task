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
  }, []);

  return (

    <main className="container-fluid border border-danger App">
      <section className="row border border-warning justify-content-center App__column-row">
        <div className="col-md-4 border border-danger gx-0 App__column-row--wrapper">
          <Header />
          <UserBody />
          <Scroll />
        </div>
      </section>
    </main>
  );
};

export default App;
