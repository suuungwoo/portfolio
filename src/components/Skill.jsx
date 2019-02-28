import React from 'react';
import icon_skill from '../img/skill/icon_skill.png';

function Skill() {
  return (
    <section className="section" id="skill">
      <div className="inner">
        <div className="section-title-block">
          <h2 className="section-title">SKILL</h2>
          <p className="section-desc">業界未経験ですが頑張ります！</p>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="skill-icon">
              <img src={icon_skill} alt="" />
            </div>
            <div className="skill-desc">
              <h3 className="skill-desc-title">HTML5/CSS3</h3>
              <div className="rating">
                <p className="rate rate4" />
              </div>
              <p className="text">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
          <div className="card">
            <div className="skill-icon">
              <img src={icon_skill} alt="" />
            </div>
            <div className="skill-desc">
              <h3 className="skill-desc-title">JavaScript</h3>
              <div className="rating">
                <p className="rate rate3" />
              </div>
              <p className="text">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
          <div className="card">
            <div className="skill-icon">
              <img src={icon_skill} alt="" />
            </div>
            <div className="skill-desc">
              <h3 className="skill-desc-title">WordPress</h3>
              <div className="rating">
                <p className="rate rate4" />
              </div>
              <p className="text">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
          <div className="card">
            <div className="skill-icon">
              <img src={icon_skill} alt="" />
            </div>
            <div className="skill-desc">
              <h3 className="skill-desc-title">Photoshop</h3>
              <div className="rating">
                <p className="rate rate4" />
              </div>
              <p className="text">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
          <div className="card">
            <div className="skill-icon">
              <img src={icon_skill} alt="" />
            </div>
            <div className="skill-desc">
              <h3 className="skill-desc-title">Illustrator</h3>
              <div className="rating">
                <p className="rate rate3" />
              </div>
              <p className="text">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
