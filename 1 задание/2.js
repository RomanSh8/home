
    //Посчитать сумму квадратов нечётных чисел

    //1-ый вариант

    var arr = [1,2,3,4,5,6,7,8,9];
    var sum = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i]%2 !== 0) {
                sum += arr[i]*arr[i];
                }
        }
        
    console.log(sum);


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
