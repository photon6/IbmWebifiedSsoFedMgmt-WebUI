/**
 * 
 */

var PROD_INDEX=0;
var STAG_INDEX=1;
var TEST_INDEX=2;

var PROD_ACCODION_INITIALIZED=false;
var STAG_ACCODION_INITIALIZED=false;
var TEST_ACCODION_INITIALIZED=false;

//var PROD_HOSTS_COUNT=4;
//var STAG_HOSTS_COUNT=3;
//var TEST_HOSTS_COUNT=3;

var PROD_LOGS_ALL_SELECTED=false;
var STAG_LOGS_ALL_SELECTED=false;
var TEST_LOGS_ALL_SELECTED=false;

//var STAG_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
//var DEV_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
//var PROD_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";

var STAG_HOST="http://localhost:9080";
var TEST_HOST="http://localhost:9080";
var PROD_HOST="http://localhost:9080";

var PROD_INST_WEBSEAL = 'ICIO1_Domain'; 
var PROD_HOSTS_WEBSEALS = [ 
                              'dal9-prd-cwsicio1-01.sec.ibm.com'
                            , 'dal9-prd-cwsicio1-02.sec.ibm.com'
                            , 'dal9-prd-cwsicio1-03.sec.ibm.com'
                            , 'dal9-prd-cwsicio1-04.sec.ibm.com'
                          ];

var STAG_INST_WEBSEAL = 'ICIO2_Domain'; 
var STAG_HOSTS_WEBSEALS = [
                            'dal9-ppd-cwsicio2-01a.sec.ibm.com'
                           ,'dal9-ppd-cwsicio2-02a.sec.ibm.com'
                           ,'dal9-ppd-cwsicio2-03a.sec.ibm.com'
                          ];

var TEST_INST_WEBSEAL = 'ICIO3_Domain'; 
var TEST_HOSTS_WEBSEALS = [
                            'dal9-dev-cwsicio3-01a.sec.ibm.com'
                           ,'dal9-dev-cwsicio3-02a.sec.ibm.com'
                           ,'dal9-dev-cwsicio3-03a.sec.ibm.com'
                          ];

var rootNodeString_requestLogs="Request Logs";
var rootNodeString_webSealLogs="WebSEAL (MGA) Logs";
//var rootNodeString_webSealLogs="WebSEAL (MGA) Logs";

var requestLogs = [];
var webSealLogs = [];
//var traceLogs = [];

