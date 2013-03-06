/// <reference path="../jasmine/jasmine.js" />
/// <reference path="../jasmine/jasmine.async.js" />
/// <reference path="../jasmine/sinon-1.5.2.js" />
/// <reference path="../Hangman/WordProvider.js" />
/// <reference path="../Hangman/WordPuzzle.js" />
/// <reference path="../Hangman/Letter.js" />
/// <reference path="../Hangman/Gallows.js" />
/// <reference path="../Hangman/Game.js" />

describe("GameTest", function () {
    var async = new AsyncSpec(this);
    var server;
    var game = new Hangman.Game();

    beforeEach(function () {
        server = sinon.fakeServer.create();
        server.autoRespond = true;
        server.respondWith(JSON.stringify("Slalom"));
    });

    afterEach(function () {
        server.restore();
    });

    describe("when I request to resign an active game", function () {
        var revealed;

        async.beforeEach(function (done) {
            game.newGame(function () {
                revealed = game.resign();
                done();
            });
        });

        it("should reveal the secret word", function () {
            expect(revealed).toBeDefined();
            expect(game.puzzle.secretWord).toBe(revealed);
        });

        it("should indicate the game has been lost", function () {
            expect(game.hasBeenLost()).toBe(true);
        });
    });
});
