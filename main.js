const throwDie = () => Math.floor((Math.random() * 6) + 1)

const calcExpectedValue = () => {
    const numThrows = 100000;
    let avg = 0;
    for (let i = 0; i < numThrows; i++) {
        avg += throwDie();
    }
    return avg / numThrows;
}

const calcExpectedValue2 = () => {
    const numThrows = 100000;
    let avg = 0;
    for (let i = 0; i < numThrows; i++) {
        const result1 = throwDie();
        const result2 = throwDie();
        avg += Math.max(result1, result2);
    }
    return avg / numThrows;
}

console.log("Expected value for one roll");
for (let i = 0; i < 5; i++) {
    console.log(calcExpectedValue());
}

console.log();

console.log("Expected value for two rolls");
for (let i = 0; i < 5; i++) {
    console.log(calcExpectedValue2());
}