'use strict';
let allUsers = []
function User(foodName, type, price) {

  this.foodName = foodName;
  this.type = type;
  this.price = price;

  allUsers.push(this);

}
User.prototype.foodIden = function () {
  this.foodIden = Math.floor(1000 + Math.random() * 9000);

}


let formsID = document.getElementById("formID");
formsID.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  let foodName = event.target.foodname.value;
  let type = event.target.type.value;
  let price = event.target.price.value;


  let newFood = new User(foodName, type, price);
  newFood.foodIden();
  saveData(); 
  
}


function saveData(){
  let stringData=JSON.stringify(allUsers);
 localStorage.setItem("Users",stringData);
 

}



// function getData(){
//   let retrieveLs=localStorage.getItem("Users");
//   let retieveJson= JSON.parse(retrieveLs);
 
//   for (var i=0;i<retieveJson.length;i++){
//     new User(retieveJson[i].foodName,retieveJson[i].type,retieveJson[i].price);

//   }
  
// for (var i = 0; i < allUsers.length; i++) {
//   allUsers[i].foodIden();
//   allUsers[i].printInfo();
  


// }

// }
// getData();
 
