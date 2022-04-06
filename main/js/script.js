let favorite = document.getElementById("favorite");
let profNetwork = document.getElementById("profNetwork");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let number = document.getElementById("number");
let insta = document.getElementById("insta");
let twitter = document.getElementById("twitter");
let linked = document.getElementById("linkedin");
let birthday = document.getElementById("birthday");
let notes = document.getElementById("notes");

//Open New Contact form

function newContact() {
    document.getElementById("newContact").style.display = "block";
    document.getElementById("submitlist").style.display = "block";
    document.getElementById("editlist").style.display = "none";
    document.getElementById("deletelist").style.display = "none";
}

//Clear all entry fields on page, set to run on page load via html

function clearField() {
    document.getElementById("search").value = "";
    favorite.checked = false;
    profNetwork.checked = false;
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    number.value = "";
    insta.value = "";
    twitter.value = "";
    birthday.value = "";
    notes.value = "";
}

//Close New Contact form

function cancel() {
    clearField();
    document.getElementById("newContact").style.display = "none";
}

//Enter new contact into server

function addContact() {
    console.log("starting function");

    

    let first = firstName.value;
    let last = lastName.value;
    let address = email.value;
    let phone = number.value;
    let gram = insta.value;
    let tweet = twitter.value;
    let bday = birthday.value;
    let info = notes.value;

    let contactAdd = {contact: {
        firstName: first,
        lastName: last,
        email: address,
        number: phone,
        insta: gram,
        twitter: tweet,
        birthday: bday,
        info: notes,
        }
    };

    console.log(contactAdd);

    fetch("127.0.0.1:3000/api/v1/contacts", {
        method: 'POST',
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        body: JSON.stringify(contactAdd)
    })
    .then ((res) => res.json())
    .then ((contactData) => console.log(contactData))
    .catch (err => console.error(err))
}

//Retrieve new contact from server

function getContacts() {
    newContact();
    document.getElementById("submitlist").style.display = "none";
    document.getElementById("editlist").style.display = "block";
    document.getElementById("deletelist").style.display = "block";
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            data.forEach(function(post) {
            firstName.value = post.id
            lastName.value = post.id
            email.value = post.title
            number.value = post.title
            insta.value = post.title
            twitter.value = post.title
            linked.value = post.title
            birthday.value = post.id
            notes.value = post.body
            });
        });
}


//Post all contacts into contacts text box

document.getElementById("all").addEventListener("click",all);

function all() {
    document.getElementById("contacts").innerText = "";
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {   
            data.forEach(function(post) {
                contactDiv = document.getElementById("contacts");
                newDiv = document.createElement("div");
                contactDiv.appendChild(newDiv);
                let text = [`${post.id} ${post.id}`];
                if(post.id%3 == 0) {
                    text.push(`<i class="fa-solid fa-phone-flip"></i>`)
                }
                if(post.id%4 == 0) { 
                    text.push(`<a href="https://twitter.com/home" target="_blank"><i class="fa-brands fa-twitter"></i></a>`)
                }
                if(post.id%12 == 0) { 
                    text.push(`<a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>`)
                }
                if(post.id%8 == 0) { 
                    text.push(`<a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`)
                }
                if(post.id%2 == 0) { 
                    text.push(`<a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`)
                }
                
                text.forEach(t => {
                    newSpan = document.createElement("span");
                    newSpan.innerHTML = t;
                    newDiv.appendChild(newSpan);
                });
            })
        })
}


//Put only favorite contacts into contact div
document.getElementById("favorites").addEventListener("click",favorites);

