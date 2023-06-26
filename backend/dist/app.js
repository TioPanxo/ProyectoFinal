"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encriptar_1 = require("./encriptar");
const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const salt = "hola";
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'ecovida'
});
connection.connect(function (err) {
    if (err) {
        console.error('Error conectando a la base de datos ' + err.stack);
        return;
    }
    console.log('Conexion establecida ' + connection.threadId);
});
//tabla usuarios (id(autoincremental), nombre, alias, email, encripted(password), admin?)
//get all users
app.get("/getUsers", (req, res) => {
    connection.query("SELECT * FROM usuarios", function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
});
//post
app.post("/getUser", (req, res) => {
    let email = req.body.email;
    //let password=encriptar(req.body.password,salt);
    connection.query("SELECT * FROM usuarios WHERE email=?", [email], function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify(results));
        //console.log(results);
    });
});
//put user
app.put("/registro", (req, res) => {
    let name = req.body.name;
    let alias = req.body.alias;
    let email = req.body.email;
    let password = (0, encriptar_1.encriptar)(req.body.password, salt);
    let rol = "user";
    connection.query("INSERT INTO usuarios (name, alias, email, password, rol) VALUES (?,?,?,?,?)", [name, alias, email, password, rol], function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify({ "mensaje": true, "resultado": results }));
    });
});
//put admin
app.put("/registroAdmin", (req, res) => {
    let name = req.body.name;
    let alias = req.body.alias;
    let email = req.body.email;
    let password = (0, encriptar_1.encriptar)(req.body.password, salt);
    let rol = "admin";
    connection.query("INSERT INTO usuarios (name, alias, email, password, rol) VALUES (?,?,?,?,?)", [name, alias, email, password, rol], function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify({ "mensaje": true, "resultado": results }));
    });
});
//delete
app.delete("/delete", (req, res) => {
    let email = req.body.email;
    connection.query("DELETE FROM usuarios WHERE email = ?", [email], function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify({ "mensaje": true, "resultado": results }));
    });
});
//tabla recetas (id(autoincremental), nombre, src, ingredientes, procedimientos)
//get
app.get("/getRecetas", (req, res) => {
    connection.query("SELECT * FROM recetas", function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
});
//post
app.post("/getReceta", (req, res) => {
    let id = req.body.id;
    //let password=encriptar(req.body.password,salt);
    connection.query("SELECT * FROM recetas WHERE id=?", [id], function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify(results));
        //console.log(results);
    });
});
//put
app.put("/aniadirReceta", (req, res) => {
    let nombre = req.body.nombre;
    let src = req.body.src;
    let ingredientes = req.body.ingredientes;
    let procedimientos = req.body.procedimiento;
    connection.query("INSERT INTO recetas (nombre, src, ingredientes, procedimientos) VALUES (?,?,?,?)", [nombre, src, ingredientes, procedimientos], function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify({ "mensaje": true, "resultado": results }));
    });
});
//delete
app.delete("/delete", (req, res) => {
    let id = req.body.id;
    connection.query("DELETE FROM recetas WHERE id_receta = ?", [id], function (error, results, fields) {
        if (error)
            throw error;
        res.send(JSON.stringify({ "mensaje": true, "resultado": results }));
    });
});
const config = {
    hostname: "127.0.0.1",
    port: 3000,
};
app.listen(config, () => {
    console.log(`Conectado al servidor en http://localhost:${config.port}`);
});
