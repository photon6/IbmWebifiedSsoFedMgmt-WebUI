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
	
}

function initSelections(env) {
	console.log("Initializing logs selection for " + env.toLowerCase() + "...");
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		
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
		
		$('#btn-tfim-custom-ldapmapper-file-upload-test').prop('checked', 'checked');
		$('#btn-tfim-custom-ldapmapper-server-filepath-test').prop('checked', '');
		$('#file-tfim-custom-ldapmapper-file-upload-test').prop('hidden', '');
		$('#lbl-tfim-custom-ldapmapper-server-filepath-test').prop('hidden', 'true');
		$('#select-tfim-custom-ldapmapper-version-revert-test').prop('hidden', 'true');
		$('#lbl-tfim-custom-ldapmapper-version-revert-test').prop('hidden', 'true');


		$('#file-tfim-custom-ldapmapper-file-upload-test').prop('disabled', 'disabled');
		$('#txt-tfim-custom-ldapmapper-server-filepath-test').prop('disabled', 'disabled');
		$('#select-tfim-custom-ldapmapper-version-revert-test').prop('disabled', 'disabled');
		
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		
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

