const readlineSync = require('readline-sync');

const heroName = readlineSync.question(`What is your name hero?`);

const intro = readlineSync.question(`Greetings ` + heroName + `Welcome to the floating city Aincrad!! Here you will be challenged to survival against great evil. Hit Enter to start.`);
console.log(intro);

const menuOpt = ["Walk", "Inventory"];
const battleOpt = ["Attack", "Escape", "Invertory"];

let enemyOne = {
    name: "Heathcliff",
    health: 100,
    atkPower: 40,
    reward: "Healing Crystal"
};

let enemyTwo = {
    name: "Red Eye Xaxa", 
    health: 100,
    atkPower: 25,
    reward: "Poison Dagger",
};

let enemyThree = {
    name: "Death Gun", 
    health: 100,
    atkPower: 30,
    reward: "Coat of Midnight",
};

let player = {
    name: heroName, 
    health: 100, 
    atkPower: 50, 
    rewards: []
};

const enemies = [enemyOne, enemyTwo, enemyThree];

    function game(){
        while(player.health > 0){
        const options = readlineSync.keyInSelect(menuOpt, ` ${heroName}, what would you like to decide? Select a number: `);
        if(menuOpt[options] === "Inventory"){
            console.log(` Player Name: ${heroName} \n Health: ${player.health} \n Inventory: ${player.rewards}`);
        } else if (menuOpt[options] === "Walk"){
            console.log("Wlaking further into dungeon....");
            let random = (Math.floor(Math.random()*10))
            if (random <= 3) {
                console.log("No enemies found move forward.... ");
            } else if (random >= 4){
                let enemy = enemies[Math.floor(Math.random()*enemies.length)];
                console.log(`Enemy found ${enemy.name}`)
        
        const playerOpt = readlineSync.keyInSelect(battleOpt, `${heroName}, the enemy prepares for battle! Stand and fight or Escape? Select a number: `); 
        
        if(battleOpt[playerOpt] === "Attack"){
        const attack = () => {
        let playerAttack = Math.floor(Math.random() + player.atkPower);
        enemy.health -= playerAttack
            console.log(`${heroName} made contact with a power of ${playerAttack}`);
        let enemiesAttack = Math.floor(Math.random() + enemy.atkPower);
        player.health -= enemiesAttack
            console.log(`${enemy.name} countered with a power of ${enemiesAttack}`);
        if (enemy.health > 0 && player.health > 0){
            attack();
        } else {
            if (enemy.health <= 0 && player.health <= 0){
                console.log(`You eliminated each other in battle.`);
            }  else if (enemy.health <= 0){
                console.log("Congratulation on you vicotry in battle!!!");
                let itemDrop = Math.floor(Math.random())
                if (itemDrop <= 4){
                    player.rewards.push(enemy.reward)}
                } else if (player.health <= 0){
                console.log(`Defeat!! ${enemy.name} was victorious in battle. You're Dead!! Game Over!!`)};    
            }
        }
        attack();
        } else if (battleOpt[playerOpt] === "Inventory"){
            console.log(`Hero Name: ${player.name} \n Health: ${player.health} \n Inventory: ${player.rewards}`);
        } else if(battleOpt[playerOpt] === "Escape") {
            let run = (Math.floor(Math.random()*2))
            if (run <= 2){
                console.log("Your escape was unsuccessful your enemy attacked!!");
                const attack = () => {
                    let enemiesAttack = Math.floor(Math.random() + enemy.atkPower);
                    player.health -= enemiesAttack
                        console.log(`${enemy.name} countered with a power of ${enemiesAttack}`);  
                    let playerAttack = Math.floor(Math.random() + player.atkPower);
                    enemy.health -= playerAttack
                        console.log(`${heroName} made contact with a power of ${playerAttack}`); 
                    if (enemy.health > 0 && player.health > 0){
                        attack();           
                    } else {    
                        if (enemy.health <= 0 && player.health <= 0){
                            console.log(`You eliminated each other in battle.`);
                        }  else if (enemy.health <= 0){
                            console.log("Congratulations on you vicotry in battle!!!");
                            let itemDrop = Math.floor(Math.random())
                            if (itemDrop <= 4){
                                player.rewards.push(enemy.reward)}
                            } else if (player.health <= 0){
                            console.log(`Defeat!! ${enemy.name} was victorious in battle. You're Dead!! Game Over!!`)};    
                            }
                            }
                            attack();
                            } else if (random >= 1){
                                console.log("You Cleared the Dungeon!!!");
                    }
                }
            }
        }
    }
}
game();