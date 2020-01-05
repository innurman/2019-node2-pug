
const express = require('express'); // from node_modules/*
const app = express();
const port = 3000;
const host = '127.0.0.1';

// const mysql = require('mysql');
// const conn = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '000000',
//     port: 3306,
//     database: 'node',
//     connectionLimit: 10,
// });

// => mysql-conn.js's exports
// const db = require('./modules/mysql-conn');
//
// ES6
// module.exports = {
//     mysql, // => (mysql: mysql)
//     conn   // => conn: conn
// }

/*
const { mysql, conn } = require('./modules/mysql-conn');
*/

const { pool, sqlErr } = require('./modules/mysql-conn');

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

// http://127.0.0.1:3000/pug/list
// http://127.0.0.1:3000/pug/write
/*
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
        case "write":
            vals.title = "게시글 작성 입니다";
            res.render("write.pug", vals); // -> views/write.pug
            break;
        default:
            res.redirect("/"); // -> public/index.html
            break;
    }
});
*/

// async
app.get(["/pug/", "/pug/:page"], async (req, res) => {
    let page = req.params.page ? req.params.page : "list";
    let vals = {};
    switch(page) {
        case "list":
            vals.title = "게시글 리스트 입니다";

            /*
            vals.lists = [
                {id:1, title: "첫번째 글", writer: "관리자1", wdate: "2020-01-03", rnum: 5},
                {id:2, title: "두번째 글", writer: "관리자2", wdate: "2020-01-04", rnum: 6},
                {id:3, title: "세번째 글", writer: "관리자3", wdate: "2020-01-05", rnum: 5},
            ];
            */
           
            let sql = "SELECT * FROM board ORDER BY id DESC";
            const connect = await pool.getConnection();
            const result = await connect.query(sql);

            //res.render("list.pug", vals); // -> views/list.pug
            //res.json(result);
            // -> http://127.0.0.1:3000/pug
            
            //res.json(result[0]);
            // http://127.0.0.1:3000/pug

            // -> [x] vals = result[0];
            vals.list = result[0];
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

/*
// [2020-01-05 14:50:00] MySQL
// npm i mysql
// http://127.0.0.1:3000/sqltest
app.get("/sqltest", (req, res) => {
    let connect = conn.getConnection((err, connect) => {
        if(err) {
            res.send("Database 접속에 실패하였습니다.")
        }
        else {
            let sql = 'INSERT INTO board SET title="테스트입니다.", writer="관리자.", wdate="2020-01-05 14:55:00" ';
            //let sql = 'INSERT INTO board (title, writer, wdate) VALUES ('제목입니다3', '관리자', '2020-01-05 14:35:00');
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
*/

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
//
//
// http://127.0.0.1:3000
// PromisePoolConnection {
//   _events: [Object: null prototype] {
//     newListener: [Function],
//     removeListener: [Function]
//   },
//   _eventsCount: 2,
//   _maxListeners: undefined,
//   connection: PoolConnection {
//     _events: [Object: null prototype] { end: [Function], error: [Array] },
//     _eventsCount: 2,
//     _maxListeners: undefined,
//     config: ConnectionConfig {
//       isServer: undefined,
//       stream: undefined,
//       host: 'localhost',
//       port: 3306,
//       localAddress: undefined,
//       socketPath: undefined,
//       user: 'root',
//       password: '000000',
//       passwordSha1: undefined,
//       database: 'node',
//       connectTimeout: 10000,
//       insecureAuth: false,
//       supportBigNumbers: false,
//       bigNumberStrings: false,
//       decimalNumbers: false,
//       dateStrings: false,
//       debug: undefined,
//       trace: true,
//       stringifyObjects: false,
//       enableKeepAlive: false,
//       keepAliveInitialDelay: 0,
//       timezone: 'local',
//       queryFormat: undefined,
//       pool: [Pool],
//       ssl: false,
//       multipleStatements: false,
//       rowsAsArray: false,
//       namedPlaceholders: false,
//       nestTables: undefined,
//       typeCast: true,
//       maxPacketSize: 0,
//       charsetNumber: 224,
//       compress: false,
//       authPlugins: undefined,
//       authSwitchHandler: undefined,
//       clientFlags: 11203535,
//       connectAttributes: undefined,
//       maxPreparedStatements: 16000
//     },
//     stream: Socket {
//       connecting: false,
//       _hadError: false,
//       _parent: null,
//       _host: 'localhost',
//       _readableState: [ReadableState],
//       readable: true,
//       _events: [Object: null prototype],
//       _eventsCount: 4,
//       _maxListeners: undefined,
//       _writableState: [WritableState],
//       writable: true,
//       allowHalfOpen: false,
//       _sockname: null,
//       _pendingData: null,
//       _pendingEncoding: '',
//       server: null,
//       _server: null,
//       [Symbol(asyncId)]: 19,
//       [Symbol(kHandle)]: [TCP],
//       [Symbol(lastWriteQueueSize)]: 0,
//       [Symbol(timeout)]: null,
//       [Symbol(kBuffer)]: null,
//       [Symbol(kBufferCb)]: null,
//       [Symbol(kBufferGen)]: null,
//       [Symbol(kBytesRead)]: 0,
//       [Symbol(kBytesWritten)]: 0
//     },
//     _internalId: 0,
//     _commands: Denque { _head: 0, _tail: 0, _capacityMask: 3, _list: [Array] },
//     _command: undefined,
//     _paused: false,
//     _paused_packets: Denque { _head: 0, _tail: 0, _capacityMask: 3, _list: [Array] },
//     _statements: LRUCache {
//       [Symbol(max)]: 16000,
//       [Symbol(lengthCalculator)]: [Function: naiveLength],
//       [Symbol(allowStale)]: false,
//       [Symbol(maxAge)]: 0,
//       [Symbol(dispose)]: [Function: dispose],
//       [Symbol(noDisposeOnSet)]: false,
//       [Symbol(updateAgeOnGet)]: false,
//       [Symbol(cache)]: Map {},
//       [Symbol(lruList)]: [Yallist],
//       [Symbol(length)]: 0
//     },
//     serverCapabilityFlags: 3254779903,
//     authorized: true,
//     sequenceId: 3,
//     compressedSequenceId: 0,
//     threadId: 33,
//     _handshakePacket: Handshake {
//       protocolVersion: 10,
//       serverVersion: '5.7.28',
//       capabilityFlags: 3254779903,
//       connectionId: 33,
//       authPluginData1: <Buffer 47 48 66 04 11 76 30 79>,
//       authPluginData2: <Buffer 3b 04 48 1f 4e 59 19 51 57 21 3b 65 00>,
//       characterSet: 224,
//       statusFlags: 2,
//       autPluginName: 'mysql_native_password'
//     },
//     _fatalError: null,
//     _protocolError: null,
//     _outOfOrderPackets: [],
//     clientEncoding: 'utf8',
//     packetParser: PacketParser {
//       buffer: [],
//       bufferLength: 0,
//       packetHeaderLength: 4,
//       headerLen: 0,
//       length: 16,
//       largePacketParts: [],
//       firstPacketSequenceId: 0,
//       onPacket: [Function],
//       execute: [Function: executeStart],
//       _flushLargePacket: [Function: _flushLargePacket4]
//     },
//     serverEncoding: 'utf8',
//     connectTimeout: null,
//     _pool: Pool {
//       _events: [Object: null prototype] {},
//       _eventsCount: 0,
//       _maxListeners: undefined,
//       config: [PoolConfig],
//       _allConnections: [Denque],
//       _freeConnections: [Denque],
//       _connectionQueue: [Denque],
//       _closed: false
//     },
//     connectionId: 33
//   },
//   Promise: [Function: Promise]
// }

// http://127.0.0.1:3000/sqltest
app.get("/sqltest", async (req, res) => {
    //let sql = 'INSERT INTO board SET title="테스트입니다.", writer="관리자.", wdate="2020-01-05 14:55:00" ';
    let sql = 'INSERT INTO board SET title=?, writer=?, wdate=? ';
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


app.post("/board", async (req, res) => {
    let sql = 'INSERT INTO board SET title=?, writer=?, wdate=? ';
    let val = [req.body.title, req.body.writer, new Date()];
    
    const connect =await pool.getConnection();
    const result = await connect.query(sql, val);

    connect.release();
    //res.json();
    res.redirect("/pug");
})