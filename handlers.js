;(function() {
	var execBtn = document.getElementById('exec_btn');
	var execResultContainer = document.getElementById('exec_result');
	var commandsSelect = document.getElementById('exec_commands');

	execBtn.addEventListener('click', function() {
		var cmd = commandsSelect.options[commandsSelect.options.selectedIndex].value;
		Executor.execute(cmd, function(result) {
			execResultContainer.innerHTML = result;
		});
	});
})();
