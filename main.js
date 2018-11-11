const throwDie = () => Math.floor((Math.random() * 6) + 1)

const calcExpectedValue = (numRolls) => {
    const numThrows = 100000;

    let avg = 0;
    for (let i = 0; i < numThrows; i++) {

        let max = 0;
        for (let j = 0; j < numRolls; j++) {
            max = Math.max(max, throwDie());            
        }

        avg += max;
    }

    return avg / numThrows;
}

console.log("Expected value for one roll");
for (let i = 0; i < 5; i++) {
    console.log(calcExpectedValue(1));
}

console.log("\n");

console.log("Expected value for two rolls (and keeping the highest)");
for (let i = 0; i < 5; i++) {
    console.log(calcExpectedValue(2));
}