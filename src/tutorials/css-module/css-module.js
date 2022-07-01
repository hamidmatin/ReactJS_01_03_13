import React from 'react';
import { Link } from 'react-router-dom';

import './css-module.css';
import camelCaseStyles from './camelCase.module.css';
// import {btn, btnPrimary} from './camelCase.module.css';
import cssNameStyles from './css-name.module.css';

const UseCssModule = () => {
  console.log(camelCaseStyles);
  console.log(cssNameStyles);

  return (
    <div>
      <Link to='/' className='btn btn-primary'>
        <span>With CSS</span>
      </Link>
      <hr />
      <Link to='/' className={`${camelCaseStyles.btn} ${camelCaseStyles.btnPrimary}`}>
        <span>With CSS Module</span>
      </Link>
      <Link to='/' className={[camelCaseStyles.btn, camelCaseStyles.btnPrimary].join(' ')}>
        <span>With CSS Module</span>
      </Link>
      <hr />
      <Link to='/' className={`${cssNameStyles['btn']} ${cssNameStyles['btn-primary']}`}>
        <span>With CSS Module</span>
      </Link>
      <Link to='/' className={[cssNameStyles['btn'], cssNameStyles['btn-primary']].join(' ')}>
        <span>With CSS Module</span>
      </Link>
      <hr />
      <Link
        to='/'
        className={`${cssNameStyles['btn']} ${cssNameStyles['btn-primary']} active ${cssNameStyles.active}`}
      >
        <span>With CSS Module</span>
      </Link>
      <Link
        to='/'
        className={`${cssNameStyles['btn']} ${cssNameStyles['btn-danger']} active ${cssNameStyles.active}`}
      >
        <span>With CSS Module</span>
      </Link>
    </div>
  );
};

export default UseCssModule;
