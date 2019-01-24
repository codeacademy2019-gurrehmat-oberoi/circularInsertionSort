let X = [];
// let Y = [];
let n;// ,h,t;

const parseInput = (inputString) => {
  n = Number(inputString.split('\n')[0]);
  X = inputString.split('\n')[1].split(' ').map(integer => Number(integer));
  console.log(n, X);
  return X;
};

module.exports = { parseInput };
