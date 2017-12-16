function my(a, b, c, x) {
    const sum = a + b + c;
    const ratio = sum === 0
      ? (param) => x / 3
      : (param) => param * x / sum;

    const y = ratio(a);
    const v = ratio(b);
    const z = x - (y + v);

    return { y, v, z };
}

// tests
console.log(my(2, 138, 11, 40));
console.log(my(2, 13, 11, 40));
console.log(my(22, 22, 22, 40));
console.log(my(0, 0, 0, 40));
