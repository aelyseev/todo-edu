var tasksTmpl = require('./tmpl/all-task.hbs');
var counter = require('./tmpl/counter.hbs');
var storage = require('./storage');
var taskBlock = require('./tmpl/task-block.hbs');
var formTmpl = require('./tmpl/new-form.hbs');

function render($el) {
	var selectors = {
		'newTask': 'js-new-task',
		'typeSelector': 'js-type-selector',
		'button': 'js-new-button'
	};
	var newform = formTmpl(selectors);
	var counters = counter(storage.getCounters());

	$el.html(tasksTmpl({
		counter: counters,
		today: taskBlock(storage.getTypeInfo('today')),
		week: taskBlock(storage.getTypeInfo('week')),
		anyday: taskBlock(storage.getTypeInfo('anyday')),
		newform: newform
	}));

	return selectors;
}

module.exports = render;
