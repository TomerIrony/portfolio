import './App.css';
import { useState } from 'react';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';

function App(props) {
  const [page, setPage] = useState(false); // false = homepage, true = blog
  return (
    <div className="background">
      <div className="root">
        <HomePage page={page} setPage={setPage} />
        <BlogPage page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default App;
