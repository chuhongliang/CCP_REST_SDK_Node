
class DateFormat {
	format(date) {
		let year = date.getFullYear();
		let month = this.formatLength(date.getMonth() + 1);
		let date1 = this.formatLength(date.getDate());
		let hour = this.formatLength(date.getHours());
		let minutes = this.formatLength(date.getMinutes());
		let seconds = this.formatLength(date.getSeconds());
		let stamp = `${year}${month}${date1}${hour}${minutes}${seconds}`;
		return stamp;
	}

	formatLength(value) {
		if (value < 10) {
			return `${'0'}${value}`;
		}
		return value;
	}

}
module.exports = new DateFormat();