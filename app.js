
const express = require('express'); // from node_modules/*
const app = express();
const port = 3000;
const host = '127.0.0.1';

//
//const bodyParser = require('bodyParser')
// -> node.js-1x.x
//   + app.use(express.json());
//   + app.use(express.urlencoded({extended: false}));


// express 세팅 및 미들웨어 
app.set('view engine', 'pug');
app.set('views', './views');

// 정적라우터 세팅
app.use('/', express.static('./public'));

// bodyParser 세팅
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.locals.pretty = true;

// 서버 구동
app.listen(port, () => {
	console.log(`http://${host}:${port}`);
});


app.get(["/pug/", "/pug/:page"], (req, res) => {
    let page = req.params.page ? req.params.page : "list";
    let vals = {};
    switch(page) {
        case "list":
            vals.title = "게시글 리스트 입니다";
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
