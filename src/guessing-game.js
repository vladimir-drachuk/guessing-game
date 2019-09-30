class GuessingGame {
    constructor() {
        this.result = 0;
        this.min = 0;
        this.max = 0;
        this.flag = false;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        if (this.flag) {this.result = Math.ceil((this.max + this.min)/2)}
        else {this.result = Math.ceil((this.max + this.min)/2)};
        console.log(this.result);
        return this.result;
    }

    lower() {
        this.max = this.result;
        this.flag = false;
    }

    greater() {
        this.min = this.result;
        this.flag = true;
    }
}

      /*  const game = new GuessingGame();
        game.setRange(0, 4048)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        console.log(result);*/

module.exports = GuessingGame;
