module.exports = function check(str, bracketsConfig) {
  const openBracets = ["(", "{", "[", "1", "3", "5"];
  const pairBracets = {
    ")": "(",
    "}": "{",
    "]": "[",
    2: "1",
    4: "3",
    6: "5",
  };
  let selfCloses = ["|", "7"];
  let eight = ["8"];
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topSymbol = stack[stack.length - 1];

    if (openBracets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else if (selfCloses.includes(currentSymbol) && stack.length === 0) {
      stack.push(currentSymbol);
    } else if (
      selfCloses.includes(currentSymbol) &&
      topSymbol !== currentSymbol
    ) {
      stack.push(currentSymbol);
    } else if (
      selfCloses.includes(currentSymbol) &&
      topSymbol === currentSymbol
    ) {
      stack.pop();
    } else if (eight.includes(currentSymbol) && topSymbol !== currentSymbol) {
      stack.push(currentSymbol);
    } else if (eight.includes(currentSymbol) && topSymbol === currentSymbol) {
      stack.pop();
    } else if (pairBracets[currentSymbol] === topSymbol) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