function favorites() {
    document.getElementById("contacts").innerText = "";
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {   
            data.forEach(function(post) {
                if(post.id%15 == 0) {
                    contactDiv = document.getElementById("contacts");
                    newDiv = document.createElement("div");
                    contactDiv.appendChild(newDiv);
                    let text = [`${post.id} ${post.id}`];
                    if(post.id%3 == 0) {
                        text.push(`<i class="fa-solid fa-phone-flip"></i>`)
                    }
                    if(post.id%4 == 0) { 
                        text.push(`<a href="https://twitter.com/home" target="_blank"><i class="fa-brands fa-twitter"></i></a>`)
                    }
                    if(post.id%12 == 0) { 
                        text.push(`<a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>`)
                    }
                    if(post.id%8 == 0) { 
                        text.push(`<a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`)
                    }
                    if(post.id%2 == 0) { 
                        text.push(`<a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`)
                    }

                    text.forEach(t => {
                        newSpan = document.createElement("span");
                        newSpan.innerHTML = t;
                        newDiv.appendChild(newSpan);
                    });
                }    
            })
        })
}

//Put only network contacts into contact div
document.getElementById("network").addEventListener("click",network);

function network() {
    document.getElementById("contacts").innerText = "";
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {   
            data.forEach(function(post) {
                if(post.id%20 == 0) {
                    contactDiv = document.getElementById("contacts");
                    newDiv = document.createElement("div");
                    contactDiv.appendChild(newDiv);
                    let text = [`${post.id} ${post.id}`];
                    if(post.id%3 == 0) {
                        text.push(`<i class="fa-solid fa-phone-flip"></i>`)
                    }
                    if(post.id%4 == 0) { 
                        text.push(`<a href="https://twitter.com/home" target="_blank"><i class="fa-brands fa-twitter"></i></a>`)
                    }
                    if(post.id%12 == 0) { 
                        text.push(`<a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>`)
                    }
                    if(post.id%8 == 0) { 
                        text.push(`<a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`)
                    }
                    if(post.id%2 == 0) { 
                        text.push(`<a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`)
                    }

                    text.forEach(t => {
                        newSpan = document.createElement("span");
                        newSpan.innerHTML = t;
                        newDiv.appendChild(newSpan);
                    });
                }    
            })
        })
}

//Sets function search() to run every time a key is released in the Search Bar

//Clears "Contacts" div. Compares Search Bar entry to objects in contacts array, and returns any matches by adding divs/spans to "Contacts" div, as well as the contacts information

document.getElementById("search").addEventListener("keyup", search);

function search() {
    document.getElementById("contacts").innerHTML = "";
    let param = document.getElementById("search").value.toLowerCase();

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {   
            data.forEach(function(post) {
                if(post.id == param) {
                    contactDiv = document.getElementById("contacts");
                    newDiv = document.createElement("div");
                    contactDiv.appendChild(newDiv);
                    let text = [`${post.id} ${post.id}`];
                    if(post.id%3 == 0) {
                        text.push(`<i class="fa-solid fa-phone-flip"></i>`)
                    }
                    if(post.id%4 == 0) { 
                        text.push(`<a href="https://twitter.com/home" target="_blank"><i class="fa-brands fa-twitter"></i></a>`)
                    }
                    if(post.id%12 == 0) { 
                        text.push(`<a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>`)
                    }
                    if(post.id%8 == 0) { 
                        text.push(`<a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`)
                    }
                    if(post.id%2 == 0) { 
                        text.push(`<a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`)
                    }

                    text.forEach(t => {
                        newSpan = document.createElement("span");
                        newSpan.innerHTML = t;
                        newDiv.appendChild(newSpan);
                    });
                }    
            })
        })
}

//Edit existing Contact

function editContact() {
    let first = firstName.value;
    let last = lastName.value;
    let address = email.value;
    let phone = number.value;
    let gram = insta.value;
    let tweet = twitter.value;
    let bday = birthday.value;
    let info = notes.value;

    fetch("127.0.0.1:3000/api/v1/contacts", {
        method: 'PUT',
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        body: JSON.stringify({firstName:first,lastName:last, email:address, number:phone, insta:gram, twitter:tweet, birthday:bday, notes:info})
    })
    .then ((res) => res.json())
    .then ((data) => console.log(data))
    .catch (err => console.error(err))
}

//Delete existing Contact

function deleteContact() {
    fetch("127.0.0.1:3000/api/v1/contacts", {
        method: 'DELETE'
    })
}