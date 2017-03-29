
function Year(year) {
    this.year = year;
}

Year.prototype.isLeap = function() {

    if (!Number.isInteger(this.year)) {
        return false;
    }
    if (this.year < 1582) {
        return false;
    }
    if (this.year % 4 == 0 && this.year % 100 != 0 || this.year % 400 == 0) {
        return true;
    } else {
        return false;
    }


};


module.exports = Year;