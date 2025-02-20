const emptyChar = ""
const myArray1 = [1, 4, 13, 75, 8, 91]
const myArray2 = [1,2,3,4,5,6,7,8,9,10]

console.log("Numbers 1 - 10 using for loop")
for (let i = 1; i<= 10; i+=1) {
    console.log(i)
}

console.log("Print odd numbers less than 100")
for(let i = 1; i<=100; i++) {
    if(i % 2 == 1) {
        console.log(i)
    } else {
        console.log(emptyChar)
    }
}

console.log("Print all multiplication tables from 1-10")
for (let num1 = 1; num1<=10; num1++){
    for (let num2=1; num2<=10; num2++){
        let answer = num1*num2
        console.log(num1 + '*' + num2 + '=' + answer)
    }
}

console.log("Calculate the sum of odd numbers greater than 10 and less than 30")
let sum = 0;
for(let i = 11; i <= 30; i += 2)
{
    sum += i;
}
console.log(sum);

console.log("a function that will convert from Fahrenheit to Celsius")
function fahrenheitToCel(fahrenheit){
    celcius = (fahrenheit - 30)/2
    return celcius
}
let testConverter = fahrenheitToCel(57)
console.log(testConverter)

console.log("Calculate the sum of numbers in an array of numbers")

let Sum = 0
function findArrSum(array){
    for(let i=0; i<array.length; i++){
        Sum = Sum + array[i]
    }
    return Sum
}

callFindArrSum = findArrSum(myArray1)
console.log(callFindArrSum)

console.log("Calculate the average of the numbers in an array of numbers")

let total = 0
function findAverage(array){
    for (let i=0; i<array.length; i++){
        total = total+array[i]
    }
    return average = total/ArrayBuffer.length
}

console.log(findAverage(myArray2))