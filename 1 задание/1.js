    //Посчитать сумму чисел от 1 до N

    //Решение со строгим неравенством

    var x = 5
    
    var sum = 0;
    for (var i = 0; i < x; i++) {
        sum += 1 + i;
     
        
    }
        
    console.log(sum);

    //Решение с нестрогим неравенством

    var x = 6
    
    var sum = 0;
    for (var i = 0; i <= x; i++) {
        sum += i;
     
        
    }
        
    console.log(sum);
