const Scores = require('./Scoreboard');

class Game {
    join(player) {
        Scores.join(player.getName());
    }

    scores() {
        return Scores.getBoard();
    }

    getWinner() {
        return Scores.board.sort()[0];
    }
}

module.exports = Game;