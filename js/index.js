firebase.auth().onAuthStateChanged(function(user) {
  var user = firebase.auth().currentUser;
  
  if (user) {
    // User is signed in.
    document.getElementById("logged_in_state").style.display = "initial";
    document.getElementById("logged_out_state").style.display = "none";
    window.location.href = "HomePage.html";
	var name = user.displayName;
	document.getElementById("user").innerHTML = name;
    
  } else {
    // No user is signed in.
	document.getElementById("logged_in_state").style.display = "none";
	document.getElementById("logged_out_state").style.display = "initial";

  }
});


function register(){
  var user = document.getElementById("SignUpEmail");
  var password = document.getElementById("SignUpUserPassword");
  firebase.auth().createUserWithEmailAndPassword(user, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}

function login(){

var username = document.getElementById("email_field").value;
var pass = document.getElementById("password_field").value;

firebase.auth().signInWithEmailAndPassword(username, pass).catch(function(error) {
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

window.alert(username + " " + pass );

}

function logout(){
  window.alert('logged out');
	firebase.auth().signOut().then(function() {
    // Sign-out successful.

    window.location.href = "index.html";
  }).catch(function(error) {
    // An error happened.
  });
}