$(document).ready(function() {

	initControls();
	
	$('#btn-selectall-prod').on('click', function(e) {
		if (PROD_LOGS_ALL_SELECTED == true) {
			for (var i = 0; i < PROD_HOSTS_WEBSEALS.length; i++) {
				  $('#jstree-div-prod-host' + (i+1)).jstree(PROD_LOGS_ALL_SELECTED).deselect_all(false);
			} // end for
			$('#btn-selectall-prod').text('Select All');
			PROD_LOGS_ALL_SELECTED = false;
		} else {
			for (var i = 0; i < PROD_HOSTS_WEBSEALS.length; i++) {
				  $('#jstree-div-prod-host' + (i+1)).jstree(PROD_LOGS_ALL_SELECTED).select_all(false);
			} // end for
			$('#btn-selectall-prod').text('Unselect All');
			PROD_LOGS_ALL_SELECTED = true;
		}	
	});
	
	$('#btn-selectall-stag').on('click', function(e) {
		if (STAG_LOGS_ALL_SELECTED == true) {
			for (var i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
				  $('#jstree-div-stag-host' + (i+1)).jstree(STAG_LOGS_ALL_SELECTED).deselect_all(false);
			} // end for
			$('#btn-selectall-stag').text('Select All');
			STAG_LOGS_ALL_SELECTED = false;
		} else {
			for (var i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
				  $('#jstree-div-stag-host' + (i+1)).jstree(STAG_LOGS_ALL_SELECTED).select_all(false);
			} // end for
			$('#btn-selectall-stag').text('Unselect All');
			STAG_LOGS_ALL_SELECTED = true;
		}
	});

	$('#btn-selectall-test').on('click', function(e) {
		if (TEST_LOGS_ALL_SELECTED == true) {
			for (var i = 0; i < TEST_HOSTS_WEBSEALS.length; i++) {
				  $('#jstree-div-test-host' + (i+1)).jstree(TEST_LOGS_ALL_SELECTED).deselect_all(false);
			} // end for
			$('#btn-selectall-test').text('Select All');
			TEST_LOGS_ALL_SELECTED = false;
		} else {
			for (var i = 0; i < TEST_HOSTS_WEBSEALS.length; i++) {
				  $('#jstree-div-test-host' + (i+1)).jstree(TEST_LOGS_ALL_SELECTED).select_all(false);
			} // end for
			$('#btn-selectall-test').text('Unselect All');
			TEST_LOGS_ALL_SELECTED = true;
		}	
	});
	
	$('#btn-browse-prod-host1').on('click', function(e) {
		$('#jstree-div-prod-host1').jstree(PROD_LOGS_ALL_SELECTED).deselect_all(false);
		checkIfAllUnselected("Prod");
	});	

	$('#btn-browse-prod-host2').on('click', function(e) {
		$('#jstree-div-prod-host2').jstree(PROD_LOGS_ALL_SELECTED).deselect_all(false);
		checkIfAllUnselected("Prod");
	});	
	
	$('#btn-browse-prod-host3').on('click', function(e) {
		$('#jstree-div-prod-host3').jstree(PROD_LOGS_ALL_SELECTED).deselect_all(false);
		checkIfAllUnselected("Prod");
	});	

	$('#btn-browse-prod-host4').on('click', function(e) {
		$('#jstree-div-prod-host4').jstree(PROD_LOGS_ALL_SELECTED).deselect_all(false);
		checkIfAllUnselected("Prod");
	});	
	
	$('#btn-browse-stag-host1').on('click', function(e) {
		$('#jstree-div-stag-host1').jstree(STAG_LOGS_ALL_SELECTED).deselect_all(false);
		checkIfAllUnselected("Staging");
	});	

	$('#btn-browse-stag-host2').on('click', function(e) {
		$('#jstree-div-stag-host2').jstree(STAG_LOGS_ALL_SELECTED).deselect_all(false);
		checkIfAllUnselected("Staging");
	});	
	
	$('#btn-browse-stag-host3').on('click', function(e) {
		$('#jstree-div-stag-host3').jstree(STAG_LOGS_ALL_SELECTED).deselect_all(false);
		checkIfAllUnselected("Staging");
	});	

	$('#btn-browse-test-host1').on('click', function(e) {
		$('#jstree-div-test-host1').jstree(TEST_LOGS_ALL_SELECTED).deselect_all(false);
		checkIfAllUnselected("Test");
		$("#dialog-browse-test-host1").dialog({
			resizable: false,
			modal: false
		});
	});	

	$('#btn-browse-test-host2').on('click', function(e) {
		$('#jstree-div-test-host2').jstree(TEST_LOGS_ALL_SELECTED).deselect_all(false);
		checkIfAllUnselected("Test");
		$("#dialog-browse-test-host2").dialog({
			resizable: false,
			modal: false
		});
	});	
	
	$('#btn-browse-test-host3').on('click', function(e) {
		$('#jstree-div-test-host3').jstree(TEST_LOGS_ALL_SELECTED).deselect_all(false);
		checkIfAllUnselected("Test");
		$("#dialog-browse-test-host3").dialog({
			resizable: false,
			modal: false
		});
	});	


	$('#accordion-logs-webseal').on('click', function(e) {

		if ($(this).accordion( "option", "active" ) == PROD_INDEX) {
			if (PROD_ACCODION_INITIALIZED == false) {
//				getLogsListing("prod");
				initSelections("prod");
				if (PROD_LOGS_ALL_SELECTED == true) {
					$('#btn-selectall-prod').text('Unselect All');
				} else {
					$('#btn-selectall-prod').text('Select All');
				}
			}
			PROD_ACCODION_INITIALIZED = true;
//			STAG_ACCODION_INITIALIZED = false;
		} else if ($(this).accordion( "option", "active" ) == STAG_INDEX) {
			if (STAG_ACCODION_INITIALIZED == false) {
//				getLogsListing("staging");
				initSelections("staging");
				if (STAG_LOGS_ALL_SELECTED == true) {
					$('#btn-selectall-stag').text('Unselect All');
				} else {
					$('#btn-selectall-stag').text('Select All');
				}
			}
			STAG_ACCODION_INITIALIZED = true;
		} else if ($(this).accordion( "option", "active" ) == TEST_INDEX) {
			if (TEST_ACCODION_INITIALIZED == false) {
//				getLogsListing("test");
				initSelections("test");
				if (TEST_LOGS_ALL_SELECTED == true) {
					$('#btn-selectall-test').text('Unselect All');
				} else {
					$('#btn-selectall-test').text('Select All');
				}
			} 
			TEST_ACCODION_INITIALIZED = true;
		}

		
	});
	


	
});

