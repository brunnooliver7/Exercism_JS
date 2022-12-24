export const classify = (value) => {
  if (value <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  let arr = [];

  for (let i = 1; i < value; i++) {
    if (value % i === 0) {
      arr.push(i);
    }    
  }

  console.log(arr)

  let sum = 0;

  arr.forEach(element => {
    sum += element;
  });

  if (sum === value) {
    return 'perfect';
  }

  if (sum > value) {
    return 'abundant';
  }

  if (sum < value) {
    return 'deficient';
  }
}