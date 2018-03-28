/**
 * 
 */

var PROD_INDEX=0;
var STAG_INDEX=1;
var TEST_INDEX=2;

var PROD_ACCODION_INITIALIZED=false;
var STAG_ACCODION_INITIALIZED=false;
var TEST_ACCODION_INITIALIZED=false;

var REST_HOST="";

var OLD_REST_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
var NEW_REST_HOST="https://dal9-ppd-cwsicio-01.sec.ibm.com:446";
var LOCAL_REST_HOST="http://localhost:9080";

//var STAG_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
//var TEST_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
//var PROD_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";

//var STAG_HOST="https://dal9-ppd-cfmicio2-01.sec.ibm.com:19445";
//var TEST_HOST="https://dal9-ppd-cfmicio2-01.sec.ibm.com:19445";
//var PROD_HOST="https://dal9-ppd-cfmicio2-01.sec.ibm.com:19445";

//var STAG_HOST="http://localhost:9080";
//var TEST_HOST="http://localhost:9080";
//var PROD_HOST="http://localhost:9080";

var DEVICEFP_FETCH_URI="/w3id-svc/lookupDeviceFP"; // lookupDeviceFP?env=test&userid=test1@us.ibm.com
var F5COOKIE_DECODER_API="/w3id-svc/decodeF5Cookie"; // decodeF5Cookie?cookie=1677687402.36895.0000


