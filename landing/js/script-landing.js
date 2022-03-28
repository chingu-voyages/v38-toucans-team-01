function login() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function signup() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
}

const data = 'http://localhost:3000/api/v1/users';

const form = {
    username: document.querySelector("#signin-email"),
    avatar: document.querySelector("#avatar"),
    password: document.querySelector("#signin-password"),
    submit: document.querySelector("#signin-btn-submit"),
  };
  let button = form.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const signUpData = 'http://localhost:3000/api/v1/users';
  
    fetch(signUpData, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: form.username.value,
        avatar: form.avatar.value,
        password: form.password.value
        
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
       
        if (data.error) {
          alert("Error Password or Username"); /*displays error message*/
        } 
      })
      .catch((err) => {
        console.log(err);
      });
  });


// function submitSignUp() {
//     async function main(){
//         const res = await fetch('http://localhost:3000/api/v1/users',{
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({

//             })
//         })
//         const data = await res.json()
//         console.log(data)
//     }
// }


function cancel() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
}