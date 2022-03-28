function login() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function signup() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
}

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
                <input type="email" id="email" name="email">
                <span>Enter Your Email Address Here</span>
            </li>
            <li>
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
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
    event.preventDefault(); //prevents post request from being submitted
    let name = document.getElementById("email").value
    let password = document.getElementById("password").value

    console.log(name, password)
    
    let newUser = {
        name: name, 
        password: password
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
    .then(newUser => {
        console.log(newUser);
        if (newUser.error) {
          alert("Error Password or Username"); /*displays error message*/
        } 
    })
    .catch((err) => {
        console.log(err);
    });
    
    // TO CLEAR FORM AFTER SUBMISSION
    name = document.getElementById("name").value = ""
    password = document.getElementById("password").value = ""  
}