import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Temp(props) {
  const location = useLocation();
  const card = location.state;
  console.log(card);

  return (
    <div className="background">
      <Link to="/">
        <button>Home</button>
      </Link>
      <div className="article">
        <div className="article__container">
          <h1 className="article__header">{card.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Temp;
