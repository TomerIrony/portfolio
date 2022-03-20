import React from 'react';
import GoogleCloud from '../articles/GoogleCloud';

function Temp(props) {
  return (
    <div className="background">
      <div className="article">
        <div className="article__container">
          {props.article === 'GoogleCloud' ? <GoogleCloud /> : null}
        </div>
      </div>
    </div>
  );
}

export default Temp;
