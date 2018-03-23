firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("logger_in_state").style.display = "block";
    document.getElementById("logged_out_state").style.display = "none";
  } else {
    // No user is signed in.

    document.getElementById("logger_in_state").style.display = "block";
    document.getElementById("logged_out_state").style.display = "none";
  }
});





function login(){

var username = document.getElementById("email_field").value;
var pass = document.getElementById("password_field").value;

window.alert(username + " " + pass );

firebase.auth().createUserWithEmailAndPassword(email_field, password_field).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...

  window.alert("Error: " + errorMessage);
});



}
