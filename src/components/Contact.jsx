import React from 'react';
import icon_contact from '../img/contact/icon_contact.png';

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="inner">
        <div className="section-title-block">
          <h2 className="section-title">CONTACT</h2>
          <p className="section-desc">
            お問合わせは下記のフォームかSNSからご連絡をください。
          </p>
        </div>
        <div className="contact-wrapper">
          <div className="contact-list">
            <ul>
              <li>
                <a href="#">
                  <img src={icon_contact} alt="" />
                  <span className="contact-list-desc">フォーム</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src={icon_contact} alt="" />
                  <span className="contact-list-desc">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src={icon_contact} alt="" />
                  <span className="contact-list-desc">Facebook</span>
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
