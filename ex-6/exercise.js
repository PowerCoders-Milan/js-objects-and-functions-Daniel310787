// write your JS here
// remember to always test in the browser
// to see if everything works correctly
/*
Write a function named greaterNum that:

Takes 2 arguments, both numbers.

Returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs

Log the output, e.g. "The greater number of 5 and 10 is 5." like we did yesterday. */

function greaterNum(num1, num2) {

    if(num1 > num2){
        window.alert("The greater number of " +num1+ " and " +num2+ " is " +num1)
    }else if(num2 > num1){
        window.alert("The greater number of " +num1+ " and " +num2+ " is " +num2)
    }else{
        window.alert("The number are the same")
    }
}

greaterNum(35, 25)
greaterNum(45,100)