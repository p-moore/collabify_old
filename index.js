

firebase.auth().onAuthStateChanged(function(user) {
  var user = firebase.auth().currentUser;
  if (user) {
    // User is signed in.
    document.getElementById("logged_in_state").style.display = "initial";
    document.getElementById("logged_out_state").style.display = "none";
  } else {
    // No user is signed in.
	document.getElementById("logged_in_state").style.display = "none";
	document.getElementById("logged_out_state").style.display = "initial";
  }
});




function signup(){

  var useremail = document.getElementById("SignUpEmail").value;
  var userpass = document.getElementById("SignUpUserPassword").value;

  firebase.auth().createUserWithEmailAndPassword(useremail, userpass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });



}
function login(){

var username = document.getElementById("email_field").value;
var pass = document.getElementById("password_field").value;



window.alert(username + " " + pass );

firebase.auth().signInWithEmailAndPassword(username,pass).catch(function(error) {
    // Handle Errors here.

    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode == 'auth/wrong-password') {
        alert('Wrong password.');
    } else {
        alert(errorMessage);
    }
    console.log(error);
});



if(user != null){
    var user = firebase.auth().currentUser;
    var Name = user.displayName;
 	var email = user.email;
  	document.getElementById("user").innerHTML = + Name;

}

}


function logout(){

  firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
}
