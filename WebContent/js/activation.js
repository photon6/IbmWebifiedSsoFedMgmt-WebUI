/**
 * JavaScript for Web front-end of the w3id F/SSO Management Utility.
 * @author rkhanna@us.ibm.com
 * 
 */

var componentBeforeReload=null;
var isamCookie = "";
var jsessionCookie = "";

var isamCookieName = "PD-S-SESSION-ID";
var jsessionCookieName = "JSESSIONID";

var directive_boarding = "boarding";
var directive_manualoverride = "manualoverride";

var OIDC_STAGING = "false";
var SAML_STAGING = "false";

var OIDC_DEV = "false";
var SAML_DEV = "false";

var OIDC_PROD = "false";
var SAML_PROD = "false";

var MANUAL_BOARDING_PROD = "true";
var MANUAL_BOARDING_STAGING = "false";
var MANUAL_BOARDING_DEV = "false";

var auth="noboarding";

var delayInSecs = 15;
var block = false;


var REST_HOST="";

var OLD_REST_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
var NEW_REST_HOST="https://dal9-ppd-cwsicio-01.sec.ibm.com:446";
var LOCAL_REST_HOST="http://localhost:9080";

//var STAG_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
//var TEST_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";
//var PROD_HOST="https://dal9-ppd-cwsicio2-03.sec.ibm.com:446";

//var STAG_HOST="https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443";
//var TEST_HOST="https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443";
//var PROD_HOST="https://dal9-ppd-cfmicio2-01.sec.ibm.com:19443";

//var STAG_HOST="http://localhost:9080";
//var TEST_HOST="http://localhost:9080";
//var PROD_HOST="http://localhost:9080";

var jso;

