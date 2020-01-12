// supervisor app2
const express = require('express'); // from node_modules/*
const app = express();
const port = 3000;
const host = '127.0.0.1';

// Moved into router.pug
//const { pool, sqlErr } = require('./modules/mysql-conn');

// 서버 구동
app.listen(port, () => {
    console.log(`http://${host}:${port}`);
});


// express 세팅 및 미들웨어 
app.set('view engine', 'pug');
app.set('views', './views');

// 정적라우터 세팅
app.use('/', express.static('./public'));

// bodyParser 세팅
// -> post--body 사용 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.locals.pretty = true;

/* Router */
const pugRouter = require("./router/pug");
app.use("/pug", pugRouter);

// http://127.0.0.1:3000/sqltest
app.get("/sqltest", async (req, res) => {
    let sql = "INSERT INTO board SET title=?, writer=?, wdate=? ";
    let sqlVals = ["제목입니다22", "관리자22", "2020-01-05 15:55:00"];
    
    // await() => sync
    const connect = await pool.getConnection();
    //console.log(connect);
    const result = await connect.query(sql, sqlVals);

    // try {
    //     const result = await connect.query(sql);

    // }
    // catch(err) {
    //     sqlErr(err);
    // }

    connect.release();
    res.json(result);
});

