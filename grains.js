export const square = (value) => {
  if (value <= 0 || value > 64) {
    throw new Error('square must be between 1 and 64')
  }
  return BigInt(2 ** (value - 1));
};

export const total = () => {
  let arr = [];

  for (let i = 1; i <= 64; i++) {
    arr.push(i);
  }

  return arr.reduce((acc, curr) => {
    return BigInt(acc) + square(curr)
  });
};
