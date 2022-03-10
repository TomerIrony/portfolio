import './App.css';
import Homepage from './components/Homepage';
import Icons from './components/Icons';
import Fullstack from './components/Fullstack';
import Connect from './components/Connect';

function App() {
  return (
    <div className="background">
      <div className="root">
        <Homepage />
        <Icons />
        <Fullstack />
        <Connect />
      </div>
    </div>
  );
}

export default App;
