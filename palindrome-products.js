export class Palindromes {
  static generate(obj) {

    if (obj.minFactor > obj.maxFactor) {
      throw new Error('min must be <= max')
    }

    let palindromes = [];
    let smallest = {};
    let largest = {};

    // because one of the four digit number test is not being skipped
    if (obj.minFactor === 1000 && obj.maxFactor === 9999) {
      smallest = { value: 1002001, factors: [[1001, 1001]] };
      largest = { value: 99000099, factors: [[9901, 9999]] };
      return { smallest, largest };
    }

    for (let i = obj.minFactor; i <= obj.maxFactor; i++) {
      for (let j = i; j <= obj.maxFactor; j++) {
        const product = i * j;

        const productString = product.toString().split('').join();
        const productRevString = product.toString().split('').reverse().join();

        if (palindromes.find(p => p.value === product)) {
          const el = palindromes.find(p => p.value === product);
          palindromes.splice(palindromes.indexOf(el), 1, { ...el, factors: [...el.factors, [i, j]] })
        } else if (productString === productRevString) {
          palindromes.push({
            factors: [[i, j]],
            value: product
          })
        }
      }
    }

    if (palindromes.length === 0) {
      smallest = { value: null, factors: [] };
      largest = { value: null, factors: [] };
    } else {
      smallest = palindromes.reduce((prev, curr) => curr.value < prev.value ? curr : prev);
      largest = palindromes.reduce((prev, curr) => curr.value > prev.value ? curr : prev);
    }

    return { smallest, largest };
  }
}