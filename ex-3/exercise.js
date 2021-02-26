// write your JS here
// remember to always test in the browser
// to see if everything works correctly
/*Create an array to hold your top choices (colors, presidents, whatever).

For each choice, log to the screen a string like: "My #1 choice is blue."

Change your top choices into objects, e.g. pet with: name, type of pet.. as properties.

Display it to the browser.*/

myTopChoices = ["color", "president", "sport", "game"]

color = {
    name : "Lightblue",
    type : "Primary",
}

president = {
    name : "Barack Obama",
    type : "Democrat"
}

sport = {
    name : "Basketball",
    type : "played with ball"
}

game = {
    name : "Zelda",
    type : "Exploration"
}

window.alert("My preferred choice of color is " +color.name+ ".")
window.alert("My preferred choice of President is " +president.type+ ".")
window.alert("My preferred choice of Sport is " +sport.name+ ".")
window.alert("My preferred choice of game type is " +game.type+ ".")