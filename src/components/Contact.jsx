import React from 'react';
import twitter from '../img/contact/twitter.png';
import facebook from '../img/contact/facebook.png';
import github from '../img/contact/github.png';

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="inner">
        <div className="section-title-block">
          <h2 className="section-title">CONTACT</h2>
          <p className="section-desc">お問合わせは下記からご連絡をください。</p>
        </div>
        <div className="contact-wrapper">
          <div className="contact-list">
            <ul>
              <li>
                <a href="https://twitter.com/suuungwoo">
                  <img src={twitter} alt="" />
                  <span className="contact-list-desc">Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/suuungwoo">
                  <img src={facebook} alt="" />
                  <span className="contact-list-desc">Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/suuungwoo">
                  <img src={github} alt="" />
                  <span className="contact-list-desc">GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
