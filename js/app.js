var $ = require('jquery');
var Render = require('./render');
var $container = $('#todo-app-container');
var storage = require('./storage');

var selectors = Render($container);

var button = '.' + selectors.button;
var newTask = '.' + selectors.newTask;
var typeSelector = '.' + selectors.typeSelector;

$container.on('click', function (e) {
	var $el = $(e.target);
	var task;
	var type;

	console.log('click');

	if ($el.is(button)) {
		task = {
			date: new Date(),
			text: $.trim($(newTask).val())
		};
		type = $container.find(typeSelector).filter(':checked').val();
		storage.save(type, task);

		Render($container);
	}
});

$container.keydown(function (e) {
	var $el = $(e.target);

	if ($el.is(newTask)) {
		setTimeout(function () {
			if ($.trim($el.val()) === '') {
				$(button).attr('disabled', 'disabled');
			} else {
				$(button).removeAttr('disabled');
			}
		}, 20);
	}
});
