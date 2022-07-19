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



function getData(){
  let retrieveLs=localStorage.getItem("Users");
  let retieveJson= JSON.parse(retrieveLs);
 
  for (var i=0;i<retieveJson.length;i++){
    new User(retieveJson[i].foodName,retieveJson[i].type,retieveJson[i].price);

  }
  
for (var i = 0; i < allUsers.length; i++) {
  allUsers[i].printInfo();
}

}
getData();




function getData(){
  let retrieveLs=localStorage.getItem("Users");
  let retieveJson= JSON.parse(retrieveLs);
 
  for (var i=0;i<retieveJson.length;i++){
    new User(retieveJson[i].foodName,retieveJson[i].type,retieveJson[i].price);

  }
  
for (var i = 0; i < allUsers.length; i++) {
  allUsers[i].foodIden();
  allUsers[i].printInfo();
}


}

getData();
