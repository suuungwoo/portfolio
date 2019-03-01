import React from 'react';
import img_profile from '../img/profile/img_profile.png';

function Profile() {
  return (
    <section className="section" id="profile">
      <div className="inner">
        <div className="section-title-block">
          <h2 className="section-title">PROFILE</h2>
          <p className="section-desc">
            はじめまして。金成雨(きむそんう)と申します。
          </p>
        </div>
        <div className="two-column-wrapper">
          <div className="two-column-image">
            <img src={img_profile} alt="" />
          </div>
          <div className="two-column-desc">
            <p className="text">
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

export default Profile;