function initControls() {
	$('#accordion-logs-webseal').accordion({animate: true});
	initSelections("prod");
	if (PROD_LOGS_ALL_SELECTED == true) {
		$('#btn-selectall-prod').text('Unselect All');
	} else {
		$('#btn-selectall-prod').text('Select All');
	}
	PROD_ACCODION_INITIALIZED = true;

}

function checkIfAllUnselected(env) {

	var count = 0;

	if (env.toLowerCase() == "Staging".toLowerCase()) {
		for (var i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
			  count += $('#jstree-div-stag-host' + (i+1)).jstree().get_selected(false).length;
//			  console.log("Count is " + count);
		} // end for
		if (count == 0) {
			$('#btn-selectall-stag').text('Select All');
			STAG_LOGS_ALL_SELECTED = false;
		}
	} else if (env.toLowerCase() == "Test".toLowerCase() || env.toLowerCase() == "Dev".toLowerCase()) {
		for (var i = 0; i < TEST_HOSTS_WEBSEALS.length; i++) {
			  count += $('#jstree-div-test-host' + (i+1)).jstree().get_selected(false).length;
//			  console.log("Count is " + count);
		} // end for
		if (count == 0) {
			$('#btn-selectall-test').text('Select All');
			TEST_LOGS_ALL_SELECTED = false;
		}
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		for (var i = 0; i < PROD_HOSTS_WEBSEALS.length; i++) {
			  count += $('#jstree-div-prod-host' + (i+1)).jstree().get_selected(false).length;
//			  console.log("Count is " + count);
		} // end for
		if (count == 0) {
			$('#btn-selectall-prod').text('Select All');
			PROD_LOGS_ALL_SELECTED = false;
		}
	} // end if
}


