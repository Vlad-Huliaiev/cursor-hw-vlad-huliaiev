
const form = 15.678;
const bigBoxForm = 123.965;
const averBoxForm = 90.2345;

document.write('<pre>');

let max = Math.max(form, bigBoxForm, averBoxForm);
console.log(max); //Використовуючи вбудований об'єкт Math – виведіть максимальне число
document.writeln("Максимальне число: " + max);

let min = Math.min(form, bigBoxForm, averBoxForm);
console.log(min); //Використовуючи вбудований об'єкт Math – виведіть мінімальне число
document.writeln("Мінімальне число: " + min);

let sum = form + bigBoxForm + averBoxForm;
console.log(sum); //Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
document.writeln("Сума всіх товарів: " + sum);

let minSum = Math.floor(form) + Math.floor(bigBoxForm) + Math.floor(averBoxForm);
console.log(minSum); //Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.
document.writeln("Ціла сума всіх товарів 1: " + minSum);

let maxSum = Math.ceil(form) + Math.ceil(bigBoxForm) + Math.ceil(averBoxForm);
console.log(maxSum); //Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.
document.writeln("Ціла сума всіх товарів 2: " + maxSum);

let hundredRound1 = (Math.floor(minSum/100))*100;
console.log(hundredRound1); //Виведіть суму товарів округлену до сотень.
document.writeln("Округлення до сотень за допомогою floor: " + hundredRound1);

let hundredRound2 = (Math.ceil(maxSum/100))*100;
console.log(hundredRound2); //Виведіть суму товарів округлену до сотень.
document.writeln("Округлення до сотень за допомогою ceil: " + hundredRound2);

let evenOdd1 = null;
if(minSum % 2 == 0){
    evenOdd1 = true;
}   else {
evenOdd1 = false;
}
console.log(evenOdd1);// Виведіть булеве значення: чи є сума всіх товарів парним чи непарним числом?
document.writeln("Кратне 1: " + evenOdd1);

let evenOdd2 = null;
if(maxSum % 2 == 0){
    evenOdd2 = true;
}   else {
evenOdd2 = false;
}
console.log(evenOdd2);// Виведіть булеве значення: чи є сума всіх товарів парним чи непарним числом?
document.writeln("Кратне 2: " + evenOdd2);

const Cash = 500;
let remainAmount = Cash - sum;
console.log(remainAmount); //Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
document.writeln("Решта: " + remainAmount);

let averageSum1 = Math.round(((Math.round(form*100)/100 + Math.round(bigBoxForm*100)/100 + Math.round(averBoxForm*100)/100)/3)*100)/100;
let averageSum2 = Math.round((sum/3)*100)/100;
console.log(averageSum1);
console.log(averageSum2);   //Виведіть середнє значення цін, округлене до другого знаку після коми.
document.writeln("Середня сума товарів: " + averageSum2);

const discountMin = 1;
const discountMax = 100;
const sumRound100 = Math.round(sum*100)/100;
let discount = Math.floor(Math.random() * (discountMax - discountMin) + discountMin);

let sumDiscount = Math.round((sumRound100 - (sumRound100 * (discount/100)))*100)/100;
let netProfit = Math.round(((sumRound100/2) - (sumRound100 * (discount/100)))*100)/100;

console.log(sumRound100);
console.log(discount + "%");
console.log(sumDiscount);
console.log(netProfit);
document.writeln("Скидка: " + discount + "%");
document.writeln("До оплати: " + sumDiscount);
document.writeln("СЧистий прибуток: " + netProfit);
/* Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
  Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
  Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
*/

