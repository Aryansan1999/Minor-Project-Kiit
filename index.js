const pic = [];
const price = [];
const name = [];
let a=0;

function addButtonClickHandler(nam, pri, pi) {
  name.push(nam);
  price.push(pri);
  pic.push(pi);
  name.forEach(function (entry) {
    console.log(entry);
  });
  price.forEach(function (entry) {
    console.log(entry);
  });
  pic.forEach(function (entry) {
    console.log(entry);
  });
  a=sumArray(price);
}
function sumArray(array) {

  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    sum += parseInt(array[i]);
  }

  return sum;
}
// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyDU-Apr4tqTlYHMN1OIM0x0Fc6KtD97lUw",
  authDomain: "minor-project-df56d.firebaseapp.com",
  databaseURL: "https://minor-project-df56d-default-rtdb.firebaseio.com",
  projectId: "minor-project-df56d",
  storageBucket: "minor-project-df56d.appspot.com",
  messagingSenderId: "826744090103",
  appId: "1:826744090103:web:ecb25c6b39305087a8d2f2",
  measurementId: "G-XJKEED8C1T"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('Orders');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
  // Get values
  var name = getInputVal('exampleInputName');
  var zipcode = getInputVal('exampleZipCode');
  var email = getInputVal('exampleInputEmail1');
  var phone = getInputVal('exampleInputPhone');
  var address = getInputVal('exampleAddress');

  // Save message
  saveMessage(name, zipcode, email, phone, address);

  // Show alert
  document.querySelector('.alert');

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert');
  },3000);

  // Clear form
  document.getElementById('contactForm');
}
// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
// Save message to firebase
function saveMessage(name, zipcode, email, phone, address){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    zip_Code:zipcode,
    email:email,
    phone:phone,
    address:address
  });
}
console.log("hello");
