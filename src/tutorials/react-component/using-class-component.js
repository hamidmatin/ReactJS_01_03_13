import React, { Fragment } from 'react';
import { ClassComponent1, ClassComponent2 } from './class-component';

export const UsingClassComponent = () => {
  return (
    <Fragment>
      <ClassComponent1 />
      <ClassComponent2 title='Hello React Class Component (2)' message='using props' />
      <ClassComponent2 title='Hello React Class Component (2)' message='using props'>
        <div style={{ background: 'greenyellow' }}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non modi illum sed qui debitis
            quas voluptatum harum voluptatem autem.
          </p>
        </div>
      </ClassComponent2>
    </Fragment>
  );
};
