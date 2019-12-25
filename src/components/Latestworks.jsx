import React from 'react';
import latestworks from '../img/latestworks/latestworks.jpg';

function Latestworks() {
  return (
    <section className="section" id="latestworks">
      <div className="inner">
        <div className="section-title-block">
          <h2 className="section-title">LATEST WORKS</h2>
          <p className="section-desc">最新の制作実績です．</p>
        </div>
        <div className="two-column-wrapper">
          <div className="two-column-image">
            <img src={latestworks} alt="" />
          </div>
          <div className="two-column-desc">
            <p className="text">
              作品タイトル：●●●●●
              <br /> 担当：Design / Coding / WordPress
              <br /> 制作期間：●ヶ月
              <br /> URL：
              <a href="#">http://●●●.com</a>
              <br /> コメント：
              <br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Latestworks;