$(document).ready(function() {

	initControls();
			
//	$.ajaxSetup({
//		  headers: {
//		    'Authorization': "Basic " + (logadmin_user + ":" + logadmin_pw)
//		  }
//		});


	$('#accordion-admin').on('click', function(e) {

		if ($(this).accordion( "option", "active" ) == PROD_INDEX) {
			if (PROD_ACCODION_INITIALIZED == false) {
				initSelections("prod");
			}
			PROD_ACCODION_INITIALIZED = true;
		} else if ($(this).accordion( "option", "active" ) == STAG_INDEX) {
			if (STAG_ACCODION_INITIALIZED == false) {
				initSelections("staging");
			}
			STAG_ACCODION_INITIALIZED = true;
		} else if ($(this).accordion( "option", "active" ) == TEST_INDEX) {
			if (TEST_ACCODION_INITIALIZED == false) {
				initSelections("test");
			} 
			TEST_ACCODION_INITIALIZED = true;
		}

	});
	
	/*
	 * Prod components
	 */

	/* 
	 * Device fingerprint lookup components
	 */
	
	$('#devicefp-lookup-textarea-prod').on('click', function(e) {
		$('#devicefp-lookup-textarea-prod').prop('value', '');
	});

	$('#devicefp-lookup-reset-prod').on('click', function(e) {
		$('#devicefp-lookup-textarea-prod').prop('value', '');
	});

	$('#devicefp-lookup-search-prod').on('click', function(e) {
		cookies = $('#devicefp-lookup-textarea-prod').val();
		if ($('#btn-devicefp-lookup-search-email-prod').prop('checked')) {
			async = true;
		} else {
			async = false;
		}
		getDeviceFps(cookies, async);
		
	});
	
	/* 
	 * F5 cookie decoder components
	 */

	$('#f5cookie-decoder-textarea-prod').on('click', function(e) {
		$('#f5cookie-decoder-textarea-prod').prop('value', '');
	});

	$('#f5cookie-decoder-reset-prod').on('click', function(e) {
		$('#f5cookie-decoder-textarea-prod').prop('value', '');
	});

	$('#f5cookie-decoder-search-prod').on('click', function(e) {
		cookies = $('#f5cookie-decoder-textarea-prod').val();
		if ($('#btn-f5cookie-decoder-search-email-prod').prop('checked')) {
			async = true;
		} else {
			async = false;
		}
		decodeF5Cookie(cookies, async);
		
	});

	/*
	 * stag components
	 */
	
	/* 
	 * Device fingerprint lookup components
	 */

	$('#devicefp-lookup-textarea-stag').on('click', function(e) {
		$('#devicefp-lookup-textarea-stag').prop('value', '');
	});

	$('#devicefp-lookup-reset-stag').on('click', function(e) {
		$('#devicefp-lookup-textarea-stag').prop('value', '');
	});

	$('#devicefp-lookup-search-stag').on('click', function(e) {
		userIds = $('#devicefp-lookup-textarea-stag').val();
		if ($('#btn-devicefp-lookup-search-email-stag').prop('checked')) {
			async = true;
		} else {
			async = false;
		}
		getDeviceFps("staging", userIds, async);
		
	});

	/* 
	 * F5 cookie decoder components
	 */

	$('#f5cookie-decoder-textarea-stag').on('click', function(e) {
		$('#f5cookie-decoder-textarea-stag').prop('value', '');
	});

	$('#f5cookie-decoder-reset-stag').on('click', function(e) {
		$('#f5cookie-decoder-textarea-stag').prop('value', '');
	});

	$('#f5cookie-decoder-search-stag').on('click', function(e) {
		cookies = $('#f5cookie-decoder-textarea-stag').val();
		if ($('#btn-f5cookie-decoder-search-email-stag').prop('checked')) {
			async = true;
		} else {
			async = false;
		}
		decodef5cookie(cookies, async);
		
	});
	
	
	/*
	 * test components
	 */
	
	/* 
	 * Device fingerprint lookup components
	 */

	$('#devicefp-lookup-textarea-test').on('click', function(e) {
		$('#devicefp-lookup-textarea-test').prop('value', '');
	});

	$('#devicefp-lookup-reset-test').on('click', function(e) {
		$('#devicefp-lookup-textarea-test').prop('value', '');
	});

	$('#devicefp-lookup-search-test').on('click', function(e) {
		userIds = $('#devicefp-lookup-textarea-test').val();
		if ($('#btn-devicefp-lookup-search-email-test').prop('checked')) {
			async = true;
		} else {
			async = false;
		}
		getDeviceFps("test", userIds, async);
		
	});

	/* 
	 * F5 cookie decoder components
	 */

	$('#f5cookie-decoder-textarea-test').on('click', function(e) {
		$('#f5cookie-decoder-textarea-test').prop('value', '');
	});

	$('#f5cookie-decoder-reset-test').on('click', function(e) {
		$('#f5cookie-decoder-textarea-test').prop('value', '');
	});

	$('#f5cookie-decoder-search-test').on('click', function(e) {
		cookies = $('#f5cookie-decoder-textarea-test').val();
		if ($('#btn-f5cookie-decoder-search-email-test').prop('checked')) {
			async = true;
		} else {
			async = false;
		}
		decodef5cookie(cookies, async);
		
	});


	/*
	 * Dialog boxes
	 */
	
	$('#btn-dialog-devicefp-lookup-copy').on('click', function(e) {
		var clipboard = new Clipboard('#btn-dialog-devicefp-lookup-copy');
	
		clipboard.on('success', function(e) {
		    console.info('Action:', e.action);
		    console.info('Text:', e.text);
		    console.info('Trigger:', e.trigger);
	
		    e.clearSelection();
		});
	
		clipboard.on('error', function(e) {
		    console.error('Action:', e.action);
		    console.error('Trigger:', e.trigger);
		});
	});

	$('#btn-dialog-f5cookie-decoder-copy').on('click', function(e) {
		var clipboard = new Clipboard('#btn-dialog-f5cookie-decoder-copy');
	
		clipboard.on('success', function(e) {
		    console.info('Action:', e.action);
		    console.info('Text:', e.text);
		    console.info('Trigger:', e.trigger);
	
		    e.clearSelection();
		});
	
		clipboard.on('error', function(e) {
		    console.error('Action:', e.action);
		    console.error('Trigger:', e.trigger);
		});
	});

	

});

