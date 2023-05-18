const express = require("express")
const app = express();
const cors = require("cors")

app.use(cors())

var empData = [
    {
        id:100,
        name:"test1",
        salary:5000,
    },
    {
        id:101,
        name:"test1",
        salary:5000,
    },
    {
        id:102,
        name:"test2",
        salary:6000,
    },
    {
        id:103,
        name:"test3",
        salary:7000,
    },
    {
        id:104,
        name:"test4",
        salary:8000,
    },
    {
        id:105,
        name:"test5",
        salary:9000,
    }
]

app.get("/",function(req,res){
    res.send("hello from express")
})

app.get("/user",function(req,res){
    res.send("i am in user route")
})


app.get("/employee",function(req,res){
    console.log(req.url,req.method)
    res.json(empData)
})
app.listen(7000,function(){
    console.log("server started")
})

