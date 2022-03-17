import React from 'react';
import { Routes, Route } from 'react-router-dom';
import cards from '../data/articles.json';
import App from '../App';
import Temp from '../components/Temp';

function MainRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {cards.map((card, i) => {
        const title = card.title.split(' ').join('-');
        return <Route key={i} path={title} element={<Temp />} />;
      })}
    </Routes>
  );
}

export default MainRoutes;
