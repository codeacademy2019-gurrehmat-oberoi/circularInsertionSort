const parseInput = (inputString) => {
  const size = Number(inputString.split(' ')[0]);
  const array = inputString.split(' ').slice(1).map(integer => Number(integer));

  if (array.length > size) {
    array.splice(size);
  } else if (array.length < size) {
    throw (new Error('Insufficient size of array'));
  }
  console.log(size, array);
  return array;
};

const printArray = (array) => {
  let result = array.reduce((accumulator, value) => `${accumulator} ${value}`, '');
  result += '\n';
  console.log(result);
};

const main = (inputString) => {
  const X = parseInput(inputString);
  const Y = [];
  let h = 0;
  let t = 0;
  // eslint-disable-next-line prefer-destructuring
  Y[0] = X[0];
  while (Y.length !== X.length) {
    Y.push(-1);
  }
  printArray(Y);
  X.slice(1).forEach((value) => {
    if (value < Y[h]) {
      h = (h + Y.length - 1) % Y.length;
      Y[h] = value;
    } else if (value > Y[t]) {
      t = (t + Y.length + 1) % Y.length;
      Y[t] = value;
    }
    printArray(Y);
  });
  return Y;
};

module.exports = { parseInput, main };
