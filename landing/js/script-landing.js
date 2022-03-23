//Bring up Login or Signup form while removing the other

function login() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function signup() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
}

//Clear Login or Signup form

function cancel() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
}