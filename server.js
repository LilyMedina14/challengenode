const express = require('express') //is the angule that anable us to create a restful api 
const bodyParser = require('body-parser'); //it allow us to use json back and forth between api and client 
const cors = require('cors'); //to allow our restapi to be accessed from anywhere (CROSS ORIGINS)


const app = express();
const port = 40000;

app.use(bodyParser.json({limit:'100mb'}))
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'100mb'
}));

app.use(cors());

app.all('*',function(req,res,next){
    res.header('Acess-Control-Allow-Origin','*'); //WE ALLOW ALL IP ADDRESSES
    res.header('Acess-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS'); //WITH THIS WE ALLOW ALL THE HTTP VERBS
    res.header('Acess-Control-Allow-Headers','Content-Type'); //WITH THIS WE ALLOW THE USE OFTHE HEADER CONTENT TYPE
    next();
});
//THE ACTUAL ENDPOINT
app.get('/',function(req,res){
    res.send('nodejs challenge');
});

app.get('/date',function(req,res){ 
    var date = new Date();
    res.send('Date is ' + date);
});

app.get('/name',function(req,res){
    res.send('Liliana Medina');
});

app.get('/city',function(req,res){
    res.send('Garcia');
});
app.get('/school',function(req,res){
    res.send('Universidad tecnologica santa catarina');
});

app.post('/sum',function(req,res){
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = parseFloat(num1) + parseFloat(num2);
    
    res.send(result.toString())

});
app.post('/mult',function(req,res){
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let num3 = req.body.num3;
    let result = parseFloat(num1) * parseFloat(num2) * parseFloat(num3);
    
    res.send(result.toString())

});

app.post('/area-cuadrado',function(req,res){
    let lado1 = req.body.lado1;
    let lado2 = req.body.lado2;
    let result = parseFloat(lado1) * parseFloat(lado2);
    
    res.send(result.toString())

});
app.post('/area-triangulo',function(req,res){
    let base = req.body.base;
    let altura = req.body.altura;
    let result = (parseFloat(base) * parseFloat(altura))/2;
    
    res.send(result.toString())

});

app.listen(port,function(){
    console.log('MY APP IS RUNNING AT THE PORT ' + port);
});
