// https://medium.com/@andrey.igorevich.borisov/10-javascript-exercises-with-objects-8942cc502754

export const isEmptyDeepObject = (input) => {
  let flag;
  for (const [key, value] of Object.entries(input)) {
    if (value && typeof value !== 'object') {
      flag = false;
      break;
    }
    if (value && Array.isArray(value) && value?.length) {
      flag = false;
      break;
    }
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      flag = isEmptyDeepObject(value);
      if (flag === false ) {
        break;
      }
    } else {
      flag = true;
    }
  }
  return flag;
};

export const callIsEmptyDeepObject = () => {
  const input0 = { a: undefined, b: [] };  //true
  const input1 = { a: 1 };  //false
  const input2 = { a: null, b: { a: 10, b: 12 } , c: '' }; //false 
  const input3 = { a: null, b: { a: undefined, b: null } , c: '' }; //true
  const input4 = { a: null, b: [1,2,3] , c: '' }; //false

  console.log(isEmptyDeepObject(input0));
  console.log(isEmptyDeepObject(input1));
  console.log(isEmptyDeepObject(input2));
  console.log(isEmptyDeepObject(input3));
  console.log(isEmptyDeepObject(input4));
  return 'end';
};

// console.log(callIsEmptyDeepObject());

/* *********************************************** */

export const intersection = (input1, input2) => {
  if (!input1 || !input2) return {};

  const arrayInput2 = Object.entries(input2);
  const response = {};
  Object.entries(input1).forEach(([key, value], index) => {
    if (key === arrayInput2[index][0] && value === arrayInput2[index][1]) {
      response[key] = value;
    }
  });
  return response;
};

export const callIntersection = () => {
  const input1 = { a: 1 };
  const input2 = { a: 2, c: 3};
  const input3 = { a: 1, b: 2, c: 3};
  const input4 = { a: 2, b: 2, c: 3};

  console.log(intersection(input1, input2));
  console.log(intersection(input3, input4));
  return 'end';
};

// console.log(callIntersection());

/* *********************************************** */

export const isEqualDeep = (input1, input2) => {
  let flag = true;
  if (Object.keys(input1).length !== Object.keys(input2).length) return false;

  const arrayInput1 = Object.entries(input1);
  const arrayInput2 = Object.entries(input2);

  for (const index in arrayInput1) {
    const key = arrayInput1[index][0];
    const value = arrayInput1[index][1];
    const key2 = arrayInput2[index][0];
    const value2 = arrayInput2[index][1];
    if (Array.isArray(value) && Array.isArray(value2)) {

      for(let i = 0; i < value.length; i++) {
        if (value[i] !== value2[i]) {
          flag = false;
          break;
        }
      }
    }

    if (!Array.isArray(value) && !Array.isArray(value2) && 
      typeof value === 'object' && typeof value2 === 'object' &&
      value !== null && value2 !== null) {

        flag = isEqualDeep(value, value2);
        if (flag === false) {
          break;
        }
      }

    if (key !== key2 || 
      value !== value2 || 
      typeof value !== typeof value2) {
        flag = false;
    }
  }
  return flag;
};

export const callIsEqualDeep = () => {
  const input0 = { a: undefined, b: [] };
  const input1 = { a: 1, b: null };
  const input2 = { a: null, b: { a: 10, b: 12 } , c: '' };
  const input3 = { a: null, b: { a: undefined, b: null } , c: '' };
  const input4 = { a: null, b: [1,2,3] , c: '' };

  console.log(isEqualDeep(input0, input0)); // true
  console.log(isEqualDeep(input0, input1)); // false
  console.log(isEqualDeep(input2, input2)); // true
  console.log(isEqualDeep(input3, input3)); // true
  console.log(isEqualDeep(input2, input3)); // false
  console.log(isEqualDeep(input4, input4)); // true
  return 'end';
};

console.log(callIsEqualDeep());

/* *********************************************** */

