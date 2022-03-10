import React from 'react';
import Lightbulb from './Lightbulb';

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
            <span className="homepage__buttons-email-svg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.125 3.125H1.875C1.5293 3.125 1.25 3.4043 1.25 3.75V16.25C1.25 16.5957 1.5293 16.875 1.875 16.875H18.125C18.4707 16.875 18.75 16.5957 18.75 16.25V3.75C18.75 3.4043 18.4707 3.125 18.125 3.125ZM16.5469 5.25195L10.3848 10.0469C10.2324 10.166 10.0195 10.166 9.86719 10.0469L3.70312 5.25195C3.67989 5.23402 3.66285 5.20927 3.65438 5.18116C3.64592 5.15306 3.64647 5.12301 3.65594 5.09523C3.66542 5.06745 3.68335 5.04333 3.70722 5.02625C3.73109 5.00918 3.75971 5 3.78906 5H16.4609C16.4903 5 16.5189 5.00918 16.5428 5.02625C16.5667 5.04333 16.5846 5.06745 16.5941 5.09523C16.6035 5.12301 16.6041 5.15306 16.5956 5.18116C16.5872 5.20927 16.5701 5.23402 16.5469 5.25195Z"
                  fill="white"
                />
              </svg>
            </span>
            <div>Email me</div>
          </button>
          <div className="homepage__buttons-cv">
            <span className="homepage__buttons-cv-svg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12.5L13.3333 9.16667M10 12.5V2.5V12.5ZM10 12.5L6.66667 9.16667L10 12.5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.66667 14.1667L2.18417 16.2375C2.2743 16.5981 2.48236 16.9182 2.77528 17.1469C3.0682 17.3757 3.42918 17.4999 3.80084 17.5H16.1992C16.5708 17.4999 16.9318 17.3757 17.2247 17.1469C17.5177 16.9182 17.7257 16.5981 17.8158 16.2375L18.3333 14.1667"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div>Download CV</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
