const MY_PROJECT_NAME = `React Case Study Project`;
const START_DATE = `1401/03/13`;
const SESSION_COUNT = 8;
const CURRENT_SESSION = 3;

/*
    راه اول
    export { variable1 }
    export { variable2 }
    export { variable3 }
    export default variable4 
*/
// export { MY_PROJECT_NAME };
// export { START_DATE };
// export { SESSION_COUNT };
// export default CURRENT_SESSION

/*
    راه دوم
    export { variable1, variable2, ....}
    export default variable3
*/
// export { MY_PROJECT_NAME, START_DATE, SESSION_COUNT };
// export default CURRENT_SESSION;

/**
    راه سوم
    export { variable1, variable2, variable3 as default }
 */
export { MY_PROJECT_NAME, SESSION_COUNT, START_DATE, CURRENT_SESSION as default };

/*
    راه چهارم

    export const constant = value
    export let variable = value

    export function functionName() {....}
    export default function functionName() {....}

    export class ClassName { ... }
    export default class ClassName { ... }
*/
export const INSTITUE = 'Mojtame Fanni Tehran';
// export default class {}  => is valid
// export default function fn(){..} is valid
// export default let variable => is not valid
// export default const constant => is not valid

const teacher = {
  firstName: 'Hamid Rezad',
  lastName: 'Izadi Matin',
};

export const showTeacherInfo = () => `${teacher.firstName} ${teacher.lastName}`;

export class Course {
  #name;
  #duration;

  constructor(name, duration) {
    this.#name = name;
    this.#duration = duration;
  }

  get showInfo() {
    return `Course: ${this.#name}, Duration: ${this.#duration}, Teacher: ${teacher.firstName} ${
      teacher.lastName
    }`;
  }
}
