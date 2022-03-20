import React from 'react';

function Card(props) {
  return (
    <div
      className="card"
      onClick={() => {
        props.setTest(true);
        props.setArticle(props.card.id);
      }}
    >
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
    </div>
  );
}

export default Card;
