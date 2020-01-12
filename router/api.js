const express = require('express');
const router = express.Router();
const { pool, sqlErr } = require("../modules/mysql-conn");

/*
get : Read/Select
post : Create/Insert
put : Update/Update
delete : Delete/Delete
*/

// RESTFUL API
// http://127.0.0.1:3000/api.html
router.get(["/get", "/get/:id"], async(req, res) => {
    let sql = '';
    const vals = {
        title: "API 게시판"
    };
    if(req.params.id) {
        sql = "SELECT * FROM board WHERE id="+req.params.id;
    }
    else {
        // Undefined
        sql = "SELECT * FROM board ORDER BY id DESC";
    }
    
    const connect = await pool.getConnection();
    const result = await connect.query(sql);
    vals.data  = result[0];
    connect.release();
    res.json(vals);
});

// write and update from board-api.js
router.post("/post", async (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let writer = req.body.writer;
    let wdate = new Date();
    let sql = "INSERT INTO board SET title=?, content=?, writer=?, wdate=?";
    let sqlVals = [title, content, writer, wdate];
    
    let connect = await pool.getConnection();
    let result = await connect.query(sql, sqlVals);
    connect.release();
    res.json(result[0]);
});

// method-override
// https://www.npmjs.com/package/method-override
// : override with POST having ?_method=DELETE
//router.put();
//router.delete();


module.exports = router;