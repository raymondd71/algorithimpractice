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

function carSpace(y, t) {
  let yesterday = 0; // yesterday starts at value 0
  let today = 0;
  y.split("").forEach((space) => {
    // split makes it so each space is its individual thing. "c.c.c" c is its own thing . is its own thing
    if (space === "C") {
      // if the space has a "c" add 1 to yesterday then print it
      yesterday += 1;
    }
    return yesterday;
  });
}

t.split("").forEach((space) => {
  if (space === ".") {
    today += 1;
  }
  return today;
});

console.log(yesterday);
console.log(today);

carSpace("C..C..", "..C..C");

function getSpaces(spaces, yesterday, today) {
  let count = 0;
  for (let i = 0; i < spaces; i++) {
    if (yesterday[i] === "C" && today[i] == "C") {
      count += 1;
    }
  }
  return count;
}
console.log(getSpaces(5, "CC..C", ".CCCC"));
