import React from 'react';
import AnimateHeight from 'react-animate-height';
import Homepage from '../components/Homepage';
import Icons from '../components/Icons';
import Fullstack from '../components/Fullstack';
import Connect from '../components/Connect';

function HomePage(props) {
  return (
    <AnimateHeight duration={700} height={props.page ? 0 : 'auto'}>
      <div>
        <Homepage setPage={props.setPage} />
        <Icons />
        <Fullstack />
        <Connect />
      </div>
    </AnimateHeight>
  );
}

export default HomePage;
