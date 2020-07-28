
document.write('<pre>');

// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
function rand(b) {
    var a = (new Date).getMilliseconds();
    a = (25173 * a + 13849) % 65536;
            return a % b + 1
}

function getMaxDigit() {
    while(number > 0) {
        max = parseInt(Math.max(max, number % 10));
        number /= 10;
    }
    return max;
}

// 2. Створити функцію, яка визначає ступінь числа.
function getDeterminesDegree() {
    for(let i = 1; i <= b; i++){
        s *= a;
    }
    return s;
}

// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
function amountAfterTaxes() {
    return parseInt(salary * ((100 - 19.5) / 100));
}

// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 10. Створіть функцію, яка перевіряє, чи є слово паліндромом.
function isPalindrome(strMas) {
var strLen = strMas.length;
    var c = 0;
    for(let i = 0; i <= strLen; i++){
        if(strMas[i] === strMas[strLen - 1 - i]){
            c = 'Цей текст/слово є паліндромом';
        } else {
            c = 'Цей текст/слово не є паліндромом';
            return c;
        }
    }
    return c;
}

// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
let number = rand(100000);
const A = parseInt(number);
let max = 0;
const maxDigit = getMaxDigit();
console.log('Ваше число: ' + A);
console.log(maxDigit);

// 2. Створити функцію, яка визначає ступінь числа.
let a = +(prompt('Введіть число що будете підносити до степеня.', ''));
let b = +(prompt('Введіть ступінь.', ''));
let s = 1;
const degreeDetermines = getDeterminesDegree();
console.log('Ваше число a: ' + a);
console.log('Ваше ступінь b: ' + b);
console.log('Результа "a" в ступіні "b": ' + degreeDetermines);

// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою
let word = prompt('Введіть ім`я(у довільному регістрі).', '');
const text = word.toLowerCase();
console.log('Ваше ім`я(у довільному регістрі): ' + word);
console.log(capitalizeFirstLetter(text));

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
let salary = +(prompt('Введіть вашу зарплатню(без податків).', ''));
const salaryWithoutTaxes = amountAfterTaxes();
console.log('Ваше зарплатня(без податків): ' + salary);
console.log('Ваша зарплатня за вичитом податків: ' + salaryWithoutTaxes);

// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
let n = +(prompt('Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Введіть початок діапазону(меньше за наступне).', ''));
let m = +(prompt('Введіть кінець діапазону(більше за попередне).', ''));
const randomInteger = getRandomInteger(n, m);
console.log('Ваше число N: ' + n);
console.log('Ваше число M: ' + m);
console.log('Ваше випадкове число: ' + randomInteger);

// 10. Створіть функцію, яка перевіряє, чи є слово паліндромом.
let str = prompt('Введіть текст для перевірки чи є воно паліндромом.', '').toLowerCase();
str = str.replace(/\s+/g, '');
const strMas = str.split('');
console.log('Ваше текст/слово для перевірки чи є воно паліндромом: ' + str);
console.log(isPalindrome(strMas));
