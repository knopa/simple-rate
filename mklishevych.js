function my(a, b, c, x) {
    const sum = a + b + c;
    if (sum === 0) {
        return { y: 0, v: 0, z: 0 };
    }
    
    const ratio = x / sum;
    const y = a * ratio;
    const v = b * ratio;
    const z = x - (y + v);

    return { y, v, z };
}

// tests
console.log(my(2, 138, 11, 40));
console.log(my(2, 13, 11, 40));
console.log(my(22, 22, 22, 40));
