import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import GoogleCloud from '../articles/GoogleCloud';

function Temp(props) {
  const location = useLocation();
  console.log('Test1');

  return (
    <div className="background">
      <Link to="/">
        <button>Home</button>
      </Link>
      <div className="article">
        <div className="article__container">
          <GoogleCloud location={location} />
        </div>
      </div>
    </div>
  );
}

export default Temp;
