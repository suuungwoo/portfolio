import React from 'react';
import img_profile from '../img/profile/profile.png';

function Profile() {
  return (
    <section className="section" id="profile">
      <div className="inner">
        <div className="section-title-block">
          <h2 className="section-title">PROFILE</h2>
        </div>
        <div className="two-column-wrapper">
          <div className="two-column-image">
            <img src={img_profile} alt="" />
          </div>
          <div className="two-column-desc">
            <p className="text">
              はじめまして。金成雨と申します。
              大阪大学大学院情報科学研究科の1年生です。
              <br />
              <br />
              大学に入学してからプログラミングを学び始め、研究室での半導体トランジスタの
              シミュレーションに関する研究や、Web系企業での長期インターンを経験しました。
              <br />
              <br />
              研究では、主にC言語を用いたシミュレーションをスーパーコンピュータ上で行い、
              ナノシートトランジスタの特性を解析しました。
              計算の高速化のため、openMPやMPIを用いて並列化しました。
              <br />
              <br />
              インターンでは、主にReact.jsというJavaScriptフレームワークを用いてWebサイトや
              Webアプリの開発を行いました。
              ソースコード管理にはGitを使用しました。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
