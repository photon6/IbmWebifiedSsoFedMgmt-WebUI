/**
 * 
 */

var PROD_INDEX=0;
var STAG_INDEX=1;
var TEST_INDEX=2;

var PROD_ACCODION_INITIALIZED=false;
var STAG_ACCODION_INITIALIZED=false;
var TEST_ACCODION_INITIALIZED=false;


//var STAG_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
//var DEV_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
//var PROD_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";

var STAG_HOST="http://localhost:9080";
var TEST_HOST="http://localhost:9080";
var PROD_HOST="http://localhost:9080";

var DEVICEFP_FETCH_URI="/w3id-svc/lookupDeviceFP"; // lookupDeviceFP?env=test&userid=test1@us.ibm.com




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
//				getLogsListing("prod");
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

	$('#devicefp-lookup-textarea-prod').on('click', function(e) {
		$('#devicefp-lookup-textarea-prod').prop('value', '');
	});

	$('#devicefp-lookup-reset-prod').on('click', function(e) {
		$('#devicefp-lookup-textarea-prod').prop('value', '');
	});

	$('#devicefp-lookup-search-prod').on('click', function(e) {
		userIds = $('#devicefp-lookup-textarea-prod').val();
		if ($('#btn-devicefp-lookup-search-email-prod').prop('checked')) {
			async = true;
		} else {
			async = false;
		}
		getDeviceFps("prod", userIds, async);
		
	});

	$('#btn-tfim-custom-ldapmapper-file-upload-prod').on('change', function(e) {
		if ($('#btn-tfim-custom-ldapmapper-file-upload-prod').prop('checked')) {
			$('#btn-tfim-custom-ldapmapper-server-filepath-prod').prop('checked', '');
			$('#btn-tfim-custom-ldapmapper-version-revert-prod').prop('checked', '');
			$('#file-tfim-custom-ldapmapper-file-upload-prod').prop('hidden', '');
			$('#txt-tfim-custom-ldapmapper-server-filepath-prod').prop('hidden', 'true');
			$('#lbl-tfim-custom-ldapmapper-server-filepath-prod').prop('hidden', 'true');
			$('#select-tfim-custom-ldapmapper-version-revert-prod').prop('hidden', 'true');
			$('#lbl-tfim-custom-ldapmapper-version-revert-prod').prop('hidden', 'true');
			
		}
	});

	$('#btn-tfim-custom-ldapmapper-server-filepath-prod').on('change', function(e) {
		if ($('#btn-tfim-custom-ldapmapper-server-filepath-prod').prop('checked')) {
			$('#btn-tfim-custom-ldapmapper-file-upload-prod').prop('checked', '');
			$('#btn-tfim-custom-ldapmapper-version-revert-prod').prop('checked', '');
			$('#file-tfim-custom-ldapmapper-file-upload-prod').prop('hidden', 'true');
			$('#txt-tfim-custom-ldapmapper-server-filepath-prod').prop('hidden', '');
			$('#lbl-tfim-custom-ldapmapper-server-filepath-prod').prop('hidden', '');
			$('#select-tfim-custom-ldapmapper-version-revert-prod').prop('hidden', 'true');
			$('#lbl-tfim-custom-ldapmapper-version-revert-prod').prop('hidden', 'true');
		}
	});
	
	$('#btn-tfim-custom-ldapmapper-version-revert-prod').on('change', function(e) {
		if ($('#btn-tfim-custom-ldapmapper-version-revert-prod').prop('checked')) {
			$('#btn-tfim-custom-ldapmapper-file-upload-prod').prop('checked', '');
			$('#btn-tfim-custom-ldapmapper-server-filepath-prod').prop('checked', '');
			$('#file-tfim-custom-ldapmapper-file-upload-prod').prop('hidden', 'true');
			$('#txt-tfim-custom-ldapmapper-server-filepath-prod').prop('hidden', 'true');
			$('#lbl-tfim-custom-ldapmapper-server-filepath-prod').prop('hidden', 'true');
			$('#select-tfim-custom-ldapmapper-version-revert-prod').prop('hidden', '');
			$('#lbl-tfim-custom-ldapmapper-version-revert-prod').prop('hidden', '');
		}
	});

	/*
	 * stag components
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

	$('#btn-tfim-custom-ldapmapper-file-upload-stag').on('change', function(e) {
		if ($('#btn-tfim-custom-ldapmapper-file-upload-stag').prop('checked')) {
			$('#btn-tfim-custom-ldapmapper-server-filepath-stag').prop('checked', '');
			$('#btn-tfim-custom-ldapmapper-version-revert-stag').prop('checked', '');
			$('#file-tfim-custom-ldapmapper-file-upload-stag').prop('hidden', '');
			$('#txt-tfim-custom-ldapmapper-server-filepath-stag').prop('hidden', 'true');
			$('#lbl-tfim-custom-ldapmapper-server-filepath-stag').prop('hidden', 'true');
			$('#select-tfim-custom-ldapmapper-version-revert-stag').prop('hidden', 'true');
			$('#lbl-tfim-custom-ldapmapper-version-revert-stag').prop('hidden', 'true');
			
		}
	});

	$('#btn-tfim-custom-ldapmapper-server-filepath-stag').on('change', function(e) {
		if ($('#btn-tfim-custom-ldapmapper-server-filepath-stag').prop('checked')) {
			$('#btn-tfim-custom-ldapmapper-file-upload-stag').prop('checked', '');
			$('#btn-tfim-custom-ldapmapper-version-revert-stag').prop('checked', '');
			$('#file-tfim-custom-ldapmapper-file-upload-stag').prop('hidden', 'true');
			$('#txt-tfim-custom-ldapmapper-server-filepath-stag').prop('hidden', '');
			$('#lbl-tfim-custom-ldapmapper-server-filepath-stag').prop('hidden', '');
			$('#select-tfim-custom-ldapmapper-version-revert-stag').prop('hidden', 'true');
			$('#lbl-tfim-custom-ldapmapper-version-revert-stag').prop('hidden', 'true');
		}
	});
	
	$('#btn-tfim-custom-ldapmapper-version-revert-stag').on('change', function(e) {
		if ($('#btn-tfim-custom-ldapmapper-version-revert-stag').prop('checked')) {
			$('#btn-tfim-custom-ldapmapper-file-upload-stag').prop('checked', '');
			$('#btn-tfim-custom-ldapmapper-server-filepath-stag').prop('checked', '');
			$('#file-tfim-custom-ldapmapper-file-upload-stag').prop('hidden', 'true');
			$('#txt-tfim-custom-ldapmapper-server-filepath-stag').prop('hidden', 'true');
			$('#lbl-tfim-custom-ldapmapper-server-filepath-stag').prop('hidden', 'true');
			$('#select-tfim-custom-ldapmapper-version-revert-stag').prop('hidden', '');
			$('#lbl-tfim-custom-ldapmapper-version-revert-stag').prop('hidden', '');
		}
	});
	
	
	/*
	 * test components
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

	$('#btn-tfim-custom-ldapmapper-file-upload-test').on('change', function(e) {
		if ($('#btn-tfim-custom-ldapmapper-file-upload-test').prop('checked')) {
			$('#btn-tfim-custom-ldapmapper-server-filepath-test').prop('checked', '');
			$('#btn-tfim-custom-ldapmapper-version-revert-test').prop('checked', '');
			$('#file-tfim-custom-ldapmapper-file-upload-test').prop('hidden', '');
			$('#txt-tfim-custom-ldapmapper-server-filepath-test').prop('hidden', 'true');
			$('#lbl-tfim-custom-ldapmapper-server-filepath-test').prop('hidden', 'true');
			$('#select-tfim-custom-ldapmapper-version-revert-test').prop('hidden', 'true');
			$('#lbl-tfim-custom-ldapmapper-version-revert-test').prop('hidden', 'true');
			
		}
	});

	$('#btn-tfim-custom-ldapmapper-server-filepath-test').on('change', function(e) {
		if ($('#btn-tfim-custom-ldapmapper-server-filepath-test').prop('checked')) {
			$('#btn-tfim-custom-ldapmapper-file-upload-test').prop('checked', '');
			$('#btn-tfim-custom-ldapmapper-version-revert-test').prop('checked', '');
			$('#file-tfim-custom-ldapmapper-file-upload-test').prop('hidden', 'true');
			$('#txt-tfim-custom-ldapmapper-server-filepath-test').prop('hidden', '');
			$('#lbl-tfim-custom-ldapmapper-server-filepath-test').prop('hidden', '');
			$('#select-tfim-custom-ldapmapper-version-revert-test').prop('hidden', 'true');
			$('#lbl-tfim-custom-ldapmapper-version-revert-test').prop('hidden', 'true');
		}
	});
	
	$('#btn-tfim-custom-ldapmapper-version-revert-test').on('change', function(e) {
		if ($('#btn-tfim-custom-ldapmapper-version-revert-test').prop('checked')) {
			$('#btn-tfim-custom-ldapmapper-file-upload-test').prop('checked', '');
			$('#btn-tfim-custom-ldapmapper-server-filepath-test').prop('checked', '');
			$('#file-tfim-custom-ldapmapper-file-upload-test').prop('hidden', 'true');
			$('#txt-tfim-custom-ldapmapper-server-filepath-test').prop('hidden', 'true');
			$('#lbl-tfim-custom-ldapmapper-server-filepath-test').prop('hidden', 'true');
			$('#select-tfim-custom-ldapmapper-version-revert-test').prop('hidden', '');
			$('#lbl-tfim-custom-ldapmapper-version-revert-test').prop('hidden', '');
		}
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

	
	// Prod dialog box: download
//	$('#dialog-download-prod').dialog({
//		autoOpen: false,
//		resizable: false,
//		width: 400,
//		height: 500,
//		buttons: {
//			"OK": function() {
//				console.log($('#radio-dialog-retrieve-download-prod').is(":checked"));
//				if ($('#radio-dialog-retrieve-download-prod').is(":checked")) {
//					dKey = $('#text-dialog-retrieve-download-prod').val();
//					retrieveLogs("Prod", $('#text-dialog-retrieve-download-prod').val());
//					$(this).dialog("close");				
//					$('#dialog-please-wait').dialog("open");
//				} else {
//					count = gatherAllLogsToFetch("Prod");
//					console.log("Count of logs requested are: " + count);
//					if (isNaN(count) || count <= 0) {
//						$(this).dialog("close");				
//						$('#dialog-invalid-selection').dialog("open");
//					} else {
//						option = determineDownloadOption("Prod");
//						if (option === "timeframe") {
//							dtRange = $('#text-dialog-download-timeframe-prod').val();
//							console.log("Date range is: " + dtRange)
//							getLogs("Prod", option, dtRange);
//						} else {
//							getLogs("Prod", option, null);
//						} // end if count
//						$(this).dialog("close");				
//						$('#dialog-please-wait').dialog("open");				
//					}
//				}
//			},
//			"Cancel": function() {
//				$(this).dialog("close");
//			}
//		}
//	});
//	
//	// Stag dialog box: download
//	$('#dialog-download-stag').dialog({
//		autoOpen: false,
//		resizable: false,
//		width: 400,
//		height: 500,
//		buttons: {
//			"OK": function() {
//				console.log($('#radio-dialog-retrieve-download-stag').is(":checked"));
//				if ($('#radio-dialog-retrieve-download-stag').is(":checked")) {
//					dKey = $('#text-dialog-retrieve-download-stag').val();
//					retrieveLogs("Staging", $('#text-dialog-retrieve-download-stag').val());
//					$(this).dialog("close");				
//					$('#dialog-please-wait').dialog("open");				
//				} else {
//					count = gatherAllLogsToFetch("Staging");
//					console.log("Count of logs requested are: " + count);
//					if (isNaN(count) || count <= 0) {
//						$(this).dialog("close");				
//						$('#dialog-invalid-selection').dialog("open");
//					} else {
//						option = determineDownloadOption("Staging");
//						if (option === "timeframe") {
//							dtRange = $('#text-dialog-download-timeframe-stag').val();
//							console.log("Date range is: " + dtRange)
//							getLogs("Staging", option, dtRange);
//						} else {
//							getLogs("Staging", option, null);
//						} // end if count
//						$(this).dialog("close");				
//						$('#dialog-please-wait').dialog("open");				
//					}
//				}
//			},
//			"Cancel": function() {
//				$(this).dialog("close");
//			}
//		}
//	});
//	
//	// Test dialog box: download	
//	$('#dialog-download-test').dialog({
//		autoOpen: false,
//		resizable: false,
//		width: 400,
//		height: 500,
//		buttons: {
//			"OK": function() {
//				if ($('#radio-dialog-retrieve-download-test').is(":checked")) {
//					dKey = $('#text-dialog-retrieve-download-test').val();
//					retrieveLogs("Prod", $('#text-dialog-retrieve-download-test').val());
//					$(this).dialog("close");				
//					$('#dialog-please-wait').dialog("open");				
//				} else {
//					count = gatherAllLogsToFetch("Test");
//					console.log("Count of logs requested are: " + count);
//					if (isNaN(count) || count <= 0) {
//						$(this).dialog("close");				
//						$('#dialog-invalid-selection').dialog("open");
//					} else {
//						option = determineDownloadOption("Test");
//						if (option === "timeframe") {
//							dtRange = $('#text-dialog-download-timeframe-test').val();
//							console.log("Date range is: " + dtRange)
//							getLogs("Test", option, dtRange);
//						} else {
//							getLogs("Test", option, null);
//						} // end if count
//						$(this).dialog("close");				
//						$('#dialog-please-wait').dialog("open");				
//					}
//				}
//			},
//			"Cancel": function() {
//				$(this).dialog("close");
//			}
//		}
//	});
//

});

function initControls() {
	
	
		
	$('#accordion-admin').accordion({animate: true});
	initSelections("prod");
	
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
		console.log()
	})
	

	$('#dialog-devicefp-lookup-result').dialog({
		autoOpen: false,
		modal: true,
		maxWidth:600,
        maxHeight: 500,
        width: 600,
        height: 500,
		buttons: {
////			"<span class='ui-icon ui-icon-copy'></span>": function() {
//			"Copy": function() {
//				
//				var clipboard = new Clipboard('.copy-button', {
//				    target: function() {
//				        return document.querySelector('#copy-target');
//				    }
//				});
//				
//				<button data-clipboard-target="#copyme">copy</button>
////				copyToClipboard('p-dialog-devicefp-lookup-result-line1');
////				$(this).dialog("close");
//				
//				$('#p-dialog-devicefp-lookup-result-line1').select();
//				document.execCommand("copy");
//
//				
//
//			},
			"OK": function() {
				$(this).dialog("close");
			}
		}
	});

//	
//
//
//	$('.dialog-search-timeframe').hide();
//	
//	$('#span-help-download-timeframe-prod').hover(function() {
//		showHelpDialog(directive_download_timeframe);
//	});
//
//	$('#span-help-search-timeframe-prod').hover(function() {
//		showHelpDialog(directive_search_timeframe);
//	});
//	
//	$('#span-help-download-timeframe-stag').hover(function() {
//		showHelpDialog(directive_download_timeframe);
//	});
//
//	$('#span-help-search-timeframe-stag').hover(function() {
//		showHelpDialog(directive_search_timeframe);
//	});
//	
//	$('#span-help-download-timeframe-test').hover(function() {
//		showHelpDialog(directive_download_timeframe);
//	});
//
//	$('#span-help-search-timeframe-test').hover(function() {
//		showHelpDialog(directive_search_timeframe);
//	});

}

function initSelections(env) {
	console.log("Initializing logs selection for " + env.toLowerCase() + "...");
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {

		$('#devicefp-lookup-textarea-stag').prop('value', 'jdoe@us.ibm.com\njdoe@in.ibm.com');

		$('#btn-devicefp-lookup-search-email-stag').prop('disabled','disabled');
		
		$('#btn-tfim-custom-ldapmapper-file-upload-stag').prop('checked', 'checked');
		$('#btn-tfim-custom-ldapmapper-server-filepath-stag').prop('checked', '');
		$('#file-tfim-custom-ldapmapper-file-upload-stag').prop('hidden', '');
		$('#lbl-tfim-custom-ldapmapper-server-filepath-stag').prop('hidden', 'true');
		$('#select-tfim-custom-ldapmapper-version-revert-stag').prop('hidden', 'true');
		$('#lbl-tfim-custom-ldapmapper-version-revert-stag').prop('hidden', 'true');


		$('#file-tfim-custom-ldapmapper-file-upload-stag').prop('disabled', 'disabled');
		$('#txt-tfim-custom-ldapmapper-server-filepath-stag').prop('disabled', 'disabled');
		$('#select-tfim-custom-ldapmapper-version-revert-stag').prop('disabled', 'disabled');


	} else if (env.toLowerCase() == "Test".toLowerCase() || env.toLowerCase() == "Dev".toLowerCase()) {

		$('#devicefp-lookup-textarea-test').prop('value', 'jdoe@us.ibm.com\njdoe@in.ibm.com');

	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		
		$('#devicefp-lookup-textarea-prod').prop('value', 'jdoe@us.ibm.com\njdoe@in.ibm.com');

		$('#btn-devicefp-lookup-search-email-prod').prop('disabled','disabled');
		
		$('#btn-tfim-custom-ldapmapper-file-upload-prod').prop('checked', 'checked');
		$('#btn-tfim-custom-ldapmapper-server-filepath-prod').prop('checked', '');
		$('#file-tfim-custom-ldapmapper-file-upload-prod').prop('hidden', '');
		$('#lbl-tfim-custom-ldapmapper-server-filepath-prod').prop('hidden', 'true');
		$('#select-tfim-custom-ldapmapper-version-revert-prod').prop('hidden', 'true');
		$('#lbl-tfim-custom-ldapmapper-version-revert-prod').prop('hidden', 'true');


		$('#file-tfim-custom-ldapmapper-file-upload-prod').prop('disabled', 'disabled');
		$('#txt-tfim-custom-ldapmapper-server-filepath-prod').prop('disabled', 'disabled');
		$('#select-tfim-custom-ldapmapper-version-revert-prod').prop('disabled', 'disabled');
		
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
							  console.log("JSON String: " + JSON.stringify(data[k]));
							  results += JSON.stringify(data[k]) + "\n";
						  } // end for
					    displayDeviceFpLookupResults(results);
				  } // end success
				}); // end $.ajax
				
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {


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
							  console.log("JSON String: " + JSON.stringify(data[k]));
							  results += JSON.stringify(data[k]) + "\n";
						  } // end for
					    displayDeviceFpLookupResults(results);
				  } // end success
				}); // end $.ajax

	} else if (env.toLowerCase() == "Prod".toLowerCase()) {

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
					  console.log("JSON String: " + JSON.stringify(data[k]));
					  results += JSON.stringify(data[k]) + "\n";
				  } // end for
			    displayDeviceFpLookupResults(results);
		  } // end success
		}); // end $.ajax
		
	} // end outer if
	
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

function extractKey(data) {
	var keys = [];
	for (var k in data) {
		console.log("JSON String: " + JSON.stringify(data[k]));
		console.log("Key: " + data[k].Key);
		keys.push(data[k].Key);		  
    } // end for
	
	if (keys.length > 1) {
		keys = $.unique(keys);
	}
	
	return keys;
	
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

function parseDates(dates) {
	var date1Str = dates.toString();
	console.log("Received dates: " + date1Str);
	var res = date1Str.replace(",","-");
	console.log("Split dates: " + res);
	
	var fromDate = res.slice(0,res.indexOf("-"));
	var toDate = res.slice(res.indexOf("-")+1, res.length);
	
	console.log("Comparing " + fromDate + "(fromDate) with " + toDate + "(toDate)");
	var diffInDateRange = compareDates(fromDate, toDate);

	console.log("Comparing " + today.toString() + "(today) with " + fromDate + "(fromDate)");
	var diffWithStartDate = compareDates(today, fromDate);
	
	console.log("Comparing " + today.toString() + "(today) with " + toDate + "(toDate)");
	var diffWithEndDate = compareDates(today, toDate);

	
	if (diffInDateRange < limit_timeframe) {
		displayMessage("You have selected a date range too large.", getEarlyDateMsg());
	} else if (diffWithStartDate > Math.abs(limit_timeframe)+1) {
			displayMessage("Your start date is too far back.", getEarlyDateMsg());
	} else if (diffWithEndDate < 0) {
		displayMessage("You have picked a future date, which is invalid.", getEarlyDateMsg());
	}
	
	return res;
}

function compareDates(date1, date2) {

	if (typeof date1 === "string") {
		dt1 = setDate(date1);
	} else {
		dt1 = date1;
	}
	
	var dt1Epoch = dt1.getTime();
	
	console.log("Date value in string for dt1: " + dt1.toString());
	console.log("Date value in Epoch time for dt1: " + dt1Epoch);
	
	console.log(typeof date2);
	if (typeof date2 === "string") {
		dt2 = setDate(date2);
	} else {
		dt2 = date2;
	}
	
	var dt2Epoch = dt2.getTime();
	
	console.log("Date value in string for dt2: " + dt2.toString());
	console.log("Date value in Epoch time for dt2: " + dt2Epoch);

	console.log("Time diff between date1 and date2 is: " + (dt1Epoch - dt2Epoch)/1000/60/60/24);
	
	return (dt1Epoch - dt2Epoch)/1000/60/60/24;
	
}

function setDate(dateString) {
	console.log("string date: " + dateString);

	var year = dateString.slice(0,dateString.length/2);
	console.log("Year derived: " + year);

	var month = dateString.slice((dateString.length/2),(dateString.length/2)+2);
	console.log("Month derived: " + month);

	var day = dateString.slice((dateString.length/2)+2,dateString.length);
	console.log("Day derived: " + day);

	var dt = new Date(year + ' ' + month+ ' ' + day);
	return dt;
}

function initTimeframeLimit() {
	var dt1Epoch = today.getTime();
	
	var dt2Epoch = (today.getTime()-Math.abs(((limit_timeframe)*1000*60*60*24)));
	dateEarlyLimit = new Date(dt2Epoch);
	
	console.log("earliest in days: " + (dt1Epoch - dt2Epoch)/1000/60/60/24);
	
	dateEarlyLimitFormattedString = dateEarlyLimit.toString()
	dateEarlyLimitFormattedString  = dateEarlyLimitFormattedString.slice(0, dateEarlyLimitFormattedString.indexOf(":")-2);

	console.log("earliest date in string: " + dateEarlyLimitFormattedString);
}

function getEarlyDateMsg() {
	return "Please select a date between today and " + dateEarlyLimitFormattedString;

}

function copyToClipboard(elementId) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(elementId).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");

	document.body.removeChild(aux);

}

