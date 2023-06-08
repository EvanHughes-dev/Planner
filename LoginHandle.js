
function onSignIn(authInfos){
    const responsePayload = decodeJwtResponse(authInfos);
    // document.write("ID: " +responsePayload.sub);


}


//https://developers.google.com/identity/gsi/web/guides/handle-credential-responses-js-functions

function decodeJwtResponse(token){
var decoded = jwtDecode(token);

console.log(decoded);
}

function jwtDecode(token, options) {
    if (typeof token !== "string") {
        throw new InvalidTokenError("Invalid token specified: must be a string");
    }

    options = options || {};
    var pos = options.header === true ? 0 : 1;

    var part = token.split(".")[pos];
    if (typeof part !== "string") {
        throw new InvalidTokenError("Invalid token specified: missing part #" + (pos + 1));
    }

    try {
        var decoded = base64_url_decode(part);
    } catch (e) {
        throw new InvalidTokenError("Invalid token specified: invalid base64 for part #" + (pos + 1) + ' (' + e.message + ')');
    }

    try {
        return JSON.parse(decoded);
    } catch (e) {
        throw new InvalidTokenError("Invalid token specified: invalid json for part #" + (pos + 1) + ' (' + e.message + ')');
    }
}
