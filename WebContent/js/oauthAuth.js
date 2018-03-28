var config = {
    providerID: "IBM",
    //client_id: "lJrKkGZanVBpzKJpbNae",
    client_id: "L5AGefM1Als8bhBDPW6W",
    redirect_uri: "https://dpev349.innovate.ibm.com/AuthInfo/index.html",
    //authorization: "https://dpev069a.innovate.ibm.com/mga/sps/oauth/oauth20/authorize",
    authorization: "https://dpev069a.innovate.ibm.com/isam/oidc/endpoint/amapp-runtime-oidcidp/authorize",
    scopes: { request: ["openid"]},
    debug:true
};



var jso = new JSO(config);
jso.on('redirect', function(url) {
	r.redirect(url);
});

jso.getToken(function(token) {

	console.log("I got the token: ", token);

}, {});