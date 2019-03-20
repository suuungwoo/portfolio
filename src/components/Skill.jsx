import React from 'react';
import react from '../img/skill/react.png';
import redux from '../img/skill/redux.png';
import vue from '../img/skill/vue.png';
import javascript from '../img/skill/javascript.png';
import sass from '../img/skill/sass.png';
import python from '../img/skill/python.png';
import ruby from '../img/skill/ruby.png';
import git from '../img/skill/git.png';
import github from '../img/skill/github.png';
import aws from '../img/skill/aws.png';
import circleci from '../img/skill/circleci.png';
import postman from '../img/skill/postman.png';
import vscode from '../img/skill/vscode.png';
import linux from '../img/skill/linux.png';
import clang from '../img/skill/clang.png';
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
          <div className="skill-icon">
            <img src={javascript} alt="" />
          </div>
          <div className="skill-icon">
            <img src={python} alt="" />
          </div>
          <div className="skill-icon">
            <img src={ruby} alt="" />
          </div>
          <div className="skill-icon">
            <img src={clang} alt="" />
          </div>
          <div className="skill-icon">
            <img src={react} alt="" />
          </div>
          <div className="skill-icon">
            <img src={vue} alt="" />
          </div>
          <div className="skill-icon">
            <img src={sass} alt="" />
          </div>
          <div className="skill-icon">
            <img src={redux} alt="" />
          </div>
        </div>
        <div className="w__skill">
          <div className="skill-icon">
            <img src={git} alt="" />
          </div>
          <div className="skill-icon">
            <img src={github} alt="" />
          </div>
          <div className="skill-icon">
            <img src={aws} alt="" />
          </div>
          <div className="skill-icon">
            <img src={circleci} alt="" />
          </div>
          <div className="skill-icon">
            <img src={linux} alt="" />
          </div>
          <div className="skill-icon">
            <img src={postman} alt="" />
          </div>
          <div className="skill-icon">
            <img src={vscode} alt="" />
          </div>
          <div className="skill-icon">
            <img src={emacs} alt="" />
          </div>
        </div>
        <div />
      </div>
    </section>
  );
}

export default Skill;
