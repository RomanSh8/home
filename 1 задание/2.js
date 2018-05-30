
    //Посчитать сумму квадратов нечётных чисел

    //1-ый вариант
    var n = 7;
    var sum = 0;
    for (var i = 1; i <= n ; i++) {
        if (i % 2 !== 0) {
            sum += i * i;
        }
    }
    console.log(sum);     


    var n = 7;
    var sum = 0;
    for (var i = 1; i <= n ; i += 2) {
            sum += i * i;
    }
    console.log(sum);  

    //Посчитать сумму квадратов чётных чисел

    //1-ый вариант
    var n = 7;
    var sum = 0;
    for (var i = 2; i <= n ; i++) {
        if (i % 2 == 0) {
            sum += i * i;
        }
    }
    console.log(sum);
    //Посчитать сумму квадратов чётных чисел

    //1-ый вариант
    var n = 7;
    var sum = 0;
    for (var i = 2; i <= n ; i += 2) {
        sum += i * i;
    }
    console.log(sum);

//    for (инициализция переменных цикла; условие завершения цикла ; измениние переменных цикла) {}

    //2-ой вариант

    var number = "123456789";
    var arr = number.split('');
    var sum = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i]%2 !== 0) {
                sum += arr[i]*arr[i];
                }
        }
        
    console.log(sum);
