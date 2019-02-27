import React from 'react';

function About() {
  return (
    <section class="section" id="about">
      <div class="inner">
        <div class="section-title-block">
          <h2 class="section-title">ABOUT</h2>
          <p class="section-desc">こんにちは。ヤマダハナコと申します。</p>
        </div>
        <div class="two-column-wrapper">
          <div class="two-column-image">
            <img src="img/profile/img_profile.png" alt="" />
          </div>
          <div class="two-column-desc">
            <p class="text">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              <br />
              <br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              <br />
              <br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
