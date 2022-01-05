var readlineSync = require('readline-sync');

const playerName = readlineSync.question("May I have your name please?");
console.log(`${playerName}, welcome to the Escape Game Room Simulation!`);

//Boolean Flags
var hasKey = false;
var isAlive = true;

while (isAlive == true){
    const menuID = readlineSync.keyIn('Enter 1 to Put hand in hole, or, Enter 2 to Find the key, or, Enter 3 to Open the : ', {limit: '$<1-3>'});
    if (menuID == 1){
        //Put Hand in the Hole
        //Player is DEAD. Game is over.
        console.log(`oh no, ${playerName}, you put hand in the hole, You are DEAD, Game is Over!`);
        isAlive = false;
    } else if  (menuID == 2 && hasKey == false){
        //Player Selected Option- 2 and has not found the key yet.
        console.log(`${playerName}, look you just found a key. Time to proceed with menu option 3!!`);
        hasKey = true;
    } else if (menuID == 2 && hasKey == true){
        // Player selected option- 2 and has key in their possession.
        console.log(`${playerName}, hold on? Didn't you already find the key? , stop wasting your precious time. Proceed with Option 3!!!`);
    } else if (menuID == 3 && hasKey == false){
        //Player chose option- 3 but has not found the key yet.
        console.log(`${playerName}, STOP! You have not found the key yet. Please proceed with menu option 1 or 2 and then revisit the menu option later.`);
    } else if (menuID == 3 && hasKey == true){
        //Player chose option- 3 and has found the key already.
        console.log(`${playerName}, you found the key that worked on the exit door succssfully!!! Fantastic Job!! You Win!! Congragulations!!!! `);
        isAlive = false;
    }
}