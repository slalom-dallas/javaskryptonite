var Hangman = Hangman || {};

Hangman.WordPuzzle = function (secretWord) {
    this.secretWord = secretWord;
    this.matchedLetters = new Array(secretWord.length);
    this.missingCharacter = "–";
};

// Returns all positions that the letter appears in the secret 
// word and maintains all matches for the puzzle.
Hangman.WordPuzzle.prototype.guessLetter = function (letter) {
    var result = [];
    var upperLetter = letter.toUpperCase();
    for (var i = 0; i < this.secretWord.length; i++) {
        if (this.secretWord[i].toUpperCase() === upperLetter) {
            this.matchedLetters[i] = this.secretWord[i];
            result.push(i);
        }
    }

    return result;
}

// Returns the puzzle as a string with matched letters filled-in 
// and missing characters for unmatched letters.
Hangman.WordPuzzle.prototype.getMatchedWord = function () {
    var result = new String();
    for (var i = 0; i < this.secretWord.length; i++) {
        result += this.matchedLetters[i] === this.secretWord[i] ? this.matchedLetters[i] : this.missingCharacter;
    }

    return result;
};

// Determines if all letters in the secret word have been guessed.
Hangman.WordPuzzle.prototype.hasBeenSolved = function () {
    for (var i = 0; i < this.secretWord.length; i++) {
        if (this.matchedLetters[i] !== this.secretWord[i]) return false;
    }

    return true;
}