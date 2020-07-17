
document.write('<pre>');

for(let attempts = 0; attempts < 4; attempts++){
    let first = +(prompt('Input first number.', ''));
    let second = +(prompt('Input second number.', ''));

        if(isNaN(first) && isNaN(second)){
            alert('We do not have number, input again!');
        } else if(first % 1 != 0 && second % 1 != 0){ //Перевірте, чи є передане значення (N,M) ЦІЛИМ числом.
            alert('We do not have integer number, input again!');
        } else if(isNaN(first)){
            alert('Your sum = ' + second)
        } else if(isNaN(second)){
            alert('Your sum = ' + first)
        } else {    const n = parseInt(first, 10);
                    const m = parseInt(second, 10);
                    console.log("Your number: " + n);
                    document.writeln("Your number: " + n);
                    console.log("Your number: " + m);
                    document.writeln("Your number: " + m);
                    //Отримайте у користувача число (N,M) від якого ми будемо складати.

                    const skipEvenNumbers = confirm('Whether to skip even numbers?');
                    if(skipEvenNumbers == true) {
                        console.log('We must will skip even numbers!');
                        document.writeln('We are the skip even numbers!');
                    } else {
                        console.log('We do not miss even numbers!');
                        document.writeln('Ok, we use all numbers!');
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
                            console.log(sum);
                        }
                        document.writeln('Sum: ' + sum);

                    } else if(n > m){
                        let sum = 0;
                            for(let i = m; i <= n; i++){
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

                    } else if(n == m) {
                        for(let i = n; i <= m; i++){
                            if(skipEvenNumbers == false){
                                let sum = 0;
                                sum = n + m;
                                document.writeln('Sum: ' + sum);
                            }
                            if(skipEvenNumbers == true) {
                                if(i % 2 != 0){ //пропускає парні числа
                                    let sum = 0;
                                    sum = n + m;
                                    document.writeln('Sum: ' + sum);
                                }
                                if(n + m == 0){
                                    document.writeln('You sum is: ' + 0);
                                }

                            }

                        }

                    }
                    break;
                }

}