function initControls() {
	
//	console.log("window.location.hostname =" + window.location.hostname);	
	if (window.location.hostname == "localhost") { 
		REST_HOST = LOCAL_REST_HOST;
	} else if (window.location.hostname.startsWith('dal9-ppd-cwsicio2-03')) { 
		REST_HOST = OLD_REST_HOST;
	} else if (window.location.hostname.startsWith('dal9-ppd-cwsicio-01')) { 
		REST_HOST = NEW_REST_HOST;
	}
	console.log("REST Service hosted on " + REST_HOST);

		
	$('#accordion-admin').accordion({animate: true});
	initSelections("Prod");
	
	/*
	 * Prod components initialized
	 */
	

	PROD_ACCODION_INITIALIZED = true;
	
	
	$('#dialog-invalid-selection').dialog({
		autoOpen: false,
		modal: true,
		buttons: {
			"OK": function() {
				$(this).dialog("close");
			}
		}

	});
	
	
	$('#dialog-please-wait').dialog({
		autoOpen: false,
		modal: true
//		,
//		buttons: {
//			"Cancel": function() {
//				$(this).dialog("close");
//			}
//		}
	});

	$('#dialog-result').dialog({
		autoOpen: false,
		modal: true,
		buttons: {
//			"Copy to Clipboard": function() {
//				$(this).dialog("close");
//			},
			"OK": function() {
				$(this).dialog("close");
			}
		}
	});
	
	$('#copy-button').on('click', function(e) {
		console.log();
	})
	

	$('#dialog-devicefp-lookup-result').dialog({
		autoOpen: false,
		modal: true,
		maxWidth:600,
        maxHeight: 500,
        width: 600,
        height: 500,
		buttons: {
			"OK": function() {
				$(this).dialog("close");
			}
		}
	});
	
	$('#dialog-f5cookie-decoder-result').dialog({
		autoOpen: false,
		modal: true,
		maxWidth:600,
        maxHeight: 500,
        width: 600,
        height: 500,
		buttons: {
			"OK": function() {
				$(this).dialog("close");
			}
		}
	});

}

function initSelections(env) {
	console.log("Initializing logs selection for " + env.toLowerCase() + "...");
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {

		$('#devicefp-lookup-textarea-stag').prop('value', 'jdoe@us.ibm.com\njdoe@in.ibm.com');
		$('#btn-devicefp-lookup-search-email-stag').prop('disabled','disabled');

		$('#f5cookie-decoder-textarea-stag').prop('value', '1677687402.36895.0000');
		$('#btn-f5cookie-decoder-search-email-stag').prop('disabled','disabled');

	} else if (env.toLowerCase() == "Test".toLowerCase() || env.toLowerCase() == "Dev".toLowerCase()) {

		$('#devicefp-lookup-textarea-test').prop('value', 'jdoe@us.ibm.com\njdoe@in.ibm.com');
		$('#btn-devicefp-lookup-search-email-test').prop('disabled','disabled');
		
		$('#f5cookie-decoder-textarea-test').prop('value', '1677687402.36895.0000');
		$('#btn-f5cookie-decoder-search-email-test').prop('disabled','disabled');
		
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		
		$('#devicefp-lookup-textarea-prod').prop('value', 'jdoe@us.ibm.com\njdoe@in.ibm.com');
		$('#btn-devicefp-lookup-search-email-prod').prop('disabled','disabled');
		
		$('#f5cookie-decoder-textarea-prod').prop('value', '1677687402.36895.0000');
		$('#btn-f5cookie-decoder-search-email-prod').prop('disabled','disabled');
		
	} // end if=else for env
		
}


