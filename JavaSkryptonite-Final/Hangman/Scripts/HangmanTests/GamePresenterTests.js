/// <reference path="../jasmine/jasmine.js" />
/// <reference path="../jquery-1.9.1.js" />
/// <reference path="../Hangman/GamePresenter.js" />

describe("Game Presenter", function () {

    // TODO: Determine why the test fails in the Chutzpah test adapter.
    //       This test will pass if the test is run in the browser.  
    //       The problem seems to be be caused by the use of ".bind(this)" 
    //       but we haven't tracked down the exact reason for the failure.
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
