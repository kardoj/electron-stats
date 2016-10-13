var Executor = {} || Executor;
;(function(ns) {
	var exec = require('child_process').exec;

	ns.execute = function(command, callback) {
		exec(command, function(error, stdout, stderr) {
			if (error) {
				console.error('exec error: ' + error);
				return;
			}
			callback.call(this, stdout);
		});
	};
})(Executor);
