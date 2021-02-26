// write your JS here
// remember to always test in the browser
// to see if everything works correctly


function Phrase(noun, verb, adverb, adjective) {
    return noun + " is a great place to live and we " + verb + " all the time at this city because the city is " +adverb+ " with a lot of people walking around and they are very " +adjective
}

var noun = prompt("Can you provide with a noun, like a city to visit")
var verb = prompt("What you normally do in this city, provide me a verb")
var adverb = prompt("can you provide me with a adverb")
var adjective = prompt("Can you provide with adjective for the people of the city")

window.alert(Phrase(noun, verb,adverb,adjective))