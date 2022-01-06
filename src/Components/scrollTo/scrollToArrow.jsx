import React, { useState, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset <= 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset > 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ bottom: 400, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    // winddow.removeEventListener();
  }, []);

  return (
    <HiChevronDown
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 50, width: 50, display: showScroll ? 'flex' : 'none' }}
    />
  );
};

export default ScrollArrow;
