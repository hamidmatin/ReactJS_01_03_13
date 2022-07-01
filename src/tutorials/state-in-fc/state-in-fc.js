import React, { useState } from 'react';
import { FucntionComponentLifecycle } from './funtion-component-lifecycle';

const StateInFC = () => {
  // console.log(useState('Init'))
  /**
   * const [state, setState] = useState(init)
   *
   * {state}
   * setState(new value)
   */

  // let title = 'Function Component Lifecycle'
  const [title, setTitle] = useState('Function Component Lifecycle')
  const [isVisible, setIsVisible] = useState(false)

  const toggleShowHandler = () => {
    setIsVisible(!isVisible)
  }

  const changeTitleHandler = () =>{
    // title += 'afafda'
    // console.log(title)
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

export default StateInFC