const fs = require("fs")

// fs.writeFile("greet.txt","hello good morning",function(err,data){
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

fs.readFile("greet.txt","utf-8",function(err,data){
    if(err){
        console.log(err)
    }
    console.log(data)
})
// fs path url http event

console.log("hello icecream")

// node js is a asynchronus non blocking event driven technology