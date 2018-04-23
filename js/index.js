function navigateToLoginPage(){
  window.location.href = "login.html";
}

function login(){

var email = document.getElementById("email_field").value;
var pass = document.getElementById("password_field").value;

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
  var username, email, password;
  /*name = document.getElementById("SignUpName").value;*/
  email = document.getElementById("SignUpEmail").value;
  username = document.getElementById("SignUpUserName").value;
  password = document.getElementById("SignUpPassword").value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(error);
  });
  //createUserName();
  /*user = firebase.auth().currentUser;
  user.updateProfile({
  displayName: document.getElementById("SignUpName").value
}).then(function() {
  // Profile updated successfully!
  // "Jane Q. User"
  var displayName = user.displayName;
  // "https://example.com/jane-q-user/profile.jpg"
}, function(error) {
  // An error happened.
});*/
}

function logout(){
 
	firebase.auth().signOut().then(function() {
    // Sign-out successful.
	window.location.href = "index.html";
  }).catch(function(error) {
    // An error happened.
  });
}

/*function createUserName(){
  user = firebase.auth().currentUser;
  user.updateProfile({
  displayName: document.getElementById("SignUpName").value
}).then(function() {
  // Profile updated successfully!
  // "Jane Q. User"
  var displayName = user.displayName;
  // "https://example.com/jane-q-user/profile.jpg"
}, function(error) {
  // An error happened.
});
}*/