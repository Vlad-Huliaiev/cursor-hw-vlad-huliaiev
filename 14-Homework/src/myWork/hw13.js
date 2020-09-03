const container = document.querySelector('.generator');
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

export default renderGenerator();