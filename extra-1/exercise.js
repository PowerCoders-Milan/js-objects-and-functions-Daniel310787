/*
Create a program that determines how many years you have left until retirement and the year you can retire.

It should prompt the user for his birthday and the age you want to retire and display the output as shown in the example that follows.

Example:

When is your birthday? 25/02/1990
At what age would you like to retire? 65
You have 40 years left until you can retire.
It's 2020, so you can retire the 25/02/2055.

Your computer knows what the current year is. Figure out how to do that in JavaScript.

## What to do

List inputs, outputs, processes in a text file.

What are the constraints? Any edge case to consider? Note in your text file.

Write the steps of your algorithm in pseudo-code in a second text file.

Write the program in JavaScript. Find out how to get the current year from your computer.

*/
var 

function retirement() {
    birthday = prompt("Can I have your Birthday this way 01/01/1990","0");
    desireRetire = prompt("At what age you would like to retire", "0");
    today = new Date();
    actYear = today.getFullYear()
    retireYear = Number(birthday.split("/")[2])+Number(desireRetire);
    age = Number(today.getFullYear())-Number(birthday.split("/")[2]);
    leftYear = Number(desireRetire)-Number(age);
    retiredDate = birthday.replace(birthday[2], retireYear)

    return ["You have " +leftYear+ " years left until you can retire",
        "It's " +actYear+ ", so you can retire the " +retiredDate]
}

window.alert(retirement())



