
document.write('<pre>');

alert('Enter only integer numbers.');
for(let attempts = 0; attempts < 10; attempts++){
    let first = +(prompt('Input first number.', ''));
    let second = +(prompt('Input second number.', ''));

        if(isNaN(first) && isNaN(second)){
            alert('Only numbers are accepted!');
        } else if(first % 1 != 0 && second % 1 != 0){
            alert('Only integers are accepted!');
        } else if(isNaN(first) || first % 1 != 0){
            alert('Only integers are accepted!')
        } else if(isNaN(second) || second % 1 != 0){
            alert('Only integers are accepted!')
        } else {    const n = parseInt(first, 10);
                    const m = parseInt(second, 10);
                    document.writeln("Your number first: " + first);
                    document.writeln("Your number second: " + second);
                    console.log("Your number first: " + n);
                    console.log("Your number second: " + m);
                    //Отримайте у користувача число (N,M) від якого ми будемо складати.

                    const skipEvenNumbers = confirm('Whether to skip even numbers?');
                    if(skipEvenNumbers == true) {
                        document.writeln('We are the skip even numbers!');
                    } else {
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

                        }
                        console.log(sum);
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
                                if(i % 2 == 0 && n != 0 && m != 0){
                                document.writeln('You sum is: ' + 0);
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