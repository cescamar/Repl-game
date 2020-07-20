let readlineSync = require('readline-sync');

let userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 

// INTRO TO GAME STARTS HERE

function gameStart() {
    console.log("****************************************************")
    console.log("*                     MONEY HEIST                  *")
    console.log("****************************************************")
    console.log("Pull off the massive bank heist that could possibly set you and your team up for life. In this exciting game") 
    console.log("lead your band of thugs to the get-away car. Each with his or her own set of unique skills and take on whatever obstacles you may encounter!") 
    console.log("Your goal is to make it to the get-away car without getting caught")
    console.log('')
    console.log('')
    console.log("******* MEET THE ROBBERS *******")
    console.log('')
    console.log("Tokoyo - I’m a good shooter and i’m fast at unlocking doors. My favorite weapon is a gun.")
    console.log("Denver- I’m a great fighter with quick hands. I like to use my fists.")
    console.log("Rio - I’m marked by stealth and shiftiness")
    console.log("Nairobi - I’m very good with explosives and computers")
    console.log(`${userName} - I'm good at leading the team and negotiating`)
    
    
    
    const wouldLikeToPlay = readlineSync.keyInSelect(['Yes', 'No'], 'Would you like to play?');
    if (wouldLikeToPlay === 0) {
      handleIntro();
    } else {
      process.exit();
    }
  }

  // GAME OVER PROMPT 

  function gameOver() {
    console.log('Would you like to play again?');
    const wouldLikeToPlay = readlineSync.keyInSelect(['Yes', 'No'], 'Would you like to play?');
    if (wouldLikeToPlay === 0) {
      handleIntro();
    } else {
      console.log(`${userName}, thank you for playing Money Heist. See you again soon`);
      process.exit();
    }
  }


  function handleIntro() {
    console.log('');
    console.log('');
    console.log('RULES: Pick the correct outcome for each scene');  
    console.log('');
    console.log('');
    console.log('RIIIIING RIIIIING RIIIIING');
    console.log('The alarm is set off! You only have 20 mins before the SWAT team arrives. Go and unlock the VAULT door!');
    console.log('');
    const choice = readlineSync.keyInSelect(['Tokoyo', 'Denver', 'Rio', 'Nairobi', `${userName}`], 'Which Robber do you choose?'); 
    switch (choice) {
      case 0: {
        gameOver('You took too long, you picked the wrong robber!');
        break;
      }
      case 1: {
        console.log('You took too long, you picked the wrong robber!!');
        gameOver();
        break;
      }
      case 2: {
        console.log('You took too long, you picked the wrong robber!!');
        gameOver();
        break;
      }
      case 3: {
        console.log();
        handleVault();
        break;
      }
      case 4: {
        console.log('You took too long, you picked the wrong robber!!');
        gameOver();
        break;
      }
      default:
        process.exit();
    }
  }
  function handleVault() { 
    console.log('');
    console.log('');
    console.log('While Nairobi starts setting up the explosives to break down the Vaults door');
    console.log('you notice a door at the end of the room. ');
    console.log('Its locked....');
    const choice = readlineSync.keyInSelect(['Yes', 'No'], 'Should you break-in?');
    if (choice === 0) {
      console.log('You got shot by a bank security guard');
      gameOver();
    } else if (choice === 1) {
      console.log('lets go back to Nairobi');
      console.log('');
      insideVault();
    } else {
      process.exit();
    }
  }


  function insideVault() {
    console.log('');
    console.log('');
    console.log('BOOOOOM! The explosives was a success.');
    console.log('Rio and Nairobi goes inside the vault to start filling up the money bag. ');
    console.log('You and the others stay behind to guard the vault door and check on the hostages');
    console.log('You hear a noise coming from the back door again...');
    const choice = readlineSync.keyInSelect(['Tell Denver to investigate', 'Tell Tokoyo to check it out'], 'What should you do?');
    switch (choice) {
      case 0: {
        console.log('Denver gets closer and....');
        storyLineOne();
        break;
      }
      case 1: {
        console.log('Tokoyo opens the door and....');
        storyLineTwo();
        break;
      }
      default: {
        process.exit();
      }
    }
}

function storyLineOne() {
  console.log('');
  console.log('');
    console.log('As Denver gets closer... he yells out');
    console.log('STOP RIGHT THERE!');
    console.log('He was able to knock the security guard down to the floor and take his gun');
    const choice = readlineSync.keyInSelect(['Tie-up the security guard', 'Shoot Security Guard'], 'What should Denver do?');
    switch (choice) {
      case 0: {
        console.log('Denver ties-up the security guard and closes the door');
        optionA();
        break;
      }
      case 1: {
        console.log('Denver accidently shot himself and died!');
        gameOver();
        break;
      }
      default: {
        process.exit();
      }
    }
}


function optionA() {
  console.log('');
  console.log('');
    console.log('The rest of the team goes to the front and notices the cops outside');
    const choice = readlineSync.keyInSelect(['Leave through the front door', 'Use the back door'], 'What should Denver do?');
    switch (choice) {
      case 0: {
        console.log('BANG BANG BANG! You guys died');
        gameOver();
        break;
      }
      case 1: {
        console.log('Run to the back!!');
        getAwayCar();
        break;
      }
      default: {
        process.exit();
      }
    }
}


    function storyLineTwo() {
      console.log('');
      console.log('');
        console.log('BANG BANG BANG');
        console.log('Tokoyo shot the security guard');
        console.log('');
        const choice = readlineSync.keyInSelect(['Calm down hostages', 'Shoot Tokoyo'], 'What should you do?');
        switch (choice) {
          case 0: {
            console.log('*EVERYONE BE QUIET*');
            optionTwo();
            break;
          }
          case 1: {
            console.log('GAME OVER....Do not shoot your own team member');
            gameOver();
            break;
          }
          default: {
            process.exit();
          }
        }
    }

        function optionTwo() {
          console.log('');
          console.log('');
            console.log('Everyone meets at the lobby of the bank');
            console.log('As everyone gets a bag and heads to the door');
            console.log('You notice the cops outside....')
            console.log('');
            const choice = readlineSync.keyInSelect(['Use front door anyways...', 'Go to the back'], 'What should you do?');
            switch (choice) {
              case 0: {
                console.log('You guys died!');
                gameOver();
                break;
              }
              case 1: {
                console.log('..........');
                getAwayCar();
                break;
              }
              default: {
                process.exit();
              }
            }
        }
            

            function getAwayCar() {
              console.log('');
              console.log('');
                console.log('*************************** YOU WIN *********************************');
                console.log('You and the team runs to the back of the bank and');
                console.log('found a back door. You open it and see the get-away car');
                console.log(`BREAT JOB ${userName}. You escaped with all your team members`);
                console.log('*********************************************************************');
              
            }
            
gameStart()