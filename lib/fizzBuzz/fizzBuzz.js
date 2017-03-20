
function FizzBuzz() {
}

FizzBuzz.prototype.loop = function() {
    var array = [];
    for (var i = 0; i < 100; i++) {
        var value = i + 1;
            array[i] = value;
    }
    return array;
};

module.exports = FizzBuzz;