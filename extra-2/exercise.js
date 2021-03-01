/*
Prompt the user to say his name, birthday, occupation and city.

Create an function that when given these arguments will create an object.

Then ask the user what they want to do
they can:
- remember --> call the methods in the object to return the values.
- change --> reassign the values of the object.
- delete --> delete one property of the object.*/

var userName = prompt("Can I have your Name?");
var birthday = prompt("Can I have your Birthday?");
var occupation = prompt("Can I have your occupation?");
var city = prompt("What is the name of your city?");

function person(name,occupation,birthday,city) {
    this.userName = name; 
    this.occupation = occupation;
    this.birthday = birthday;
    this.city = city;
}

var user = new person(userName,birthday,occupation,city);

window.alert(user)





/*

function person(name, age, married) {
  this.name = name;
  this.age = age;
  this.isMarried = married;
  this.hello = function() {
    return "Hello " + this.name;
  }
};
*/          


