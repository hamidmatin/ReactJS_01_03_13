import { FunctionComponent1 } from './function-components';
import { FunctionComponent2 } from './function-components';
import { FunctionComponent3 } from './function-components';
import { FunctionComponent4 } from './function-components';
import { FunctionComponent5 } from './function-components';

export const UsingFunctionComponent = () => {
  const fn1 = FunctionComponent1();
  return (
    <>
      {fn1}
      {FunctionComponent1()}
      <FunctionComponent1 />

      {FunctionComponent2({
        title: 'Function Component (2)',
        message: 'Using Props with function call',
      })}
      <FunctionComponent2 title='Function Component (2)' message='Using Props with JSX' />

      <FunctionComponent3 title='Function Component (3)' message='Using Content'>
        My Component Content
      </FunctionComponent3>

      <FunctionComponent3 title='Function Component (3)' message='Using Content'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </FunctionComponent3>

      <FunctionComponent3 title='Function Component (3)' message='Using Content'>
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </FunctionComponent3>
      <FunctionComponent3 title='Function Component (3)' message='Using Content'>
        <hr />
        <FunctionComponent1 />
      </FunctionComponent3>

      <FunctionComponent4 title='Function Component (4)' message='Destructure Props'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </FunctionComponent4>

      <FunctionComponent5 title='Function Component (5)' message='Destructure Props'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </FunctionComponent5>
    </>
  );
};
