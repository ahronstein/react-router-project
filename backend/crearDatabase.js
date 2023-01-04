var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    port: '3306',
    user: "root",
    password: "152653",
    database: "project"
});


// Delete history
// for (let i = 1; i < 11; i++) {
//     let num = Math.random()*10000
//  con.query(`update users set passwords =${num}  where id = ${i} ` , function (err, result) {
//     if (err) throw err;
//     // console.log(`Number of records inserted:${result.affectedRows} in ${table}`);
// });   
    
// }

// CREATE DATABASE
// const table2 = []
// const tables = ['posts','photos','todos','users','albums','comments']

// tables.map(table => {
//     fetch(`https://jsonplaceholder.typicode.com/${table}`)
//         .then((response) => response.json())
//         .then((data) => {
//             const columns = Object.keys(data[0]).map(d => `${d} VARCHAR(1000)`)
//             const cell = data.map(item => Object.values(item))

//             con.query(`CREATE TABLE ${table} (${[columns]})`, function (err, result) {
//                 if (err) throw err;
//                 console.log(`create ${table}`);
//             })
//             con.query(`INSERT INTO ${table} VALUES ?`, [cell], function (err, result) {
//                 if (err) throw err;
//                 // console.log(`Number of records inserted:${result.affectedRows} in ${table}`);
//             });
//         });
// })



//to delete
// tables.map(t => {
    
// })


      // console.log(table);
            // console.log(columns);
            // console.log(cell);
            // console.log('------');