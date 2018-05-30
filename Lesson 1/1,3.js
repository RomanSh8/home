//var n = 7;
//
//do {
//    console.log('1. fire in the hole!');
//} while (n < 7);
//
//while (n < 7) {
//    console.log('2. fire in the hole!');
//}

//var n = 7;
//for (var i = 2; i <= n ; i += 2) {
//    sum += i * i;
//}
//console.log(sum);

var counter = function (from, to) {
    var sum = 0;
    for (var i = from; i <= to ; i += 2) {
        sum += i * i;
    }
    return (sum);
}


var x = counter(2, 10);
var y = counter(4, 8);
console.log(x + y);