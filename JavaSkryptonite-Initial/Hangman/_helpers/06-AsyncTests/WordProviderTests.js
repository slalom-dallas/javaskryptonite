/// <reference path="../jasmine/jasmine.js" />
/// <reference path="../Hangman/WordProvider.js" />
describe("WordProvider", function () {

    it("should return a word within the specified min and max lengths", function () {
        var minLength = 1, maxLength = 100, newWord;
		var provider = new Hangman.WordProvider();
        provider.getRandomWord(minLength, maxLength, function (result) {
            newWord = result;
        });

        expect(newWord).toBeDefined();
        expect(newWord).not.toBe(null);
        expect(newWord.length).toBeGreaterThan(minLength - 1);
        expect(newWord.length).toBeLessThan(maxLength + 1);
    });
});
