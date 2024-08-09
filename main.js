// Rolls 


export function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

export function rollMultipleDice(sides, count, modifier = 0) {
    let results = [];
    let sum = 0;
    
    for (let i = 0; i < count; i++) {
        let roll = rollDice(sides, modifier);
        results.push(roll);
        sum += roll;
    }
    
    let average = sum / count;
    
    return {
        rolls: results,
        sum: sum,
        average: average
    };
}


console.log(rollDice(6));
console.log(rollMultipleDice(6, 3));