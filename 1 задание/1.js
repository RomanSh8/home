    //Посчитать сумму чисел от 1 до N

    //Решение со строгим неравенством

    var x = 5;
    
    var sum = 0;
    for (var i = 1; i <= x; i++) {
        sum += i;
    }

    console.log(sum);

    //Решение с нестрогим неравенством

    var x = 5;
    
    var sum = 0;
    for (var i = 0; i <= x; i++) {
        sum += i;
    }

    console.log(sum);
