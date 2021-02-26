// write your JS here

/*Write a function named tellFortune that:

prompts the user for 4 arguments: number of children, partner's name, geographic location, job title.

displays to the user his fortune like so: "You will be a X in Y, and married to Z with N kids."

Call that function 3 times with 3 different values for the arguments.*/

// remember to always test in the browser
// to see if everything works correctly

 

function tellFortune() {
    numChilds = prompt("How many kids you want in a future");
    partName = prompt("Name your favorite actor");
    geoLoc = prompt("Where would like to live");
    jTitle = prompt("What would like to do as job"); 
    return "You will be a " +jTitle+ " in " +geoLoc+", and married to " +partName+ " with " +numChilds+ " kids."
}


console.log(tellFortune())
console.log(tellFortune())
console.log(tellFortune())
