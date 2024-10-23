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
