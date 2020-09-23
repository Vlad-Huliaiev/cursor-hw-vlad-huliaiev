    const n = 3
    const m = 13
    const skipEvenNumbers = true;
    let sum = 0;

    for(let i = n; i <= m; i++){
        if(skipEvenNumbers == true){
            if(i % 2 != 0){ //пропускає парні числа
                sum += i;
            }
        }
    }

const container = document.getElementById('hw2');
export default container.innerHTML = `<h3>Task - 2</h3>
<span>Сума від 3 до 13(пропускає парні числа) - ${sum}</span>`;
