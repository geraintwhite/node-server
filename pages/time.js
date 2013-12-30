var templates = require('../templates')

function result (cb) {
	templates.template(
		{'title': 'Time', 
		 'time': 'The time is ' + new Date().toLocaleTimeString()
		},
		'time.html', 
		cb
	)
}

exports.result = result;