import React from 'react';
import Modal from 'react-modal';
import {
  s3,
  portfolio_min,
  portfolio,
  playground_min,
  playground,
} from '../../img/works';
import {react, html, css} from '../../img/skill';
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
            <p className="text">これまで制作したものです．</p>
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
                url="https://suuungwoo.github.io/portfolio/"
                code="https://github.com/suuungwoo/portfolio"
                description="このサイトです．「Works」の画像をクリックすると詳細を表示したり、ヘッダーをスクロール位置によって固定するためにReact.jsを使用しました．"
                techs={[react, html, css]}
              />
              <div
                className="close-button hidden-more-sm"
                onClick={() => {
                  updateIsPortfolioModal(!isPortfolioModal);
                }}
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
                description="地名を入力すると近くのホテルを検索できるサイトです．状態管理にReduxを使用しました．"
                techs={[react, html, css, s3]}
              />
              <div
                className="close-button hidden-more-sm"
                onClick={() => {
                  updateIsPlaygroundModal(!isPlaygroundModal);
                }}
              />
            </Modal>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default enhance(props => <Works {...props} />);
