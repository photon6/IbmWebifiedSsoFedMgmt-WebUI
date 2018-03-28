/**
 * 
 */

var OIDC_STAGING = "false";
var SAML_STAGING = "false";

var OIDC_DEV = "false";
var SAML_DEV = "false";

var OIDC_PROD = "false";
var SAML_PROD = "false";

var auth="noboarding";

var localtest = "true";

var oidc_config;

var jso;

(function($) {
	

//	checkOidcToken();
	
	initControls();
	
	
	$('#button-stag-refresh').on('click', function (e) {
	
		console.log("button-stag-refresh clicked");
		checkPendingJobs("Staging");
		SAML_STAGING = "true";
		OIDC_STAGING = "false";
		
		console.log("Modified value of SAML in Staging: " + SAML_STAGING);
  	  	console.log("Modified value of OIDC in Staging: " + OIDC_STAGING);
		

		pushPendingJobsStatusToUI("Staging");
		
    });

	$('#button-stag-board').on('click', function (e) {
		if ($('#checkbox-stag-saml').is(':checked') == true && $('#checkbox-stag-oidc').is(':checked') != true) auth="SAML";
		else if ($('#checkbox-stag-saml').is(':checked') != true && $('#checkbox-stag-oidc').is(':checked') == true) auth="OIDC";
		else if ($('#checkbox-stag-saml').is(':checked') == true && $('#checkbox-stag-oidc').is(':checked') == true) auth="";

		if (auth != "noboarding") {
//			$('.stag-message').text("Boarding...");
			boardJobs("Staging", auth);
//			$('#button-stag-refresh').click();
		}
    });
	
	$('#button-test-refresh').on('click', function (e) {
//		$('.test-message').text("Checking...");
		checkPendingJobs("Test");
		pushPendingJobsStatusToUI("Test");
//		$('.test-message').text("");
	});
	
	$('#button-test-board').on('click', function (e) {
		if ($('#checkbox-test-saml').is(':checked') == true && $('#checkbox-test-oidc').is(':checked') != true) auth="SAML";
		else if ($('#checkbox-test-saml').is(':checked') != true && $('#checkbox-test-oidc').is(':checked') == true) auth="OIDC";
		else if ($('#checkbox-test-saml').is(':checked') == true && $('#checkbox-test-oidc').is(':checked') == true) auth="";

		if (auth != "noboarding") {
//			$('.test-message').text("Boarding...");
			boardJobs("Dev");
//			$('#button-test-refresh').click();
		}
    });

	
	$('#button-prod-refresh').on('click', function (e) {
		if (localtest) {
			test();
		} else {
			OIDC_PROD = "false";
			SAML_PROD = "false";
			pushPendingJobsStatusToUI("Prod");
//			$('.prod-message').text("");
		} 
		
	});
	
	$('#button-prod-board').on('click', function (e) {
		if ($('#checkbox-prod-saml').is(':checked') == true && $('#checkbox-prod-oidc').is(':checked') != true) auth="SAML";
		else if ($('#checkbox-prod-saml').is(':checked') != true && $('#checkbox-prod-oidc').is(':checked') == true) auth="OIDC";
		else if ($('#checkbox-prod-saml').is(':checked') == true && $('#checkbox-prod-oidc').is(':checked') == true) auth="";

		if (auth != "noboarding") {
			$('.prod-message').text("Boarding...");
			boardJobs("prod");
			showBoardingDialog();
			$('#button-prod-refresh').click();
		}
    });
	
	
	$('#dialog-check-result').dialog({
		autoOpen: false,
		modal: true
	});

	$('#dialog-board-images').dialog({
		autoOpen: false,
		modal: true
	});


	
}(jQuery));

function showBoardingDialog() {
	$("#dialog-boarding-triggered").dialog({
		resizable: false,
		modal: true
	});
}

function test() {
	
	OIDC_PROD = "true";
	SAML_PROD = "true";

	pushPendingJobsStatusToUI("Prod");
	
	localtest = false;
	
}


function initControls() {
	
	
	$('#button-prod-board').attr('disabled','disabled');
	$('#button-stag-board').attr('disabled','disabled');
	$('#button-test-board').attr('disabled','disabled');
	
	$('#dialog-board-images').dialog({
		autoOpen: false,
		modal: true
	});
	
	checkLastJobStatus("prod");
	checkLastJobStatus("prod");
	checkLastJobStatus("prod");


}

