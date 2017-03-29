
function FizzBuzz() {
}

FizzBuzz.prototype.loop = function() {
    var array = [];
    for (var i = 0; i < 100; i++) {
        var value = i + 1;
        array[i] = this.isFizzBuzz(value);
    }
    return array;
};

FizzBuzz.prototype.isFizzBuzz = function(value) {
    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

module.exports = FizzBuzz;