
document.write('<pre>');

// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри:
function getRandomArray(length, min, max) {
    if(length < 0) {
        length = 10;
    }
    let arr = [];
    arr.length = parseInt(length);

    for(let i = 0; i < arr.length; i++){
        arr[i] = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return arr;
}

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
function getAverage(arr) {
    const averageSumArr = arr.reduce((res, i) => {
        return +res + +i;
    }, 0)
    return averageSumArr / arr.length;
}

// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.
function getMedian(arr) {
    let
        arrMedian = JSON.parse(JSON.stringify(arr)),
        middle = 0,
        lengthHalf = arr.length / 2
    ;
    arrMedian = arr.slice(0);
    arrMedian.sort( (a, b) => a - b );

    middle += +arrMedian[ Math.ceil(lengthHalf) - 1 ];
    middle += +arrMedian[ Math.floor(lengthHalf) ];

    return middle / 2;
}

/*
// 2. Створіть функцію getMode(...numbers) – яка вираховує моду всіх переданих в неї аргументів.
function getMode(arr) {
    let modeArray = JSON.parse(JSON.stringify(arr));
    modeArray.sort( (a, b) => a - b );
    let
        key, result = [ ],
        count = { },
        max = -Infinity,
        noMode = "The array hasn't mode.",
        noModeTrue = true
    ;

    modeArray.forEach( (item) => {
        if ( !(item in count) ) count[item] = 0;
            count[item]++
            max = max < count[item] ? count[item] : max;
        } );

        if (max <= 1) return noMode;

        for (key in count) {
            if ( count[key] === max ) {
                result.push(key)
            } else {
                noModeTrue = false
            }
        }
    return noModeTrue ? noMode : result;
}
*/

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
function filterEvenNumbers(arr) {
    let arrEvenNumbers = JSON.parse(JSON.stringify(arr));
    arrEvenNumbers = arrEvenNumbers.filter((i) => {return i % 2});
    return arrEvenNumbers;
}

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
function countPositiveNumbers(arr) {
    let
        count = 0,
        countArray = arr
    ;
    countArray = countArray.filter((i) => {return i > 0});
    countArray.forEach((item) => {
        count += 1;
    });
    return count;
}

// 7.
function getDividedByFive(arr) {
    let arrDividedByFive = JSON.parse(JSON.stringify(arr));
    arrDividedByFive = arrDividedByFive.filter((i) => {return !(i % 5)});
    return arrDividedByFive;
}


// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
let length = +prompt('Введіть довжину масиву: ');
let min = +prompt('Введіть початок діапазону(меньше за наступне).', '');
let max = +prompt('Введіть кінець діапазону(більше за попередне).', '');
const randomArray = getRandomArray(length, min, max);
console.log('Масив із випадковими числами: ' + randomArray);

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
const averageSum = getAverage(randomArray);
console.log('Середня сума масиву: ' + averageSum);

// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.
const median = getMedian(randomArray);
const arrMedian = JSON.parse(JSON.stringify(randomArray));
console.log('Відсортований масив: ' + arrMedian.sort((a, b) => a - b )); //
console.log('Медіана масиву: ' + median);

/*// 2. Створіть функцію getMode(...numbers) – яка вираховує моду всіх переданих в неї аргументів.
const mode = getMode(randomArray);
console.log('Мода масиву:');
console.log(mode);
*/

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції.
const filterArr = filterEvenNumbers(randomArray);
console.log(filterArr);

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
const negativeRandomArray = getRandomArray(length, -10, 10);
console.log('Масив із випадковими від`ємними значеннями: ' + negativeRandomArray);
const positive = countPositiveNumbers(negativeRandomArray);
console.log(positive);

// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5.
const dividedByFive = getDividedByFive(randomArray);
console.log(dividedByFive);


document.writeln(`
${'Завдання 1 - Створіть функцію – яка повертає масив випадкових цілих чисел:'}
${'Масив із випадковими числами: ' + randomArray}<br>
${'Завдання 3 - Створіть функцію – яка рахує середнє арифметичне всіх переданих в неї аргументів:'}
${'Середня сума масиву: ' + Math.floor(averageSum * 100) / 100}<br>
${'Завдання 4 - Створіть функцію – яка рахує медіану всіх переданих в неї аргументів:'}
${'Медіана масиву: ' + median}<br>
${'Завдання 5 - Створіть функцію – яка фільтрує парні числа передані як аргументи функції:'}
${'Фільтрує парні числа: ' + filterArr}<br>
${'Завдання 6 - Створіть функцію – яка порахує кількість чисел більших 0:'}
${'Масив з від`ємними значеннями: ' + negativeRandomArray}
${'Фільтрує парні числа: ' + positive}<br>
${'Завдання 7 - Створіть функцію – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5:'}
${'Фільтрує парні числа: ' + dividedByFive}<br>
`)

// ${'Завдання 2 - Створіть функцію – яка вираховує моду всіх переданих в неї аргументів:'}
// ${'Мода масиву: ' + mode}<br>