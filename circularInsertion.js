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

module.exports = { parseInput };
