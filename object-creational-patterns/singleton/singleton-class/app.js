const Game = require('./Game');
const Player = require('./Player');

const Pete = new Player('Pete');
const Mike = new Player('Mike');
const Poker = new Game();

Poker.join(Pete);
Poker.join(Mike);

Pete.wins(20);

Mike.wins(20);
Mike.wins(10);
Mike.wins(20);
Mike.wins(20);
Mike.wins(10);
Mike.wins(10);

Pete.wins(200);
Pete.loses(120);

console.log("Scoreboard: %j", Poker.scores());
console.log(`Winner: ${Poker.getWinner().name} with ${Poker.getWinner().points} points`);