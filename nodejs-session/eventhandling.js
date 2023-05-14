var events = require("events")

var eventEmitter = new events.EventEmitter();


function myHandler(data){ // recieve an event
    console.log(data)
}

eventEmitter.on("order_placed",myHandler)


eventEmitter.emit("order_placed","price:200");// generting event

function checkprime(data){
    if(data%2===0){
        console.log("prime")
    }else {
        console.log("not prime")
    }
}


eventEmitter.on("check_prime",checkprime)

eventEmitter.emit("check_prime",20)



