/// <reference path="../jquery-1.7.1.js" />
/// <reference path="WordProvider.js" />
/// <reference path="WordPuzzle.js" />
/// <reference path="Letter.js" />
/// <reference path="Gallows.js" />
var Hangman = Hangman || {};

Hangman.Game = function () {
    this.provider = new Hangman.WordProvider();
    this.puzzle = new Hangman.WordPuzzle("JavaScript");
    this.gallows = new Hangman.Gallows();
    this.letters = [];
    this.initLetters();
};

Hangman.Game.prototype.initLetters = function () {
    var rawLetters = this.provider.getAlphabet();
    this.letters = new Array(rawLetters.length);
    for (var iX = 0; iX < rawLetters.length; iX++) {
        this.letters[iX] = new Hangman.Letter(rawLetters[iX]);
    }
}

Hangman.Game.prototype.newGame = function (completed) {
    this.initLetters();
    this.gallows = new Hangman.Gallows();

    var me = this;
    this.provider.getRandomWord(0, 100, function (rawWord) {
        me.puzzle = new Hangman.WordPuzzle(rawWord);
        completed();
    });
}

Hangman.Game.prototype.guess = function (rawLetter) {
    var result = [];

    var letter = new Hangman.Letter(rawLetter);
    //if (!this.letters.hasBeenGuessed(letter)) {
    if (true) {

        //this.letters.flagAsGuessed(letter);
        //var matches = this.word.tryMatchLetter(letter);
        // var matches = _word.tryMatchLetter(rawLetter);
        var matches = this.puzzle.guessLetter(rawLetter);
        if (matches.length > 0) {
            //result = true;
            result = matches;
        }
        else {
            //result = false;
            result = matches;
            this.gallows.hangNextBodyPart();
        }
    }

    return result;
}

Hangman.Game.prototype.hasBeenWon = function () {
    return this.puzzle.hasBeenSolved() && !this.hasBeenLost();
}

Hangman.Game.prototype.hasBeenLost = function () {
    return this.gallows.isHanged();
}
