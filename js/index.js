function navigateToLoginPage(){
  window.location.href = "collabify.html";
}

function login(){

var email = document.getElementById("email_field").value;
var pass = document.getElementById("password_field").value;

console.log(email);
console.log(pass);

firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
    //Errors
  	var errorCode = error.code;
    var errorMessage = error.message;    
  if (errorCode == 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);  
});
}
/*setTimeout(function() {window.alert("Authenticating.")}, 10);
$('LoginModal').dialog("close");
*/

function signUp(){
  var name, username, email, uid, password;
  /*name = document.getElementById("SignUpName").value;*/
  username = document.getElementById("SignUpUserName").value;
  email = document.getElementById("SignUpEmail").value;
  password = document.getElementById("SignUpPassword").value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(error);
  });
}

function logout(){
 
	firebase.auth().signOut().then(function() {
    // Sign-out successful.
	window.location.href = "index.html";
  }).catch(function(error) {
    // An error happened.
  });
}
