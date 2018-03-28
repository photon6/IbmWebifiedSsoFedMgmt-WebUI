/**
 * 
 */

var interval = 300000; // 5 mins

$(document).ready(function() {

	setInterval(() => {
		reload()
	}, interval);


});

function reload() {	
	console.log("Reloading page to keep WebSEAL session active...");
	location.reload();
}
