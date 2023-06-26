//file for handeling login info
//https://developers.google.com/identity/gsi/web/reference/js-reference#CredentialResponse

function CredentialHandle(credentials){//gets credentials
 
    //console.log(jwtDecode(credentials);
    const info = jwtDecode(credentials);
   
    window.sessionStorage.setItem("CurentUserID", info.sub);
    window.sessionStorage.setItem("CurrentProfilePhoto", info.picture);
    GetID(info.sub);
    
    //.sub is the unique code for the user
    /*
    do a call to the sever to see if the account is already in the system
    if it is, go back to the main window
    else
    throw a form to collect data (current grade, classes, could also check if tehy are a student)
    also have a form for a new user crearing an account without google
    */
    window.open ('../','_self',false)//return to main page
}
    
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";


//#region Decode a JWT token
//source https://github.com/auth0/jwt-decode
//source for JWT help https://jwt.io/

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
  
    
    options = options || {};
    var pos = options.header === true ? 0 : 1;
    var part = token.split(".")[pos];

        var decoded = base64_url_decode(part);

        return JSON.parse(decoded);
   
}
//#endregion

function GetID(id){
    
    fetch("http://69.242.41.167:8082/api/login/google/"+id)
      .then(Response => {
        document.writeln(Response);
      if(Response==null){
        console.log("User Does Not Exist");
      }
      });
  
    }