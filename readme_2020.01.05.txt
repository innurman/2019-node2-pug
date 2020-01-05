


========================================
04.pug 폴더 생성
VScode 에서 04.pug 폴더 열기
========================================






========================================
github new repository
========================================
---------------------------------------------
2019-node2-pug 생성
---------------------------------------------

https://github.com/new
-> 2019-node2-pug

git remote add origin https://github.com/innurman/2019-node2-pug.git


C:\Users\Administrator\Documents\node-es6\04.pug>git init
Initialized empty Git repository in C:/Users/Administrator/Documents/node-es6/04.pug/.git/

C:\Users\Administrator\Documents\node-es6\04.pug>git remote add origin https://github.com/innurman/2019-node2-pug.git

C:\Users\Administrator\Documents\node-es6\04.pug>





---------------------------------------------
2019-kn-node2-pug 풀
---------------------------------------------

Administrator@MSDN-SPECIAL MINGW64 ~/Documents/node-es6/티쳐
$ git clone https://github.com/booldook/2019-kn-node2-pug.git
Cloning into '2019-kn-node2-pug'...
remote: Enumerating objects: 18, done.
remote: Counting objects: 100% (18/18), done.
remote: Compressing objects: 100% (14/14), done.
remote: Total 18 (delta 0), reused 18 (delta 0), pack-reused 0
Unpacking objects: 100% (18/18), done.

Administrator@MSDN-SPECIAL MINGW64 ~/Documents/node-es6/티쳐
$ cd 2019-kn-node2-pug/

Administrator@MSDN-SPECIAL MINGW64 ~/Documents/node-es6/티쳐/2019-kn-node2-pug (                                                                                                                                                             master)
$ git pull
Already up to date.




---------------------------------------------
commit & push
---------------------------------------------



C:\Users\Administrator\Documents\node-es6\04.pug>git commit



C:\Users\Administrator\Documents\node-es6\04.pug>git push origin master



C:\Users\Administrator\Documents\node-es6\04.pug>git pull origin master


https://github.com/innurman/2019-node2-pug





========================================
app.js 생성
========================================


C:\Users\Administrator\Documents\node-es6\04.pug>npm init -y
Wrote to C:\Users\Administrator\Documents\node-es6\04.pug\package.json:

{
  "name": "04.pug",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}



package.json 변경



  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
--> 
    "dev": "supervisor app",
    "start": "node app",
    "build": "pm2 start app"
  },


C:\Users\Administrator\Documents\node-es6\04.pug>supervisor app


========================================
app.js 생성
========================================



C:\Users\Administrator\Documents\node-es6\04.pug>npm i express pug
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.

> core-js@2.6.11 postinstall C:\Users\Administrator\Documents\node-es6\04.pug\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN 04.pug@1.0.0 No description
npm WARN 04.pug@1.0.0 No repository field.

+ pug@2.0.4
+ express@4.17.1
added 113 packages from 173 contributors and audited 230 packages in 6.546s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


========================================
app.js 생성
========================================

C:\Users\Administrator\Documents\node-es6\04.pug>npm start

list.pug
write.pug

./inc/head.pug
./inc/footer.pug

http://127.0.0.1:3000/pug/list
http://127.0.0.1:3000/pug/write

./layout/board.pug


doctype html
html(lang="ko")
    include inc/head.pug
    body
        div.container.my-2

->

extends ./layout/board.pug
block title
    ...
block content
    ...
---------------------------------------------
extends ./layout/board.pug
block title
    div.jumbotron.py-2
        h2= title
            small 게시판 리스트
block content
    .list-wrap
        table.table.table-bordered
            thread
                tr
                    th 번호
                    th 제목
                    th 작성자
                    th 작성일
                    th 조회수
            tbody
---------------------------------------------


C:\Users\Administrator\Documents\node-es6\04.pug>supervisor app

=======================================================
=======================================================

---------------------------------------------
doctype html
html(lang="ko")
    include ../inc/head.pug
    body
        .container
            block title
            block content
        
        include ../inc/footer.pug
        include ../inc/script.pug

---------------------------------------------

views/inc/script.pug
public/js/board.js


http://127.0.0.1:3000/pug/list
http://127.0.0.1:3000/pug/write

=======================================================
views/inc/nav.pug
=======================================================

.d-flex.justify-content-between.align-items-center.p-3.bg-dark.text-light
    div.logo 로고
    .nav-wrap.d-flex
        .p-2
            a(href="/pug/list") 리스트
        .p-2
            a(href="/pug/write") 글작성


views/layout/board.pug

doctype html
html(lang="ko")
    include ../inc/head.pug
    body
        include ../inc/nav.pug
        .container




