import React from 'react';
import left from '../images/left.svg';
import Card from './Card';
import data from '../data/articles.json';

function Blog(props) {
  return (
    <div className="blog">
      <button
        className="blog__button-back"
        onClick={() => {
          props.setPage(false);
        }}
      >
        <img src={left} alt="left arrow" />
        <div className="blog__button-back-text">Back</div>
      </button>
      <h2>Articles</h2>
      <div className="elements">
        {data.map((card, i) => {
          return (
            <Card
              card={card}
              title={card.title}
              text={card.text}
              src={card.src}
              date={card.date}
              key={i}
            />
          );
        })}
      </div>

      <h2>Projects</h2>
    </div>
  );
}

export default Blog;