//function updateSelections(env) {
//	console.log("Updating logs selection for " + env.toLowerCase() + "...");
//	
//	if (env.toLowerCase() == "Staging".toLowerCase()) {
//		if (STAG_LOGS_ALL_SELECTED == false) {
//			STAG_LOGS_ALL_SELECTED = true;
//			for (var i = 0; i < STAG_HOSTS_COUNT; i++) {
//				  $('#jstree-div-stag-host' + (i+1)).jstree(STAG_LOGS_ALL_SELECTED).deselect_all(false);
//			} // end for
//			$('#btn-selectall-stag').text('Select All');
//		} else {
//			STAG_LOGS_ALL_SELECTED = false;
//			for (var i = 0; i < STAG_HOSTS_COUNT; i++) {
//				  $('#jstree-div-stag-host' + (i+1)).jstree(STAG_LOGS_ALL_SELECTED).select_all(false);
//			} // end for
//			$('#btn-selectall-stag').text('Unselect All');
//		}
//		
//	} else if (env.toLowerCase() == "Test".toLowerCase() || env.toLowerCase() == "Dev".toLowerCase()) {
//		if (TEST_LOGS_ALL_SELECTED == false) {
//			TEST_LOGS_ALL_SELECTED = true;
//			for (var i = 0; i < TEST_HOSTS_COUNT; i++) {
//				  $('#jstree-div-test-host' + (i+1)).jstree(TEST_LOGS_ALL_SELECTED).deselect_all(false);
//			}
//			$('#btn-selectall-test').text('Select All');
//		} else {
//			TEST_LOGS_ALL_SELECTED = false;
//			for (var i = 0; i < TEST_HOSTS_COUNT; i++) {
//				  $('#jstree-div-test-host' + (i+1)).jstree(TEST_HOSTS_COUNT).select_all(false);
//			}
//			$('#btn-selectall-test').text('Unselect All');
//		}
//		
//	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
//		if (PROD_LOGS_ALL_SELECTED == false) {
//			PROD_LOGS_ALL_SELECTED = true;
//			for (var i = 0; i < PROD_HOSTS_COUNT; i++) {
//				  $('#jstree-div-prod-host' + (i+1)).jstree(PROD_LOGS_ALL_SELECTED).deselect_all(false);
//			}
//			$('#btn-selectall-prod').text('Select All');
//		} else {
//			PROD_LOGS_ALL_SELECTED = false;
//			for (var i = 0; i < PROD_HOSTS_COUNT; i++) {
//				  $('#jstree-div-prod-host' + (i+1)).jstree(PROD_LOGS_ALL_SELECTED).select_all(false);
//			}
//			$('#btn-selectall-prod').text('Unselect All');
//		}
//	} // end if
//	
//} // end function 


function initSelections(env) {
	console.log("Initializing logs selection for " + env.toLowerCase() + "...");
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		STAG_LOGS_ALL_SELECTED = true;
		for (var i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
		  $('#jstree-div-stag-host' + (i+1)).jstree(
				  {'plugins':["wholerow","checkbox"], 'core' : {
					  'data' : [
					            {
					            	"text" 					: rootNodeString_requestLogs,
					            	"state" : {
					            				opened 		: false,
					            				disabled	: false,
					            				selected	: STAG_LOGS_ALL_SELECTED
					            			}				            	
	    							
	    						},
	    						 {
					            	"text" 					: rootNodeString_webSealLogs,
					            	"state" : {
					            				opened 		: false,
					            				disabled	: false,
					            				selected	: STAG_LOGS_ALL_SELECTED
					            			}				            	
	    							
	    						}
	    														        						
					            ]}});
		} // end for
	} else if (env.toLowerCase() == "Test".toLowerCase() || env.toLowerCase() == "Dev".toLowerCase()) {
		TEST_LOGS_ALL_SELECTED = true;
		for (var i = 0; i < TEST_HOSTS_WEBSEALS.length; i++) {
			  $('#jstree-div-test-host' + (i+1)).jstree(
					  {'plugins':["wholerow","checkbox"], 'core' : {
						  'data' : [
						            {
						            	"text" 					: rootNodeString_requestLogs,
						            	"state" : {
						            				opened 		: false,
						            				disabled	: false,
						            				selected	: TEST_LOGS_ALL_SELECTED
						            			}				            	
		    							
		    						},
		    						 {
						            	"text" 					: rootNodeString_webSealLogs,
						            	"state" : {
						            				opened 		: false,
						            				disabled	: false,
						            				selected	: TEST_LOGS_ALL_SELECTED
						            			}				            	
		    							
		    						}
		    														        						
						            ]}
					  });
			} // end for
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		PROD_LOGS_ALL_SELECTED = true;
		for (var i = 0; i < PROD_HOSTS_WEBSEALS.length; i++) {
			  $('#jstree-div-prod-host' + (i+1)).jstree(
					  {'plugins':["wholerow","checkbox"], 'core' : {
						  'data' : [
						            {
						            	"text" 					: rootNodeString_requestLogs,
						            	"state" : {
						            				opened 		: false,
						            				disabled	: false,
						            				selected	: PROD_LOGS_ALL_SELECTED
						            			}				            	
		    							
		    						},
		    						 {
						            	"text" 					: rootNodeString_webSealLogs,
						            	"state" : {
						            				opened 		: false,
						            				disabled	: false,
						            				selected	: PROD_LOGS_ALL_SELECTED
						            			}				            	
		    							
		    						}
		    														        						
						            ]}});
			} // end for
		} // end if

	
}