(function() {
	
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
//
//	
//	checkOidcToken();
	
//	console.log(Request.ServerVariables("iv-user"));
//	console.log(Request.ServerVariables("HTTP-IV-USER"));
	
	initControls();
	
	$('#checkbox-manualboarding-stag:checkbox').change( function(e) {
		if ($(this).is(':checked')) {
			showBoardingDialog(directive_manualoverride);
			$('#span-refresh-stag').prop("class", "ui-icon ui-icon-check green");
			$('#button-stag-refresh').prop("disabled", false);
			checkLastJobStatus("Staging");
			setInterval(() => {
				checkLastJobStatus("Staging")
			}, 12000);
		} else {
			$('#span-refresh-stag').prop("class", "ui-icon ui-icon-check default");
			$('#span-board-stag').prop("class", "ui-icon ui-icon-play default");
			$('#button-stag-refresh').prop("disabled", true);
			$('#button-stag-board').prop("disabled", true);
			clearInterval(() => {
				checkLastJobStatus("Staging")
			});
			$('#p-dialog-last-result-stag').text("Auto-boarding enabled");
		}
	});
	
	$('#checkbox-manualboarding-test:checkbox').change( function(e) {
		if ($(this).is(':checked')) {
			showBoardingDialog(directive_manualoverride);
			$('#span-refresh-test').prop("class", "ui-icon ui-icon-check green");
			$('#button-test-refresh').prop("disabled", false);		
			checkLastJobStatus("Test");
			setInterval(() => {
				checkLastJobStatus("Test")
			}, 12000);
		} else {
			$('#span-refresh-test').prop("class", "ui-icon ui-icon-check default");
			$('#span-board-test').prop("class", "ui-icon ui-icon-play default");
			$('#button-test-refresh').prop("disabled", true);		
			$('#button-test-board').prop("disabled", true);		
			clearInterval(() => {
				checkLastJobStatus("Test")
			});
			$('#p-dialog-last-result-test').text("Auto-boarding enabled");
		}
	});

	
	$('#button-stag-refresh').on('click', function (e) {
//		callDownStream();
		checkCookie($('#button-stag-refresh')); 
		console.log(getRequestParameter());
//		$('.stag-message').text("Checking...");
		checkPendingJobs("Staging");
//		$('.stag-message').text("");
    });

	$('#button-stag-board').on('click', function (e) {
		if ($('#checkbox-stag-saml').is(':checked') == true && $('#checkbox-stag-oidc').is(':checked') != true) auth="SAML";
		else if ($('#checkbox-stag-saml').is(':checked') != true && $('#checkbox-stag-oidc').is(':checked') == true) auth="OIDC";
		else if ($('#checkbox-stag-saml').is(':checked') == true && $('#checkbox-stag-oidc').is(':checked') == true) auth="";

		if (auth != "noboarding") {
//			$('.stag-message').text("Boarding...");
			boardJobs("Staging", auth);
			showBoardingDialog(directive_boarding);
//			$('.stag-message').text("");
			OIDC_STAGING = "false";
			SAML_STAGING = "false";
			pushPendingJobsStatusToUI("Staging");
		}
    });
	
	$('#button-test-refresh').on('click', function (e) {
//		callDownStream();
		checkCookie($('#button-test-refresh')); 
		console.log(getRequestParameter());
//		$('.test-message').text("Checking...");
		checkPendingJobs("Test");
//		$('.test-message').text("");
	});
	
	$('#button-test-board').on('click', function (e) {
		if ($('#checkbox-test-saml').is(':checked') == true && $('#checkbox-test-oidc').is(':checked') != true) auth="SAML";
		else if ($('#checkbox-test-saml').is(':checked') != true && $('#checkbox-test-oidc').is(':checked') == true) auth="OIDC";
		else if ($('#checkbox-test-saml').is(':checked') == true && $('#checkbox-test-oidc').is(':checked') == true) auth="";

		if (auth != "noboarding") {
//			$('.test-message').text("Boarding...");
			boardJobs("Test", auth);
			showBoardingDialog(directive_boarding);
//			$('.test-message').text("");
			OIDC_DEV = "false";
			SAML_DEV = "false";
			pushPendingJobsStatusToUI("Test");
		}
    });
	
	$('#button-prod-refresh').on('click', function (e) {
//		callDownStream();
		checkCookie($('#button-prod-refresh')); 
		console.log(getRequestParameter());
//		$('.prod-message').text("Checking...");
		checkPendingJobs("Prod");
//		$('.prod-message').text("");
	});
	
	$('#button-prod-board').on('click', function (e) {
		if ($('#checkbox-prod-saml').is(':checked') == true && $('#checkbox-prod-oidc').is(':checked') != true) auth="SAML";
		else if ($('#checkbox-prod-saml').is(':checked') != true && $('#checkbox-prod-oidc').is(':checked') == true) auth="OIDC";
		else if ($('#checkbox-prod-saml').is(':checked') == true && $('#checkbox-prod-oidc').is(':checked') == true) auth="";

		if (auth != "noboarding") {
//			$('.prod-message').text("Boarding...");
			boardJobs("Prod", auth);
			showBoardingDialog(directive_boarding);
//			$('.prod-message').text("");
			OIDC_PROD = "false";
			SAML_PROD = "false";
			pushPendingJobsStatusToUI("Prod");
		}    
		
	});
	
	$('#dialog-check-result').dialog({
		autoOpen: false,
		modal: true
	});
	
	$("#dialog_checking").dialog({
		autoOpen: false,
		modal: true
	});

	
	if (componentBeforeReload != null) {
		console.log("Component saved before reloading.")
		componentBeforeReload.trigger('click');
		componentBeforeReload = null;
	} // end if

	
}(jQuery));

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

	
	if ($('#checkbox-manualboarding-prod').is(':checked') == true || MANUAL_BOARDING_PROD == "true") {
//		$('#button-prod-refresh').removeAttr('disabled');
		$('#button-prod-refresh').prop("disabled", false);
//		$('#span-refresh-prod').prop("class", "");
		$('#span-refresh-prod').prop("class", "ui-icon ui-icon-check green");
		checkLastJobStatus("prod");
		setInterval(() => {
			checkLastJobStatus("prod")
		}, 12000);
	} else if ($('#checkbox-manualboarding-stag').is(':checked') == true || MANUAL_BOARDING_STAG == "true") {
//		$('#button-stag-refresh').removeAttr('disabled');
		$('#button-stag-refresh').prop("disabled", false);
		$('#button-prod-refresh').prop("disabled", false);
		$('#span-refresh-stag').prop("class", "ui-icon ui-icon-check green");
//		checkLastJobStatus("staging");
//		setInterval(() => {
//			checkLastJobStatus("staging")
//		}, 12000);
	} else if ($('#checkbox-manualboarding-test').is(':checked') == true || MANUAL_BOARDING_DEV == "true") {
//		$('#button-test-refresh').removeAttr('disabled');
		$('#button-test-refresh').prop("disabled", false);
		$('#span-refresh-test').prop("class", "ui-icon ui-icon-check green");
//		checkLastJobStatus("test");
//		setInterval(() => {
//			checkLastJobStatus("test")
//		}, 12000);
	}
	
	$('#p-dialog-last-result-stag').text("Auto-boarding enabled");
	$('#p-dialog-last-result-test').text("Auto-boarding enabled");

	
	$(document).tooltip({


	});
	
	$('#help_manualoverride-prod').hover(function() {
		showHelpDialog(directive_manualoverride);
	});

	$('#help_manualoverride-stag').hover(function() {
		showHelpDialog(directive_manualoverride);
	});

	$('#help_manualoverride-test').hover(function() {
		showHelpDialog(directive_manualoverride);
	});

	$('#dialog-board-images').dialog({
		autoOpen: false,
		modal: true
	});


}

