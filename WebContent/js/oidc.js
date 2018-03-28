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
 * | 1.0.1		| 12/21/2016	|	Using .prop method on HTML elements instead of .attr			|
 * --------------------------------------------------------------------------------------------------
 * | 1.0.2		| 12/23/2016	|	Added manual override function for non-production environments.	|
 * --------------------------------------------------------------------------------------------------
 * | 1.0.3		| 12/27/2016	|	Added instructions to Activation functions.						|
 * --------------------------------------------------------------------------------------------------
 * | 1.0.4		| 01/06/2017	|	Updated icon coloring to be more attention grabbing.			|
 * --------------------------------------------------------------------------------------------------
 * | 1.0.5		| 01/16/2017	|	Incorporated OIDC token and better HTTP session and cookie 		|
 * |			|				|	tracking functions.												|	
 * --------------------------------------------------------------------------------------------------
 * 
 */

var isamCookie = "";
var jsessionCookie = "";

var isamCookieName = "PD-S-SESSION-ID";
var jsessionCookieName = "JSESSIONID";

var jso;

//$(document).ready(function() {
	
//	var config = {
//		    providerID: "IBM",
//		    client_id: "EY7UQ3gekf3TEII08Iu9",
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
//});

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
		Jso.enablejQuery($);
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

function checkCookie(component) {
	
	var cookie = Cookies.get();
//	console.log("Cookie: " + JSON.stringify(cookie));
	
	
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



