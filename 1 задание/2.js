
    //Посчитать сумму квадратов нечётных чисел



    var arr = [1,2,3,4,5,6,7,8,9];
    var sum = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i]%2 !== 0) {
                sum += arr[i]*arr[i];
                }
        }
        
    console.log(sum);
