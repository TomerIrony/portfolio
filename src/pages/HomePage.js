import React, { useRef } from 'react';
import AnimateHeight from 'react-animate-height';
import Homepage from '../components/Homepage';
import Icons from '../components/Icons';
import Fullstack from '../components/Fullstack';
import Connect from '../components/Connect';

function HomePage(props) {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <AnimateHeight duration={700} height={props.page ? 0 : 'auto'}>
      <div>
        <Homepage executeScroll={executeScroll} setPage={props.setPage} />
        <Icons />
        <Fullstack />
        <Connect myRef={myRef} />
      </div>
    </AnimateHeight>
  );
}

export default HomePage;
