// Invoke user forms for code execution
signUpUser()
logInUser()

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

function signUpUser() {
    let signUpForm = document.getElementById("signup")

    signUpForm.innerHTML +=
    `
    <form class="form" id='signup-form'> 
        <ul>
            <li>
                <label for="email">Email</label>
                <input type="text" id="signUpEmail" name="email">
                <span>Enter Your Email Address Here</span>
            </li>
            <li>
                <label for="password">Password</label>
                <input type="password" id="signUpPassword" name="password">
                <span>Enter Your Password Here</span>
            </li>
            <li>
                <input type="submit" value="Sign Up">
            </li>
            <li class="cancel">
                <input class="cancel" type="button" onclick="cancel()" value="Cancel">
            </li>
        </ul>
    </form>
    `
    signUpForm.addEventListener("submit", submitSignUpForm)
}

function submitSignUpForm(event) {
    event.preventDefault(); 
    let usernameSignUp = document.getElementById("signUpEmail").value
    let passwordSignUp = document.getElementById("signUpPassword").value

    console.log(usernameSignUp, passwordSignUp)

    let newUser = { user: {
            username: usernameSignUp, 
            password: passwordSignUp
        }
    };

    // once form submitted => fetch post request to backend
    fetch('http://localhost:3000/api/v1/users', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newUser) //converts javascript objects into strings.
        
    
    }) //consuming code: waiting on promise to be fulfilled
    .then(response => response.json())
    .then(data => {
        console.log(data);
        localStorage.setItem('user', data.jwt);
        window.location.href="/main/index.html";
        if (data.error) {
          alert("Error Password or Username"); /*displays error message*/
        } 
    })
    .catch((err) => {
        console.log(err);
    });
    
    // TO CLEAR FORM AFTER SUBMISSION
    username = document.getElementById("email").value = ""
    password = document.getElementById("password").value = ""  
}

function logInUser() {
    let logInForm = document.getElementById("login")

    logInForm.innerHTML +=
    `
    <form class="form" id='login-form'> 
        <ul>
            <li>
                <label for="email">Email</label>
                <input type="text" id="email" name="email">
                <span>Enter Your Email Address Here</span>
            </li>
            <li>
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
                <span>Enter Your Password Here</span>
            </li>
            <li>
                <input type="submit" value="Log In">
            </li>
            <li class="cancel">
                <input class="cancel" type="button" onclick="cancel()" value="Cancel">
            </li>
        </ul>
    </form>
    `
    logInForm.addEventListener("submit", submitLogInForm)
}
 
function submitLogInForm(event) {
    event.preventDefault(); 
    let username = document.getElementById("email").value
    let password = document.getElementById("password").value

    console.log(username, password)

    let returnUser = { user: {
            username: username, 
            password: password
        }
    };

    // once form submitted => fetch post request to backend
    fetch('http://localhost:3000/api/v1/login', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(returnUser) //converts javascript objects into strings.
        
    
    }) //consuming code: waiting on promise to be fulfilled
    .then(response => response.json())
    .then(userData => {
         console.log(userData);
         localStorage.setItem('user', userData.jwt);
         window.location.href="/main/index.html";
        if (userData.error) {
          alert("Error Password or Username"); /*displays error message*/
        } 
    })
    .catch((err) => {
        console.log(err);
    });
    
    // TO CLEAR FORM AFTER SUBMISSION
    username = document.getElementById("email").value = ""
    password = document.getElementById("password").value = ""  
}