function getDeviceFps(env, userIds, async) {

	var results = "";

		
	console.log("Requesting device fingerprints");
	console.log("env = " + env);
	console.log("userIds = " + userIds);
	console.log("async = " + async);
	
	
	userids = delimitString(userIds, ",");
	url = "env=" + env.toLowerCase() + "&userid=" + userids;

	if (async == "true") {
		console.log("No need to wait");
		url += "&async=true";
	} 
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		STAG_HOST = REST_HOST;
		console.log("Calling " + STAG_HOST + DEVICEFP_FETCH_URI + "\?" + url);				

			$.ajax({
				  dataType: "json",
				  url: STAG_HOST + DEVICEFP_FETCH_URI,
				  type: "get",
				  async: true,
				  data: url,
				  success: function( data ) {
					  console.log("Done with call");
					  for (var k in data) {
						  results += "Device fingerprints for " + data[k].UserID + ": (" + data[k].DeviceFingerprints + ")";
						  results += '\n\r';
						  results += '\n\r';
						  results += '\n\r';
						  results += '\n\r';
					  } // end for
					    displayDeviceFpLookupResults(results);
				  } // end success
				}); // end $.ajax
				
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		TEST_HOST = REST_HOST;

			console.log("Calling " + TEST_HOST + DEVICEFP_FETCH_URI + "\?" + url);				

			$.ajax({
				  dataType: "json",
				  url: TEST_HOST + DEVICEFP_FETCH_URI,
				  type: "get",
				  async: true,
				  data: url,
				  success: function( data ) {
					  console.log("Done with call");
					  for (var k in data) {
						  results += "Device fingerprints for " + data[k].UserID + ": (" + data[k].DeviceFingerprints + ")";
						  results += '\n\r';
						  results += '\n\r';
						  results += '\n\r';
						  results += '\n\r';
					  } // end for
					    displayDeviceFpLookupResults(results);
				  } // end success
				}); // end $.ajax

	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		PROD_HOST = REST_HOST;

		console.log("Calling " + PROD_HOST + DEVICEFP_FETCH_URI + "\?" + url);				

		$.ajax({
		  dataType: "json",
		  url: PROD_HOST + DEVICEFP_FETCH_URI,
		  type: "get",
		  async: true,
		  data: url,
		  success: function( data ) {
			  console.log("Done with call");
			  for (var k in data) {
				  results += "Device fingerprints for " + data[k].UserID + ": (" + data[k].DeviceFingerprints + ")";
				  results += '\n\r';
				  results += '\n\r';
				  results += '\n\r';
				  results += '\n\r';
			  } // end for
			  displayDeviceFpLookupResults(results);
		  } // end success
		}); // end $.ajax
		
	} // end outer if
	
}

function decodeF5Cookie(cookies, async) {

	var results = "";
		
	console.log("Requesting to decode F5 Cookies");
	console.log("f5 cookies = " + cookies);
	console.log("async = " + async);
	
	
	cookies = delimitString(cookies, ",");
	url = "cookie=" + cookies;
	
	if (async == "true") {
		console.log("No need to wait");
		url += "&async=true";
	} 
	
	console.log("Calling " + REST_HOST + F5COOKIE_DECODER_API + "?" + url);				

	$.ajax({
		  dataType: "json",
		  url: REST_HOST + F5COOKIE_DECODER_API,
		  type: "get",
		  async: true,
		  data: url,
	  success: function( data ) {
		  console.log("Done with call");
		  console.log(data);
		  for (var k in data) {
//			  console.log(k);
			  console.log(data[k]);
			  if (k == "ip") {
				  results += "IP: ";
			  } else if (k == "port") {
				  results += "Port: ";
			  } else if (k == "src") {
				  results += "F5 Cookie: ";
			  }
			  results += data[k];
			  results += '\n\r';
			  results += '\n\r';
			  results += '\n\r';
			  results += '\n\r';
		  } // end for
		  displayDecodedF5CookieResults(results);
	  } // end success
	}); // end $.ajax
	
//	if (env.toLowerCase() == "Staging".toLowerCase()) {
//		STAG_HOST = REST_HOST;
//		console.log("Calling " + F5COOKIE_DECODER_API + "\?" + url);				
//
//			$.ajax({
//				  dataType: "json",
//				  url: F5COOKIE_DECODER_API,
//				  type: "post",
//				  async: true,
//				  data: dat,
//				  success: function( data ) {
//					  console.log("Done with call");
//					  for (var k in data) {
//						  results += "Decoded F5 Cookies: (" + data[k].DecodedF5Cookies + ")";
//						  results += '\n\r';
//						  results += '\n\r';
//						  results += '\n\r';
//						  results += '\n\r';
//					  } // end for
//					    displayDecodedF5CookieResults(results);
//				  } // end success
//				}); // end $.ajax
//				
//	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
//		TEST_HOST = REST_HOST;
//
//		console.log("Calling " + F5COOKIE_DECODER_API + "\?" + url);				
//
//		$.ajax({
//			  dataType: "json",
//			  url: F5COOKIE_DECODER_API,
//			  type: "post",
//			  async: true,
//			  data: dat,
//				  success: function( data ) {
//					  console.log("Done with call");
//					  for (var k in data) {
//						  results += "Decoded F5 Cookies: (" + data[k].DecodedF5Cookies + ")";
//						  results += '\n\r';
//						  results += '\n\r';
//						  results += '\n\r';
//						  results += '\n\r';
//					  } // end for
//					  displayDecodedF5CookieResults(results);
//				  } // end success
//				}); // end $.ajax
//
//	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
//		PROD_HOST = REST_HOST;
//
//		console.log("Calling " + F5COOKIE_DECODER_API + "\?" + url);				
//
//		$.ajax({
//			  dataType: "json",
//			  url: F5COOKIE_DECODER_API,
//			  type: "post",
//			  async: true,
//			  data: dat,
//		  success: function( data ) {
//			  console.log("Done with call");
//			  for (var k in data) {
//				  results += "Decoded F5 Cookies: (" + data[k].DecodedF5Cookies + ")";
//				  results += '\n\r';
//				  results += '\n\r';
//				  results += '\n\r';
//				  results += '\n\r';
//			  } // end for
//			  displayDecodedF5CookieResults(results);
//		  } // end success
//		}); // end $.ajax
//		
//	} // end outer if
	
}


