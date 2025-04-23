const button = document.getElementById("myButton")
const counterDisplay = document.getElementById('counter-display')
let counter = 0

button.addEventListener("click", increaseCounter)

function increaseCounter(){
    counter++
    counterDisplay.innerText = "Count: "+counter
}