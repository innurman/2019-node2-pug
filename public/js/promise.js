// 1. Old

// 2. Promise model
/*
function init() {
    // 1. Old
    // getDays(function(d){
    //     console.log(d.getDay());
    // });
    // -> Promise model
    var date = getDays().then(function(d){
        console.log(d.getDate());
    });
}

function getDays(fn) {
    var d = new Date();
    //fn(d);
    // -> Promise model
    return promise = new Promise(function(resolve, reject){
        resolve(d);
    });
}
*/


// 3. Changed with "async & await" model
async function init() {
    // getDays(function(d){
    //     console.log(d.getDay());
    // });
    // -> Promise model
    var date = await getDays();
    console.log(d.getDate());
}

function getDays(fn) {
    var d = new Date();
    //fn(d);
    // -> Promise model
    return promise = new Promise(function(resolve, reject){
        resolve(d);
    });
}

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
init();