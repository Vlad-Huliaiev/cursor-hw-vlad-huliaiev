
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


let roundSum = Math.round(form) + Math.round(bigBoxForm) + Math.round(averBoxForm);
console.log(roundSum); //Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.
document.writeln("Ціла сума всіх товарів (round): " + roundSum);

let floorSum = Math.floor(form) + Math.floor(bigBoxForm) + Math.floor(averBoxForm);
console.log(floorSum);
document.writeln("Ціла сума всіх товарів (floor): " + floorSum);

let ceilSum = Math.ceil(form) + Math.ceil(bigBoxForm) + Math.ceil(averBoxForm);
console.log(ceilSum);
document.writeln("Ціла сума всіх товарів (ceil): " + ceilSum);

let hundredRound = (Math.round(roundSum/100))*100;
console.log(hundredRound); //Виведіть суму товарів округлену до сотень.
document.writeln("Округлення до сотень за допомогою round: " + hundredRound);

let hundredFloor = (Math.floor(floorSum/100))*100;
console.log(hundredFloor);
document.writeln("Округлення до сотень за допомогою floor: " + hundredFloor);

let hundredCeil = (Math.ceil(ceilSum/100))*100;
console.log(hundredCeil);
document.writeln("Округлення до сотень за допомогою ceil: " + hundredCeil);

let evenOddRound = null;
if(roundSum % 2 == 0){
    evenOddRound = true;
}   else {
evenOddRound = false;
}
console.log(evenOddRound);// Виведіть булеве значення: чи є сума всіх товарів парним чи непарним числом?
document.writeln("Кратне (round): " + evenOddRound);

let evenOddFloor = null;
if(floorSum % 2 == 0){
    evenOddFloor = true;
}   else {
evenOddFloor = false;
}
console.log(evenOddFloor);
document.writeln("Кратне (floor): " + evenOddFloor);

let evenOddCeil = null;
if(ceilSum % 2 == 0){
    evenOddCeil = true;
}   else {
evenOddCeil = false;
}
console.log(evenOddCeil);
document.writeln("Кратне (ceil): " + evenOddCeil);

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
/*
    Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
    Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
    Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
*/

