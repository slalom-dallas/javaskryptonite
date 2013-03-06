var Hangman = Hangman || {};

Hangman.Letter = function (letter) {
    this.value = letter;
    this.hasBeenGuessed = false;
    this.isInWordPuzzle = false;
};
