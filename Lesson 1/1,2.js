    var n = 7;
    var sum = 0;
    var i = 1;
//    for (var i = 1; i <= n ; i++) {
//        if (i % 2 !== 0) {
//            sum += i * i;
//        }
//    }
//    console.log(sum);  

    do {sum += i * i;
        i += 2;
       } while (i <= n);
    
           console.log(sum);

 