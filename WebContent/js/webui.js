/**
 * JavaScript for Web front-end of the w3id F/SSO Management Utility.
 * @author rkhanna@us.ibm.com
 * 
 * Change history:
 * --------------------------------------------------------------------------------------------------
 * | VERSION	| DATE			|	CHANGE DESCRIPTION												|
 * --------------------------------------------------------------------------------------------------
 * | 0.1		| 12/08/2016	|	Initial version with Staging and Dev jobs detection and boarding|
 * --------------------------------------------------------------------------------------------------
 * | 0.2		| 12/09/2016	|	Supporting simulated production jobs detection and boarding		|
 * --------------------------------------------------------------------------------------------------
 * | 1.0		| 12/16/2016	|	Supporting production jobs detection and boarding; baselined	|
 * |			|				|	release.														|
 * --------------------------------------------------------------------------------------------------
 * 
 */

var OIDC_STAGING = "false";
var SAML_STAGING = "false";

var OIDC_DEV = "false";
var SAML_DEV = "false";

var OIDC_PROD = "false";
var SAML_PROD = "false";

var auth="noboarding";

var delayInSecs = 15;

var STAG_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
var DEV_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
var PROD_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";

var jso;

$(document).ready(function() {
	
	var config = {
		    providerID: "IBM",
		    client_id: "OGFhNGNiNmYtYjdhNS00",
		    redirect_uri: "https://dal9-ppd-cwsicio2-03.sec.ibm.com:446/mgmt/activation_1.html",
		    authorization: "https://w3id.alpha.sso.ibm.com/isam/oidc/endpoint/amapp-runtime-oidcidp/authorize",
		    scopes: { request: ["openid"]},
		    debug:true,
		    presenttoken:"qs"
		};


		jso = new JSO(config);

	
//	checkOidcToken();
	
	initControls(); 
		
	$('#button-stag-refresh').on('click', function (e) {
//		callDownStream();
		$('.stag-message').text("Checking...");
		checkPendingJobs("Staging");
		pushPendingJobsStatusToUI("Staging");
		$('.stag-message').text("");
    });

	$('#button-stag-board').on('click', function (e) {
		if ($('#checkbox-stag-saml').is(':checked') == true && $('#checkbox-stag-oidc').is(':checked') != true) auth="SAML";
		else if ($('#checkbox-stag-saml').is(':checked') != true && $('#checkbox-stag-oidc').is(':checked') == true) auth="OIDC";
		else if ($('#checkbox-stag-saml').is(':checked') == true && $('#checkbox-stag-oidc').is(':checked') == true) auth="";

		if (auth != "noboarding") {
			$('.stag-message').text("Boarding...");
			boardJobs("Staging", auth);
			showBoardingDialog();
			$('.stag-message').text("");
			OIDC_STAGING = "false";
			SAML_STAGING = "false";
			pushPendingJobsStatusToUI("Staging");
		}
    });
	
	$('#button-test-refresh').on('click', function (e) {
//		callDownStream();
		$('.test-message').text("Checking...");
		checkPendingJobs("Test");
		pushPendingJobsStatusToUI("Test");
		$('.test-message').text("");
	});
	
	$('#button-test-board').on('click', function (e) {
		if ($('#checkbox-test-saml').is(':checked') == true && $('#checkbox-test-oidc').is(':checked') != true) auth="SAML";
		else if ($('#checkbox-test-saml').is(':checked') != true && $('#checkbox-test-oidc').is(':checked') == true) auth="OIDC";
		else if ($('#checkbox-test-saml').is(':checked') == true && $('#checkbox-test-oidc').is(':checked') == true) auth="";

		if (auth != "noboarding") {
			$('.test-message').text("Boarding...");
			boardJobs("Test");
			showBoardingDialog();
			$('.test-message').text("");
			OIDC_DEV = "false";
			SAML_DEV = "false";
			pushPendingJobsStatusToUI("Test");
		}
    });
	
	$('#button-prod-refresh').on('click', function (e) {
//		callDownStream();
		$('.prod-message').text("Checking...");
		checkPendingJobs("Prod");
		pushPendingJobsStatusToUI("Prod");
		$('.prod-message').text("");
	});
	
	$('#button-prod-board').on('click', function (e) {
		if ($('#checkbox-prod-saml').is(':checked') == true && $('#checkbox-prod-oidc').is(':checked') != true) auth="SAML";
		else if ($('#checkbox-prod-saml').is(':checked') != true && $('#checkbox-prod-oidc').is(':checked') == true) auth="OIDC";
		else if ($('#checkbox-prod-saml').is(':checked') == true && $('#checkbox-prod-oidc').is(':checked') == true) auth="";

		if (auth != "noboarding") {
			$('.prod-message').text("Boarding...");
			boardJobs("Prod");
			showBoardingDialog();
			$('.prod-message').text("");
			OIDC_PROD = "false";
			SAML_PROD = "false";
			pushPendingJobsStatusToUI("Prod");
		}    });
	
	
	clickAllLogsWebSEAL();
	clickIndyLogsWebSEAL();

	
});

