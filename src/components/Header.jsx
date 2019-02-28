import React from 'react';

function Header() {
  return (
    <>
      <header id="header">
        <h1 class="logo">
          <span class="logo-name">Kim Sungwoo’s</span>
          <span class="logo-title">PORTFOLIO</span>
          <span class="logo-desc">Web Engineer</span>
        </h1>
      </header>
      <nav id="gnav">
        <ul>
          <li>
            <a href="#latestworks">LATEST WORKS</a>
          </li>
          <li>
            <a href="#works">WORKS</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
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
