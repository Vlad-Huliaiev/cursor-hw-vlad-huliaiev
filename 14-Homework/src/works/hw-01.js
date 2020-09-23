const FORM = 15.678;
const BIG_BOX_FORM = 123.965;
const AVER_BOX_FORM = 90.2345;


let max = Math.max(FORM, BIG_BOX_FORM, AVER_BOX_FORM);

let min = Math.min(FORM, BIG_BOX_FORM, AVER_BOX_FORM);

let sum = FORM + BIG_BOX_FORM + AVER_BOX_FORM;


const container = document.getElementById('hw1');
export default container.innerHTML = `<h3>Task - 1</h3>
<p>Максимальне число - ${max}</p>
<p>Мінімальне число - ${min}</p>
<p>Сума всіх товарів - ${sum}</p>`;