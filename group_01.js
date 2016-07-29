// Group Coding Portion: Theresa T, Adam E, Tyler R, Liz H. on 7/28/2016
// Homework Portion: Adam Eastvold 7/28/2016

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var empSTIArray = [];

atticus = new person("Atticus", "2405", "47000", 3);
jem = new person("Jem", "62347", "63500", 4);
boo = new person("Boo", "11435", "54000", 3);
scout = new person("Scout", "6243", "74750", 5);
// toObject(atticus);
// toObject(jem);              <<<< All of these were for my first
// toObject(boo);              <<<< attempt at creating objects.
// toObject(scout);

var employees = [atticus, jem, boo, scout];

employees.forEach(fun);    // this is what actually calls everything

//functions

function person(name, idNum, salary, rating){
  this.name = name;
  this.idNum = idNum;
  this.salary = salary;
  this.rating = rating;
}

/*  In this comment is the function I first made objects with

function toObject(array) {
  person = {};
  for (var i = 0; i < array.length; ++i)
    person[i] = array[i];
  return person;
}
*/


function fun(object) {
  var empArray = [];
  var bonus;
  object.salary = parseInt(object.salary);

  empArray.push(object.name);

  switch(object.rating){
    case 2:
      bonus = 0;                  //bonus is saved as float
      break;
    case 3:
      bonus = 0.04;
      break;
    case 4:
      bonus = 0.06;
      break;
    case 5:
      bonus = 0.1;
      break;
    }


    if(object.idNum.length == 4) {
      bonus += 0.05;
      parseInt(object.idNum);
    }

    if (object.salary > 65000) {
      bonus -= 0.01;
    }
    if (bonus >= 0.13) {
      bonus = 0.13;
    }

    var bonusAmount = bonus * object.salary;
    var salary =  bonusAmount + object.salary;

    empArray[1] = bonus;
    empArray[2] = salary;
    empArray[3] = Math.round(bonusAmount);

    empSTIArray.push(empArray);
    console.log(empArray);

    for (i = 0; i < empArray.length; i++) {
      document.write(empArray[i] + " ");
    }
  document.write("<br>");
}
