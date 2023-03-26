"use strict"
let nameText = prompt("what is your Name?");

//let readNews = confirm ("do you want to read the news?");
//alert(readNews);

let textElements = document.getElementsByClassName("text");

for (let i = 0; i < textElements.length; i++) {
    textElements[i].textContent = (nameText + " ").repeat(100);
  }


function increase() {
    for (let i = 0; i < textElements.length; i++) {
        textElements[i].style.fontSize="30px";
      }
    
}
  function decrease() {
    for (let i = 0; i < textElements.length; i++) {
        textElements[i].style.fontSize="18px";
      }
  }


