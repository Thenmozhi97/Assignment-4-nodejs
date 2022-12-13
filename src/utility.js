//validation fucntion 
const isEmpty = (str) => {
    if (str.length == 0) {
        return true
    }
    else {
        return false
    }
}

const isNumber = (str) => {
    if (/^[0-9]+$/.test(str)) {
        return true
    }
    else {
        return false
    }
}

const invalidData = (str) => {
    if (isEmpty(str) || !(isNumber(str))) {
        return true
    }
    else {
        return false
    }
}

//operations functions
const add = (num1, num2) => {
    console.log("adding: " + num1 + " and " + num2);
    const obj = {
        status: "success",
        message: "the sum of given two numbers",
        sum: num1 + num2
    }
    return obj
}

const sub = (num1, num2) => {
    console.log("sub: " + num1 + " and " + num2);
    const obj = {
        status: "success",
        message: "the sub of given two numbers",
        difference: num1 - num2
    }
    return obj
}

const multiply = (num1, num2) => {
    console.log("multiply: " + num1 + " and " + num2);
    const obj = {
        status: "success",
        message: "the multiply of given two numbers",
        result: num1 * num2
    }
    return obj
}

const divide = (num1, num2) => {
    if (num2 === 0) {
        return {
            status: "error",
            message: "Cannot divide by zero"
        }
    }
    console.log("divide: " + num1 + " and " + num2);
    const obj = {
        status: "success",
        message: "the divide of given two numbers",
        result: num1 / num2
    }
    return obj
}

// const add = (num1, num2)=>{
//     console.log("subtraction: "+num1+" and "+num2);
//     return num1+num2
// }

module.exports = {
    add,
    sub,
    multiply,
    divide,
    invalidData
}