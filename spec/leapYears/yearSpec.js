describe("LeapYear", function() {

    var Year = require('../../lib/leapYears/year.js');

    it("should return false. A year must be an integer", function() {
        var year = new Year('2 thousand');
        expect(year.isLeap()).toEqual(false);
    });

    it("should return false . A leap year is > 1581", function() {
        var year = new Year(1580);
        expect(year.isLeap()).toEqual(false);
    });

    it("should return false . A leap year is divisible by 4, but is not otherwise divisible by 100 unless it is also divisible by 400", function() {
        var year = new Year(2001);
        expect(year.isLeap()).toEqual(false);
    });

    it("should return false . A leap year is divisible by 4, but is not otherwise divisible by 100 unless it is also divisible by 400", function() {
        var year = new Year(1900);
        expect(year.isLeap()).toEqual(false);
    });

    it("should return true if it s a leap year ", function() {
        var year = new Year(1996);
        expect(year.isLeap()).toEqual(true);
    });

    it("should return true if it s a atypical leap year", function() {
        var year = new Year(2000);
        expect(year.isLeap()).toEqual(true);
    });


});
