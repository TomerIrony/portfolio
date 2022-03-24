import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import linkedinSvg from '../images/linkedin.svg';
import githubSvg from '../images/github.svg';

function Connect(props) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [formSubmit, setFormSubmit] = useState(false);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_o8dehbc',
        'template_banj2rc',
        form.current,
        '4HYnkhJz6ZHmyxi3k',
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setFormSubmit(true);
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  return (
    <div ref={props.myRef} className="connect">
      <div className="connect__container">
        <div className="connect__container-text">
          {windowWidth > 970 ? (
            <h1>
              Let's <br></br> Connect
            </h1>
          ) : (
            <h1 className="connect__container-header">Let's Connect</h1>
          )}

          <div className="connect__icon-container">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/tomer-irony/"
              target="_blank"
            >
              <img
                className="connect__icon"
                src={linkedinSvg}
                alt="linkeding svg"
              />
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/TomerIrony"
              target="_blank"
            >
              <img className="connect__icon" src={githubSvg} alt="github svg" />
            </a>
          </div>
        </div>
      </div>
      {formSubmit ? (
        <div className="email">Email sent!</div>
      ) : (
        <form
          ref={form}
          className="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <fieldset className="form__fieldset">
            <legend>
              <h2 className="form__heading">Email me</h2>
            </legend>
            <input
              name="name"
              required
              placeholder="Name"
              className="form__text-input form__input"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="form__text-input form__input"
            />
            <input
              required
              name="subject"
              placeholder="Subject"
              className="form__text-input form__input"
            />
            <textarea
              name="message"
              className="form__text-input-textarea form__text-input form__input"
              required
              placeholder="Message"
            ></textarea>

            <button type="submit" className="login__submit-btn form__submit">
              Send
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
}

export default Connect;
