export function triplets({ minFactor, maxFactor, sum }) {

  if (!minFactor) {
    minFactor = 0;
  }
  if (!maxFactor) {
    maxFactor = sum;
  }

  let arr = [];

  for (let i = 1; i <= sum; i++) {
    arr.push(i);
  }

  let res = [];
  
  arr.forEach(a =>
    arr.forEach(b =>
      arr.forEach(c => {
        if (
          a + b + c === sum &&
          a < b &&
          b < c &&
          a ** 2 + b ** 2 === c ** 2 &&
          a >= minFactor &&
          c <= maxFactor
        ) {
          res.push(new Triplet(a, b, c));
        }
      })
    )
  )

  return res;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}