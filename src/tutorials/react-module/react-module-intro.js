/******* import module **********/
/*
  import { variables } from 'module-name' => from node_modules
  import { variables } from 'path/module-name' => from src 

  path => 
    ./  => current folder
    ../ => folder up

    روش اول
    import {variable1}  from 'module-name'
    import {variable2}  from 'module-name'
    import {variable3}  from 'module-name'
    import variable4  from 'module-name' => import default variable as any name

    راه دوم
    import {variable1, variable2, variable3 ....}  from 'module-name'
    import variable4  from 'module-name' => import default variable as any name
    
    راه سوم (تغییر نام متغییر)
    import {variable1 as new name, variable2 as new name, variable3 ....}  from 'module-name'
    import variable4  from 'module-name' => import default variable as any name

    راه چهارم
    import {variable1 as newName, variable2, variable3, default as newName ....}  from 'module-name'
    
    راه پنجم
*/

// راه اول
// import { MY_PROJECT_NAME } from './my-module'
// import { SESSION_COUNT } from './my-module'
// import { START_DATE } from './my-module'

// راه دوم
import { MY_PROJECT_NAME, SESSION_COUNT, START_DATE } from './my-module';
import CURRENT_SESSION from './my-module';

// راه سوم
import { MY_PROJECT_NAME as MY_P_N } from './my-module';
import { SESSION_COUNT as S_C, START_DATE as S_D } from './my-module';
import currentSession from './my-module';

// راه چهارم
import {
  MY_PROJECT_NAME as myProjectName,
  default as CS,
  INSTITUE,
} from './my-module';

import { showTeacherInfo, Course } from './my-module';

export const ReactModuleIntro = () => {
    const reactCourse = new Course('React', 40);

  return (
    <>
      <h2>Project Name : {MY_PROJECT_NAME}</h2>
      <p>
        Session count: {SESSION_COUNT} , start date : {START_DATE}
      </p>
      <p>Current Session: {CURRENT_SESSION}</p>
      <hr />
      <h2>Project Name : {MY_P_N}</h2>
      <p>
        Session count: {S_C} , start date : {S_D}
      </p>
      <p>Current Session: {currentSession}</p>
      <hr />
      <h2>Project Name : {myProjectName}</h2>
      <p>Current Session: {CS}</p>
      <p>
        Institue: <strong>{INSTITUE}</strong>, Teacher: <strong>{showTeacherInfo()}</strong>
      </p>
      <p>Course: {reactCourse.showInfo} </p>
    </>
  );
};
