const character = "#";
const count = 8;
const rows = [];
// console.log(rows[0])

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2*rowNumber-1) + " ".repeat(rowCount - rowNumber);
  }

for (let i=1; i < count; i++) { //i+=3 is the same as i = i+3. could also use i++; for this specific scenario. i++ is the same as i=i+1
    rows.push(padRow(i, count)); 
}
let result = ""

for (const row of rows){
    result = result + row + "\n";
}

console.log(result);
