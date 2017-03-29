
function Year(date) {
    this.date = date;
}

Year.prototype.isLeap = function() {

    if (!Number.isInteger(this.date)) {
        return false;
    }


};


module.exports = Year;