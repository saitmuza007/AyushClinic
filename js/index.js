// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const patient = document.getElementById("inputPatientName");
const shireen = document.getElementById("drs");
const shilpa = document.getElementById("drs1");
const thabassum = document.getElementById("drs2");
const departName = document.getElementById("inputDepartmentName");
const phone = document.getElementById("inputPhone");
const symptoms = document.getElementById("inputSymptoms");
const date = document.getElementById("inputDate");
const button = document.getElementById("sub");


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB-RJOLUq9JijrnfzRE_4BxUopX7ov-dPw",
    authDomain: "wellnesscenter-4de2a.firebaseapp.com",
    projectId: "wellnesscenter-4de2a",
    storageBucket: "wellnesscenter-4de2a.appspot.com",
    messagingSenderId: "649595188343",
    appId: "1:649595188343:web:31037388e8090a686bc272",
    measurementId: "G-B9B0QG18RV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


const database = firebase.database();
const usersRef = database.ref("/users");
const normalUsersRef = usersRef.child("normal_users");
const superUsersRef = usersRef.child("super_users");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const autoId = usersRef.push().key;
  usersRef.child(patient.value).set({
    Patient_Name: patient.value,
    Doctor_Name1: shireen.value,
    Doctor_Name2: shilpa.value,
    Doctor_Name1: thabassum.value,
    Dept_Name:departName.value,
    Phone: phone.value,
    Symptoms: symptoms.value,
    Date: date.value,
  });
  alert("Succesfully Registered");

});
