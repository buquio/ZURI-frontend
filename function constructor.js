// function constructor
function Intern (age) {
    this.age = age
}

const Tomiwa = new Intern (25);
const David = new Intern (30);

console.log(Tomiwa)
console.log(David.age)



/////////////a.fuction.prptotype added all intern

/////////////b.fuction added to specfic intern
function Intern (age) {
    this.age = age
}

Intern.prototype.speak = function(word){
    return word;
};


const Tomiwa = new Intern (25);
Tomiwa.dance = function() {
    return "dancing now as a ${this.age} year old"
}
// or 
// function dance() {
    // return "dancing now as a ${this.age} year old"
// }
// Tomiwa.dance() 

const David = new Intern (30);

console.log(Tomiwa.speak("hi, i'm tomiwa"))
console.log(David.speak("hi, i'm tomiwa, i am David"))
console.log(Tomiwa.dance())
console.log(David.dance())



///////////////////
function Intern (age) {
    this.age = age
}Intern.prototype.speak = function(word){
    return word;
};

Intern.prototype.dance = function(){
    return `dancing now as a ${this.age} year old`
}


const Tomiwa = new Intern(25);
Tomiwa.usechannelWord = function() {
    return `@ channel I am the team lead`
}

const David = new Intern (30);

console.log(David.usechannelWord ())


