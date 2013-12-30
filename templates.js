var fs = require("fs");

function template (data, template) {
	fs.readFile('./templates/'+template, 'utf-8', function (err, html) {
		template.replace(/{([^}]+)}/g, function (match) {
			return data.match.substring(1, data.match.length()-1)
		})
	})
}