import React, { useState } from 'react';

function Lightbulb(props) {
  const [on, setOn] = useState(false);
  return (
    <div className={on ? 'light' : 'light on'}>
      <div className="wire"></div>
      <div className="test">
        <div
          onClick={() => {
            setOn(!on);
          }}
          className="bulb"
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Lightbulb;
