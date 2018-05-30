    var n = 7;
    var sum = 0;
    var i = 1;
//    for (var i = 1; i <= n ; i++) {
//        if (i % 2 !== 0) {
//            sum += i * i;
//        }
//    }
//    console.log(sum);  

    while (i <= n) {
        sum += i * i;
        i += 2;
    }
    console.log(sum);

for (; i < 10;) {
    sum++;
}

console.log('fin');