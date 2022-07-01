import React, { useState } from 'react';
import { FucntionComponentLifecycle } from './funtion-component-lifecycle';

export const StateInFC = () => {
  /**
   * const [state, setState] = useState(init)
   *
   * {state}
   * setState(new value)
   */
  // console.log(useState(455))

  const [isVisible, setIsVisible] = useState(false);

  const [title, setTitle] = useState('Function Component Lifecycle')

  const toggleShowHandler = () => {
    setIsVisible(!isVisible)
  }

  const changeTitleHandler = () =>{
    setTitle(title + ', title changed')
  }
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <button onClick={toggleShowHandler}>Toggle Show</button>
      <button onClick={changeTitleHandler}>Change Title</button>
      <button
        onClick={() => {
          console.clear();
        }}
      >
        Clear Console
      </button>
      {isVisible && <FucntionComponentLifecycle title={title} />}
    </div>
  );
};
