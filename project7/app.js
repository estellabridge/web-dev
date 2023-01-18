let age = 32;
let userName = "max";
let hobbies = [
    "Sports", 
    "Cooking", 
    "Reading"];
let job = { 
    title: "Developer", 
    place: "New York", 
    salary: 50000 
};


let totaladultYears;

function calculateAdultYears(userAge) {
    return userAge - 18;
}

totaladultYears = calculateAdultYears(age);
console.log(totaladultYears);

age = 45;
totaladultYears = calculateAdultYears(age);

console.log(totaladultYears);

let person = {
    name: 'max',
    greet() {dw4
        console.log('Hello')
    }
};

person.greet();
