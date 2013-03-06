/// <reference path="../jasmine/jasmine.js" />
/// <reference path="../jasmine/jasmine.async.js" />
/// <reference path="../jasmine/sinon-1.5.2.js" />
/// <reference path="../Hangman/WordProvider.js" />

describe("WordProvider", function () {
    var async = new AsyncSpec(this);
    var server;
    var provider = new Hangman.WordProvider();

    beforeEach(function () {
        server = sinon.fakeServer.create();
        server.autoRespond = true;
        server.respondWith(JSON.stringify("Slalom"));
        // IF you want to respond to a specific url, you can provide more detail...
        //server.respondWith("GET", "/api/wordProvider?minSize=5&maxSize=100", JSON.stringify("Slalom"));
    });

    afterEach(function () {
        server.restore();
    });

    async.it("should return a word within the specified min and max lengths", function (done) {
        var minLength = 1, maxLength = 100, newWord;
        var provider = new Hangman.WordProvider();

        provider.getRandomWord(minLength, maxLength, function (result) {
            newWord = result;
            expect(newWord).toBeDefined();
            expect(newWord).not.toBe(null);
            expect(newWord.length).toBeGreaterThan(minLength - 1);
            expect(newWord.length).toBeLessThan(maxLength + 1);
            done();
        });
    });
});