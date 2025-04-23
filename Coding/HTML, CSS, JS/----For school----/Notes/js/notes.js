let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
let array = [0,1,2,3,4,5];

rows.push("freeCodeCamp")
console.log(rows)

let popped = rows.pop()
console.log(popped)

let pushed = rows.push("Maria")
console.log(pushed)

console.log(rows[0]) // Naomi 
rows[2] = 10
console.log(rows)
let final = array[array.length - 1] // final is the last element in the array
console.log(final)
console.log(array)

const activity = "Code! ";
console.log(activity.repeat(3))

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const sum = addTwoNumbers(5, 10);
console.log(sum)

console.log("hello")