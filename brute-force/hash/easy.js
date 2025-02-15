// https://medium.com/@andrey.igorevich.borisov/10-javascript-exercises-with-objects-8942cc502754

export const isPlainObject = (input) => {
  if (!input || input === null || input === undefined
     || Array.isArray(input) || input?.length
     || typeof input === 'boolean' || typeof input === 'number') {
    
      return false;
  }
  if (input && Object.keys(input).length > 0 && typeof input === 'object') {
    return true;
  }
  return false;
};

export const callIsPlainObject = () => {
  const input1 = { a: 1 };
  const input2 = null || undefined;
  const input3 = {};
  const input4 = [1,2,3];

  console.log(isPlainObject(input1));
  console.log(isPlainObject(input2));
  console.log(isPlainObject(input3));
  console.log(isPlainObject(input4));
  return 'end';
};

// console.log(callIsPlainObject());

/* *********************************************** */

export const isEmptyObject = (input) => {
  if (input && typeof input === 'object'
     && !Array.isArray(input)
     && Object.keys(input).length > 0 
     && Object.values(input).length > 0 
    ) {
    
    for (const value of Object.values(input)) {
      if (value) {
        return false;
      }
    }
    return true;
  }
  return true;
};

export const callIsEmptyObject = () => {
  const input1 = { a: 1 };
  const input2 = { a: null, b: undefined , c: '12'};
  const input3 = { a: null, b: undefined , c: ''};
  const input4 = [1,2,3];

  console.log(isEmptyObject(input1));
  console.log(isEmptyObject(input2));
  console.log(isEmptyObject(input3));
  console.log(isEmptyObject(input4));
  return 'end';
};

// console.log(callIsEmptyObject());

/* *********************************************** */

export const withoutKey = (input, keyToBeRemoved) => {
  if (input && Object.keys(input).length > 0 && keyToBeRemoved) {
    for (const key of Object.keys(input)) {
      if (key === keyToBeRemoved) {
        delete input[key];
      }
    }
  }
  return input;
};

export const callWithoutKey = () => {
  const input1 = { a: 1 };
  const input2 = { a: null, b: undefined , c: '12'};
  const input3 = { a: null, b: undefined , c: ''};
  const input4 = { a: 1 , b: 2 };

  console.log(withoutKey(input1, 'a'));
  console.log(withoutKey(input2, 'b'));
  console.log(withoutKey(input3, 'c'));
  console.log(withoutKey(input4, 'a'));
  return 'end';
};

// console.log(callWithoutKey());

/* *********************************************** */

export const isEqual = (input1, input2) => {
  let flag = true;
  if (Object.keys(input1).length !== Object.keys(input2).length) return false;

  const arrayInput2 = Object.entries(input2);

  Object.entries(input1).forEach(([key, value], index) => {
    if (key !== arrayInput2[index][0] || value !== arrayInput2[index][1]) {
      flag = false;
    }
  });
  return flag;
};

export const callIsEqual = () => {
  const input1 = { a: 1, b: 2, c: 3 };
  const input2 = { a: null, b: undefined , c: '12'};
  const input3 = { a: null, b: undefined , c: ''};
  const input4 = { a: 1, b: 2 };

  console.log(isEqual(input1, input1));
  console.log(isEqual(input2, input2));
  console.log(isEqual(input2, input3));
  console.log(isEqual(input4, input1));
  return 'end';
};

// console.log(callIsEqual());

/* *********************************************** */

