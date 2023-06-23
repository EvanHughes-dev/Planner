//file for handeling login info
function CredentialHandle(credentials){//gets credentials
    //credentials not deciphered yet
    console.log(jwtDecode(credential).name);
}
    
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

 
   
function polyfill(input) {
    var str = String(input).replace(/=+$/, "");
   
    for (
        // initialize result and counters
        var bc = 0, bs, buffer, idx = 0, output = "";
        // get next character
        (buffer = str.charAt(idx++));
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer &&
        ((bs = bc % 4 ? bs * 64 + buffer : buffer),
            // and if not first of each 4 characters,
            // convert the first 8 bits to one ascii character
            bc++ % 4) ?
        (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6)))) :
        0
    ) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
    }
    return output;
}

var atob = (typeof window !== "undefined" &&
    window.atob &&
    window.atob.bind(window)) ||
polyfill;

function b64DecodeUnicode(str) {
    return decodeURIComponent(
        atob(str).replace(/(.)/g, function(m, p) {
            var code = p.charCodeAt(0).toString(16).toUpperCase();
            if (code.length < 2) {
                code = "0" + code;
            }
            return "%" + code;
        })
    );
}

function base64_url_decode(str) {
    var output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
        case 0:
            break;
        case 2:
            output += "==";
            break;
        case 3:
            output += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length");
    }

    try {
        return b64DecodeUnicode(output);
    } catch (err) {
        return atob(output);
    }
}




function jwtDecode(token, options ){
  
    document.writeln("Ran");
    options = options || {};
    var pos = options.header === true ? 0 : 1;
    var part = token.split(".")[pos];

        var decoded = base64_url_decode(part);

        return JSON.parse(decoded);
   
}
