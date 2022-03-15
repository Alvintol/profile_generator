const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)  :", (answer0) => {
  rl.question("What's an activity you like doing?  :", (answer1) => {
    rl.question("What do you listen to while doing that?  :", (answer2) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)  :", (answer3) => {
        rl.question("What's your favourite thing to eat for that meal?  :", (answer4) => {
          rl.question("Which sport is your absolute favourite?  :", (answer5) => {
            rl.question("What would be the superpower you would like to have?  :", (answer6) => {
              console.log(`Thank you for your valuable feedback! Here is what we know about you, ${answer0}: The only thing that will stop you from ${answer1}, while jaming to ${answer2}. Is a freshly made ${answer4} ${answer3}! But you do also remember a dream you had last night about playing ${answer6} ${answer5}. It was WILD!
              `);
              rl.close();
            });
          });
        });
      });
    });
  });
});