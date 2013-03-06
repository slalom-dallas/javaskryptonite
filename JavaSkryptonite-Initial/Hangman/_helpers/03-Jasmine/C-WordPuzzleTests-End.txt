/// <reference path="../jasmine/jasmine.js" />
/// <reference path="../Hangman/WordPuzzle.js" />
describe("WordPuzzle", function () {

    it("should tell me the position when I guess a letter in the word", function () {
        var puzzle = new Hangman.WordPuzzle("JavaScript");
        var matches = puzzle.guessLetter("a");

        expect(matches).toBeDefined();
        expect(matches.length).toBe(2);
        expect(matches[0]).toBe(1);
        expect(matches[1]).toBe(3);
    });

    it("should tell me all letters that have already been matched", function () {
        var puzzle = new Hangman.WordPuzzle("JavaScript");
        puzzle.guessLetter("a");

        expect(puzzle.getMatchedWord()).toContain("a");
    });
});
