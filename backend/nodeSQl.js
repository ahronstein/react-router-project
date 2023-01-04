var mysql = require('mysql2');
const express = require('express');
const cors = require('cors')
const app = express();
const con = mysql.createConnection({
    host: "localhost",
    port: '3306',
    user: "root",
    password: "152653",
    database: "project"
});
app.use(cors())
app.use(express.json() )

app.get('/', (req, res) => {
    res.status(200).send('please ......')
})

app.get('/:table/:id?', (req, res) => {
    const table = req.params.table;
    const id = req.params.id;
    const subTable = req.params.subTable;
    const whereId = id ? `WHERE id = ${id}` : '';
    const query = req.query;
    let check = [];
    for (const property in query) {
        check.push(`${property} = ${query[property]}`);
    }
    const second = id?'AND':'WHERE'
    const whereQuery = check.length? `${second} ${check.join(' and ')}`:''

    con.query(`SELECT * FROM ${table} ${whereId} ${whereQuery}`, (err, resolte) => {
        if (err) return res.send({ msg: err?.sqlMessage })
        res.json(resolte)
    })
})
app.get('/:table/:id/:subTable', (req, res) => {
    let table = req.params.table;
    const id = req.params.id;
    const subTable = req.params.subTable;
    const whereId = id ? `WHERE ${table.slice(0, -1) + 'id'} = ${id}` : '';

    const query = req.query;
    let check = [];
    for (const property in query) {
        check.push(`${property} = ${query[property]}`);
    }
    const whereQuery = check.length? `AND ${check.join(' and ')}`:''

    con.query(`SELECT * FROM ${subTable} ${whereId} ${whereQuery}`, (err, resolte) => {
        if (err) return res.json({ msg: err?.sqlMessage })
        res.json(resolte)
    })
})

app.post("/users", (req, res) => {
    con.connect(function(err) {
        if (err) res.json({})

        console.log("password:",req.body.password);
        con.query(`SELECT * FROM users WHERE passwords = ${req.body.password}`, function (err, result, fields) {
          if (err) console.log(err) 
          console.log(result);
          
           res.json(result);
        });
      });
  });


app.listen(3010, (err) => {
    if (err) res.send(err)
    console.log('listen 3010');
})
// const exsist = ['photos', 'comments', 'posts', 'albums', 'todos', 'users'].find(item => item == table)
    // if (!exsist) return res.send('not correct table');