const express = require('express');
const path = require('path');
const User = require(path.join(__dirname, "../models/User"));
const router = express.Router();

// http://127.0.0.1:3000/user/create
// router.get("/create", async (req, res) => {
//     let result = await User.create({
//         username: "홍길동",
//         userid: "hone",
//         age: 24
//     });
//     res.json(result);
// });

router.get("/create", async (req, res) => {
    let result = await User.create({
        username: req.query.username,
        userid: req.query.userid,
        age: req.query.age
    });
    res.json(result);
});

http://127.0.0.1:3000/user/get
router.get("/get", async (req, res) => {
    let result = await User.findAll({
        order: [["id", "desc"]]
    });
    res.json(result);
});

//module.exports = {router};
module.exports = router;