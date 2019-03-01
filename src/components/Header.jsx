import React from 'react';

function Header() {
  return (
    <>
      <header id="header">
        <h1 className="logo">
          <span className="logo-name">Kim Sungwoo’s</span>
          <span className="logo-title">PORTFOLIO</span>
          <span className="logo-desc">Web Engineer</span>
        </h1>
      </header>
      <nav id="gnav">
        <ul>
          {/* <li>
            <a href="#latestworks">LATEST WORKS</a>
          </li> */}
          <li>
            <a href="#works">WORKS</a>
          </li>
          <li>
            <a href="#profile">PROFILE</a>
          </li>
          <li>
            <a href="#skill">SKILL</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
