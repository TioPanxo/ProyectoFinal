import {encriptar} from './encriptar'

const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json;
const cors=require('cors');
app.use(cors());

const salt = "hola";


const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'ecovida'
});

connection.connect(function(err:any){
    if(err){
        console.error('Error conectando a la base de datos ' + err.stack);
        return;
    }
    console.log('Conexion establecida '+ connection.threadId);
});



//tabla usuarios (id(autoincremental), nombre, alias, email, encripted(password), admin?)
//get all users
app.get("/getUsers",(req:any,res:any)=>{
    connection.query("SELECT * FROM usuarios", function(error:any,results:any,fields:any){
        res.send(JSON.stringify(results));
        return;
    });
});


//post
app.post("/a",jsonParser,(req:any, res:any) => {
    console.log("hola")
    let email=req.body.email;
    console.log(email);
    //let password=encriptar(req.body.password,salt);

    
    /*connection.query("SELECT * FROM usuarios WHERE email = ?",[email],function(error:any,results:any,fields:any){
        if(error) throw error;
        console.log(results);
        res.send(JSON.stringify(results));
    });*/
});

//put user
app.put("/registro",jsonParser,(req:any,res:any)=>{
    let name=req.body.name;
    let alias=req.body.alias;
    let email=req.body.email;
    let password=encriptar(req.body.password,salt);
    let rol = "user";

    connection.query("INSERT INTO usuarios (name, alias, email, password, rol) VALUES (?,?,?,?,?)",[name,alias,email,password,rol],function(error:any,results:any,fields:any){
        if (error) throw error;
        res.send(JSON.stringify({"mensaje":true,"resultado":results}));
    });
});

//put admin

//delete

//tabla recetas (id(autoincremental), nombre, src, ingredientes, procedimientos)
//get

//post

//put

//delete



const config={
    hostname: "127.0.0.1",
    port: 3000,
};

app.listen(config,()=>{
    console.log(`Conectado al servidor en http://localhost:${config.port}`);
});


