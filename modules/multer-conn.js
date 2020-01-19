// npm i multer
const multer = require('multer');
const path = require('path');
const fs = require('fs');

console.log(__dirname);

// 함수 표현식 vs 함수 선언식

const destination = (req, file, cb) => {
    cb(null, '/tmp/my-uploads');
}

const filename = (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
}

const storage = multer.diskStorage({destination, filename});

function getPath() {
    // C:\Users\Administrator\Documents\node-es6\04.pug\modules
    let newPath = path.join(__dirname, "../uploads");
}

// C:\Users\Administrator\Documents\node-es6\04.pug\uploads
//console.log(path.join(__dirname, "../uploads"));