import React from 'react';

function Card(props) {
  return (
    <div
      className="card"
      onClick={() => {
        if (!props.project) {
          props.setTest(true);
        }
        props.setArticle(props.card.id);
      }}
    >
      {props.project ? (
        <a href={props.link} rel="noreferrer" target="_blank">
          <img
            id="cardImage"
            src={props.src}
            alt={props.title}
            className="card__image"
          />
          <div className="card__caption">
            <p className="card__date">{props.date}</p>

            <h2 className="card__name">
              <div>{props.title}</div>
            </h2>
          </div>
        </a>
      ) : (
        <>
          {' '}
          <img
            id="cardImage"
            src={props.src}
            alt={props.title}
            className="card__image"
          />
          <div className="card__caption">
            <p className="card__date">{props.date}</p>

            <h2 className="card__name">
              <div>{props.title}</div>
            </h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
