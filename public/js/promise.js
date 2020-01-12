// 3. Changed with "async & await" model
async function init() {
    // getDays(function(d){
    //     console.log(d.getDay());
    // });
    // -> Promise model
    var date = await getDays();
    console.log(date.getDate());
}

function getDays() {
    var d = new Date();
    return new Promise(function(resolve, reject){
        resolve(d);
    });
}

init();


function getFoo() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve('foo');
        }, 300);
    });
}

async function foo() {
    var result = await getFoo();
    console.log(result);
}

foo();

// Read Promise model
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
