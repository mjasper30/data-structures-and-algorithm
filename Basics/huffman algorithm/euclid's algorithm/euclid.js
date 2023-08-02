function euclideanAlgorithm(a, b) {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

const num1 = 48;
const num2 = 18;

const gcd = euclideanAlgorithm(num1, num2);
console.log(`GCD(${num1}, ${num2}) = ${gcd}`);
