function getDeterminesDegree(a,b) {
        let s = 1;
        for(let i = 1; i <= b; i++){
            s *= a;
        }
        return s;
    }
const degreeDetermines = getDeterminesDegree(2,11);
const container = document.getElementById('hw3');
export default container.innerHTML = `<h3>Task - 3</h3>
<span>Возведення в супінь: 2 в 11 - ${degreeDetermines}</span>`;
