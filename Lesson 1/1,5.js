function one() {
    return 1;
}

console.log(one == 1);
console.log(one() == 1);

// выражение a == b вычисляется в true или false, завсит от а и б

function plusone(x) {
    return x + 1;
}

console.log(plusone == 2);
console.log(plusone(1) == 2);

function y() {
    return 2;
}

function z() {
    return 3;
}

function x(g, y) {
    return g + y();
}

console.log(x(4, z) + y());