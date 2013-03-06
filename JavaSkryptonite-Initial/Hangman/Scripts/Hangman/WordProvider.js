var Hangman = Hangman || {};

Hangman.WordProvider = function () {
    this.words = ["JavaScript",/*is to*/"Coding",/*as*/"Kryptonite",/*is to*/"Superman"];
    this.current = -1;
};

Hangman.WordProvider.prototype.getRandomWord = function (minLength, maxLength, completed) {
    var nextWord = this.getNextWordInternal(minLength, maxLength);
    completed(nextWord);
};

Hangman.WordProvider.prototype.getAlphabet = function () {
    var result = [];
    var start = "A".charCodeAt(0), end = "Z".charCodeAt(0);
    for (var i = start; i <= end; i++) {
        result.push(String.fromCharCode(i));
    }

    return result;
};

// "Private" method to get the next word. Simply gets the logic out of the demo line of site.
Hangman.WordProvider.prototype.getNextWordInternal = function (minLength, maxLength) {
    var result = new String();
    for (var i = 0; i < this.words.length; i++) {
        var word = this.words[i];
        if (i != this.currentWord && word.length >= minLength && word.length <= maxLength) {
            this.currentWord = i;
            result = word;
            break;
        }
    }

    return result;
};
