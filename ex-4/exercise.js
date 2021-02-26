// write your JS here
// remember to always test in the browser
// to see if everything works correctly
/*Rebuild the age calculator by using new Date()

Then use that inside a function

Call that function several times with different dates*/


var birthday = prompt("Can you please provide me your birthyear")

function ageCalculator() {
    var actDate = new Date();
    return (actDate.getFullYear()-birthday)
}


window.alert(ageCalculator())
window.alert(ageCalculator())
window.alert(ageCalculator())