function checkLastJobStatus(env) {
	console.log("Getting last jobs status...");
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		console.log("Calling http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/getPartnerBoardingInfo?env=" + env);
		$.ajax({
			  dataType: "json",
			  url: "http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/getPartnerBoardingInfo?env=" + env,
//			  data: data,
			  async: false,
			  success: function(data){
				  conole.log("Data: " + data);
//		          for (var i in data) {
//			          if (data[i].AuthType.toLowerCase() == "oidc") {
//			        	  OIDC_STAGING = data[i].JobStatus.toLowerCase();
//			        	  console.log("OIDC in " + env + ": " + OIDC_STAGING);
//			          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	  SAML_STAGING = data[i].JobStatus.toLowerCase();
//			        	  console.log("SAML in " + env + ": " + SAML_STAGING);
//			          } // end if-else-if
//		          } // end for
			}
			}); // end $.ajax
		
		
//		$.getJSON("http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/checkPendingJobs?env=" + env, function(data){
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
		console.log("Calling http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/checkPendingJobs?env=" + env);
		$.ajax({
			  dataType: "json",
			  url: "http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/getPartnerBoardingInfo?env=" + env,
//			  data: data,
			  async: false,
			  success: function(data){
				  conole.log("Data: " + data);
//		          for (var i in data) {
//			          if (data[i].AuthType.toLowerCase() == "oidc") {
//			        	  OIDC_DEV = data[i].JobStatus.toLowerCase();
////			        	  console.log("OIDC in " + env + ": " + OIDC_DEV);
//			          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        	  SAML_DEV = data[i].JobStatus.toLowerCase();
////			        	  console.log("SAML in " + env + ": " + SAML_DEV);
//			          } // end if-else-if
//		          } // end for		
			}
			}); // end $.ajax
//		$.getJSON("http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/checkPendingJobs?env=" + env, function(data){
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
		console.log("Calling http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/checkPendingJobs?env=" + env);	
		$.getJSON("http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/getPartnerBoardingInfo?env=" + env, function(data){
			  conole.log("Data: " + data);
//	          for (var i in data) {
//		          if (data[i].AuthType.toLowerCase() == "oidc") {
//		        	  OIDC_PROD = data[i].JobStatus.toLowerCase();
//		        	  console.log("OIDC in " + env + ": " + OIDC_PROD);
//		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//			        SAML_PROD = data[i].JobStatus.toLowerCase();
//			        console.log("SAML in " + env + ": " + SAML_PROD);
//		          } // end if-else-if
//	          } // end for		
		}); // end $.getJSON
	} // end outer if
	
}

