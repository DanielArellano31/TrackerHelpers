const express = require("express");
const mysql = require("mysql")

const app = express()
const PORT = 3000

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'HackCalvillo',
})

DB.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Conexion Exitosa!!")
});

app.get('/api/db', (req, res) => {
    const SQL_QUERY = 'SELECT * FROM usuarios'
    DB.query(SQL_QUERY, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    })
})

app.listen(PORT, () => {
    console.log('Servidor escuchando en http://localhost3000 ')
})