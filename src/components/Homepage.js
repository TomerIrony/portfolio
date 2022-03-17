import React from 'react';
import Lightbulb from './Lightbulb';
import email from '../images/mail.svg';

function Homepage(props) {
  return (
    <div className="homepage">
      <div className="homepage__container">
        <div className="homepage__fix">
          <Lightbulb />
        </div>
        <div className="homepage__name">
          Hello! <br></br>I'm Tomer Irony
        </div>
        <p className="homepage__text">
          I am freelance web developer based in Israel who loves to craft
          attractive design experiences for the web.
        </p>
        <div className="homepage__buttons">
          <button className="homepage__buttons-email">
            <img
              className="homepage__buttons-email-svg"
              src={email}
              alt="nodejs"
            />
            <div className="homepage__buttons-email-text">Email me</div>
          </button>
          <button
            className="homepage__buttons-blog"
            onClick={() => {
              props.setPage(true);
            }}
          >
            <div className="homepage__buttons-blog-text">To my Blog</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