function initControls() {
	
	clickAllLogsWebSEAL();
	
	$('#accordionProd').accordion({animate: false});
	$('#accordionStag').accordion({animate: false});
	$('#accordionTest').accordion({animate: false});
	
	$(document).tooltip({


	});

//	$('#button-prod-refresh').removeAttr('disabled');
//	$('#button-stag-refresh').removeAttr('disabled');
//	$('#button-test-refresh').removeAttr('disabled');

}

function clickAllLogsWebSEAL() {
	$('#label-alllogs-webseal').on('change', function(e) {
		$('#accordionProd-webseal').accordion({animate: false});
		$('#accordionStag-webseal').accordion({animate: false});
		$('#accordionTest-webseal').accordion({animate: false});
		$('#label-indylogs-webseal').removeAttr('checked');	
		$('#button-alllogs-websealtail-tail').attr('disabled', 'disabled');
		$('#button-alllogs-websealtail-search').attr('disabled', 'disabled');
		$('#button-alllogs-websealtail-download').attr('disabled', 'disabled');
	});

}

function clickIndyLogsWebSEAL() {
	$('#label-indylogs-webseal').on('change', function(e) {
		$('#accordionProd-webseal').accordion({animate: false});
		$('#accordionStag-webseal').accordion({animate: false});
		$('#accordionTest-webseal').accordion({animate: false});
		$('#label-alllogs-webseal').removeAttr('checked');	
		$('#button-alllogs-websealtail-tail').removeAttr('disabled');
		$('#button-alllogs-websealtail-search').removeAttr('disabled');
		$('#button-alllogs-websealtail-download').removeAttr('disabled');
	});

}

function showBoardingDialog() {
	$("#dialog-boarding-triggered").dialog({
		resizable: false,
		modal: true
	});
}



