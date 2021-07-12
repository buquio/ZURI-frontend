
//axios
const axios = require("axios");
const URL ="https://jsonplaceholder.typicode.com/posts/1";

const getPost = () => { //or
// function getPost () {    
     return axios.get(URL)
     .then(result => {
        console.log(result)    // all result
        console.log(result.data)    // posts/1 result
        console.log(result.status)    //http status code
        console.log(result.statusText)    //http status text
        })
 .catch(err => {
    console.log(err);
     })
    }

   console.log(getPost())


   ////callback
const axios = require("axios");
const URL =
"https://jsonplaceholder.typicode.com/posts/1";


const getPost = (cb) => { //cb is a function passed as an args inside getpost e.g print
    return axios.get(URL)
    .then(result => {
    cb(result.data)    
}) 
.catch(err => {
     cb (err);
})
}
const print = (args) => console.log(args)
// or 
// const print = (result) => console.log(result)

const getMyName = (name, cb) => {
    cb(name)
};

getPost(print);



//////error handling using .then/.catch
const axios = require("axios");
const URL =
"https://jsonplaceholder.typicode.com/posts/1";

const getPost = (cb) => {
        return axios.get(URL).then(data => { // first check if any error
        // throw new Error("Abesh created this")
        throw new Error("This was not fetched") // atificial error
    }) 
.then(data => {return data}) // you can now use the data
.then(myData => console.log(myData))
     .catch(err => {
        return cb (err.message);
    })
}

const print = (args) => console.log(args) 
// or , not sure
// const print = (result) => console.log(result)

const getMyName = (name, cb) => {
    cb(name)
}

getPost(print);



    ////// handling error using ASYNC/await + try/catch
const axios = require("axios");
const URL ="https://jsonplaceholder.typicode.com/posts/1";

async function getPost (cb) {
try{
    const result = await axios.get(URL)
    throw new Error("Bad things happen to good people sometimes") // manual error
    cb(result.data)
} 
catch(err){
    console.log(err.message)
}
}
const print = (args) => console.log(args)
// or , not sure
// const print = (result) => console.log(result)

const getMyName = (name, cb) => {
    cb(name)
};

getPost(print);


/////////settimeout/setinterval
const axios = require("axios");
const URL ="https://jsonplaceholder.typicode.com/posts/1";

const getPost = (cb) => {
    axios.get(URL).then(result => {
    return cb(result.data)    
}).catch(err => {
     return cb (err);
})

setTimeout(() => console.log("hi"), 3000) //accepts a function and time as argument
// or 
// setInterval(() => console.log("hi"), 2000)

// OR 
// const id = setInterval( => console.log("hi"), 2000)//timer
// setTimeout(()  => clearInterval(id), 6000) //timeout
}
const print = (args) => console.log(args)
// or , not sure
// const print = (result) => console.log(result)

const getMyName = (name, cb) => {
    cb(name)
};

getPost(print);



////////handling error using  try catch + .then/.catch
const axios = require('axios')

const getBreeds = () => {
  try {
    return axios.get('https://dog.ceo/api/breeds/list/all')
  } catch (error) { // catch error when feching the url
    console.error(error)
  }
}

const countBreeds = async () => {
  const breeds = getBreeds()
    .then(response => {
      if (response.data.message) {
        console.log(
          `Got ${Object.entries(response.data.message).length} breeds`
        )
      }
    })
    .catch(error => { //catch any other error that might occur
      console.log(error)
    })
}

countBreeds()

// DIFFERENT MENTOR 
//CALLBACK
const list =["ofe nsala", "banga", "egusi", "efo riro", "gbegiri"]
//a.callback with ananymous function 
list.map((soup) => { //unseen anonymous fxn here
    console.log(`pounded yam with ${soup}`)
});
//b.callback with named function
function addPoundedYam (soup) {
    console.log(`pounded yam with ${soup}`)
}
list.map(soup => addPoundedYam(soup))


///PROMISE USING IF/ELSE RESOLVE/REJECT + .THEN/.CATCH NO API
const weather = true;
const promise = new Promise(function (resolve, reject){
    if(weather) {
        const dateDetails = {
            name: "ICM",
            location: "Ikeja",
            table: 5
        };
        resolve(dateDetails)
    }else {
        const date = {
            name: "PLACE",
            location: "V.I",
            table: 2
        };
        reject(new Error("Bad weather, so no date"))
        // reject(new Error(`${date.name}`))
        // reject(new Error(({date}))) ??destructure
        reject(new Error(`object.entries(date)`))



    }
});

const myDate = function() {
    return promise.then(done => {
    console.log(`we are going to date at ${done.name} in ${done.location}, we reserved table ${done.table}`);
    console.log(done)
     }).catch((error) => {  
         console.log(error.message) 
    })
}
myDate()
 

//////promise using resolve/reject + .then/.catch/.finally
const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject); 
 });
 
 promise
   .then(position => console.log(position))
   .catch(error => console.error(error))
   .finally(() => console.log('done'));
 


///////PROMISES WITH EXTERNAL API USING FETCH NOT AXIOS
 fetch("https://jsonplaceholder.typicode.com/todos")
 .then(res => res.json())
 .then(todos => {
     console.log(todos)
    //  or 
    todos.forEach(todo => {
        console.log(todo)
        const div = document.createElement('div');
        div.innerHTML = todo;
        document.body.appendChild(div);
        console.log(div)
    })
})
    
    
//covert above to arrow function
const fetchData = () => {
    const response = await fetch('"https://jsonplaceholder.typicode.com/todos"');
    const todos = await response.json();
    console.log(todos)
// or 
todos.forEach( todo => {
        console.log(todo)
        const div = document.createElement('div');
        div.innerHTML = todo;
        document.body.appendChild(div);
        console.log(div)
    })
}

    fetchData()    


    ////////using axios + .then/.catch
const axios = require('axios')

const fetchData = () => { //or function fetchData ()  {
    const url = "https://jsonplaceholder.typicode.com/todos";

     axios.get(url).then(({data}) => {// destructuring
        console.log(data)
        })
        .catch(error => {
        console.log(error)
        })
        }
    fetchData()    

//////using axios + async await
const axios = require('axios')

const fetchData = async() => {
    try {
    const url = "https://jsonplaceholder.typicode.com/todos";

    const res =await axios.get(url)
        console.log(res.data)
        } 
        catch(error) {
        console.log(error)
        }
        }
    fetchData()    


    