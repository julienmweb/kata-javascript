describe("StringCalculator", function() {

    var Calc = require('../../lib/stringCalculator/stringCalculator.js');

    it("should returns 0 if the argument is an empty string", function() {
        expect(Calc.add('')).toEqual(0);
    });

    it("should returns the argument if the argument is a number alone", function() {
        expect(Calc.add('1') ).toEqual(1);
    })

});
