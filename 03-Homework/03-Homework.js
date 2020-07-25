document.write('<pre>');

function getMaxDigit() { //Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
    while(number > 0) {
        max = parseInt(Math.max(max, number % 10));
        number /= 10;
    }
    return max;
}
let number = +(prompt('Введіть число для пошуку найбільшого в ньому.', ''));
const A = parseInt(number);
let max = 0;
const maxDigit = getMaxDigit();
console.log('Ваше число: ' + A);
console.log(maxDigit);

function getDeterminesDegree() { //Створити функцію, яка визначає ступінь числа.
for(let i = 1; i <= b; i++){
        s *= a;
    }
    return s;
}
let a = +(prompt('Введіть число що будете підносити до степеня.', ''));
let b = +(prompt('Введіть ступінь.', ''));
let s = 1;
const degreeDetermines = getDeterminesDegree();
console.log('Ваше число a: ' + a);
console.log('Ваше ступінь b: ' + b);
console.log('Результа "a" в ступіні "b": ' + degreeDetermines);

function capitalizeFirstLetter(string) { //Створити функцію, яка форматує ім'я, роблячи першу букву великою
    return string.charAt(0).toUpperCase() + string.slice(1);
}
let word = prompt('Введіть ім`я(у довільному регістрі).', '');
const text = word.toLowerCase();
console.log('Ваше ім`я(у довільному регістрі): ' + word);
console.log(capitalizeFirstLetter(text));

function amountAfterTaxes() { //Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
return parseInt(salary * ((100 - 19.5) / 100));
}
let salary = +(prompt('Введіть вашу зарплатню(без податків).', ''));
const salaryWithoutTaxes = amountAfterTaxes();
console.log('Ваше зарплатня(без податків): ' + salary);
console.log('Ваша зарплатня за вичитом податків: ' + salaryWithoutTaxes);

function getRandomInteger(min, max) { //Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
return Math.floor(Math.random() * (max - min + 1)) + min;
}

let n = +(prompt('Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Введіть початок діапазону(меньше за наступне).', ''));
let m = +(prompt('Введіть кінець діапазону(більше за попередне).', ''));
const randomInteger = getRandomInteger(n, m);
console.log('Ваше число N: ' + n);
console.log('Ваше число M: ' + m);
console.log('Ваше випадкове число: ' + randomInteger);

function isPalindrome(strMas) { //Створіть функцію, яка перевіряє, чи є слово паліндромом.
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
let str = prompt('Введіть текст для перевірки чи є воно паліндромом.', '').toLowerCase();
str = str.replace(/\s+/g, '');
const strMas = str.split('');
console.log('Ваше текст/слово для перевірки чи є воно паліндромом: ' + str);
console.log(isPalindrome(strMas));
