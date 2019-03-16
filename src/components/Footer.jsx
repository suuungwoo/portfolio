import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <nav className="footer-link">
          <ul>
            {/* <li>
              <a href="#latestworks">LATEST WORKS</a>
            </li> */}
            <li>
              <a href="#profile">PROFILE</a>
            </li>
            <li>
              <a href="#skill">SKILL</a>
            </li>
            <li>
              <a href="#works">WORKS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
        {/* <p className="copyright">
          Copyright&copy;Sho Satoh. All Rights Reserved.
        </p> */}
      </div>
    </footer>
  );
}

export default Footer;
