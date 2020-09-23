function getRandomArray(length, min, max) {
        let arr = [];
        arr.length = parseInt(length);
        for(let i = 0; i < arr.length; i++){
            arr[i] = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return arr;
    }
const randomArray = getRandomArray(11, 37, 73);
console.log('Task - 5: ' + randomArray);
const container = document.getElementById('hw5');
export default container.innerHTML = `<h3>Task - 5</h3>
<span>Масив із випадковими числами: {${randomArray}}</span>`;