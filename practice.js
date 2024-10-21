function factorial(n) {
  // guard clause
  if (n <= 0) {
    return "Negative Number/ Zero";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(6));

function newFactorial(n) {}
