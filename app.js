   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUI53GZ6IXzu957lBR-WWfmgEPNj-Nd8c",
    authDomain: "collabify-us.firebaseapp.com",
    databaseURL: "https://collabify-us.firebaseio.com",
    projectId: "collabify-us",
    storageBucket: "collabify-us.appspot.com",
    messagingSenderId: "458971277153"
  };
  firebase.initializeApp(config);

 var dB = firebase.database();


var TaskCompleted = 5000;
var TaskName = "Name";

writeUserData(TaskName, TaskCompleted);

 function writeUserData(TaskCompleted, TaskName) {
  firebase.database().ref('Tasks/').set({
    taskName: TaskName,
    taskCompleted: TaskCompleted,
    
    });
  console.log("Hello");
}