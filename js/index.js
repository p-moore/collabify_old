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
}

function createUser() {
  var user = firebase.auth().currentUser;
  if(user == null){console.log("user is still null");}
  else {
  
  }
}




function loadUser(){
  var user = firebase.auth().currentUser;
  if(user == null){console.log("user is null");}
  else{


    var ref = firebase.database().ref('Users').child(user.uid);

ref.on("value", function(snapshot) {
  var snap = snapshot.val();
  var userEmail = snap.email;
  var numProjs = snap.numProjects;
  if(numProjs == null && userEmail == null){
      var setUp = firebase.database().ref('/Users/' +user.uid);
      setUp.set({
        numProjects: 0,
        email: user.email,
      });
    }
    else if(numProjs > 0){
      loadProjects(user.uid);
    }
    console.log(numProjs);

}, function (error) {
   console.log("Error: " + error.code);
});
  }
}

function loadPicture(){
  var user = firebase.auth().currentUser;
  document.getElementById("profilepic").value = user.photoURL;
}

function logout(){
 
	firebase.auth().signOut().then(function() {
    // Sign-out successful.
	window.location.href = "index.html";
  }).catch(function(error) {
    // An error happened.
  });
}

function updateName(){
  var user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: document.getElementById("rename").value,
    photoURL: document.getElementById("profilepicture").value,
  }).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
}

function increaseProjectCount(uid){

  var ref = firebase.database().ref('Users');
    var projCountRef = ref.child(uid).child('numProjects');
    projCountRef.transaction(function(currentProjCount) {
      return currentProjCount + 1;
    });
}

function navigateToUpdate(){
  window.location.href="collabify.html";
}

function writeNewProject(id,name) {
  var user = firebase.auth().currentUser;
    var newProj = firebase.database().ref('Projects/' + id);
    newProj.set({
      ProjectName: name,
    });
    increaseProjectCount(user.uid);  
}

function loadProjects(uid){

    var ref = firebase.database().ref('Users').child(uid);

ref.on("value", function(snapshot) {
  var snap = snapshot.val();
  var projCount = snap.numProjects;
  var ref1 = firebase.database().ref('Projects').child();
      if(projCount>0){
      for(var i = 1; i <= projCount; i++){
        //$("#projectname").attr("innerHTML","successful");
        document.getElementById('projectname').innerHTML=;
      }
    } else{console.log("no projects"); }

}, function (error) {
   console.log("Error: " + error.code);
});
  
}