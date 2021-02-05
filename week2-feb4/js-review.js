var heading = document.getElementsByTagName("h1");

console.log(heading) // HTMLCollection

var firstHeading = heading[0];
firstHeading.innerText = "This has been changed from javascript :D lulz";

// debugger

var paragraphs = document.getElementsByTagName("p");

// for loop
for(var i = 0; i < paragraphs.length; i++) {
    //paragraphs is zero indexed
    var singleParagraph = paragraphs[i];

    // string concatenation using template literals
    singleParagraph.innerText = `This is the paragraph # ${i + 1} on the page!`;
}

// todo: add notes about constants
const speedOfLight = 3.56E121
const DESKTOP_WIDTH = 1280

// shamelessly stolen from https://www.gavsblog.com/blog/htmlcollection-foreach-loop-convert-object-to-array-javascript
const paragraphArray = [...paragraphs];

// Array methods

// paragraphArray.length; --> gives us how many items are in the array
// paragraphArray.find() --> 
// paragraphArray.push() --> adds to the end
// paragraphAray.pop() --> removes from the end
// .shift() --> removes 1 items from the front
// .unshift(item) --> adds 1 item to the front
// .includes() --> returns true/false based on the existance of some item/property 
// forEach() --> loops through all of the items generically 

var dogs = ["moco", "gizzy", "mazda", "tucker", "tal"]
if(dogs.includes("moco")) {
    alert("YOU KNOW LASSIE?!?")
}

// this code is JUST like the for() loop over, except much more concise!
dogs.forEach(function(dog){
    console.log(`My dogs name is ${dog}!`);
})

/////////////////////
// FUNCTIONS 
/////////////////////

// function definition 
function winAtWarzone(event) {
    console.log("EVENT HAPPENED!", event)
    const banner = document.getElementById("warzoneBanner");
    banner.style.display = "block";
}

// using (or calling) the function 
//winAtWarzone();

const bodyElement = document.getElementsByTagName("body")[0];
bodyElement.addEventListener("click", winAtWarzone);
bodyElement.addEventListener("keydown", tryCheatCode);

// named functions, i.e. winAtWarzone() { ... }
// anonymous functions, i.e. function() { ... }

// winAtWarzone -> function definition
// winAtWarzone() -> calling the function

// extra points for implementing the Konami code!
function tryCheatCode(event) {
    console.log(event);
}

// objects should represent things in real life, like a tuna can!
var tuna = {
    gross: true,
    price: 120,
    chunk: false,
    open: false,
    brand: "Chicken of the Sea",
    sizes: ["snack", "small", "4-pack"],
    open_can: function() {
        //this is anonymous function that exists in an object
        //we call it a method!

        // methods can access the other properties on the object 
        // using the "this" key word
        if(this.open) {
            console.log("Cannot open an already open can.")
        } else {
            this.open = true;
            console.log("Can has been opened!");
        }
    }
}