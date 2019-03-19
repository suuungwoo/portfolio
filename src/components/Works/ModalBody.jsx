import React from 'react';

function ModalBody(props) {
  const {img, title, url, code, description, techs} = props;
  return (
    <div className="f__modal">
      <div className="w__img">
        <img src={img} alt="" />
      </div>
      <figcaption className="card-caption">
        <h1 className="section-title">{title}</h1>
        <div className="section-content">
          <ul className="product-info">
            <li className="clearfix">
              <p className="field">URL</p>
              <p className="description">
                <a href={url}>{url}</a>
              </p>
            </li>
            <li className="clearfix">
              <p className="field">ソースコード</p>
              <p className="description">
                <a href={code}>{code} </a>
              </p>
            </li>
            <li className="clearfix">
              <p className="field">説明</p>
              <p className="description">{description}</p>
            </li>
            <li className="clearfix">
              <p className="field">使用した技術</p>
              <div className="description">
                <ul className="techs">
                  {techs.map(tech => {
                    return (
                      <li className="tech">
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
  );
}

export default ModalBody;
