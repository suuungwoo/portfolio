import React from 'react';
import {
  aws,
  css,
  django,
  docker,
  go,
  html,
  javascript,
  jupyter,
  nativescript,
  python,
  react,
  tensorflow,
  vue,
} from '../img/skill/';

function Skill() {
  return (
    <section className="section" id="skill">
      <div className="inner">
        <div className="section-title-block">
          <h2 className="section-title">SKILL</h2>
          <p className="section-desc">使用する技術やソフトウェアです。</p>
        </div>
        <div className="w__skill">
          <div className="skill-icon">
            <img src={python} alt="" />
          </div>
          <div className="skill-icon">
            <img src={tensorflow} alt="" />
          </div>
          <div className="skill-icon">
            <img src={jupyter} alt="" />
          </div>
          <div className="skill-icon">
            <img src={django} alt="" />
          </div>
          <div className="skill-icon">
            <img src={javascript} alt="" />
          </div>
          <div className="skill-icon">
            <img src={react} alt="" />
          </div>
          <div className="skill-icon">
            <img src={vue} alt="" />
          </div>
          <div className="skill-icon">
            <img src={nativescript} alt="" />
          </div>
          <div className="skill-icon">
            <img src={html} alt="" />
          </div>
          <div className="skill-icon">
            <img src={css} alt="" />
          </div>
          <div className="skill-icon">
            <img src={go} alt="" />
          </div>
          <div className="skill-icon">
            <img src={docker} alt="" />
          </div>
          <div className="skill-icon">
            <img src={aws} alt="" />
          </div>
        </div>
        <div />
      </div>
    </section>
  );
}

export default Skill;
