firebase.auth().onAuthStateChanged(function(user) {
  console.log("hello world");
  var user = firebase.auth().currentUser;
  if (user) {
    // User is signed in.
    console.log("hello world1");
    document.getElementById("logged_in_state").style.display = "initial";
    document.getElementById("logged_out_state").style.display = "none";
    window.location.href = "HomePage.html";
	var name = user.displayName;
	document.getElementById("user").innerHTML = name;
    
  } else {
    // No user is signed in.
	document.getElementById("logged_in_state").style.display = "none";
	document.getElementById("logged_out_state").style.display = "initial";
  console.log("no user");

  }
});


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
window.alert("nothing");
}

function signUp(){
  var name, username, email, uid, password;
  name = document.getElementById("SignUpName").value;
  username = document.getElementById("SignUpUserName").value;
  email = document.getElementById("SignUpEmail").value;
  password = document.getElementById("SignUpPassword").value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(error);
  });
  window.alert("You will be redirected to our log in page. Proceed to sign in to your new account from there.");
}

function logout(){
 
	firebase.auth().signOut().then(function() {
	window.alert('logged out');
    // Sign-out successful.
	window.location.href = "index.html";
  }).catch(function(error) {
    // An error happened.
  });
}
