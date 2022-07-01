import React, { useState } from 'react';
import Screen from './screen';
import Wrapper from './wrapper';
import ButtomBox from './buttom-box';
import Button from './button';

import styles from './calculator-page.module.css';
import buttonStyles from './button.module.css';
// import { btnValues } from './btn-values'

const CalculatorPage = () => {
  const [calc, setCalc] = useState({
    sign: '',
    num: 0,
    res: 0,
  });
  //   const btnValues = ['C', '+-', '%', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

  const removeSpaces = (num) => num.toString().replace(/\s/g, '');
  
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };
  const dotClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === '+' ? a + b : sign === '-' ? a - b : sign === 'X' ? a * b : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === '0' && calc.sign === '/'
            ? "Can't divide with 0"
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: '',
        num: 0,
      });
    }
  };
  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: '',
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: '',
    });
  };

  const resetClickHandler = () => {
    console.log('sdsd')
    setCalc({
      ...calc,
      sign: '',
      num: 0,
      res: 0,
    });
  };
  const btnValues = [
    {
      value: 'C',
      className: buttonStyles['button'],
      onClick: resetClickHandler,
    },
    {
      value: '+-',
      className: buttonStyles['button'],
      onClick: invertClickHandler,
    },
    {
      value: '%',
      className: buttonStyles['button'],
      onClick: percentClickHandler,
    },
    {
      value: '/',
      className: buttonStyles['button'],
      onClick: signClickHandler,
    },
    {
      value: '7',
      className: buttonStyles['button'],
      onClick: numClickHandler,
    },
    {
      value: '8',
      className: buttonStyles['button'],
      onClick: numClickHandler,
    },
    {
      value: '9',
      className: buttonStyles['button'],
      onClick: numClickHandler,
    },
    {
      value: 'X',
      className: buttonStyles['button'],
      onClick: signClickHandler,
    },
    {
      value: '4',
      className: buttonStyles['button'],
      onClick: numClickHandler,
    },
    {
      value: '5',
      className: buttonStyles['button'],
      onClick: numClickHandler,
    },
    {
      value: '6',
      className: buttonStyles['button'],
      onClick: numClickHandler,
    },
    {
      value: '-',
      className: buttonStyles['button'],
      onClick: signClickHandler,
    },
    {
      value: '1',
      className: buttonStyles['button'],
      onClick: numClickHandler,
    },
    {
      value: '2',
      className: buttonStyles['button'],
      onClick: numClickHandler,
    },
    {
      value: '3',
      className: buttonStyles['button'],
      onClick: numClickHandler,
    },
    {
      value: '+',
      className: buttonStyles['button'],
      onClick: signClickHandler,
    },
    {
      value: '0',
      className: buttonStyles['button'],
      onClick: numClickHandler,
    },
    {
      value: '.',
      className: buttonStyles['button'],
      onClick: dotClickHandler,
    },
    {
      value: '=',
      className: `${buttonStyles['button']} ${buttonStyles['equals']}`,
      onClick: equalsClickHandler,
    },
  ];

  // signClickHandler function

  return (
    <div className={styles['calculator-page']}>
      <Wrapper>
        <Screen value={calc.num ? calc.num : calc.res} />
        <ButtomBox>
          {btnValues.map((btn, idx) => (
            <Button key={idx} className={btn.className} value={btn.value} onClick={btn.onClick} />
          ))}
        </ButtomBox>
      </Wrapper>
    </div>
  );
};

export default CalculatorPage;
