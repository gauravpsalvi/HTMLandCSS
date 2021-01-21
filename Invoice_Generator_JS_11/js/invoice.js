/*
    Name: Rebecca Moses Dmello
    Student ID: 300322984
    Reference: Lecture and notes prepared by Professor Bambang
*/

class FruitDetails{
  constructor(fruitType, fruitAmount, fruitPrice, fruitOrigin){
    this.fruitType = fruitType;
    this.fruitAmount = fruitAmount;
    this.fruitPrice = fruitPrice;
    this.fruitOrigin = fruitOrigin;
    this.SubTotal = fruitAmount * fruitPrice;
  }

  show(){
    return this.fruitType + " (" + this.fruitOrigin + ")\t" + this.fruitAmount + "\t" + this.fruitPrice + "\t" + this.SubTotal;
  }
}

var total = 0, srno = 1;
var fruitList = ['Apple','Grape','Banana','Strawberry'];
var fruitData = [];

window.addEventListener("DOMContentLoaded",function(){
  initializeSelect();
  document.getElementById("myBttn").addEventListener("click",function(){
    accumulateData();
  });
});

function initializeSelect(){
  var dataLst = document.createElement("datalist");
  dataLst.id = "fruitList";
  dataLst.name = "fruitList";
  for(let names of fruitList){
    var option = document.createElement("option");
    option.text = names;
    option.value = names;
    dataLst.append(option);
  } 
  document.getElementById("fruit").append(dataLst);
}

function accumulateData(){
  var txtFrt = document.getElementById("fruit").value;
  var amt = document.getElementById("amount").value;
  var prc = document.getElementById("price").value;
  var res = checkValidity(txtFrt, amt, prc);
  if (res == true){
    performCalculation(txtFrt,  amt,  prc);
  }
  else{
    document.getElementById("accumulate").innerText="Error";
  }
}

function checkValidity(txtFrt,  amt,  prc){
  if(txtFrt == null || amt == null || prc == null){
    alert("Please make sure to enter all the required data");
    return false;
  }
  else if(txtFrt != null){
    var flag = 0;
    for(val = 0; val < fruitList.length; val++) {
      if(fruitList[val] == txtFrt) {
        flag = 1;
        break;
      }
      else {
        flag = 0;
      }
    }
    if(flag == 1) return true;
    else {
      alert("No Fruit Found In The List");
      return false;
    }
  }
  else if(amt <= 0 || amt >= 50){
    alert("Amount should be between 1 and 50");
    return false;
  }
  else if(prc < 1 || prc > 10.5 ){
    alert("Price should be between $1.0 and $10.5");
    return false;
  }
  else{
    return true;
  }
}

function performCalculation(txtFrt,  amt,  prc) {
  var result = "No.\tFruit\t\t\t\tAmount\tPrice\tSubTotal\r\n----------------------------------------------------------------\r\n";
  var org = document.querySelector('input[name="origin"]:checked').value;
  fruit = new FruitDetails(txtFrt,  amt,  prc, org);
  fruitData.push(fruit);
  for(var i = 0; i < fruitData.length; i++) {
    result += srno + "\t" + fruitData[i].fruitType + " (" + fruitData[i].fruitOrigin + ")\t\t\t" + fruitData[i].fruitAmount + "\t\$" + fruitData[i].fruitPrice + "\t\$" + fruitData[i].SubTotal + "\r\n";
    total = total + fruitData[i].SubTotal;
    srno++;
  }
  document.getElementById("result").style.display = "block";
  document.getElementById("accumulate").value = result + "\r\n----------------------------------------------------------------\r\nThe Total Is\t\t\t\t\t\t\$" + total;
  srno = 1;
  total = 0;
}
