"use strict"
const bracketsInput = document.getElementById("bracketsInput");
const button = document.getElementById("count");
const result = document.getElementById("result");
const stack = [];
const brackets = {
  '(': ')',
  '{': '}',
  '[': ']',
};


button.addEventListener('click', function () {
  const str = bracketsInput.value;
  checkBrackets(str);
 }
);

bracketsInput.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    button.click();
  }
});

function checkBrackets(str) {

  for (let i = 0; i < str.length; i++) {
    
    if (str[i] in brackets) {
      console.log("this is opening bracket ->" + str[i]);
      stack.push(str[i]);
    }
    else {
     
      const lastElement = stack[stack.length-1];

      if( Object.values(brackets).includes(str[i])){ 
        console.log("clothing brackets  ->"+str[i]);
        stack.push(str[i]);
      }
      else{
        console.log("this is not a bracket ->" + str[i]);
        continue;
      }
    }
  
  }
  console.log(stack +"\n");
}