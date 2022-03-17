import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import GoogleCloud from '../articles/GoogleCloud';

function Temp(props) {
  const location = useLocation();

  return (
    <div className="background">
      <Link to="/">
        <button>Home</button>
      </Link>
      <div className="article">
        <div className="article__container">
          {location.pathname === '/Setting-up-a-Google-Cloud-server' ? (
            <GoogleCloud />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Temp;
