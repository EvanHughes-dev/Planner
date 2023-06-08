import jwt_decode from "jwt-decode";
function onSignIn(authInfos) {
    const responsePayload = decodeJwtResponse(authInfos);
   // document.write("ID: " +responsePayload.sub);
}

//https://developers.google.com/identity/gsi/web/guides/handle-credential-responses-js-functions

function decodeJwtResponse(token){
var decoded = jwt_decode(token);

console.log(decoded);
}