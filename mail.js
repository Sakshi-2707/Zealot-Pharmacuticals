const firebaseConfig = {
    apiKey: "AIzaSyCRcje8A4z3F4GBOTVyIfhgmlTv3XYS7e0",
    authDomain: "contactform-zealot.firebaseapp.com",
    databaseURL: "https://contactform-zealot-default-rtdb.firebaseio.com",
    projectId: "contactform-zealot",
    storageBucket: "contactform-zealot.appspot.com",
    messagingSenderId: "990215624020",
    appId: "1:990215624020:web:1ac1488108732f0fa724c1"
  };

  
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
