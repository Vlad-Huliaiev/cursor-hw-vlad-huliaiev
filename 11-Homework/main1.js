//
//
//const p = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        str = String.fromCharCode(Date.now() % 100000);
//        resolve(str);
//    }, 50);
//})
//
//p.then(function(value) {
//    const r = value;
//        console.log(value);
//        console.log(r);
//    return(r);
//}).then(function (length){
//  const date1 = Date.now();
//    let strLen = " ";
//    let a = r;
//    console.log(a);
//        for( let i = 0 ; i < length ; i++ ){
//            strLen += a;
//        }
//    const date2 = Date.now();
//    console.log(strLen + ' - ' + (date2 - date1) + 'ms');
//
//})


//const p = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        str = String.fromCharCode(Date.now() % 100000);
//        resolve(str);
//    }, 50);
//})
//
//p.then(function(value) {
//    const r = value;
//        console.log(value);
//        console.log(r);
//    return Promise.resolve(value);
//})
//
//function getRandomChinese(length){
//  const date1 = Date.now();
//    let strLen = " ";
//    let a =
//        for( let i = 0 ; i < length ; i++ ){
//            strLen += a;
//        }
//    const date2 = Date.now();
//    console.log(strLen + ' - ' + (date2 - date1) + 'ms');
//
//}
//getRandomChinese(4)

//const p = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        str = String.fromCharCode(Date.now() % 100000);
//        resolve(str);
//    }, 50);
//});
//
//async function getRandomChinese(length){
//    const date1 = Date.now();
//
//    let strArr = " ";
//        for( let i = 0 ; i < length ; i++ ){
//            strArr += await p;
//        }
//        const date2 = Date.now();
//    console.log(strArr + ' - ' + (date2 - date1)*length + 'ms');
//}
//getRandomChinese(3);


//function getRandomChinese(length) {
//    let timer = 0, i = 0, str = " ";
//    let arr = String.fromCharCode(Date.now().toString().slice(-5));
//    const timerId = setInterval(() => {
//    timer++;
//        for ( ; i < length ; i++ ){
//            str += arr;
//        }
//        console.log(str);
//
//        if(i === length) clearInterval(timerId);
//    }, 100);
//}
//getRandomChinese(5);
