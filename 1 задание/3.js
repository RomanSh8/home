
    var x = 15;
        if (x%3 == 0 && x%5 !== 0) {
            console.log("Делится на 3 без остатка");
        } else if (x%5 == 0 && x%3 !== 0) {
            console.log("Делится на 5 без остатка");      
        } else if (x%3 == 0 && x%5 == 0) {
            console.log("Делится на 3 и 5  без остатка");
        } else {
            console.log(x);
        }
