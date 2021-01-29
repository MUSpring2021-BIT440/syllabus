var hero = 'Iron Man'; // string
var age = 32; // integer
var is_a_bad_guy = false; // boolean
var enemies = ["Thanos", "War Mongerer", "Dr. Strange"]; // array

// arrays can be mixed data types
var baddie = ["Maw", 102, false]

// arrays can be nested
var countries = [
    ["Florida", "Texas"], // 0 index
    ["Britist Columbia", "Quebec"], // 1 index
    ["Great Britain", "Wales", "Ireland"] // 2 index
]

// accessing array data
console.log(countries[2][2]); //square bracket notation

// object 
var tonyStark = { // curly brackets 
    // key: value pairs
    alias: "Iron Man",
    spouse: "Pepper Potts",
    bestie: "Rhodes",
    current_suit: JSON.parse(localStorage.getItem('suitVersion')) // getting value from local storage
}

// accessing object data
console.log(tonyStark.current_suit)

var snake_case = true;
var camelCase = true;
// var kebob-case = true;
var PascalCase = true;
var lowercase = true;
var ANGERISSUES = false;

function createNewSuit() {
    tonyStark.current_suit = tonyStark.current_suit + 1; // increase suit version by one
    localStorage.setItem('suitVersion', JSON.stringify(tonyStark.current_suit)); // saving the new version to the browser storage
    console.log("Current suit value", tonyStark.current_suit)
}

// todo
// DOM
// EVENTS
// LOOPS
