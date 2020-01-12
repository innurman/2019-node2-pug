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
router.get(["/get", "/get/:id"], async(req, res) => {
    let sql = '';
    if(req.params.id) {
        sql = "SELECT * FROM board WHERE id="+req.params.id;
    }
    else {
        // Undefined
        sql = "SELECT * FROM board ORDER BY id DESC";
    }
    
    const connect = await pool.getConnection();
    const result = await connect.query(sql);
    connect.release();
    res.json(result[0]);
});

//router.post();

// method-override
// https://www.npmjs.com/package/method-override
// : override with POST having ?_method=DELETE
//router.put();
//router.delete();


module.exports = router;