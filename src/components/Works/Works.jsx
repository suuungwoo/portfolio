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
            <a href={portfolio} data-size="980x668" className="card-image">
              <img src={portfolio} alt="" />
            </a>
            <Modal
              isOpen={isModal}
              contentLabel="Port Folio"
              onRequestClose={() => {
                updateIsModal(!isModal);
              }}>
              a
            </Modal>
            <figcaption className="card-caption">
              <p className="card-caption-title">ポートフォリオ</p>
              <p className="card-caption-info">Design / Coding</p>
              <p className="card-caption-url">
                <a className="url-link" href="＃" target="_blank">
                  Link
                </a>
              </p>
            </figcaption>
          </figure>
          <figure className="card">
            <a href={playground} data-size="980x668" className="card-image">
              <img src={playground} alt="" />
            </a>
            <Modal
              isOpen={isModal}
              contentLabel="Port Folio"
              onRequestClose={() => {
                updateIsModal(!isModal);
              }}>
              a
            </Modal>
            <figcaption className="card-caption">
              <p className="card-caption-title">ポートフォリオ</p>
              <p className="card-caption-info">Design / Coding</p>
              <p className="card-caption-url">
                <a className="url-link" href="＃" target="_blank">
                  Link
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
