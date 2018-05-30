function summ(from, to) {
    var sum = 0;
    for (var i = from; i <= to ; i += 2) {
        sum += i * i;
    }
    return (sum);
}


var x = summ(2, 10);
var y = summ(12, 20); // 2 - 20
var z = summ(22, 30); // 2 - 30
console.log(x, x + y, x + y + z);

function summ2(from, to, sum) {
    for (var i = from; i <= to ; i += 2) {
        sum += i * i;
    }
    return (sum);
}

var x = summ2(2, 10, 0); // summ(2,10)
var y = summ2(12, 20, x); // summ(2, 20), using previous result
var z = summ2(22, 30, y);
console.log(x, y, z);


function shift(x, f, g) {
    if (g(x)) {
        return x;
    }
    return x + f(x);
}

function g(x) {
    return x * x;
}

function check(x) {
    return x % 5 !== 0;
}

console.log(shift(5, g, check));