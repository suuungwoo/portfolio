import React from 'react';
import react from '../img/skill/react.png';
import redux from '../img/skill/redux.png';
import vue from '../img/skill/vue.png';
import es6 from '../img/skill/es6.png';
import sass from '../img/skill/sass.png';
import github from '../img/skill/github.png';
import aws from '../img/skill/aws.png';
import postman from '../img/skill/postman.png';
import vscode from '../img/skill/vscode.png';
import linux from '../img/skill/linux.png';
import c from '../img/skill/c.png';
import emacs from '../img/skill/emacs.png';

function Skill() {
  return (
    <section className="section" id="skill">
      <div className="inner">
        <div className="section-title-block">
          <h2 className="section-title">SKILL</h2>
          <p className="section-desc">使用する技術やソフトウェアです。</p>
        </div>
        <div className="w__skill">
          <div className="skill-logo">
            <img src={react} alt="" />
          </div>
          <div className="skill-logo">
            <img src={redux} alt="" />
          </div>
          <div className="skill-logo">
            <img src={vue} alt="" />
          </div>
          <div className="skill-logo">
            <img src={es6} alt="" />
          </div>
          <div className="skill-logo">
            <img src={sass} alt="" />
          </div>
          <div className="skill-logo">
            <img src={github} alt="" />
          </div>
        </div>
        <div className="w__skill">
          <div className="skill-logo">
            <img src={aws} alt="" />
          </div>
          <div className="skill-logo">
            <img src={postman} alt="" />
          </div>
          <div className="skill-logo">
            <img src={vscode} alt="" />
          </div>
          <div className="skill-logo">
            <img src={linux} alt="" />
          </div>
          <div className="skill-logo">
            <img src={c} alt="" />
          </div>
          <div className="skill-logo">
            <img src={emacs} alt="" />
          </div>
        </div>
        <div />
        {/* <div className="card-wrapper">
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
        </div> */}
      </div>
    </section>
  );
}

export default Skill;
