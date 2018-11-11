const throwDie = () => Math.floor((Math.random() * 6) + 1)

const calcExpectedValue = () => {
    const numThrows = 100000;

    let avg = 0;
    for (let i = 0; i < numThrows; i++) {
       avg += throwDie();
    }

    return avg / numThrows;
}

for (let i = 0; i < 5; i++) {
    console.log(calcExpectedValue());
}
