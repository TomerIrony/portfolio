import React from 'react';
import html from '../images/html.svg';
import react from '../images/react.svg';
import css from '../images/css.svg';
import mongo from '../images/mongodblogo.svg';
import nodejs from '../images/nodejs.svg';
function Icons(props) {
  return (
    <div className="icons">
      <div className="icons__container">
        <img className="icons__icon bigger " src={react} alt="react" />
        <img className="icons__icon bigger" src={html} alt="html" />
        <img className="icons__icon bigger css" src={css} alt="css" />
        <img className="icons__icon bigger" src={mongo} alt="mongodb" />
        <img className="icons__icon bigger" src={nodejs} alt="nodejs" />
      </div>
    </div>
  );
}

export default Icons;
