import {encriptar} from './encriptar'

const express = require('express');
const mysql = require('mysql');
const app = express();

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const cors=require('cors');
app.use(cors());

app.use(express.json());

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
    });
});


//post
app.post("/getUser",(req:any, res:any)=>{
    let email=req.body.email;
    let password=encriptar(req.body.password,salt);

    
    connection.query("SELECT * FROM usuarios WHERE email=? and password=?",[email,password],function(error:any,results:any,fields:any){
        if(error) throw error;
        if(results.length <= 0){
            res.send(JSON.stringify({"mensaje":"El email o la contraseña son incorrectos, o no se encuentra registrado","resultado":results,"error":true}));
            return;
        }
        else{
            if(results.rol.value == 'admin'){
                res.send(JSON.stringify({"mensaje":"Bienvenido","resultado":results,"error":false,"admin":true}));
            }
            else{
                res.send(JSON.stringify({"mensaje":"Bienvenido","resultado":results,"error":false,"admin":false}));
            }
            
        }
        
        //console.log(results);
    });
});

//put user
app.put("/registro",(req:any,res:any)=>{
    let name=req.body.name;
    let alias=req.body.alias;
    let email=req.body.email;
    let password=encriptar(req.body.password,salt);
    let rol = "user";

    connection.query("select * from usuarios where email=?",[email],function(error:any,results:any,fields:any){
        if(error)throw error;
        if(results.length <=0){
            connection.query("INSERT INTO usuarios (name, alias, email, password, rol) VALUES (?,?,?,?,?)",[name,alias,email,password,rol],function(error:any,results:any,fields:any){
                if (error) throw error;
                res.send(JSON.stringify({"mensaje":"Cuenta registrada satisfactoriamente","resultado":results,"error":false}));
                return;
            });
        }else{
            res.send(JSON.stringify({"mensaje":"El correo electronico ya esta en uso","resultado":results,"error":true}));
            return;
        }
    });


    
});

//put admin
app.put("/registroAdmin",(req:any,res:any)=>{
    let name=req.body.name;
    let alias=req.body.alias;
    let email=req.body.email;
    let password=encriptar(req.body.password,salt);
    let rol = "admin";

    connection.query("INSERT INTO usuarios (name, alias, email, password, rol) VALUES (?,?,?,?,?)",[name,alias,email,password,rol],function(error:any,results:any,fields:any){
        if (error) throw error;
        res.send(JSON.stringify({"mensaje":true,"resultado":results}));
    });
});

//delete
app.delete("/delete/:id",(req:any,res:any)=>{
    const{id}= req.params

    connection.query(`DELETE FROM usuarios WHERE id_usuario = ${id}`,function(error:any,results:any,fields:any){
        if(error) throw error;

        res.send(JSON.stringify({"mensaje":true,"resultado":results}));
    });
});

//tabla recetas (id(autoincremental), nombre, src, ingredientes, procedimientos)
//get
app.get("/getRecetas",(req:any,res:any)=>{
    connection.query("SELECT * FROM recetas", function(error:any,results:any,fields:any){
        res.send(JSON.stringify(results));
    });
});

//post
app.post("/getReceta",(req:any, res:any)=>{
    let id=req.body.id;
    //let password=encriptar(req.body.password,salt);

    connection.query("SELECT * FROM recetas WHERE id_receta=?",[id],function(error:any,results:any,fields:any){
        if(error) throw error;
        
        res.send(JSON.stringify(results));
        //console.log(results);
    });
});
 
//put
app.put("/aniadirReceta",(req:any,res:any)=>{
    let nombre=req.body.nombre;
    let src=req.body.src;
    let ingredientes=req.body.ingredientes;
    let procedimientos=req.body.procedimientos;

    connection.query("INSERT INTO recetas (nombre, src, ingredientes, procedimientos) VALUES (?,?,?,?)",[nombre,src,ingredientes,procedimientos],function(error:any,results:any,fields:any){
        if (error) throw error;
        res.send(JSON.stringify({"mensaje":"Receta agregada satisfactoriamente","resultado":results,"error":false}));
    });
});

//delete
app.delete('/deleteRec/:id',(req:any,res:any)=>{
    const{id} = req.params

    connection.query(`DELETE FROM recetas WHERE id_receta = '${id}'`,function(error:any,results:any,fields:any){
        if(error) throw error;
        res.send(JSON.stringify({"mensaje":true,"resultado":results}));
    });
});


const config={
    hostname: "127.0.0.1",
    port: 3000,
};

app.listen(config,()=>{
    console.log(`Conectado al servidor en http://localhost:${config.port}`);
});


