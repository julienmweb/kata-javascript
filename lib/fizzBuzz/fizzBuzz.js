
function FizzBuzz() {
}

FizzBuzz.prototype.loop = function() {
    var array = [];
    for (var i = 0; i < 100; i++) {
        var value = i + 1;
        if (value % 3 === 0 && value % 5 === 0) {
            array[i] = "FizzBuzz";
        }  else {
            array[i] = value;
        }
    }
    return array;
};

module.exports = FizzBuzz;