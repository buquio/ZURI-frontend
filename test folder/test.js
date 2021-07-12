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
        // reject(new Error("Bad weather, so no date"))
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
 