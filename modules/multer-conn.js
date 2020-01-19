// npm i multer
const multer = require('multer');
const path = require('path');
const fs = require('fs');

console.log(__dirname);

// 함수 표현식 vs 함수 선언식

const destination = (req, file, cb) => {
    // cb(null, '/tmp/my-uploads');
    cb(null, getPath());
}

const filename = (req, file, cb) => {
    //cb(null, file.fieldname + '-' + Date.now());
    cb(null, getFile(file.fieldname).newName);
}

//
// https://www.npmjs.com/package/multer
//
// DiskStorage
// The disk storage engine gives you full control on storing files to disk.

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/tmp/my-uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })
// var upload = multer({ storage: storage })
//
const storage = multer.diskStorage({destination, filename});


function getPath() {
    // C:\Users\Administrator\Documents\node-es6\04.pug\modules
    let newPath = path.join(__dirname, "../uploads"+makePath());
}

// C:\Users\Administrator\Documents\node-es6\04.pug\uploads
//console.log(path.join(__dirname, "../uploads"));

function makePath() {
    let d = new Date();
    let year = d.getFullYear(); // 2020
    let month = d.getMonth();   // 0-11
    return year.substr(2) + zp(month+1);
}

function zp(d) {
    return d<10 ? "0"+d : d;
}

function getFile(oriFile) {
    let ext = path.extname(oriFile);  // .jpg
    let name = path.basename(oriFile, ext);
    let f1 = makePath();       // 2001
    let f2 = Date().now();     // timestamp
    let f3 = Math.floor(Math.random() * 90) + 10; // 10 ~ 99
    return {
        newName: f1 + "-" + f2 + "-" + f3 + ext,
        newExt: ext,
        newFile: f1 + "-" + f2 + "-" + f3
    }
}


