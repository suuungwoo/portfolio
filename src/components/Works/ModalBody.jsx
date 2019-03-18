import React from 'react';

function ModalBody(props) {
  const {img, title, url, code, description, techs} = props;
  return (
    <div className="f__modal">
      <div className="w__img">
        <img src={img} alt="" />
      </div>
      <figcaption className="card-caption">
        <h1 class="section-title">{title}</h1>
        <div class="section-content">
          <ul class="product-info">
            <li class="clearfix">
              <p class="field">URL</p>
              <p class="description">
                <a href={url}>{url}</a>
              </p>
            </li>
            <li class="clearfix">
              <p class="field">ソースコード</p>
              <p class="description">
                <a href={code}>{code} </a>
              </p>
            </li>
            <li class="clearfix">
              <p class="field">説明</p>
              <p class="description">{description}</p>
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
  );
}

export default ModalBody;