=======================================================
=======================================================

app.js - list 추가

app.get(["/pug/", "/pug/:page"], (req, res) => {
    let page = req.params.page ? req.params.page : "list";
    let vals = {};
    switch(page) {
        case "list":
            vals.title = "게시글 리스트 입니다";
            vals.lists = [
                {id:1, title: "첫번째 글", writer: "관리자1", wdate: "2020-01-03", rnum: 5},
                {id:2, title: "두번째 글", writer: "관리자2", wdate: "2020-01-04", rnum: 6},
                {id:3, title: "세번째 글", writer: "관리자3", wdate: "2020-01-05", rnum: 5},
            ];
            res.render("list.pug", vals); // -> views/list.pug
            break;

list.pug 추가

block content
    table.table.table-bordered
        thread
            tr
                th 번호
                th 제목
                th 작성자
                th 작성일
                th 조회수
        tbody
            each list in lists
                tr
                    td= list.id
                    td= list.title
                    td= list.writer
                    td= list.wdate
                    td= list.rnum


http://127.0.0.1:3000/pug/list 확인

=======================================================
MySQL
=======================================================
[bitnami-wamp]
bitnami-wampstack-7.1.33-0-windows-x64-installer
http://bitly.kr/Migug1S
https://onedrive.live.com/?authkey=%21AFgtNGDxM5l4vR8&id=AFC2D2776122505F%21187228&cid=AFC2D2776122505F

[HeidiSQL]
https://www.heidisql.com/download.php


https://www.npmjs.com/search?q=mysql



C:\Users\Administrator\Documents\node-es6\04.pug>npm i mysql
npm WARN 04.pug@1.0.0 No description
npm WARN 04.pug@1.0.0 No repository field.

+ mysql@2.17.1
added 9 packages from 14 contributors and audited 243 packages in 4.268s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


=======================================================
=======================================================




=======================================================
=======================================================

CREATE TABLE `` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NULL DEFAULT NULL,
	`writer` VARCHAR(255) NULL DEFAULT NULL,
	`wdate` DATETIME NULL,
	`rnum` INT NULL DEFAULT '0',
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_unicode_ci'
;

INSERT INTO board (title, writer, wdate) 
VALUES ('제목입니다.', '관리자', '2020-01-05 14:35:00');

=======================================================
=======================================================


const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '000000',
    port: 3306,
    database: 'node',
});

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '000000',
    port: 3306,
    database: 'node',
    connectionLimit: 10,
});


// [2020-01-05 14:50:00] MySQL
app.get("/sqltest", (req, res) => {
    let connect = conn.getConnection((err, connect) => {
        if(err) {
            res.send("Database 접속에 실패하였습니다.")
        }
        else {
            let sql = 'INSERT INTO board SET title="테스트입니다.", write="관리자.", wdate="2020-01-05 14:55:00" ';
            connect.query(sql, (err, result) => {
                if(err) {
                    res.send("SQL문이 실패하였습니다.")
                }
                else {
                    res.json(result);
                }
            });
        }
    });
});


=======================================================
=======================================================


// npm i mysql2
/*
app.get("/sqltest", (req, res) => {
    // Promise model
    const connect = pool.getConnection();
    // http://127.0.0.1:3000
    // Promise { <pending> }
    console.log(connect);
});
*/

// Promise : async()--await() from ES7
app.get("/sqltest", async (req, res) => {
    // await() => sync
    const connect = await pool.getConnection();
    console.log(connect);
});



