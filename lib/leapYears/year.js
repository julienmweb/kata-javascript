
function Year(date) {
    this.date = date;
}

Year.prototype.isLeap = function() {

    if (!Number.isInteger(this.date)) {
        return false;
    }
    if (this.date < 1582) {
        return false;
    }
    if (this.date % 4 == 0 && this.date % 100 != 0 || this.date % 400 == 0) {
        return true;
    } else {
        return false;
    }


};


module.exports = Year;