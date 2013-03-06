/// <reference path="../jasmine/jasmine.js" />
/// <reference path="../jquery-1.7.1.js" />
/// <reference path="../Hangman/GamePresenter.js" />

describe("Game Presenter", function () {

    it("should create elements for all possible letters in the game", function () {
        var view = $("<div id='gameView'><div id='letterBoard'></div></div>");
        var presenter = new Hangman.GamePresenter(view);
        presenter.prepareNewGame(function () { });
        presenter.prepareLetterView();

        var elements = $(view).find("#letterBoard .letter");
        expect(elements).toBeDefined();
        expect(elements.length).toBe(presenter.currentGame.letters.length);
    });
});
