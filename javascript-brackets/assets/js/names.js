"use strict";

const add= document.getElementById("add");
const finish = document.getElementById("finish");
const lastName= document.getElementById("lastName");
const firstName= document.getElementById("firstName");
const allUsers= document.getElementById("allUsers");
const message= document.getElementById("message");
const users= [];

add.addEventListener("click", function () {
    if(checkInput()){
        addPerson(firstName.value, lastName.value);
    }
   
  });
  
  finish.addEventListener('click',function(){
      showUsers(users);
  })
lastName.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        add.click();
    }
  });

function checkInput(){
    const lastName= document.getElementById("lastName");
    const firstName= document.getElementById("firstName");
    if (firstName && firstName.value.trim() === "" || lastName && lastName.value.trim() === "") {
        message.textContent ="Please check the Input fields";
        message.style.color="red";
        return false;
      }   
      else{
          return true;
      }

}
  function addPerson(firstName,lastName){
        const newUser={firstName:firstName, lastName:lastName}
        users.push(newUser);
        message.textContent ="user " +firstName+" "+lastName+" is added";   
  }

  function showUsers(users){
        allUsers.innerHTML= "<p>All Users:</p>";
        for (const user of users) {
            const userDiv = document.createElement("div");
            userDiv.textContent = user.firstName + " " + user.lastName;
            allUsers.appendChild(userDiv);
            
          }
    
  }
