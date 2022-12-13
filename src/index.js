const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here

//EJS for taking inputs
app.set('views',"./views");
app.set('view engine', 'ejs');

//import utility file
const utility = require('./utility.js')

//apis
app.get("/",(req,res)=>{
    res.render('home.ejs')
});

app.post("/add",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    var result ={}
    if( !(utility.invalidData(num1)) && !(utility.invalidData(num2))) {
        result = utility.add(Number(num1), Number(num2));
    }
    else{
        result = {
            status: "error",
            message: "Invalid data types"
        }
    }
    res.send(result)
});

app.post("/sub",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    var result ={}
    if( !(utility.invalidData(num1)) && !(utility.invalidData(num2)) ){
        result = utility.sub(Number(num1), Number(num2));
    }
    else{
        result = {
            status: "error",
            message: "Invalid data types"
        }
    }
    res.send(result)
});

app.post("/multiply",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    var result ={}
    if( !(utility.invalidData(num1)) && !(utility.invalidData(num2)) ){
        result = utility.multiply(Number(num1), Number(num2));
    }
    else{
        result = {
            status: "error",
            message: "Invalid data types"
        }
    }
    res.send(result)
});

app.post("/divide",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    var result ={}
    if( !(utility.invalidData(num1)) && !(utility.invalidData(num2)) ){
        result = utility.divide(Number(num1), Number(num2));
    }
    else{
        result = {
            status: "error",
            message: "Invalid data types"
        }
    }
    res.send(result)
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;