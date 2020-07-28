// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
function rand(b) {
    var a = (new Date).getMilliseconds();
    return function() {
        a = (25173 * a + 13849) % 65536;
        return a % b + 1
    }
};

var x =  rand(100);
for (var i = 0; i < 1; i++)  {
    document.write(x())
}