function checkPendingJobs(env) {
	console.log("Checking for pending jobs...");
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		console.log("Calling " + STAG_HOST + "/w3id-svc/checkPendingJobs?env=" + env);
		
		$.ajax({
			  dataType: "json",
			  url: STAG_HOST + "/w3id-svc/checkPendingJobs?env=" + env,
			  type: "get",
			  async: false,
			  success: function(data){
		          for (var i in data) {
			          if (data[i].AuthType.toLowerCase() == "oidc") {
			        	  OIDC_STAGING = data[i].JobStatus.toLowerCase();
			        	  console.log("OIDC in " + env + ": " + OIDC_STAGING);
			          } else if (data[i].AuthType.toLowerCase() == "saml2") {
			        	  SAML_STAGING = data[i].JobStatus.toLowerCase();
			        	  console.log("SAML in " + env + ": " + SAML_STAGING);
			          } // end if-else-if
		          } // end for		
			}
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

	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		console.log("Calling " + DEV_HOST + "/w3id-svc/checkPendingJobs?env=" + env);

		$.ajax({
			  dataType: "json",
			  url: DEV_HOST + "/w3id-svc/checkPendingJobs?env=" + env,
			  type: "get",
			  async: false,
			  success: function(data){
		          for (var i in data) {
			          if (data[i].AuthType.toLowerCase() == "oidc") {
			        	  OIDC_DEV = data[i].JobStatus.toLowerCase();
			        	  console.log("OIDC in " + env + ": " + OIDC_DEV);
			          } else if (data[i].AuthType.toLowerCase() == "saml2") {
			        	  SAML_DEV = data[i].JobStatus.toLowerCase();
			        	  console.log("SAML in " + env + ": " + SAML_DEV);
			          } // end if-else-if
		          } // end for		
			}
			}); // end $.ajax
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
		console.log("Calling " + PROD_HOST + "/w3id-svc/checkPendingJobs?env=" + env);
		$.ajax({
			  dataType: "json",
			  url: PROD_HOST + "/w3id-svc/checkPendingJobs?env=" + env,
			  type: "get",
			  async: false,
			  success: function(data){
		          for (var i in data) {
			          if (data[i].AuthType.toLowerCase() == "oidc") {
			        	  OIDC_PROD = data[i].JobStatus.toLowerCase();
			        	  console.log("OIDC in " + env + ": " + OIDC_PROD);
			          } else if (data[i].AuthType.toLowerCase() == "saml2") {
			        	  SAML_PROD = data[i].JobStatus.toLowerCase();
			        	  console.log("SAML in " + env + ": " + SAML_PROD);
			          } // end if-else-if
		          } // end for		
			}
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
	} // end outer if
	
}

function pushPendingJobsStatusToUI(env) {
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		
		if (SAML_STAGING == "true") {
			$('#checkbox-stag-saml').attr('checked','checked');
			$('#button-stag-board').removeAttr('disabled');
		} else { 
			$('#checkbox-stag-saml').removeAttr('checked');
		}
		
		if (OIDC_STAGING == "true") {
			$('#checkbox-stag-oidc').attr('checked','checked');
			$('#button-stag-board').removeAttr('disabled');
		} else { 
			$('#checkbox-stag-oidc').removeAttr('checked');
		}

		if (SAML_STAGING != "true" && OIDC_STAGING != "true") {
			$('#button-stag-board').attr('disabled','disabled');
		}


	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		
		if (SAML_DEV == "true") {
			$('#checkbox-test-saml').attr('checked','checked');
			$('#button-test-board').removeAttr('disabled');
		} else { 
			$('#checkbox-test-saml').removeAttr('checked');
		}
		
		if (OIDC_DEV == "true") {
			$('#checkbox-test-oidc').attr('checked','checked');
			$('#button-test-board').removeAttr('disabled');
		} else { 
			$('#checkbox-test-oidc').removeAttr('checked');
		}

		if (SAML_DEV != "true" && OIDC_DEV != "true") {
			$('#button-test-board').attr('disabled','disabled');
		}

		
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		
		if (SAML_PROD == "true") {
			$('#checkbox-prod-saml').attr('checked','checked');
			$('#button-prod-board').removeAttr('disabled');
		} else { 
			$('#checkbox-prod-saml').removeAttr('checked');
		}
		
		if (OIDC_PROD == "true") {
			$('#checkbox-prod-oidc').attr('checked','checked');
			$('#button-prod-board').removeAttr('disabled');
		} else { 
			$('#checkbox-prod-oidc').removeAttr('checked');
		}

		if (SAML_PROD != "true" && OIDC_PROD != "true") {
			$('#button-prod-board').attr('disabled','disabled');
		}
		
	} // end outer if
	
}

function boardJobs(env, auth) {
	console.log("Boarding Jobs...");
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		console.log("Calling " + STAG_HOST + "/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "&aynsc=true");
		
		$.ajax({
			  dataType: "json",
			  type: "get",
			  url: STAG_HOST + "/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "&aynsc=true"
			}); // end $.ajax
		
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		console.log("Calling " + DEV_HOST + "/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "&aynsc=true");

		$.ajax({
			  dataType: "json",
			  type: "get",
			  url: DEV_HOST + "/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "&aynsc=true"
			}); // end $.ajax

	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		console.log("Calling " + PROD_HOST + "/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "&aynsc=true");

		$.ajax({
			  dataType: "json",
			  url: PROD_HOST + "/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "&aynsc=true"
			}); // end $.ajax
	} // end outer if
	
}

function checkOidcToken(){
//	var config = {
//		    providerID: "IBM",
//		    client_id: "OGFhNGNiNmYtYjdhNS00",
//		    redirect_uri: "https://dal9-ppd-cwsicio2-03.sec.ibm.com:446/mgmt/activation_1.html",
//		    authorization: "https://w3id.alpha.sso.ibm.com/isam/oidc/endpoint/amapp-runtime-oidcidp/authorize",
//		    scopes: { request: ["openid"]},
//		    debug:true,
//		    presenttoken:"qs"
//		};
//
//
//		jso = new JSO(config);
		JSO.enablejQuery($);
		jso.on('redirect', function(url) {
		  if(jso.URLcontainsToken(window.location.toString())){
		        console.log('I just got the token');
		       jso.callback(window.location.toString(), config.providerID);
		  }else{
		        console.log(" I am in the index page and redirecting to URL: "+url);
		        window.location = url;
		  }
		});

		jso.on('callback', function(url) {
		   console.log('Here I go... I am in callback');
		});


		jso.getToken(function(token) {

		        console.log("I got the token: ", token);
		        console.log("Stringified token: " + JSON.stringify(token));

		}, {});

		//alert('executed script!!')
}
function callDownStream(){

		   jso.getToken(function(token) {

		        console.log("I got the token: ", token);
		        console.log("Stringified token: " + JSON.stringify(token));
//		        alert(JSON.stringify(token));
//
//		        $.ajax({
//		              url: 'https://dpev577.innovate.ibm.com:9443/DownStreamTest/services/AllAuthenticatedUsers',
//		              method: 'GET',
//		              xhrFields: {
//		                 withCredentials: true
//		              },
//		              headers: {
//		                'Authorization':'Bearer '+token.access_token,
//		                'Content-Type':'application/json'
//		              },
//		              dataType: 'html',
//		              beforeSend: function(xhr, settings) {
//		                                alert('before Send: '+token.access_token);
//		                                xhr.setRequestHeader('Authorization','Bearer ' + token.access_token);
//		                                console.log("xhr settings",settings);
//		                        }
//		        }).done(function( data ) {
//		                $(".result").append(data);
//		        }).fail(function(jqXHR, textStatus, errorThrown) {
//		            alert( "error"+textStatus );
//		            console.log("Error: ",errorThrown);
//		             console.log("Error: ",textStatus);
//
//		        });

		    }, {});


 }

