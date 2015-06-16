var data = require('./data');
var dateUtils = require('./date-utils');

function Storage(appName) {
	this.name = appName;
	this.init();
}

Storage.prototype = {
	_data: null,

	init: function () {
		this.load();
	},

	_getType: function () {
		return ['today', 'week', 'anyday'];
	},

	load: function () {
		this._data = data;
		return data;
	},

	getTypeInfo: function (type) {
		var config;
		switch (type) {
			case 'today':
				config = {'name': type, 'title': 'Today', 'term': dateUtils.format(new Date())};
				break;

			case 'week':
				config = {'name': type, 'title': 'Today', 'term': dateUtils.monday() + ' – ' + dateUtils.sunday()};
				break;

			case 'anyday':
				config = {'name': type, 'title': 'Any day', 'term': ''};
				break;

			default:
				throw new Error('Unrecognized type');
		}
		config.tasks = this._data[type];
		return config;
	},

	save: function (type, task) {
		this._data[type].push(task);
		console.log(this._data);
	},

	getCounters: function () {
		var i;
		var counters = {};
		var types = this._getType();
		var l = types.length;

		for (i = 0; i < l; i++) {
			counters[types[i]] = this._data[types[i]].length;
		}
		return counters;
	}
};

module.exports = new Storage('todolist');
