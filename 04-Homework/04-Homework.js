
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
const arr = create2DArray(3);
const arr2 = create2DArray(6);


// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
const arrPairs = JSON.parse(JSON.stringify(arr));
function getStudentsPairs(arrPairs) {
    for(let i = 0; i < arrPairs.length; i++){
        arrPairs[i].push(students[i] + " і " + students[i]);
    }
    return arrPairs;
}
const studentsPairs = getStudentsPairs(arrPairs);


// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
const arrThemes = JSON.parse(JSON.stringify(studentsPairs));
function getStudentsThemes(arrThemes) {
    for(let i = 0; i < arrThemes.length; i++){
        arrThemes[i].push(themes[i]);
    }
    return arrThemes;
}
const studentsThemes = getStudentsThemes(arrThemes);


// 3. Зіставте оцінки(marks) зі студентом(students):
const arrMarks = JSON.parse(JSON.stringify(arr2));
function getStudentsMarks(arrMarks) {
    for(let i = 0; i < arrMarks.length; i++){
        arrMarks[i].push(students[i], marks[i]);
    }
    return arrMarks;
}
const studentsMarks = getStudentsMarks(arrMarks);


// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт.
const arrPairsMarks = JSON.parse(JSON.stringify(arrThemes));
function getStudentsPairsMarks(arrPairsMarks){
    for(let i = 0; i < arrPairsMarks.length; i++){
        arrPairsMarks[i].push(Math.floor(Math.random() * 5) + 1);
    }
    return arrPairsMarks;
}
const pairsMarks = getStudentsPairsMarks(arrPairsMarks);



console.log(studentsPairs);
console.log(studentsThemes);
console.log(studentsMarks);
console.log(pairsMarks);
document.writeln(`
${studentsPairs[0]}
${studentsPairs[1]}
${studentsPairs[2]}<br>
${studentsThemes[0]}
${studentsThemes[1]}
${studentsThemes[2]}<br>
${studentsMarks[0]}
${studentsMarks[1]}
${studentsMarks[2]}
${studentsMarks[3]}
${studentsMarks[4]}
${studentsMarks[5]}<br>
${pairsMarks[0]}
${pairsMarks[1]}
${pairsMarks[2]}<br>`)