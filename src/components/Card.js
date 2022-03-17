import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <Link
      className="card"
      to={props.title.split(' ').join('-')}
      state={props.card}
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
          {' '}
          <div>{props.title}</div>
        </h2>
      </div>
    </Link>
  );
}

export default Card;
