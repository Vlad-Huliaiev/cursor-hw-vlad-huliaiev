document.write('<pre>');

const students = [{
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
}];

// 1. Створіть функцію - яка повертає список предметів для конкретного студента.
const getSubjects = id => Object.keys(students[id].subjects).map(a => a[0].toUpperCase() + a.slice(1).toLowerCase().replace("_", ' '));


// 2. Створіть функцію – яка поверне середню оцінку по усім предметам для переданого студента.
function getAverageMark(id) {
    let  array = [];
    let arr = Object.values(students[id].subjects);
    array = arr[0].concat(arr[1], arr[2]);
    let sum = 0;
        for(let i = 0; i < array.length; i++){
            sum += array[i];
        }
    averageSum = sum / array.length;
    return averageSum.toFixed(2);
}


// 3. Створіть функцію – яка повертає інформацію загального виду по переданому студенту
function getStudentInfo(id) {
    name = students[id].name;
    course = students[id].course;
    mark = getAverageMark(id);
    let result = "name: " + name + ", " + "course: " + course + "," + " average mark: " + mark;
    return  result;
}
function getStudentInfo1(name, course, mark) {
    this.name = name;
    this.course = course;
    this.mark = mark;
}



// 4. Ствроіть функцію – яка повертає імена студентів у алфавітному порядку.
studentsNames = JSON.parse(JSON.stringify(students));
studentsNames.sort(function(a,b){
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
    if (nameA < nameB)
        return -1;
    if (nameA > nameB)
        return 1;
    return 0;
 });


// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
function getBestStudent() {
    let arrBest = [];
    let max = 0;
    for (let i = 0; i < students.length; i++) {
        arrBest.push(+getAverageMark(i));
    }
    max = arrBest.reduce((a, b) => a > b ? a : b);
    if(max == getAverageMark(0)){
        bestStudentsName = 'Tanya';
    } else if(max == getAverageMark(1)){
        bestStudentsName = 'Victor';
    } else if(max == getAverageMark(2)){
        bestStudentsName = 'Anton';
    }
    return bestStudentsName;
}


// 6. Створіть функцію – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
function calculateWordLetters(word) {
    const result = {};
        word.split('').map(a =>(result[a] = !result[a] ? 1 : result[a] + 1));
   return result;
}


// 1. Створіть функцію - яка повертає список предметів для конкретного студента.
console.log('Список предметів студента ' + students[0].name + ': ' + getSubjects(0));

// 2. Створіть функцію – яка поверне середню оцінку по усім предметам для переданого студента.
console.log('Середня сума: ' + getAverageMark(0));

// 3. Створіть функцію – яка повертає інформацію загального виду по переданому студенту
console.log('Інформацію загального виду: ' + getStudentInfo(0));
console.log('Інформацію загального виду:');
console.log(new getStudentInfo1(students[0].name, students[0].course, getAverageMark(0)));

// 4. Ствроіть функцію – яка повертає імена студентів у алфавітному порядку.
console.log(studentsNames[0].name + ' , ' + studentsNames[1].name + ' , ' + studentsNames[2].name);

// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
console.log(getBestStudent());

// 6. Створіть функцію – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
console.log(calculateWordLetters('Мені надоїло це кляте завдання!'));



