/// <reference path="../jquery-1.7.1.intellisense.js" />
/// <reference path="WordProvider.js" />
/// <reference path="WordPuzzle.js" />
/// <reference path="Letter.js" />
/// <reference path="Gallows.js" />
/// <reference path="Game.js" />
var Hangman = Hangman || {};

/*
 This is a poor man's attempt to separate the view concerns from the model & object concerns. 
 Responsibilities include all DOM interactions and mediating between the DOM and the object model.
 Replace this class with your favorite MV* pattern.
*/
Hangman.GamePresenter = function (gameView) {
    this.currentGame = new Hangman.Game();
    this.gameView = gameView;
    $(this.gameView).find("#newGameAction").click(this.prepareNewGame.bind(this));
};

Hangman.GamePresenter.prototype.prepareNewGame = function () {
    this.currentGame.newGame(function () {
        this.prepareLetterView();
        this.prepareWordView();
        this.prepareGallows();
    }.bind(this));
};

Hangman.GamePresenter.prototype.prepareLetterView = function () {
    // Remove existing letters from board.
    var letterBoard = $(this.gameView).find("#letterBoard");
    $(letterBoard).find(".letter").remove();

    // Add new letters to board.
    var letters = this.currentGame.letters;
    for (var i = 0; i < letters.length; i++) {
        $("<button/>", { 
            id: "letter-" + letters[i].value,
            class: "letter",
            text: letters[i].value,
            click: this.letterClicked.bind(this),
        }).appendTo(letterBoard);
    }
};

Hangman.GamePresenter.prototype.prepareWordView = function () {
    // Remove existing letters from board.
    var wordBoard = $(this.gameView).find("#wordBoard");
    $(wordBoard).find(".letter").remove();

    // Add new word puzzle.
    var wordLength = this.currentGame.puzzle.secretWord.length;
    for (var i = 0; i < wordLength; i++) {
        $("<button/>", {
            id: "wordLetter-" + i,
            class: "letter",
            disabled: true,
        }).appendTo(wordBoard);
    }
};

Hangman.GamePresenter.prototype.prepareGallows = function () {
    $(this.gameView).find("#hangman").removeClass();
    $(this.gameView).find("#gameResult").removeClass();
};

// Updates all DOM elements to reflect the current state of the object model.
// This is a brute-force "update all view elements from object elements".
Hangman.GamePresenter.prototype.updateAllViews = function () {
    this.updateWordView();
    this.updateGallows();
    this.updateWinnerOrLoser();
}

Hangman.GamePresenter.prototype.updateWordView = function () {
    var wordBoard = $(this.gameView).find("#wordBoard");
    var missingCharacter = this.currentGame.puzzle.missingCharacter;
    this.currentGame.puzzle.matchedLetters.forEach(function (value, index) {
        if (value != missingCharacter) {
            var wordLetter = $(wordBoard).find("#wordLetter-" + index);
            wordLetter.text(value).addClass("guessed");
        }
    });
}

Hangman.GamePresenter.prototype.updateGallows = function () {
    var hangMan = $(this.gameView).find("#hangman");
    this.currentGame.gallows.bodyPartsThatHaveBeenHanged().forEach(function (value) {
        if (!hangMan.hasClass(value)) {
            hangMan.addClass(value);
        }
    });
}

Hangman.GamePresenter.prototype.updateWinnerOrLoser = function () {
    if (this.currentGame.hasBeenLost()) {
        $(this.gameView).find("#gameResult").addClass("loser");
    }
    else if (this.currentGame.hasBeenWon()) {
        $(this.gameView).find("#gameResult").addClass("winner");
    }
}

Hangman.GamePresenter.prototype.letterClicked = function (event) {
    var letterValue = $(event.target).text();
    var letterPicker = $(this.gameView).find("#letter-" + letterValue);

    var matches = this.currentGame.guess(letterValue);
    letterPicker.addClass((matches != null && matches.length > 0) ? "guessed-success" : "guessed-fail");

    this.updateAllViews();
}
