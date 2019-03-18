import React from 'react';
import Modal from 'react-modal';
import portfolio from '../../img/works/portfolio-ss.png';
import portfolio_all from '../../img/works/portfolio-capture.png';
import playground from '../../img/works/playground-ss.png';
import react from '../../img/skill/react.png';
import redux from '../../img/skill/redux.png';
import enhance from './enhancer';

Modal.setAppElement('body');

function Works(props) {
  const {isModal, updateIsModal} = props;
  const techs = [react, redux];

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
                updateIsModal(!isModal);
              }}>
              <img src={portfolio} alt="" />
            </div>
            <Modal
              isOpen={isModal}
              contentLabel="Port Folio"
              onRequestClose={() => {
                updateIsModal(!isModal);
              }}>
              <div className="f__modal">
                <div className="w__img">
                  <img src={portfolio_all} alt="" />
                </div>
                <figcaption className="card-caption">
                  <h1 class="section-title">Portfolio site</h1>
                  <div class="section-content">
                    <ul class="product-info">
                      <li class="clearfix">
                        <p class="field">URL</p>
                        <p class="description">
                          <a href="https://musou1500.github.io/">
                            https://musou1500.github.io/
                          </a>
                        </p>
                      </li>
                      <li class="clearfix">
                        <p class="field">ソースコード</p>
                        <p class="description">
                          <a href="https://github.com/musou1500/musou1500.github.io">
                            https://github.com/musou1500/musou1500.github.io
                          </a>
                        </p>
                      </li>
                      <li class="clearfix">
                        <p class="field">説明</p>
                        <p class="description">
                          このサイトです。「Works」で画像をクリックすると詳細を表示する動きなどはHaxeで組み、javascriptに変換して使っています。
                        </p>
                      </li>
                      <li class="clearfix">
                        <p class="field">使用した技術</p>
                        <div class="description">
                          <ul class="techs">
                            {techs.map(tech => {
                              return (
                                <li class="tech">
                                  <img src={tech} alt="" />
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </figcaption>
              </div>
            </Modal>
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
                  href="http://playground-gckim.gemcook.com/hotel/">
                  http://playground-gckim.gemcook.com/hotel/
                </a>
              </p>
              <p className="card-caption-url">
                ソースコード:
                <a
                  className="url-link"
                  href="https://github.com/suuungwoo/playground">
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
