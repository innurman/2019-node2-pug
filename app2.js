
const express = require('express'); // from node_modules/*
const app = express();
const port = 3000;
const host = '127.0.0.1';

const { pool, sqlErr } = require('./modules/mysql-conn');

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

app.get(["/pug", "/pug/:page"], async (req, res) => {
    let page = req.params.page ? req.params.page : "list";
    let vals = {};
    switch(page) {
        case "list":
            vals.title = "게시글 리스트 입니다";
            let sql = "SELECT * FROM board ORDER BY id DESC";
            const connect = await pool.getConnection();
            const result = await connect.query(sql);
            vals.lists = result[0];
            res.render("list.pug", vals); // -> views/list.pug
            break;
        case "write":
            vals.title = "게시글 작성 입니다";
            res.render("write.pug", vals); // -> views/write.pug
            break;
        default:
            res.redirect("/"); // -> public/index.html
            break;
    }
});

app.get("/pug/view/:id", async (req, res) => {
    let vals = {
        title: "게시글 상세보기",
    }
    let id  = req.params.id;
    let sql = "SELECT * FROM board WHERE id="+id;
    const connect = await pool.getConnection();
    const result = await connect.query(sql);

    //res.json(result[0]);
    vals.data = result[0][0];
    res.render("view.pug", vals);
});

app.get("/pug/delete/:id", async (req, res) => {
    let id  = req.params.id;
    let sql = "DELETE FROM board WHERE id="+id;
    const connect = await pool.getConnection();
    const result = await connect.query(sql);

    //res.json(result[0]);
    if(result[0].affectedRows == 1) {
        res.redirect("/pug");
    }
    else {
        res.send("삭제에 실패하였습니다.");
    }
    //res.render("view.pug", )
});

// Update - GET
// http://127.0.0.1:3000/pug/update/15
app.get("/pug/update/:id", async (req, res) => {
    let vals = {
        title: "게시글 수정",
    }
    const id  = req.params.id; 
    const sql = "SELECT * FROM board WHERE id="+id;
    const connect = await pool.getConnection();
    const result = await connect.query(sql);

    //res.json(result[0]);
    vals.data = result[0][0];
    res.render("update.pug", vals);
});

// Update - GET
// Cannot POST /pug/update
app.post("/pug/update", async (req, res) => {
    const sqlVals = [];
    sqlVals.push(req.body.title);
    sqlVals.push(req.body.content);
    sqlVals.push(req.body.id);
    const sql = "UPDATE board SET title=?, content=? WHERE id=?";
    const connect = await pool.getConnection();
    const result = await connect.query(sql, sqlVals);

    //res.json(result[0]);
    // http://127.0.0.1:3000/pug/update/15
    // -> http://127.0.0.1:3000/pug/update
    // {"fieldCount":0,"affectedRows":1,"insertId":0,"info":"Rows matched: 1  Changed: 1  Warnings: 0","serverStatus":2,"warningStatus":0,"changedRows":1}

    if(result[0].changedRows == 1) {
        res.redirect("/pug")
    }
    else {
        res.send("수정에 실패!")
    }
});

/*
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
*/

app.post("/board", async (req, res) => {
    //let sql = 'INSERT INTO board SET title=?, writer=?, wdate=? ';
    //let val = [req.body.title, req.body.writer, new Date()];
    
    // content 추가
    let sql = "INSERT INTO board SET title=?, writer=?, wdate=?, content=? ";
    let val = [req.body.title, req.body.writer, new Date(), req.body.content];
    
    const connect = await pool.getConnection();
    const result = await connect.query(sql, val);

    connect.release();
    //res.json();
    res.redirect("/pug");
})