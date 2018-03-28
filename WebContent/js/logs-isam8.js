/**
 * 
 */

var PROD_INDEX=0;
var STAG_INDEX=1;
var TEST_INDEX=2;


$(document).ready(function() {

	initControls();
	
	$('#accordion-logs-isam8').on('click', function(e) {
		
		if ($(this).accordion( "option", "active" ) == PROD_INDEX) {
//			getLogsListing("Prod");
		} else if ($(this).accordion( "option", "active" ) == STAG_INDEX) {
//			getLogsListing("Staging");
		} else if ($(this).accordion( "option", "active" ) == TEST_INDEX) {
//			getLogsListing("Test");
		}

		
	});

	
});

function initControls() {
	$('#accordion-logs-isam8').accordion({animate: true});

}


function getLogsListing(env) {
	console.log("Fetching logs listing from " + env.toLowerCase() + "...");
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		for (i = 0; i < STAG_HOSTS_WEBSEALS.length; i++) {
			console.log("Calling " + STAG_HOSTS_WEBSEALS[i] + "/w3id-svc/checkPendingJobs?env=" + env);
		
//			$.ajax({
//				  dataType: "json",
//				  url: STAG_HOSTS_WEBSEALS[i] + "/w3id-svc/checkPendingJobs?env=" + env,
//				  type: "get",
//				  async: false,
//				  success: function(data){
//			          for (var i in data) {
//				          if (data[i].AuthType.toLowerCase() == "oidc") {
//				        	  OIDC_STAGING = data[i].JobStatus.toLowerCase();
//				        	  console.log("OIDC in " + env + ": " + OIDC_STAGING);
//				          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//				        	  SAML_STAGING = data[i].JobStatus.toLowerCase();
//				        	  console.log("SAML in " + env + ": " + SAML_STAGING);
//				          } // end if-else-if
//			          } // end for		
//				}
//				}); // end $.ajax
		
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
		} // end for loop
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		console.log("Calling " + DEV_HOSTS_WEBSEALS[0] + "/w3id-svc/checkPendingJobs?env=" + env);

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
		for (i = 0; i < PROD_HOSTS_WEBSEALS.length; i++) {
			console.log("Calling " + PROD_HOSTS_WEBSEALS[i] + "/wga/reverseproxy_logging/instance/" + PROD_INST_WEBSEAL);
			$.ajax({
				  dataType: "json",
				  url: PROD_HOSTS_WEBSEALS[i] + "/wga/reverseproxy_logging/instance/" + PROD_INST_WEBSEAL,
				  type: "get",
//				  async: false,
				  dataType:"jsonp",
			      jsonp:"mycallback"
//			      success: function(data){
//			          for (var i in data) {
//			        	  console.log(data[i].id);
//			          } // end for		
//				  } // end success
				}); // end $.ajax

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
		} // end for
	} // end outer if
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
