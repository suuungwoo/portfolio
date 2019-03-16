import React from 'react';
import Modal from 'react-modal';
import portfolio from '../../img/works/portfolio-ss.png';
import playground from '../../img/works/playground-ss.png';
import enhance from './enhancer';

Modal.setAppElement('body');

function Works(props) {
  const {isModal, updateIsModal} = props;

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
            <a
              href={portfolio}
              data-size="980x668"
              className="card-image"
              onClick={() => {
                updateIsModal(!isModal);
              }}>
              <img src={portfolio} alt="" />
            </a>
            {/* <Modal
              isOpen={isModal}
              contentLabel="Port Folio"
              onRequestClose={() => {
                updateIsModal(!isModal);
              }}>
              <div>
                <img src={portfolio} alt="" />
              </div>
            </Modal> */}
            <figcaption className="card-caption">
              <p className="card-caption-title">ポートフォリオ</p>
              <p className="card-caption-info">このサイトです。</p>
              <p className="card-caption-url">
                URL:
                <a
                  className="url-link"
                  href="https://suuungwoo.github.io/homepage/"
                  target="_blank">
                  https://suuungwoo.github.io/homepage/
                </a>
              </p>
              <p className="card-caption-url">
                ソースコード:
                <a
                  className="url-link"
                  href="https://github.com/suuungwoo/homepage/tree/master"
                  target="_blank">
                  https://github.com/suuungwoo/homepage/tree/master
                </a>
              </p>
            </figcaption>
          </figure>
          <figure className="card">
            <a href={playground} data-size="980x668" className="card-image">
              <img src={playground} alt="" />
            </a>
            {/* <Modal
              isOpen={isModal}
              contentLabel="Port Folio"
              onRequestClose={() => {
                updateIsModal(!isModal);
              }}>
              ab
            </Modal> */}
            <figcaption className="card-caption">
              <p className="card-caption-title">ホテル検索</p>
              <p className="card-caption-info">
                地名を入力して近くのホテルを検索するサイトです。
              </p>
              <p className="card-caption-url">
                URL:
                <a
                  className="url-link"
                  href="http://playground-gckim.gemcook.com/hotel/"
                  target="_blank">
                  http://playground-gckim.gemcook.com/hotel/
                </a>
              </p>
              <p className="card-caption-url">
                ソースコード:
                <a
                  className="url-link"
                  href="https://github.com/suuungwoo/playground"
                  target="_blank">
                  https://github.com/suuungwoo/playground
                </a>
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default enhance(props => <Works {...props} />);
