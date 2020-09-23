function prom() {
    return new Promise(function(resolve, reject) {
    setTimeout(() => {
        let str = String.fromCharCode(Date.now() % 100000);
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
    console.log('Task 11: ' + strArr + ' - ' + (date2 - date1) + 'ms');
}


const chinese = getRandomChinese(6);

const container = document.getElementById('hw11');
export default container.innerHTML = `<h3>Task - 11</h3>
<span>В консолі</span>`;