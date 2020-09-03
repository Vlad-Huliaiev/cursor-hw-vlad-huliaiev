
function prom() {
    return new Promise(function(resolve, reject) {
    setTimeout(() => {
        str = String.fromCharCode(Date.now() % 100000);
        resolve(str);
    }, 50);
});
}

async function getRandomChinese(length){
    const date1 = Date.now();

    let strArr = " ";
        for( let i = 0 ; i < length ; i++ ){
            strArr += await prom();
        }
        const date2 = Date.now();
    console.log(strArr + ' - ' + (date2 - date1) + 'ms');
}
console.log();
getRandomChinese(6);