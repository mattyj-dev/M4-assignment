let streak = 0;

do {
    let coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("HEADS");
        streak++;
    } else {
        console.log("TAILS");
        break; // Break out of the loop if "Tails" is flipped
    }
} while (true);

console.log(`The streak ended with ${streak} consecutive Heads!`);