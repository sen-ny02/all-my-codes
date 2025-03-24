const inputOne = "one"

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate)
    }
};

console.log(employee.getWage());


let student = {
    firstName: "Sen",
    lastName: "Makalandawa",
    age: 17,
    nativeLanguage: "English"
};

if (inputOne == "one") {
    console.log(student);
}

let variable = employee.baseSalary;
console.log("This is the base salary: "+variable)