module.exports = {
	weeknames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

	format: function (d) {
		return this.weeknames[d.getDay()] + ' ' + ('00' + d.getDate()).slice(-2);
	},

	monday: function (datestring) {
		var d = new Date(datestring || Date.now());
		var weekday = d.getDay() || 7;
		var hours24 = 1000 * 60 * 60 * 24;

		return this.format(new Date(d.getTime() - hours24 * (weekday - 1)));
	},

	sunday: function (datestring) {
		var d = new Date(datestring || Date.now());
		var weekday = d.getDay() || 7;
		var hours24 = 1000 * 60 * 60 * 24;

		return this.format(new Date(d.getTime() - hours24 * (7 - weekday)));
	}
};