function showBoardingDialog(trigger) {
	
	if (trigger == directive_boarding) {
		$("#dialog-boarding-triggered").dialog({
			resizable: false,
			modal: true
		});
	} else if (trigger == directive_manualoverride) {
		$("#dialog-manualoverride-triggered").dialog({
			resizable: false,
			modal: false
		});
	} 
}

function showJobsCheckingDialog() {
	
	$("#dialog_checking").dialog('open');
}

function hideJobsCheckingDialog() {
	
	$("#dialog_checking").dialog('close');
}


function showHelpDialog(trigger) {
	if (trigger == directive_manualoverride) {
		$('#dialog_help_manualoverride').dialog({
			resizable: false,
			modal: true			
		});
	}
}

function checkLastJobStatus(env) {
	if (block) return;
	
	console.log("Getting last jobs status...");
	
	var URI = "/w3id-svc/getPartnerBoardingInfo";
	var qrystr = "env=" + env.toLowerCase();
	block = true;
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		STAG_HOST = REST_HOST;
		console.log("Calling " + STAG_HOST + URI + "?" + qrystr);
		$.ajax({
			  dataType: "text",
			  url: STAG_HOST + URI,
			  data: qrystr,
			  success: function (data, textStatus, xhr) {
				  console.log("Content type is: " + xhr.getResponseHeader('Content-Type'));
				  console.log("Text message: " + data);
				  if (xhr.getResponseHeader('Content-Type').startsWith('text')) {
//					  console.log("Text message: " + data);
					  if ($('#checkbox-manualboarding-stag').is(':checked') == true || MANUAL_BOARDING_STAG == "true") {
//						  console.log("Displaying text message: " + data);
						  $('#p-dialog-last-result-stag').text(data);
					  }
				  }
//				  } else if (xhr.getResponseHeader('Content-Type').startsWith('<!DOCTYPE html>')) {
				  if (data.startsWith('<!DOCTYPE html>')) {
					  location.reload();
				  }
			  }
			}); // end $.ajax
		
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		TEST_HOST = REST_HOST;
		console.log("Calling " + TEST_HOST + URI + "?" + qrystr);
		$.ajax({
			  dataType: "text",
			  url: TEST_HOST + URI,
			  data: qrystr,
			  success: function (data, textStatus, xhr) {
//				  console.log("Content type is: " + xhr.getResponseHeader('Content-Type'));
//				  console.log("Text message: " + data);
				  if (xhr.getResponseHeader('Content-Type').startsWith('text')) {
					  if ($('#checkbox-manualboarding-test').is(':checked') == true || MANUAL_BOARDING_TEST == "true") {
//						  console.log("Displaying text message: " + data);
						  $('#p-dialog-last-result-test').text(data);
					  }
				  }
//				  } else if (xhr.getResponseHeader('Content-Type').startsWith('<!DOCTYPE html>')) {
				  if (data.startsWith('<!DOCTYPE html>')) {
					  location.reload();
				  }
			  }
			}); // end $.ajax

	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		PROD_HOST = REST_HOST;
		console.log("Calling " + PROD_HOST + URI + "?" + qrystr);
		$.ajax({
			  dataType: "text",
			  url: PROD_HOST + URI,
			  data: qrystr,
			  success: function (data, textStatus, xhr) {
//				  console.log("Content type is: " + xhr.getResponseHeader('Content-Type'));
				  if (xhr.getResponseHeader('Content-Type').startsWith('text')) {
					  if ($('#checkbox-manualboarding-prod').is(':checked') == true || MANUAL_BOARDING_PROD == "true") {
						  $('#p-dialog-last-result-prod').text(data);
					  }
				  }
//				  } else if (xhr.getResponseHeader('Content-Type').startsWith('<!DOCTYPE html>')) {
				  if (data.startsWith('<!DOCTYPE html>')) {
					  location.reload();
				  }
			  }
			}); // end $.ajax
	} // end outer if
	
	block = false;
	
}



