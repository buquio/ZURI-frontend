//object manipulation 
// A.coverting objects to array using
//1. Object.keys 2. Object.values 3. Object.entries

// B.coverting objects-array back to Object using

// CV -HTML & CSS
const person = {
    name: "Mikali Rasheed",
    weight: 60,
    hairColor: "black",
    isMarried: "true",
    hobbies: ["football", "chess"] 
}

const itemsPrice = {
    rice: 2000,
    beans: 2000,
    garri: 1500,
    onion: 500,
    salad: 1000,
}

//// coverting objects-keys to array using Object.keys
const personProps = Object.keys(person)
console.log(personProps)
const capitalizedProps = personProps.map(prop => 
    prop.toUpperCase())
    console.log(capitalizedProps)

////coverting objects-values to array using Object.values
const priceOfItems = Object.values(itemsPrice)
console.log(priceOfItems)
const totalPrice = priceOfItems.reduce((total, cv) =>
(total + cv), 0)
console.log(totalPrice)

const userProfile = Object.values(person)
console.log(userProfile)
console.log(userProfile[4])
//OR destructure the array so no need for userprofile.name/.color etc
const[name, weight, haircolor, ismarried, hobbies] = userProfile
console.log(hobbies) //it assign hobbies to no4 position d/4 log true


////3. coverting objects-entries to array using Object.entries
const personArray = Object.entries(person)
console.log(personArray)

////coverting objects-entries from array back to object using Object.fromEntries
const personObject = Object.fromEntries(personArray)
console.log(personObject)

///////////////
///// if
const isDivisibleByNum = (num, divisibleNum) =>{
    if (!num || !divisibleNum) {
        return "pass arguments of type number and greater than 0"
    }
    if (num % divisibleNum == 0) {
    return true;
}else {
    return false;
}
}
console.log(isDivisibleByNum(4, 0))


// array 
const igHandles = ['davido','shatta wole', 'burna boy', 'wizkid']

const updatedHandles = igHandles.map(
    (item, index, mainArray) => {
        return `caleb_${item}`
    })
    console.log(updatedHandles)


//scope & closure
function returnFunc (a) {
    // console.log(b)
    console.log(a)
    return function childFunc (){
        const b =2;
        console.log(a)
    // console.log(b)
    }
}
console.log(returnFunc (5))

//////memory management/garbage collection
const curriedFunc = returnFunc (5)
console.log(curriedFunc(5))
// differnt from?????
// const result = returnFunc (5)
// console.log(result(5))

// CONDITIONALS
const accountBalance = 10;
const moneyOnGround = accountBalance > 0;
const isHungry = true;

if(moneyOnGround) {
    console.log('There is money on ground')

}else if (isHungry) {
    console.log('but i am hungry')
}

////////
//Tenanary operator
//true? console.log("yes") : console.log("no");

if(meow === "Cat") {
    console.log("this is the voice of a cat");
}else {
    console.log("this is the voice");
}
// or 
const meow = "";
meow === "Cat"
?console.log("this is the voice of a cat") 
: console.log("this is the voice");




