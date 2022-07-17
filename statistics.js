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


User.prototype.printInfo = function () {



  const getTable = document.getElementById("myTable");
  const tr0 = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td')
  const td3 = document.createElement('td')
  const td4 = document.createElement('td')

  td1.textContent = this.foodIden;
  td2.textContent = this.foodName;
  td3.textContent = this.type;
  td4.textContent = this.price;
  tr0.appendChild(td1);
  tr0.appendChild(td2);
  tr0.appendChild(td3);
  tr0.appendChild(td4);

  getTable.appendChild(tr0);

}




for (var i = 0; i < allUsers.length; i++) {
  allUsers[i].printInfo();
  allUsers[i].foodIden();


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
  newFood.printInfo();
  saveData(); 
  getData();
}


function saveData(){
  let stringData=JSON.stringify(allUsers);
 localStorage.setItem("Users",stringData);
 

}

saveData()
function getData(){
    let retrieveLs=localStorage.getItem("Users");
    let retieveJson= JSON.parse(retrieveLs);
    console.log(retieveJson);
  }
  getData();