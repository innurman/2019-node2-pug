
/*
// npm i mysql
const mysql = require('mysql');

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '000000',
//     port: 3306,
//     database: 'node',
// });

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '000000',
    port: 3306,
    database: 'node',
    connectionLimit: 10,
});

// es6
module.exports = {
    mysql, // => (mysql: mysql)
    conn   // => conn: conn
}
*/

// npm i mysql2
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '000000',
    port: 3306,
    database: 'node',
    connectionLimit: 10,
});

const sqlErr = (err) => {
    console.error(err);
}

module.exports = {
    pool, sqlErr
}
