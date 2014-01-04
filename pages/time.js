var templates = require('../templates');
var htmlutils = require('../htmlutils');

function result (cb) {
	templates.template(
		{'title': 'Time',
		 'heading': 'Time',
		 'content': htmlutils.wrap('The time is ' + new Date().toLocaleTimeString(), 'p')
		},
		'default.html', 
		cb
	);
}

exports.result = result;
