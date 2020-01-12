const express = require('express');
const router = express.Router();

/*
/pug/update/4
----app.js----
const pugRouter = require("./router/pug");
app.use("/pug", pugRouter);
*/

// http://127.0.0.1:3000/router/sample
router.get("/sample", (req, res) => {
    res.send("/router/sample");
});

module.exports = router;