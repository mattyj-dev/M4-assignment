// Looping a Triangle

// Write a loop that displays the following triangle within a console window:

// #
// ##
// ###
// ####
// #####
// ######
// #######


for (let i = 1; i <= 7; i++) {
    //console.log(i);
    let line = '';
    for (let j = 0; j < i; j++) {
    //console.log(j);
      line += '#';
    }
    console.log(line);
  }