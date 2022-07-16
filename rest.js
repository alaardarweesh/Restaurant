'use strict';
let allUsers=[]
function User (foodName,type,price){
   
    this.foodName=foodName;
    this.type=type;
    this.price=price;
    allUsers.push(this);
}
const one=new User("mansaf","food","5");


User.prototype.printInfo=function(){
document.write(allUsers);
}


User.prototype.foodID=function(){
this.foodID=randomIntFromInterval(1000,9999);
console.log(this.foodID);
}


let forms=document.getElementById("formID");
forms.addEventListener("submit",handleSubmit);
function handleSubmit(event){
event.preventDefault()
console.log(event);
let foodName=event.target.foodnameID.value;
let type=event.target.typeID.value;
let price=event.target.priceID.value;

const newFood=new User(foodName,type,price);

newFood.printInfo();
}








function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
    
  }
  for (var i=0;i<allUsers.length;i++){
    allUsers[i].foodID();
    allUsers[i].printInfo();
    
}