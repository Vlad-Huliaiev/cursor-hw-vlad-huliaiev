const container = document.querySelector('.generator');
const idGen = document.querySelector('.text');
const outText = document.querySelector('.gen_btn');
const output = document.querySelector('.out');

function * createIdGenerator() {
    for(let i = 0; i < Infinity ; i++) {
        yield i;
    }
}
const idGenerator = createIdGenerator();

function renderGenerator() {
    output.innerText = '';
    output.innerHTML = `${idGenerator.next().value}`;
    container.appendChild(output);
}

btn.addEventListener('click', () => {
    renderGenerator();
});