function getLogsListing(env) {
	console.log("Fetching logs listing from " + env.toLowerCase() + "...");
	if (env.toLowerCase() == "Staging".toLowerCase()) {
//		for (i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
			console.log("Calling " + STAG_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env.toLowerCase());
			$.ajax({
				  dataType: "json",
				  url: STAG_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env,
				  type: "get",
				  async: false,
				  success: function(data){
			          for (var key in data) {
			        	  if (data.hasOwnProperty(key)) {
			        		  var isamhost = data[key].Host;
				        	  console.log("HOST in " + env + ": " + isamhost);
				        	  if (isamhost.includes("01")) {
					        	  var host1_logFiles = data[key].Logs.sort();
//					        	  host1_logFiles = host1_logFiles.sort();
					        	  for (var key2 in host1_logFiles) {
					        		  if (host1_logFiles.hasOwnProperty(key2)) {
					        			  if (host1_logFiles[key2].id.includes("request")) {
					        				  console.log("Log Files: " + host1_logFiles[key2].id);
					        				  requestLogs.push(host1_logFiles[key2].id);
					        			  } else if (host1_logFiles[key2].id.includes("msg")) {
					        				  console.log("Log Files: " + host1_logFiles[key2].id);
					        				  webSealLogs.push(host1_logFiles[key2].id);
					        			  } // end if
				        			  } else if (host1_logFiles[key2].id.includes("trace")) {
				        				  console.log("Log Files: " + host1_logFiles[key2].id);
				        				  traceLogs.push(host1_logFiles[key2].id);
					        		  } // end if
					        	  } // end for key2
					  		  	pushChangesToUI(requestLogs, env, "host1");
				        	  } // end if re: host 01
				          } // end if-else-if
			          } // end for key
				  } // end success	
				}); // end $.ajax
		

			
//		$.getJSON("https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443/w3id-svc/checkPendingJobs?env=" + env, function(data){
//	          for (var i in data) {
//		          if (data[i].AuthType.toLowerCase() == "oidc") {
//		        	  OIDC_STAGING = data[i].JobStatus.toLowerCase();
//		        	  console.log("OIDC in " + env + ": " + OIDC_STAGING);
//		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	SAML_STAGING = data[i].JobStatus.toLowerCase();
//			        	console.log("SAML in " + env + ": " + SAML_STAGING);
//		          } // end if-else-if
//	          } // end for		
//		}); // end $.getJSON
//		} // end for loop
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		console.log("Calling " + TEST_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env.toLowerCase());

//		$.ajax({
//			  dataType: "json",
//			  url: DEV_HOST + "/w3id-svc/checkPendingJobs?env=" + env,
//			  type: "get",
//			  async: false,
//			  success: function(data){
//		          for (var i in data) {
//			          if (data[i].AuthType.toLowerCase() == "oidc") {
//			        	  OIDC_DEV = data[i].JobStatus.toLowerCase();
//			        	  console.log("OIDC in " + env + ": " + OIDC_DEV);
//			          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	  SAML_DEV = data[i].JobStatus.toLowerCase();
//			        	  console.log("SAML in " + env + ": " + SAML_DEV);
//			          } // end if-else-if
//		          } // end for		
//			}
//			}); // end $.ajax
		
//		$.getJSON("https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443/w3id-svc/checkPendingJobs?env=" + env, function(data){
//	          for (var i in data) {
//		          if (data[i].AuthType.toLowerCase() == "oidc") {
//		        	  OIDC_DEV = data[i].JobStatus.toLowerCase();
//		        	  console.log("OIDC in " + env + ": " + OIDC_DEV);
//		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//		        	  	SAML_DEV = data[i].JobStatus.toLowerCase();
//		        	  	console.log("SAML in " + env + ": " + SAML_DEV);
//		          } // end if-else-if
//	          } // end for		
//		}); // end $.getJSON

	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
//		for (i = 0; i < PROD_HOSTS_WEBSEALS.length; i++) {
		console.log("Calling " + PROD_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env.toLowerCase());
//			$.ajax({
//				  dataType: "json",
//				  url: PROD_HOSTS_WEBSEALS[i] + "/wga/reverseproxy_logging/instance/" + PROD_INST_WEBSEAL,
//				  type: "get",
////				  async: false,
//				  dataType:"jsonp",
//			      jsonp:"mycallback"
//			      success: function(data){
//			          for (var i in data) {
//			        	  console.log(data[i].id);
//			          } // end for		
//				  } // end success
//				}); // end $.ajax

//		$.getJSON("https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443/w3id-svc/checkPendingJobs?env=" + env, function(data){
//	          for (var i in data) {
//		          if (data[i].AuthType.toLowerCase() == "oidc") {
//		        	  OIDC_PROD = data[i].JobStatus.toLowerCase();
//		        	  console.log("OIDC in " + env + ": " + OIDC_PROD);
//		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	  SAML_PROD = data[i].JobStatus.toLowerCase();
//			        	  console.log("SAML in " + env + ": " + SAML_PROD);
//		          } // end if-else-if
//	          } // end for		
//		}); // end $.getJSON
//		} // end for
	} // end outer if
}

