"use strict";
const bracketsInput = document.getElementById("bracketsInput");
const button = document.getElementById("count");
const result = document.getElementById("result");

const brackets = {
  "(": ")",
  "{": "}",
  "[": "]",
};

function checkBrackets(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] in brackets) {
      console.log("opening bracket ->" + str[i]);
      stack.push(str[i]);
    } 
    else if (Object.values(brackets).includes(str[i])) {
      console.log("clothing bracket ->" + str[i]);

      // checking if it a pair with the last
      if (str[i] === brackets[stack.pop()]) {
        console.log("found a pair and remove");
      } 
      else {
        console.log("clothing brackets  ->" + str[i]);
        stack.push(str[i]);
      }
    } 
    else {
      console.log("not a bracket ->" + str[i]);
      continue;
    }
  }

  // Result
  if (!stack.length) {
    result.textContent = str + " -> All right";
  } else {
    result.textContent =
      str +
      " -> All bad. " +
      stack.length +
      "error. The problem is -> " +
      stack;
  }
}
button.addEventListener("click", function () {
  const str = bracketsInput.value;
  checkBrackets(str);
});

bracketsInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    button.click();
  }
});
