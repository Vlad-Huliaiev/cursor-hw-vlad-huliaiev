
document.write('<pre>');

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function create2DArray(rows) {
  let arr = [];
  for (let i = 0; i < rows; i++) {
     arr[i] = [];
  }
  return arr;
}

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
function getStudentsPairs() {
    let arrPairs = [];
    for(let i = 0; i < students.length / 2; i++){
        arrPairs[i] = students[i] + " і " + students[i + 3];
    }
    return arrPairs;
}
const studentsPairs = getStudentsPairs();

// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
function getStudentsThemes() {
    let arrThemes = create2DArray(students.length / 2);
    for(let i = 0; i < arrThemes.length; i++){
            arrThemes[i][0] = studentsPairs[i];
            arrThemes[i][1] = themes[i];
    }
    return arrThemes;
}
const studentsThemes = getStudentsThemes();

// 3. Зіставте оцінки(marks) зі студентом(students):
function getStudentsMarks() {
    let arrMarks = create2DArray(students.length);
    for(let i = 0; i < arrMarks.length; i++){
        arrMarks[i][0] = students[i]
        arrMarks[i][1] = marks[i];
    }
    return arrMarks;
}
const studentsMarks = getStudentsMarks();

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт.
function getStudentsPairsMarks(){
    let arrPairsMarks = create2DArray(students.length / 2);
    for(let i = 0; i < studentsThemes.length; i++){
        arrPairsMarks[i][0] = studentsPairs[i];
        arrPairsMarks[i][1] = themes[i];
        arrPairsMarks[i][2] = (Math.floor(Math.random() * 5) + 1);
    }
    return arrPairsMarks;
}
const pairsMarks = getStudentsPairsMarks();


console.log(getStudentsPairs());
console.log(getStudentsThemes());
console.log(getStudentsMarks());
console.log(getStudentsPairsMarks());
document.writeln(`
<b>1. Розділіть студентів на пари:</b>
${studentsPairs[0]}
${studentsPairs[1]}
${studentsPairs[2]}<br>
<b>2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати:</b>
${studentsThemes[0]}
${studentsThemes[1]}
${studentsThemes[2]}<br>
<b>3. Зіставте оцінки(marks) зі студентом(students):</b>
${studentsMarks[0]}
${studentsMarks[1]}
${studentsMarks[2]}
${studentsMarks[3]}
${studentsMarks[4]}
${studentsMarks[5]}<br>
<b>4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт:</b>
${pairsMarks[0]}
${pairsMarks[1]}
${pairsMarks[2]}<br>`)
