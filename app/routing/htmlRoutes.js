var path = require('path');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
	app.get('/projects', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/projects.html'));
	});
};
