
document.write('<pre>');

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const arrPairs = [[], [], []];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
function getStudentsPairs(arrPairs) {
    arrPairs[0].push(students[2],students[0]);
    arrPairs[1].push(students[1],students[3]);
    arrPairs[2].push(students[4],students[5]);
    return arrPairs;
}
const studentsPairs = getStudentsPairs(arrPairs);


// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
const arrThemes = JSON.parse(JSON.stringify(studentsPairs));
function getStudentsThemes(arrThemes) {
    arrThemes[0].push(themes[1]);
    arrThemes[1].push(themes[2]);
    arrThemes[2].push(themes[0]);
    return arrThemes;
}
const studentsThemes = getStudentsThemes(arrThemes);


// 3. Зіставте оцінки(marks) зі студентом(students):
function getStudentsMarks() {
    const arrMarks = [[]];
    for(let i = 0; i < students.length; i++){
        arrMarks[i] = students[i] + " , " + marks[i];
    }
    return arrMarks;
}
const studentsMarks = getStudentsMarks();


// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт.
const arrPairsMarks = JSON.parse(JSON.stringify(arrThemes));
function getStudentsPairsMarks(arrPairsMarks){
    for(let i = 0; i < arrPairsMarks.length; i++){
    arrPairsMarks[i] = arrPairsMarks[i] + " - " + (Math.floor(Math.random() * 5) + 1);
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