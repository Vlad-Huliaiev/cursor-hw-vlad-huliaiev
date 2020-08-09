
document.write('<pre>');

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getCountrySalary(country, salary) {
    this.country = country;
    this.salary = salary;
}


// 1. Створіть функцію – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
function getMyTaxes(country, salary) {
    getCountrySalary.call(this, country, salary);
    this.taxes = +((salary * country.tax).toFixed(2));
}


// 2. Створіть функцію – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні.
function getMiddleTaxes(country) {
    getCountrySalary.call(this, country);
    this.middleTaxes = +((country.middleSalary * country.tax).toFixed(2));
}


// 3. Створіть функцію – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні.
function getTotalTaxes(country) {
    getCountrySalary.call(this, country);
    this.totalTaxesInCountry = +((country.middleSalary * country.tax * country.vacancies).toFixed(2));
}


// 4.   Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
//      Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
//      profit = salary - taxes;
function getMySalary(country) {
    
}

// 1. Створіть функцію – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
let myTaxesInCountry = new getMyTaxes(ukraine, 1670);
console.log('Taxes: ' + myTaxesInCountry.taxes);

// 2. Створіть функцію – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні.
console.log('Middle taxes in ukraine: ' + new getMiddleTaxes(ukraine).middleTaxes);
console.log('Middle taxes in latvia: ' + new getMiddleTaxes(latvia).middleTaxes);
console.log('Middle taxes in litva: ' + new getMiddleTaxes(litva).middleTaxes);

// 3. Створіть функцію  – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні.
console.log('Total taxes in ukraine: ' + new getTotalTaxes(ukraine).totalTaxesInCountry);
console.log('Total taxes in latvia: ' + new getTotalTaxes(latvia).totalTaxesInCountry);
console.log('Total taxes in litva: ' + new getTotalTaxes(litva).totalTaxesInCountry);

// 4.

