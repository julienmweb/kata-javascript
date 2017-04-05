describe("StringCalculator", function() {

    var Calc = require('../../lib/stringCalculator/stringCalculator.js');


    it("returns 0 if the input is an empty string", function() {
        expect(Calc.Add('')).toEqual(0);
    })

});
