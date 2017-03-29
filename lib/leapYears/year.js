
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


};


module.exports = Year;