function checkPendingJobs(env) {
	console.log("Checking for Pending Jobs...");
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		console.log("Calling http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/checkPendingJobs?env=" + env);
		$.ajax({
			  dataType: "json",
			  url: "http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/checkPendingJobs?env=" + env,
//			  data: data,
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
		
		
//		$.getJSON("http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/checkPendingJobs?env=" + env, function(data){
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
		console.log("Calling http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/checkPendingJobs?env=" + env);
		$.ajax({
			  dataType: "json",
			  url: "http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/checkPendingJobs?env=" + env,
//			  data: data,
			  async: false,
			  success: function(data){
		          for (var i in data) {
			          if (data[i].AuthType.toLowerCase() == "oidc") {
			        	  OIDC_DEV = data[i].JobStatus.toLowerCase();
//			        	  console.log("OIDC in " + env + ": " + OIDC_DEV);
			          } else if (data[i].AuthType.toLowerCase() == "saml2") {
			        	  SAML_DEV = data[i].JobStatus.toLowerCase();
//			        	  console.log("SAML in " + env + ": " + SAML_DEV);
			          } // end if-else-if
		          } // end for		
			}
			}); // end $.ajax
//		$.getJSON("http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/checkPendingJobs?env=" + env, function(data){
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
		console.log("Calling http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/checkPendingJobs?env=" + env);	
		$.getJSON("http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/checkPendingJobs?env=" + env, function(data){
	          for (var i in data) {
		          if (data[i].AuthType.toLowerCase() == "oidc") {
		        	  OIDC_PROD = data[i].JobStatus.toLowerCase();
		        	  console.log("OIDC in " + env + ": " + OIDC_PROD);
		          } else if (data[i].AuthType.toLowerCase() == "saml2") {
			        	  SAML_PROD = data[i].JobStatus.toLowerCase();
			        	  console.log("SAML in " + env + ": " + SAML_PROD);
		          } // end if-else-if
	          } // end for		
		}); // end $.getJSON
	} // end outer if
	
}



function pushPendingJobsStatusToUI(env) {
    $('#p-dialog-result-line1').text("Pending jobs check completed");
    var resultMsg = [];

	if (env.toLowerCase() == "Staging".toLowerCase()) {
		
		if (SAML_STAGING == "true") {
			$('#checkbox-stag-saml').attr('checked','checked');
			$(getButtonName_board(env.toLowerCase())).removeAttr('disabled');
		} else { 
			$('#checkbox-stag-saml').removeAttr('checked');
		}
		
		if (OIDC_STAGING == "true") {
			$('#checkbox-stag-oidc').attr('checked','checked');
			$(getButtonName_board(env.toLowerCase())).removeAttr('disabled');
		} else { 
			$('#checkbox-stag-oidc').removeAttr('checked');
		}

		if (SAML_STAGING != "true" && OIDC_STAGING != "true") {
			$(getButtonName_board(env.toLowerCase())).attr('disabled','disabled');
		}
		
		$('#dialog-board-saml').prop('class', getBooleanImage(SAML_STAGING));
		$('#dialog-board-oidc').prop('class', getBooleanImage(OIDC_STAGING));

//		resultMsg.push("SAML: " + getBooleanImage(SAML_STAGING));
//		resultMsg.push("OIDC: " + getBooleanImage(OIDC_STAGING));

	} else if (env.toLowerCase() == "Dev".toLowerCase() || env.toLowerCase() == "Test".toLowerCase()) {
		
		if (SAML_DEV == "true") {
			$('#checkbox-test-saml').attr('checked','checked');
			$(getButtonName_board(env.toLowerCase())).removeAttr('disabled');
		} else { 
			$('#checkbox-test-saml').removeAttr('checked');
		}
		
		if (OIDC_DEV == "true") {
			$('#checkbox-test-oidc').attr('checked','checked');
			$(getButtonName_board(env.toLowerCase())).removeAttr('disabled');
		} else { 
			$('#checkbox-test-oidc').removeAttr('checked');
		}

		if (SAML_DEV != "true" && OIDC_DEV != "true") {
			$(getButtonName_board(env.toLowerCase())).attr('disabled','disabled');
		}

		
	} else if (env.toLowerCase() == "Prod".toLowerCase()) {
		
		if (SAML_PROD == "true") {
			$('#checkbox-prod-saml').attr('checked','checked');
			$(getButtonName_board(env.toLowerCase())).removeAttr('disabled');
		} else { 
			$('#checkbox-prod-saml').removeAttr('checked');
		}
		
		if (OIDC_PROD == "true") {
			$('#checkbox-prod-oidc').attr('checked','checked');
			$(getButtonName_board(env.toLowerCase())).removeAttr('disabled');
		} else { 
			$('#checkbox-prod-oidc').removeAttr('checked');
		}

		if (SAML_PROD != "true" && OIDC_PROD != "true") {
			$(getButtonName_board(env.toLowerCase())).attr('disabled','disabled');
		}
		
	} // end outer if
	
//    $('#p-dialog-result-line2').text(resultMsg);
//    $('#dialog-check-result').dialog("open");
    $('#dialog-board-images').dialog("open");
}

function getButtonName_board(env) {
	return '#button-' + env + "-board";
}


function boardJobs(env, auth) {
	console.log("Boarding Jobs...");
	if (env.toLowerCase() == "Staging".toLowerCase()) {
		console.log("Calling http://localhost:9080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth);	
		
//		console.log("Calling http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth);
		$.ajax({
			  dataType: "json",
			  url: "http://localhost:9080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth,
//			  url: "http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth,
//			  data: data,
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
			}).always(function(){
			    $save.bootstrapButton("reset")
			  }); // end $.ajax
		
//		$.getJSON("http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth, function(data){
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
		console.log("Calling http://localhost:9080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth);	
//		console.log("Calling http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth);
		$.ajax({
			  dataType: "json",
			  url: "http://localhost:9080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth,
//			  url: "http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth,
//			  data: data,
			  async: false,
			  success: function(data){
		          for (var i in data) {
			          if (data[i].AuthType.toLowerCase() == "oidc") {
			        	  OIDC_DEV = data[i].JobStatus.toLowerCase();
//			        	  console.log("OIDC in " + env + ": " + OIDC_DEV);
			          } else if (data[i].AuthType.toLowerCase() == "saml2") {
			        	  SAML_DEV = data[i].JobStatus.toLowerCase();
//			        	  console.log("SAML in " + env + ": " + SAML_DEV);
			          } // end if-else-if
		          } // end for		
			}
			}); // end $.ajax
//		$.getJSON("http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth, function(data){
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
		console.log("Boarding Jobs in + " + env + "...");
		
		console.log("Calling http://localhost:9080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "aynsc=true");	
//		console.log("Calling http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "aynsc=false");
			$.ajax({
				  dataType: "json",
				  url: "http://localhost:9080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth + "aynsc=true"
//				  url: "http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth,
//				  async: false,
//				  success: function(data){
//			          for (var i in data) {
//				          if (data[i].AuthType.toLowerCase() == "oidc") {
//				        	  OIDC_PROD = data[i].JobStatus.toLowerCase();
//				        	  console.log("OIDC barded in " + env + ": " + OIDC_STAGING);
//				          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//				        	  SAML_PROD = data[i].JobStatus.toLowerCase();
//				        	  console.log("SAML boarded in " + env + ": " + SAML_STAGING);
//				          } // end if-else-if
//			          } // end for		
//				}
				}); // end $.ajax
			
//			$.getJSON("http://dal9-ppd-cfmicio2-01.sec.ibm.com:19080/w3id-svc/boardJobs?env=" + env + "&auth=" + auth, function(data){
//		          for (var i in data) {
//			          if (data[i].AuthType.toLowerCase() == "oidc") {
//			        	  OIDC_STAGING = data[i].JobStatus.toLowerCase();
//			        	  console.log("OIDC in " + env + ": " + OIDC_STAGING);
//			          } else if (data[i].AuthType.toLowerCase() == "saml2") {
//				        	SAML_STAGING = data[i].JobStatus.toLowerCase();
//				        	console.log("SAML in " + env + ": " + SAML_STAGING);
//			          } // end if-else-if
//		          } // end for		
//			}); // end $.getJSON
	} // end outer if
	
}

function checkOidcToken(){
	var config = {
		    providerID: "IBM",
		    client_id: "OGFhNGNiNmYtYjdhNS00",
		    redirect_uri: "https://dal9-ppd-cwsicio2-03.sec.ibm.com:446/mgmt/activation_1.html",
		    authorization: "https://w3id.alpha.sso.ibm.com/isam/oidc/endpoint/amapp-runtime-oidcidp/authorize",
		    scopes: { request: ["openid"]},
		    debug:true,
		    presenttoken:"qs"
		};


		var jso = new JSO(config);
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
		        alert(JSON.stringify(token));

		}, {});

		//alert('executed script!!')

//		function callDownStream(){
//
//		   jso.getToken(function(token) {
//
//		        console.log("I got the token: ", token);
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
//
//		    }, {});
//
//		 }



 }

function popUpWindow(id, containerId) {
	 
    var divObj = $('#' + id);
    divObj.dialog('destroy');
    divObj.dialog({
        autoOpen: false,
        bgiframe: true,
        modal: true,
//        title: title,
        open: function (event, ui) {
            divObj.append("pualert");
            divObj.parent().appendTo($("form"));
 
        },
        close: function (event, ui) {
            divObj.parent().appendTo($('#' + containerId));
            $("body").css("overflow", "auto");
        }
    });
    divObj.dialog('open');
    $('#' + id + " input:text:visible:first").focus();
}

function getBooleanImage(value) {
	if (value == "true") return "ui-icon ui-icon-check green";
	else return "ui-icon ui-icon-closethick red";
}
