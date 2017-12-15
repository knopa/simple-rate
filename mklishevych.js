function my(a, b, c, x) {
    var ratio = x / (a + b + c);
    var y = a * ratio;
    var v = b * ratio;
    var z = x - (y + v);

    return { y: y, v: v, z: z }
}

// tests
console.log(my(2, 138, 11, 40));
console.log(my(2, 13, 11, 40));
console.log(my(22, 22, 22, 40));
