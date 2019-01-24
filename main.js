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
       let val = throwDie();
       if (val < 5) {
           val = Math.max(val, throwDie());
       }
       avg += val;
    }

    return avg / numThrows;
}

for (let i = 0; i < 5; i++) {
    console.log(calcExpectedValue());
}
