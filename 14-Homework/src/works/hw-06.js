const students = [
    {
      name: "Tanya",
      course: 3,
      subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
      }
    }, {
      name: "Victor",
      course: 4,
      subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]

      }
    }, {
      name: "Anton",
      course: 2,
      subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
      }
    }
];


// 1. Створіть функцію - яка повертає список предметів для конкретного студента.
const getSubjects = id => Object.keys(students[id].subjects).map(a => a[0].toUpperCase() + a.slice(1).toLowerCase().replace("_", ' '));

console.log('Task - 6: ' + 'Список предметів студента ' + students[1].name + ': ' + getSubjects(1));

const studentsName = students[1].name;
const studentsTask = getSubjects(1);

const container = document.getElementById('hw6');
export default container.innerHTML = `<h3>Task - 6</h3>
<p>Список предметів студента ${studentsName} - ${studentsTask}</p>
`;