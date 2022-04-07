//1. Create a function that returns true or falsea string that says "This is a number!" if the parameter passed is a number or "This is a string!" if the parameter is string.

// 2. Declare a function that takes two numbers as parameters and multiple them and then deduct 10 from the multiplied numbers and return the final results.

// 3. Create a function that adds 20 years to an age that has been passed as a parameter.

//1.
function returnStringOrNumber(valueA){
    if (typeof(valueA)==valueA) {
        return "this is a number!"
    }
    else {"This is a string!"}

}

console.log(returnStringOrNumber(7));