http://127.0.0.1:3000
PromisePoolConnection {
  _events: [Object: null prototype] {
    newListener: [Function],
    removeListener: [Function]
  },
  _eventsCount: 2,
  _maxListeners: undefined,
  connection: PoolConnection {
    _events: [Object: null prototype] { end: [Function], error: [Array] },
    _eventsCount: 2,
    _maxListeners: undefined,
    config: ConnectionConfig {
      isServer: undefined,
      stream: undefined,
      host: 'localhost',
      port: 3306,
      localAddress: undefined,
      socketPath: undefined,
      user: 'root',
      password: '000000',
      passwordSha1: undefined,
      database: 'node',
      connectTimeout: 10000,
      insecureAuth: false,
      supportBigNumbers: false,
      bigNumberStrings: false,
      decimalNumbers: false,
      dateStrings: false,
      debug: undefined,
      trace: true,
      stringifyObjects: false,
      enableKeepAlive: false,
      keepAliveInitialDelay: 0,
      timezone: 'local',
      queryFormat: undefined,
      pool: [Pool],
      ssl: false,
      multipleStatements: false,
      rowsAsArray: false,
      namedPlaceholders: false,
      nestTables: undefined,
      typeCast: true,
      maxPacketSize: 0,
      charsetNumber: 224,
      compress: false,
      authPlugins: undefined,
      authSwitchHandler: undefined,
      clientFlags: 11203535,
      connectAttributes: undefined,
      maxPreparedStatements: 16000
    },
    stream: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'localhost',
      _readableState: [ReadableState],
      readable: true,
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: true,
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      [Symbol(asyncId)]: 19,
      [Symbol(kHandle)]: [TCP],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    _internalId: 0,
    _commands: Denque { _head: 0, _tail: 0, _capacityMask: 3, _list: [Array] },
    _command: undefined,
    _paused: false,
    _paused_packets: Denque { _head: 0, _tail: 0, _capacityMask: 3, _list: [Array] },
    _statements: LRUCache {
      [Symbol(max)]: 16000,
      [Symbol(lengthCalculator)]: [Function: naiveLength],
      [Symbol(allowStale)]: false,
      [Symbol(maxAge)]: 0,
      [Symbol(dispose)]: [Function: dispose],
      [Symbol(noDisposeOnSet)]: false,
      [Symbol(updateAgeOnGet)]: false,
      [Symbol(cache)]: Map {},
      [Symbol(lruList)]: [Yallist],
      [Symbol(length)]: 0
    },
    serverCapabilityFlags: 3254779903,
    authorized: true,
    sequenceId: 3,
    compressedSequenceId: 0,
    threadId: 33,
    _handshakePacket: Handshake {
      protocolVersion: 10,
      serverVersion: '5.7.28',
      capabilityFlags: 3254779903,
      connectionId: 33,
      authPluginData1: <Buffer 47 48 66 04 11 76 30 79>,
      authPluginData2: <Buffer 3b 04 48 1f 4e 59 19 51 57 21 3b 65 00>,
      characterSet: 224,
      statusFlags: 2,
      autPluginName: 'mysql_native_password'
    },
    _fatalError: null,
    _protocolError: null,
    _outOfOrderPackets: [],
    clientEncoding: 'utf8',
    packetParser: PacketParser {
      buffer: [],
      bufferLength: 0,
      packetHeaderLength: 4,
      headerLen: 0,
      length: 16,
      largePacketParts: [],
      firstPacketSequenceId: 0,
      onPacket: [Function],
      execute: [Function: executeStart],
      _flushLargePacket: [Function: _flushLargePacket4]
    },
    serverEncoding: 'utf8',
    connectTimeout: null,
    _pool: Pool {
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      config: [PoolConfig],
      _allConnections: [Denque],
      _freeConnections: [Denque],
      _connectionQueue: [Denque],
      _closed: false
    },
    connectionId: 33
  },
  Promise: [Function: Promise]
}



=======================================================
=======================================================

block content
    form(action="/board" method="post" name="writeForm")
        table.table.table-bordered
            tbody
                tr
                    td 작성자
                    td
                        input(type="text" name="writer" placeholder="작성자")
                tr
                    td 제목
                    td
                        input(type="text" name="title" placeholder="한줄작성")
        .bts.text-center.my-3
            button.btn.btn-primary 저장
            button.btn.btn-danger(type="reset") 다시작성
                        


app.post("/board", async (req, res) => {
    let sql = 'INSERT INTO board SET title=?, writer=?, wdate=? ';
    let val = [req.body.title, req.body.writer, new Date()];
    
    const connect =await pool.getConnection();
    const result = await connect.query(sql, val);

    connect.release();
    //res.json();
    res.redirect("/pug");
})

=======================================================
Promise model example
=======================================================

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise


=======================================================
=======================================================


=======================================================
=======================================================


=======================================================
Reference
=======================================================
https://html2pug.now.sh
https://getbootstrap.com/
https://www.bootstrapcdn.com
https://opentutorials.org/course/3370
https://opentutorials.org/course/2136/11951

Firebase
https://cocomo.tistory.com/487

https://www.inflearn.com/courses?s=es6
https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
https://www.inflearn.com/course/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D
https://www.youtube.com/results?search_query=%EB%B6%80%ED%8A%B8%EC%8A%A4%ED%8A%B8%EB%9E%A9
https://www.youtube.com/results?search_query=%EB%B6%80%ED%8A%B8%EC%8A%A4%ED%8A%B8%EB%9E%A9+%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9


---------------------------------------------

---------------------------------------------
---------------------------------------------

---------------------------------------------


=======================================================
=======================================================




=======================================================
=======================================================


=======================================================
=======================================================


=======================================================
=======================================================


=======================================================
=======================================================

=======================================================
=======================================================

