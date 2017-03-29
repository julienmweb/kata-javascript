describe("LeapYear", function() {

    var Year = require('../../lib/leapYears/year.js');

    it("should return false. A year must be an integer", function() {
        var year = new Year('2 thousand');
        expect(year.isLeap()).toEqual(false);
    });


});
