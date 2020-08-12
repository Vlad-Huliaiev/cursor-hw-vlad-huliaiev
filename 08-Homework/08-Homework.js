document.write('<pre>');

// 1.
class Student {
    constructor( course, university, fullName ) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.dismiss = false;
    }

// 2. творіть метод this.getInfo(), метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    getInfo() {
        return this.dismiss ? 'Студента було виключено. ' : console.log(`Студент ${this.course} ${this.university} ${this.fullName}`);
    }

// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента.
    get mark() {
        return this.dismiss ? null : this.marks;
    }

// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив.
    set mark(val) {
        return this.dismiss ? null : this.marks.push(val);
    }

// 5. Створіть метод отримання середнього балу.
    getAverageMark() {
        if(this.dismiss === true) {
            return null;
        } else {
        let sum = 0;
            for(let i = 0; i < this.marks.length; i++){
                sum += this.marks[i];
            }
            this.averageSum = sum / this.marks.length;
        return this.averageSum;
        }
    }


    getDismiss() {
        this.dismiss = true;
        return (student.getInfo() + '\r\n' + 'Оцінки студента: ' +  student.mark + '.' + '\r\n' + 'Середній бал ' + student.getAverageMark());
    }

    getRecover() {
        this.dismiss = false;
        return console.log(`Студента ${this.course} ${this.university} ${this.fullName} було поновленно.`);
    }

}
const marks = [5, 4, 4, 5];
// 2. творіть метод this.getInfo(), метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
const student = new Student( '6th year', 'Taras Shevchenko National University of Kyiv,', 'Daniel Faraday' );
student.getInfo();
// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента.
console.log('Оцінки студента:');
console.log(student.mark);
// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив.
console.log('Студент сдав ще один екзамен:');
student.mark = 5;
student.mark = 4;
console.log(student.mark);
// 5. Створіть метод отримання середнього балу.
console.log('Середній бал студента:');
console.log(student.getAverageMark());
// 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна.
console.log('\n');
student.getDismiss();
console.log(student.getDismiss());
// 7. Створіть метод this.recover, який дозволить поновити студента.
console.log('\n');
student.getRecover();
console.log('Оцінки студента:');
console.log(student.mark);
console.log('Середній бал студента:');
console.log(student.getAverageMark());