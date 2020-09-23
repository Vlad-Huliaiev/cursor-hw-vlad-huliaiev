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
    let myTaxesInCountry = new getMyTaxes(ukraine, 1950);


const container = document.getElementById('hw7');
export default container.innerHTML = `<h3>Task - 7</h3>
<span>Податків заплачено від 1950 usd, Ukraine:  ${myTaxesInCountry.taxes}</span>`;
