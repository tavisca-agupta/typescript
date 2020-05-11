var example1 = /** @class */ (function () {
    function example1() {
        this.strarray = ["this", "is", "something", "new", "to", "learn"];
        this.longString = "this sentence has five words. here are five more words.five-word sentences are fine. but several together become monotonous. listen to what is happening.the writing is getting boring. the sound of it drones. it’s like a stuck record. the ear demands some variety. Now listen.";
    }
    example1.prototype.sortedString = function () {
        return this.strarray.sort(function (a, b) { return a.length - b.length; });
    };
    example1.prototype.reverseArray = function () {
        var temp = this.strarray.sort(function (a, b) { return a.length - b.length; });
        return temp.reverse();
    };
    example1.prototype.indexOfAInString = function () {
        for (var i = 0; i < this.longString.length; i++) {
            if (this.longString[i] == 'a' || this.longString[i] == 'A') {
                console.log("index of a => " + i);
            }
        }
    };
    example1.prototype.uppercase = function () {
        var temp = this.longString.charAt(0).toUpperCase() + this.longString.slice(1);
        for (var i = temp.indexOf('.') + 1; i < this.longString.length; i++) {
            if (temp[i] != ' ') {
                temp = temp.slice(0, i) + temp.charAt(i).toUpperCase() + temp.slice(i + 1);
                i = temp.indexOf('.', i);
            }
        }
        console.log(temp);
    };
    example1.prototype.NumberOfStatements = function () {
        var count = 0;
        for (var i = 0; i < this.longString.length; i++) {
            if (this.longString[i] == '.') {
                count++;
            }
        }
        return count;
    };
    return example1;
}());
var obj = new example1();
console.log("sorted string is => " + obj.sortedString());
console.log("\nreversed array => " + obj.reverseArray());
obj.indexOfAInString();
console.log("\nno of statements=> " + obj.NumberOfStatements());
obj.uppercase();
