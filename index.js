
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location="HomePage.html"
    document.getElementById("logged_in_state").style.display = "block";
    document.getElementById("logged_out_state").style.display = "none";
  } else {
    // No user is signed in.

    document.getElementById("logged_in_state").style.display = "none";
    document.getElementById("logged_out_state").style.display = "block";
  }
});





function login(){

var username = document.getElementById("email_field").value;
var pass = document.getElementById("password_field").value;
window.alert(username + " " + pass );

firebase.auth().createUserWithEmailAndPassword(username, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...

  window.alert("Error: " + errorMessage);
});

var user = firebase.auth().currentUser;
var Name = user.displayName;

if(user != null){

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
