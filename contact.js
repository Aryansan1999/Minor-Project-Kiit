firebase.initializeApp(firebaseConfig);
var queryRef = firebase.database().ref('query');
document.getElementById('qq').addEventListener('submit', submitquery);
function submitquery(e){
  e.preventDefault();
  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var query = getInputVal('query');
  // Save message
  saveMessage(name,email,query);
  // Show alert
  document.querySelector('.alert');
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert');
  },3000);

  // Clear form
  document.getElementById('qq');
}
// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
// Save message to firebase
function saveMessage(name,email,query){
  var newMessageRe = queryRef.push();
  newMessageRe.set({
    name: name,
    email:email,
    query:query
  });
}