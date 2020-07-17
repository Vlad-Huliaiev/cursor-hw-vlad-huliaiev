
document.write('<pre>');

let FIRST_NUMBER = prompt("Input first number.");
let SECOND_NUMBER = prompt("Input second number.");

const n = parseInt(FIRST_NUMBER, 10);
if(isNaN(n)){
    console.log("That not number");
    document.writeln("That not number");
} else {
    console.log("Your number: " + n);
    document.writeln("Your number: " + n);
}   //Отримайте у користувача число(N) від якого ми будемо складати.

if(n % 1 == 0){
    console.log("Your number is an integer.");
    document.writeln("Your number is an integer.");
} else {
    console.log("Your number is not an integer.");
    document.writeln("Your number is not an integer.");
}   //Перевірте, чи є передане значення N ЦІЛИМ числом.


const m = parseInt(SECOND_NUMBER, 10);
if(isNaN(m)){
    console.log("That not number");
    document.writeln("That not number");
} else {
    console.log("Your number: " + m);
    document.writeln("Your number: " + m);
}   //Отримайте у користувача число(M) від якого ми будемо складати.

if(m % 1 == 0){
    console.log("Your number is an integer.");
    document.writeln("Your number is an integer.");
} else {
    console.log("Your number is not an integer.");
    document.writeln("Your number is not an integer.");
}   //Перевірте, чи є передане значення M ЦІЛИМ числом.


const skipEvenNumbers = confirm('Whether to skip even numbers?');
if(skipEvenNumbers == true) {
    console.log('We must will skip even numbers!');
    document.writeln('We are the skip even numbers!');
    alert('So we will skip even numbers!');
} else {
    console.log('We do not miss even numbers!');
    document.writeln('Ok, we use all numbers!');
    alert('Ok, so we do not will skip even numbers!');
}   //Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа.

if(n < m){
    let sum = 0;
    for(let i = n; i <= m; i++){
        if(skipEvenNumbers == false){
            sum += i;
        }
        if(skipEvenNumbers == true){
            if(i % 2 != 0){ //пропускає парні числа
                sum += i;
            }

        }
    }
    document.writeln('Sum: ' + sum);

} else if(n > m){
    let sum = 0;
        for(let i = m; i <= n; i++){
            if(skipEvenNumbers == false){
                sum += i;
            }
            if(skipEvenNumbers == true){
                if(i % 2 != 0){
                sum += i;
                }
            }
        }
        document.writeln('Sum: ' + sum);
} else if(n == m) {
    if(skipEvenNumbers == false){
        let sum = 0;
        sum = n + m;
        document.writeln('Sum: ' + sum);
    }
    if(skipEvenNumbers == true) {
        let sum = 0;
        sum = 0;
        document.writeln('We ignored even numbers! So sum is: ' + sum);
    }

}


/*
 if(i % 2 == 0){ // пропускає не парні числа
                sum += i;
            }
            */