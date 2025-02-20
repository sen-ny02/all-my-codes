const emptyChar = ""


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