function displayMessage(msg1, msg2) {
	$('#dialog-please-wait').dialog("close");
    $('#p-dialog-result-line1').text(msg1);
    $('#p-dialog-result-line2').text(msg2);
    $('#dialog-result').dialog("open");
}

function displayDeviceFpLookupResults(results) {
	$('#dialog-please-wait').dialog("close");
    $('#p-dialog-devicefp-lookup-result-line1').text(results);
    $('#dialog-devicefp-lookup-result').dialog("open");
}

function displayDecodedF5CookieResults(results) {
	$('#dialog-please-wait').dialog("close");
    $('#p-dialog-f5cookie-decoder-result-line1').text(results);
    $('#dialog-f5cookie-decoder-result').dialog("open");
}


function mycallback(data)
{
    alert("Here: "+data.id);
}

function make_base_auth(user, password) {
	  var tok = user + ':' + password;
	  var hash = btoa(tok);
	  return "Basic " + hash;
	}

//escape backslash to avoid errors
function escapeJSON (str) {
//	console.log("Removing \" from " + str);
    return str.replace(/\\/gi,'');
}

function showDownloadDialog(env) {
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		$('#dialog-download-stag').dialog({
			resizable: false,
			modal: true			
		});
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		$('#dialog-download-test').dialog({
			resizable: false,
			modal: true			
		});
	} else if (env.toLowerCase() == "Staging".toLowerCase()) {
		$('#dialog-download-prod').dialog({
			resizable: false,
			modal: true			
		});
	} 
}

function delimitString(string, delim) {
	var returnString = "";

	if (string.includes(",")) {
		returnString = string;
	} else if (string.includes(" ")) {
		returnString = string.split(' ');
	} else if (string.includes("\n")) {
		returnString = string.split('\n');
	} else {
		returnString = string;
	}
	
	return returnString;
}


function showHelpDialog(trigger) {
	if (trigger == directive_download_timeframe) {
		$('#dialog-help-download-timeframe').dialog({
			resizable: false,
			modal: true			
		});
	} else 	if (trigger == directive_search_timeframe) {
		$('#dialog-help-search-timeframe').dialog({
			resizable: false,
			modal: true			
		});
	}

}

function copyToClipboard(elementId) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(elementId).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");

	document.body.removeChild(aux);

}

