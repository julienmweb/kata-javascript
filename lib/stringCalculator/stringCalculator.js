
var StringCalculator = {
    add: function (numbers) {
        let result = 0;

        if (numbers === '') {
            return result;
        }

        let arrayNumbers = numbers.split(',');

        for(let i= 0; i < arrayNumbers.length; i++) {
            result += parseFloat(arrayNumbers[i]);
        }
        return result;
    }
};
module.exports = StringCalculator;

