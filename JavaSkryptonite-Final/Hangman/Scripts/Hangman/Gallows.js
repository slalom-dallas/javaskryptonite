var Hangman = Hangman || {};

Hangman.Gallows = function () {
    this.bodyParts = ["head", "body", "left-arm", "right-arm", "left-leg", "right-leg"];
    this.hangedParts = [];
};

Hangman.Gallows.prototype.hangNextBodyPart = function () {
    var nextPart = this.hangedParts.length;
    if (nextPart < this.bodyParts.length) {
        this.hangedParts.push(this.bodyParts[nextPart]);
    }
}

Hangman.Gallows.prototype.bodyPartsThatHaveBeenHanged = function () {
    return this.hangedParts;
}

Hangman.Gallows.prototype.isHanged = function () {
    return this.hangedParts.length === this.bodyParts.length;
}
