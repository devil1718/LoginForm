var userName = document.querySelector("#userName");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var signUpContainer = [];
var syntax = document.querySelector("#syntax");
var syntaxx = document.querySelector("#syntaxx");
var loginEmail = document.querySelector("#loginEmail");
var loginPassword = document.querySelector("#loginPassword");
var hello = document.querySelector("#Hello")
if (localStorage.getItem("userData") != null) {
  signUpContainer = JSON.parse(localStorage.getItem("userData"));
}
function addUserData() {
  var element = {
    username: userName.value,
    useremail: email.value,
    userpassword: password.value,
  };

  if (
    validUserName() == true &&
    validEmail() == true &&
    validPassword() == true
  ) {
    let index = signUpContainer.findIndex((el) => {
      return el.useremail == email.value;
    });

    if (index == -1) {
      signUpContainer.push(element);
      console.log(signUpContainer);
      localStorage.setItem("userData", JSON.stringify(signUpContainer));
      syntaxx.style.display = "block";
      syntax.style.display = "none";
      clearData();
      
    } else {
      syntax.style.display = "block";
    }
    // for (var i = 0; i < signUpContainer.length; i++) {
    //     if (signUpContainer[i].useremail == email.value) {
    //          syntax.style.display = "block"
    //         console.log("error");
    //     }
    //     else {
    //         signUpContainer.push(element);
    //         console.log(signUpContainer);
    //         localStorage.setItem("userData", JSON.stringify(signUpContainer));
    //         // syntaxx.style.display = "block"
    //         clearData();
    //     }
    // }
  } else {
    alert(`user Name or Email or Password is not valid, Please follow the rules below :

    1-User name must contain at least 6 characters 

    2-Emai must be a valid one .....must have "@" and "." 
    
    3-Password must be valid with 6 numbers at least`);
  }
}

function clearData() {
  userName.value = "";
  email.value = "";
  password.value = "";
}

if (userName != null && email != null && password != null) {
  userName.addEventListener("blur", validUserName);
function validUserName() {
  var regex1 = /^[a-zA-Z]{6,16}/;
  if (regex1.test(userName.value) == true) {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    return false;
  }
}
email.addEventListener("blur", validEmail);
function validEmail() {
  var regex2 =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;
  if (regex2.test(email.value) == true) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    return true;
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    return false;
  }
}
password.addEventListener("blur", validPassword);
function validPassword() {
  var regex3 = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/gm;
  if (regex3.test(password.value) == true) {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
    return true;
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    return false;
  }
}
}
if(document.getElementById("Hello") != null){
  let uuuu = localStorage.getItem('theName')
  document.getElementById("Hello").innerHTML = "Welcome"+ " " + `<span class="text-danger">${uuuu}</span>`
}

function login(){
  var logEmail = loginEmail.value
  var logpassword = loginPassword.value
  for(i=0; i<signUpContainer.length ; i++){
  if( signUpContainer[i].useremail == logEmail && signUpContainer[i].userpassword == logpassword ){
  localStorage.setItem('theName',signUpContainer[i].username)
  window.location.href="hello.html"
  }
  
  }
  }

  function deleteArray(){
  localStorage.removeItem('theName')
  window.location.href="login.html"
  }
  
