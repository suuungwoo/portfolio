import React from 'react';
import Modal from 'react-modal';
import thumb_dammy from '../../img/works/thumb/thumb_dammy.jpg';
import enhance from './enhancer';

Modal.setAppElement('body');

function Works(props) {
  const {isModal, updateIsModal} = props;
  console.log(props);

  return (
    <section className="section" id="works">
      <div className="inner">
        <div className="section-title-block">
          <h2 className="section-title">WORKS</h2>
          <div className="section-desc">
            <p className="text">これまでの制作実績です。</p>
          </div>
        </div>
        <div className="card-wrapper my-gallery">
          <figure className="card">
            <a
              href="img/works/dammy.jpg"
              data-size="980x668"
              className="card-image">
              <img src={thumb_dammy} alt="" />
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
            <a
              href="img/works/dammy.jpg"
              data-size="980x668"
              className="card-image">
              <img src={thumb_dammy} alt="" />
            </a>
            <figcaption className="card-caption">
              <p className="card-caption-title">作品タイトル</p>
              <p className="card-caption-info">Design / Coding</p>
              <p className="card-caption-url">
                <a className="url-link" href="＃" target="_blank">
                  Link
                </a>
              </p>
            </figcaption>
          </figure>
          <figure className="card">
            <a
              href="img/works/dammy.jpg"
              data-size="980x668"
              className="card-image">
              <img src={thumb_dammy} alt="" />
            </a>
            <figcaption className="card-caption">
              <p className="card-caption-title">作品タイトル</p>
              <p className="card-caption-info">Design / Coding</p>
              <p className="card-caption-url">
                <a className="url-link" href="＃" target="_blank">
                  Link
                </a>
              </p>
            </figcaption>
          </figure>
          <figure className="card">
            <a
              href="img/works/dammy.jpg"
              data-size="980x668"
              className="card-image">
              <img src={thumb_dammy} alt="" />
            </a>
            <figcaption className="card-caption">
              <p className="card-caption-title">作品タイトル</p>
              <p className="card-caption-info">Design / Coding</p>
              <p className="card-caption-url">
                <a className="url-link" href="＃" target="_blank">
                  Link
                </a>
              </p>
            </figcaption>
          </figure>
          <figure className="card">
            <a
              href="img/works/dammy.jpg"
              data-size="980x668"
              className="card-image">
              <img src={thumb_dammy} alt="" />
            </a>
            <figcaption className="card-caption">
              <p className="card-caption-title">作品タイトル</p>
              <p className="card-caption-info">Design / Coding</p>
              <p className="card-caption-url">
                <a className="url-link" href="＃" target="_blank">
                  Link
                </a>
              </p>
            </figcaption>
          </figure>
          <figure className="card">
            <a
              href="img/works/dammy.jpg"
              data-size="980x668"
              className="card-image">
              <img src={thumb_dammy} alt="" />
            </a>
            <figcaption className="card-caption">
              <p className="card-caption-title">作品タイトル</p>
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
