import React from 'react';
import Modal from 'react-modal';
import portfolio_min from '../../img/works/portfolio-min.png';
import portfolio from '../../img/works/portfolio.png';
import playground_min from '../../img/works/playground-min.png';
import playground from '../../img/works/playground.png';
import react from '../../img/skill/react.png';
import sass from '../../img/skill/sass.png';
import redux from '../../img/skill/redux.png';
import github from '../../img/skill/github.png';
import s3 from '../../img/works/s3.png';
import enhance from './enhancer';
import ModalBody from './ModalBody';

Modal.setAppElement('body');

function Works(props) {
  const {
    isPortfolioModal,
    isPlaygroundModal,
    updateIsPortfolioModal,
    updateIsPlaygroundModal,
  } = props;

  return (
    <section className="section" id="works">
      <div className="inner">
        <div className="section-title-block">
          <h2 className="section-title">WORKS</h2>
          <div className="section-desc">
            <p className="text">これまで制作したものです。</p>
          </div>
        </div>
        <div className="card-wrapper my-gallery">
          <figure className="card">
            <div
              className="card-image"
              onClick={() => {
                updateIsPortfolioModal(!isPortfolioModal);
              }}>
              <img src={portfolio_min} alt="" />
            </div>
            <Modal
              isOpen={isPortfolioModal}
              onRequestClose={() => {
                updateIsPortfolioModal(!isPortfolioModal);
              }}>
              <ModalBody
                img={portfolio}
                title="ポートフォリオサイト"
                url="https://suuungwoo.github.io/homepage/"
                code="https://github.com/suuungwoo/homepage/tree/master"
                description="このサイトです。「Works」の画像をクリックすると詳細を表示したり、ヘッダーをスクロール位置によって固定するためにReact.jsを使用しました。"
                techs={[react, sass, github]}
              />
            </Modal>
          </figure>
          <figure className="card">
            <div
              className="card-image"
              onClick={() => {
                updateIsPlaygroundModal(!isPlaygroundModal);
              }}>
              <img src={playground_min} alt="" />
            </div>
            <Modal
              isOpen={isPlaygroundModal}
              onRequestClose={() => {
                updateIsPlaygroundModal(!isPlaygroundModal);
              }}>
              <ModalBody
                img={playground}
                title="ホテル検索サイト"
                url="http://playground-gckim.gemcook.com/hotel/"
                code="https://github.com/suuungwoo/playground"
                description="地名を入力すると近くのホテルを検索できるサイトです。状態管理にReduxを使用しました。"
                techs={[react, redux, sass, s3]}
              />
            </Modal>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default enhance(props => <Works {...props} />);
