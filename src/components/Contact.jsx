import React from 'react';

function Contact() {
  return (
    <section class="section" id="contact">
      <div class="inner">
        <div class="section-title-block">
          <h2 class="section-title">CONTACT</h2>
          <p class="section-desc">
            お問合わせは下記のフォームかSNSからご連絡をください。
          </p>
        </div>
        <div class="contact-wrapper">
          <div class="contact-list">
            <ul>
              <li>
                <a href="#">
                  <img src="img/contact/icon_contact.png" alt="" />
                  <span class="contact-list-desc">フォーム</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="img/contact/icon_contact.png" alt="" />
                  <span class="contact-list-desc">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="img/contact/icon_contact.png" alt="" />
                  <span class="contact-list-desc">Facebook</span>
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
