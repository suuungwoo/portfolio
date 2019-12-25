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
              <p>
                ・大阪大学大学院 情報科学研究科を2021年3月に卒業予定の修士1年
              </p>
              <p>
                ・ITエンジニア，特に機械学習・深層学習・画像処理の領域で職探し中
              </p>
              <p>・23歳</p>
              <p>・プログラミング歴2年</p>
              <p>・医療・自動運転・金融にも関心あり</p>
              <br />
              　大阪大学大学院情報科学研究科でコンピュータサイエンスを専攻しています．研究テーマは深層学習技術を用いた医用画像処理です．実験にはPythonやTensorFlowを使います．
              <br />
              　Webサービスにも興味があり，Web系ベンチャー企業でフロントエンジニアをしています．ReactやVue.jsを使うことが多いです．
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
