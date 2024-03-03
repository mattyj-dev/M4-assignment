let coinFlip
let howManyTimes = prompt("How many times do you want to play?")

for (let i = 0; i < howManyTimes; i++) {
    coinFlip = Math.round(Math.random());
    //console.log(coinFlip)
    if (coinFlip === 0) {
        console.log("HEADS");
    } else {
        console.log("TAILS")
    }
}