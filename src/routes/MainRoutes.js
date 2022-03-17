import React from 'react';
import { Routes, Route } from 'react-router-dom';
import cards from '../data/articles.json';
import App from '../App';
import Temp from '../pages/Temp';

function MainRoutes(props) {
  return (
    <Routes>
      {cards.map((card, i) => {
        const title = card.title.split(' ').join('-');
        return <Route key={i} path={'/' + title} element={<Temp />} />;
      })}
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export default MainRoutes;
