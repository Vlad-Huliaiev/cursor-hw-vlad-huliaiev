function generateBlocks() {
    let square25 = document.querySelector('.square25');
    let block;

    for( let i = 0; i < 5 ; i++ ) {
        for( let j = 0; j < 5 ; j++ ) {
            block = document.createElement('div');
            block.className = 'block';
            //generateColor(block);
            generateBlocksInterval(block);
            square25.appendChild(block);
        }
    }
}

generateBlocks();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColor(color) {
    color.style.background = 'rgb('+getRandomInt(0,255)+', '+getRandomInt(0,255)+', '+getRandomInt(0,255)+')';
}

function generateBlocksInterval(color) {
    timer = setInterval(() => generateColor(color), 1000);
}