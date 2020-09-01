function* newFontGenerator(value) {
    let a;
    for(let i = 0; i < Infinity ; i++) {
        a = yield value;
        if(a === 'up') {
            value += 2;

        } else if (a === 'down') {
            value -= 2;
        }
    }
}
let fontGenerator = newFontGenerator(14);

function renderFontUp() {
    document.getElementById("fonts").style.fontSize = `${fontGenerator.next('up').value}px`;

}
function renderFontDown() {
   document.getElementById("fonts").style.fontSize = `${fontGenerator.next('down').value}px`;

}

