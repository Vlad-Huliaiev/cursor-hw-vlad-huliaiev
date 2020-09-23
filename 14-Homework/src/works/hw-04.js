const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

    function getStudentsPairs() {
        let arrPairs = [];
        for(let i = 0; i < students.length / 2; i++){
            arrPairs[i] = students[i] + " і " + students[i + 3];
        }
        return arrPairs;
    }
const studentsPairs = getStudentsPairs();

const container = document.getElementById('hw4');
export default container.innerHTML = `<h3>Task - 4</h3>
<p>Розділіть студентів на пари:</p>
<p>${studentsPairs[0]}</p>
<p>${studentsPairs[1]}</p>
<p>${studentsPairs[2]}</p>
`;