function getLogsListing(env, host) {
	console.log("Fetching logs listing from " + env.toLowerCase() + "...");
	if (env.toLowerCase() == "Staging".toLowerCase()) {
//		for (i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
			console.log("Calling " + STAG_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env.toLowerCase());
			$.ajax({
				  dataType: "json",
				  url: STAG_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env,
				  type: "get",
				  async: false,
				  success: function(data){
			          for (var key in data) {
			        	  if (data.hasOwnProperty(key)) {
			        		  var isamhost = data[key].Host;
				        	  console.log("HOST in " + env + ": " + isamhost);
				        	  if (isamhost.includes("01")) {
					        	  var host1_logFiles = data[key].Logs.sort();
//					        	  host1_logFiles = host1_logFiles.sort();
					        	  for (var key2 in host1_logFiles) {
					        		  if (host1_logFiles.hasOwnProperty(key2)) {
					        			  if (host1_logFiles[key2].id.includes("request")) {
					        				  console.log("Log Files: " + host1_logFiles[key2].id);
					        				  requestLogs.push(host1_logFiles[key2].id);
					        			  } else if (host1_logFiles[key2].id.includes("msg")) {
					        				  console.log("Log Files: " + host1_logFiles[key2].id);
					        				  webSealLogs.push(host1_logFiles[key2].id);
					        			  } // end if
				        			  } else if (host1_logFiles[key2].id.includes("trace")) {
				        				  console.log("Log Files: " + host1_logFiles[key2].id);
				        				  traceLogs.push(host1_logFiles[key2].id);
					        		  } // end if
					        	  } // end for key2
					  		  	pushChangesToUI(requestLogs, env, "host1");
				        	  } // end if re: host 01
				          } // end if-else-if
			          } // end for key
				  } // end success	
				}); // end $.ajax
		

			
//		$.getJSON("https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443/w3id-svc/checkPendingJobs?env=" + env, function(data){
//	          for (var i in data) {
//		          if (data[i].AuthType.toLowerCase() == "oidc") {
//		        	  OIDC_STAGING = data[i].JobStatus.toLowerCase();
//		        	  console.log("OIDC in " + env + ": " + OIDC_STAGING);
//		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	SAML_STAGING = data[i].JobStatus.toLowerCase();
//			        	console.log("SAML in " + env + ": " + SAML_STAGING);
//		          } // end if-else-if
//	          } // end for		
//		}); // end $.getJSON
//		} // end for loop
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		console.log("Calling " + TEST_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env.toLowerCase());

//		$.ajax({
//			  dataType: "json",
//			  url: DEV_HOST + "/w3id-svc/checkPendingJobs?env=" + env,
//			  type: "get",
//			  async: false,
//			  success: function(data){
//		          for (var i in data) {
//			          if (data[i].AuthType.toLowerCase() == "oidc") {
//			        	  OIDC_DEV = data[i].JobStatus.toLowerCase();
//			        	  console.log("OIDC in " + env + ": " + OIDC_DEV);
//			          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	  SAML_DEV = data[i].JobStatus.toLowerCase();
//			        	  console.log("SAML in " + env + ": " + SAML_DEV);
//			          } // end if-else-if
//		          } // end for		
//			}
//			}); // end $.ajax
		
//		$.getJSON("https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443/w3id-svc/checkPendingJobs?env=" + env, function(data){
//	          for (var i in data) {
//		          if (data[i].AuthType.toLowerCase() == "oidc") {
//		        	  OIDC_DEV = data[i].JobStatus.toLowerCase();
//		        	  console.log("OIDC in " + env + ": " + OIDC_DEV);
//		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//		        	  	SAML_DEV = data[i].JobStatus.toLowerCase();
//		        	  	console.log("SAML in " + env + ": " + SAML_DEV);
//		          } // end if-else-if
//	          } // end for		
//		}); // end $.getJSON

	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
//		for (i = 0; i < PROD_HOSTS_WEBSEALS.length; i++) {
		console.log("Calling " + PROD_HOST + "/w3id-svc/getListingWebSealLogs?env=" + env.toLowerCase());
//			$.ajax({
//				  dataType: "json",
//				  url: PROD_HOSTS_WEBSEALS[i] + "/wga/reverseproxy_logging/instance/" + PROD_INST_WEBSEAL,
//				  type: "get",
////				  async: false,
//				  dataType:"jsonp",
//			      jsonp:"mycallback"
//			      success: function(data){
//			          for (var i in data) {
//			        	  console.log(data[i].id);
//			          } // end for		
//				  } // end success
//				}); // end $.ajax

//		$.getJSON("https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443/w3id-svc/checkPendingJobs?env=" + env, function(data){
//	          for (var i in data) {
//		          if (data[i].AuthType.toLowerCase() == "oidc") {
//		        	  OIDC_PROD = data[i].JobStatus.toLowerCase();
//		        	  console.log("OIDC in " + env + ": " + OIDC_PROD);
//		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	  SAML_PROD = data[i].JobStatus.toLowerCase();
//			        	  console.log("SAML in " + env + ": " + SAML_PROD);
//		          } // end if-else-if
//	          } // end for		
//		}); // end $.getJSON
//		} // end for
	} // end outer if
}


//escape backslash to avoid errors
function escapeJSON (str) {
//	console.log("Removing \" from " + str);
    return str.replace(/\\/gi,'');
}

function pushChangesToUI(requestLogs, env, host) {
	
	
	var children_requestLogs = [];
	var children_webSealLogs = [];

	
	if (requestLogs.length > 0) {
		for (i in requestLogs) {
			console.log(requestLogs[i])
			children_requestLogs.push([{ 
						 "id" 			: requestLogs[i].id,
						 "parent" 		: rootNodeString_requestLogs,
						 "text" 		: requestLogs[i].id, 
						 "state" 		: 
						 	{
							 "opened" 	: false,
							 "selected"	: true 
							 } 
					}]);
		} // end for
		
	} // end if re: requestLogs
	
	
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
	  $('#jstree-div-stag-' + host.toLowerCase()).jstree(
			  {'plugins':["wholerow","checkbox"], 'core' : {
				  'data' : [
				            {
				            	"text" 					: "Request Logs",
				            	"children" 				: children_requestLogs,
				            	"state" : {
				            				opened 		: true,
				            				disabled	: false,
				            				selected	: true
				            			},
				            	"children"				: children_requestLogs				            	
    							
    						}
    														        						
				            ]}});
	} // end if

}