function checkPendingJobs(env) {
	block = true;
	showJobsCheckingDialog();

	var resultMsg = [];
	
	console.log("Checking for pending jobs...");
	
	$('#p-dialog-result-line1').text("Pending jobs check completed");
	
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		STAG_HOST = REST_HOST;
		console.log("Calling " + STAG_HOST + "/w3id-svc/checkPendingJobs?env=" + env);
		
		$.ajax({
			  dataType: "json",
			  url: STAG_HOST + "/w3id-svc/checkPendingJobs?env=" + env,
			  type: "get",
			  async: true,
			  error: function(data) {
				  console.log(data);
			  },
			  success: function(data){
		          for (var i in data) {
					  console.log("Done with call");
			          if (data[i].AuthType.toLowerCase() == "oidc") {
			        	  OIDC_STAGING = data[i].JobStatus.toLowerCase();
			        	  console.log("OIDC in " + env + ": " + OIDC_STAGING);
			          } else if (data[i].AuthType.toLowerCase() == "saml2") {
			        	  SAML_STAGING = data[i].JobStatus.toLowerCase();
			        	  console.log("SAML in " + env + ": " + SAML_STAGING);
			          } // end if-else-if
		          } // end for		
		          $('#dialog-board-saml').prop('class', getBooleanImage(SAML_STAGING));
		          $('#dialog-board-oidc').prop('class', getBooleanImage(OIDC_STAGING));
				
//		          resultMsg.push("SAML is ready: " + SAML_STAGING)
//		          resultMsg.push(" OIDC is ready: " + OIDC_STAGING)	
//		          $('#p-dialog-result-line2').text(resultMsg);
		          pushPendingJobsStatusToUI("Staging");
		          hideJobsCheckingDialog();
//		          $('#dialog-check-result').dialog("open");
		          $('#dialog-board-images').dialog("open");

			}
			}); // end $.ajax
		
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		TEST_HOST = REST_HOST;
		console.log("Calling " + TEST_HOST + "/w3id-svc/checkPendingJobs?env=" + env);

		$.ajax({
			  dataType: "json",
			  url: TEST_HOST + "/w3id-svc/checkPendingJobs?env=" + env,
			  type: "get",
			  async: true,
			  error: function(data) {
				  console.log(data);
			  },
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
		          $('#dialog-board-saml').prop('class', getBooleanImage(SAML_DEV));
		          $('#dialog-board-oidc').prop('class', getBooleanImage(OIDC_DEV));
//		        	resultMsg.push("SAML is ready: " + SAML_DEV)
//		        	resultMsg.push(" OIDC is ready: " + OIDC_DEV)	
//		            $('#p-dialog-result-line2').text(resultMsg);
		    		pushPendingJobsStatusToUI("Test");
		            hideJobsCheckingDialog();
//		            $('#dialog-check-result').dialog("open");
		            $('#dialog-board-images').dialog("open");
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
		PROD_HOST = REST_HOST;
		console.log("Calling " + PROD_HOST + "/w3id-svc/checkPendingJobs?env=" + env);
		$.ajax({
			  dataType: "json",
			  url: PROD_HOST + "/w3id-svc/checkPendingJobs?env=" + env,
			  type: "get",
			  async: true,
			  error: function(data) {
				  console.log(data);
			  },
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
		  		$('#dialog-board-saml').prop('class', getBooleanImage(SAML_PROD));
				$('#dialog-board-oidc').prop('class', getBooleanImage(OIDC_PROD));
//		      	resultMsg.push("SAML is ready: " + SAML_PROD)
//		    	resultMsg.push(" OIDC is ready: " + OIDC_PROD)	
//		        $('#p-dialog-result-line2').text(resultMsg);
				pushPendingJobsStatusToUI("Prod");
		        hideJobsCheckingDialog();
//		        $('#dialog-check-result').dialog("open");
	            $('#dialog-board-images').dialog("open");
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
	
	block = false;
}

function pushPendingJobsStatusToUI(env) {

	if (env.toLowerCase() == "Staging".toLowerCase()) {
	
		if (SAML_STAGING == "true") {
//			$('#checkbox-stag-saml').attr('checked','checked');
			$('#checkbox-stag-saml').prop("checked", true);
//			$('#button-stag-board').removeAttr('disabled');
			$('#span-board-stag').prop("class", "ui-icon ui-icon-play green");
			$('#button-stag-board').prop("disabled", false);
		} else { 
//			$('#checkbox-stag-saml').removeAttr('checked');
			$('#checkbox-stag-saml').prop("checked", false);
		}
		
		if (OIDC_STAGING == "true") {
//			$('#checkbox-stag-oidc').attr('checked','checked');
			$('#checkbox-stag-oidc').prop("checked", true);
//			$('#button-stag-board').removeAttr('disabled');
			$('#span-board-stag').prop("class", "ui-icon ui-icon-play green");
			$('#button-stag-board').prop("disabled", false);
		} else { 
//			$('#checkbox-stag-oidc').removeAttr('checked');
			$('#checkbox-stag-oidc').prop("checked", false);
		}

		if (SAML_STAGING != "true" && OIDC_STAGING != "true") {
//			$('#button-stag-board').attr('disabled','disabled');
			$('#span-board-stag').prop("class", "ui-icon ui-icon-play default");
			$('#button-stag-board').prop("disabled", true);
		}

	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		
		if (SAML_DEV == "true") {
//			$('#checkbox-test-saml').attr('checked','checked');
//			$('#button-test-board').removeAttr('disabled');
			$('#checkbox-test-saml').prop("checked", true);
			$('#span-board-test').prop("class", "ui-icon ui-icon-play green");
			$('#button-test-board').prop("disabled", false);
		} else { 
//			$('#checkbox-test-saml').removeAttr('checked');
			$('#checkbox-test-saml').prop("checked", false);
		}
		
		if (OIDC_DEV == "true") {
//			$('#checkbox-test-oidc').attr('checked','checked');
//			$('#button-test-board').removeAttr('disabled');
			$('#checkbox-test-oidc').prop("checked", true);
			$('#span-board-test').prop("class", "ui-icon ui-icon-play green");
			$('#button-test-board').prop("disabled", false);
		} else { 
//			$('#checkbox-test-oidc').removeAttr('checked');
			$('#checkbox-test-oidc').prop("checked", false);
		}

		if (SAML_DEV != "true" && OIDC_DEV != "true") {
//			$('#button-test-board').attr('disabled','disabled');
			$('#span-board-test').prop("class", "ui-icon ui-icon-play default");
			$('#button-test-board').prop("disabled", true);
		}
		
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		
		if (SAML_PROD == "true") {
//			$('#checkbox-prod-saml').attr('checked','checked');
//			$('#button-prod-board').removeAttr('disabled');
			$('#checkbox-prod-saml').prop("checked", true);
			$('#span-board-prod').prop("class", "ui-icon ui-icon-play green");
			$('#button-prod-board').prop("disabled", false);
		} else { 
//			$('#checkbox-prod-saml').removeAttr('checked');
			$('#checkbox-prod-saml').prop("checked", false);
		}
		
		if (OIDC_PROD == "true") {
//			$('#checkbox-prod-oidc').attr('checked','checked');
//			$('#button-prod-board').removeAttr('disabled');
			$('#checkbox-prod-oidc').prop("checked", true);
			$('#span-board-prod').prop("class", "ui-icon ui-icon-play green");
			$('#button-prod-board').prop("disabled", false);
		} else { 
//			$('#checkbox-prod-oidc').removeAttr('checked');
			$('#checkbox-prod-oidc').prop("checked", false);
		}

		if (SAML_PROD != "true" && OIDC_PROD != "true") {
//			$('#button-prod-board').attr('disabled','disabled');
			$('#span-board-prod').prop("class", "ui-icon ui-icon-play default");
			$('#button-prod-board').prop("disabled", true);
		}

	} // end outer if
	
}

function boardJobs(env, auth) {
	block = true;
	console.log("Boarding Jobs...");
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		STAG_HOST = REST_HOST;
		console.log("Calling " + STAG_HOST + "/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "&aynsc=true");
		
		$.ajax({
			  dataType: "json",
			  type: "get",
			  url: STAG_HOST + "/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "&aynsc=true"
			}); // end $.ajax
		
	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		TEST_HOST = REST_HOST;
		console.log("Calling " + TEST_HOST + "/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "&aynsc=true");

		$.ajax({
			  dataType: "json",
			  type: "get",
			  url: TEST_HOST + "/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "&aynsc=true"
			}); // end $.ajax

	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		PROD_HOST = REST_HOST;
		console.log("Calling " + PROD_HOST + "/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "&aynsc=true");

		$.ajax({
			  dataType: "json",
			  url: PROD_HOST + "/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "&aynsc=true"
			}); // end $.ajax
	} // end outer if
	block = false;
}

function checkOidcToken(){
	var config = {
		    providerID: "IBM",
		    client_id: "EY7UQ3gekf3TEII08Iu9",
		    redirect_uri: "https://dal9-ppd-cwsicio2-03.sec.ibm.com:446/mgmt/activation_1.html",
		    authorization: "https://w3id.alpha.sso.ibm.com/isam/oidc/endpoint/amapp-runtime-oidcidp/authorize",
		    scopes: { request: ["openid"]},
		    debug:true,
		    presenttoken:"qs"
		};


		jso = new JSO(config);
		JSO.enablejQuery($);
		jso.on('redirect', function(url) {
		  if(jso.URLcontainsToken(window.location.toString())){
		        console.log('I just got the token');
		       jso.callback(window.location.toString(), config.providerID);
		  }else{
		        console.log("I am in the index page and redirecting to URL: " + url);
		        console.log("Location: " + window.location.toString());
		        console.log("Provider: " + config.providerID);
		        console.log("I got the token: ", token);
		        console.log("Stringified token: " + JSON.stringify(token));
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

function checkCookie(component) {
	
	var cookie = Cookies.get();
	console.log("Cookies: " + JSON.stringify(cookie));
	
	
	var isamCookie_tmp = Cookies.get(isamCookieName);
	var jsessionCookie_tmp = Cookies.get(jsessionCookieName);
	
	console.log("Current ISAM Cookie: " + isamCookie);
	console.log("Current JSESSION Cookie: " + jsessionCookie);
	console.log("Retrieved ISAM Cookie: " + isamCookie_tmp);
	console.log("Retrived JSESSION Cookie: " + jsessionCookie_tmp);

	if (isamCookie != "" && jsessionCookie != "") { 
	
		if (isamCookie != isamCookie_tmp && jsessionCookie != jsessionCookie_tmp) {
			console.log("Current and retrieved cookies do not match.");
			console.log("Session went stale, so reloading the page.");
			
			componentBeforeReload = component;
			
			location.reload();
			
			// for test only 
//			if (componentBeforeReload != null) {
//				isamCookie_tmp = "";
//				jsessionCookie_tmp = "";
//			}
			
		}
	} 
	// for test only 
//	else {
//		isamCookie_tmp = "123";
//		jsessionCookie_tmp = "123";
//	}
	
	isamCookie = isamCookie_tmp
	console.log("Setting ISAM Cookie: " + isamCookie);
	
	jsessionCookie = jsessionCookie_tmp
	console.log("Setting JSESSION Cookie: " + jsessionCookie);
	
//	if (reloadedUponStaleCookie) {
//		component.trigger('click');
//	}

}

function getRequestParameter() {
	function getQueryParameter ( parameterName ) {
		  var queryString = window.top.location.search.substring(1);
		  var parameterName = parameterName + "=";
		  if ( queryString.length > 0 ) {
		    begin = queryString.indexOf ( parameterName );
		    if ( begin != -1 ) {
		      begin += parameterName.length;
		      end = queryString.indexOf ( "&" , begin );
		        if ( end == -1 ) {
		        end = queryString.length
		      }
		      return unescape ( queryString.substring ( begin, end ) );
		    }
		  }
		  return "null";
		} 
}

function getBooleanImage(value) {
	if (value == "true") return "ui-icon ui-icon-check green";
	else return "ui-icon ui-icon-closethick red";
}


