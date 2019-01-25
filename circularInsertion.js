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

const findSpot = (array, head, tail, value) => {
  if (value < array[head]) {
    return (head - 1 + array.length) % array.length;
  } if (value > array[tail]) {
    return (tail + 1) % array.length;
  }
  for (let i = 0; i < array.length; i += 1) {
    const circularIndex = (head + i) % array.length;
    if (value > array[circularIndex] && value < array[(circularIndex + 1) % array.length]) {
      return (circularIndex + 1) % array.length;
    }
  }
  return -1;
};

const count = (array, head, tail, newIndex) => {
  let s = 0;
  let l = 0;
  if (head <= tail) {
    s = newIndex - head;
    l = tail - newIndex + 1;
  } else {
    let i = (newIndex - 1 + array.length) % array.length;
    while (array[i] !== -1) {
      s += 1;
      i = (i - 1 + array.length) % array.length;
    }
    i = newIndex;
    while (array[i] !== -1) {
      l += 1;
      i = (i + 1) % array.length;
    }
  }
  return { s, l };
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
    let i;
    const spot = findSpot(Y, h, t, value);
    if (spot === (h + Y.length - 1) % Y.length) {
      h = (h + Y.length - 1) % Y.length;
      Y[h] = value;
    } else if (spot === (t + 1) % Y.length) {
      t = (t + 1) % Y.length;
      Y[t] = value;
    } else {
      const { s, l } = count(Y, h, t, spot);
      if (s < l) {
        h = (h - 1 + Y.length) % Y.length;
        for (i = 0; i < s; i += 1) {
          Y[(h + i) % Y.length] = Y[(h + 1 + i) % Y.length];
        }
        Y[spot] = value;
      } else {
        t = (t + 1) % Y.length;
        for (i = 0; i < l; i += 1) {
          Y[(t - i + Y.length) % Y.length] = Y[(t - i - 1 + Y.length) % Y.length];
        }
        Y[spot] = value;
      }
    }
    printArray(Y);
  });
  return Y;
};

module.exports = { parseInput, main, findSpot };
