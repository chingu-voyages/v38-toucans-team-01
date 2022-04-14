let favorite = document.getElementById("favorite");
let profNetwork = document.getElementById("profNetwork");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let number = document.getElementById("number");
let insta = document.getElementById("insta");
let facebook = document.getElementById("facebook");
let twitter = document.getElementById("twitter");
let linked = document.getElementById("linkedin");
let birthday = document.getElementById("birthday");
let notes = document.getElementById("notes");
let contactID = document.getElementById('contact-id')

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
    facebook.value = "";
    linked.value = "";
    twitter.value = "";
    birthday.value = "";
    notes.value = "";
    contactID.value = "";
}

//Close New Contact form

function cancel() {
    clearField();
    document.getElementById("newContact").style.display = "none";
}

//Add new contact

let contactForm = document.getElementById('contactForm')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    
    fetch('https://durante.herokuapp.com/api/v1/contacts',{
        method: 'POST',
        headers:{
            'content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('user')}`
        },
        body: JSON.stringify({
            firstname: firstName.value[0].toUpperCase() + firstName.value.substring(1),
            lastname: lastName.value[0].toUpperCase() + lastName.value.substring(1),
            phonenumber: number.value,
            birthday: birthday.value,
            email: email.value,
            notes: notes.value,
            instagram: insta.value,
            facebook: facebook.value,
            linkedin: linked.value,
            twitter: twitter.value,
            favorite: favorite.checked,
            profnetwork: profNetwork.checked
        
        }) 
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    const dataArr = [];
    dataArr.push(data);
    all(dataArr)
    window.location.href="home.html";
    })
    }) 

//Retrieve new contact from server

function getContacts(x) {
    newContact();
    document.getElementById("submitlist").style.display = "none";
    document.getElementById("editlist").style.display = "block";
    document.getElementById("deletelist").style.display = "block";
    fetch("https://durante.herokuapp.com/api/v1/contacts",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('user')}`
        },
    })
        .then((res) => res.json())
        .then((data) => {
            data.forEach(function(contact) {
            if(contact.id == x){
            firstName.value = contact.firstname
            lastName.value = contact.lastname
            email.value = contact.email
            number.value = contact.phonenumber
            insta.value = contact.instagram
            facebook.value = contact.facebook
            twitter.value = contact.twitter
            linked.value = contact.linkedin
            birthday.value = contact.birthday
            notes.value = contact.notes,
            favorite.checked = contact.favorite,
            profNetwork.checked = contact.profNetwork,
            contactID.value = contact.id
            }
            });
        });
}


//Post all contacts into contacts text box

document.getElementById("all").addEventListener("click",all);

function all() {
    document.getElementById("contacts").innerText = "";
    let arr = []
    fetch("https://durante.herokuapp.com/api/v1/contacts",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('user')}`
        }
    })
        .then((res) => res.json())
        .then((data) => {  
            console.log(data) 
            data.forEach(contacts => arr.push(contacts))
            arr.sort((a,b)=>{
                const firstnameA = a.firstname
                const firstnameB = b.firstname
                
                if(firstnameA < firstnameB){
                    return -1
                } if (firstnameA > firstnameB){
                    return 1
                } else {
                    return 0
                }
            })
            
            arr.forEach(function(contacts) {

                contactDiv = document.getElementById("contacts");
                newDiv = document.createElement("div");
                newDiv.setAttribute('id', `${contacts.id}`)
                contactDiv.appendChild(newDiv);
                let text = [`<a href="#" onclick="getContacts(${contacts.id}); return false;">${contacts.firstname} ${contacts.lastname}</a>`];
                if(contacts.phonenumber != '') {
                    text.push(`<i class="fa-solid fa-phone-flip"></i>`)
                }else
                    text.push(" ")
                if(contacts.twitter != '') { 
                    text.push(`<a href="${twitter.value}" target="_blank"><i class="fa-brands fa-twitter"></i></a>`)
                }else
                text.push(" ")
                if(contacts.instagram != '') { 
                    text.push(`<a href="${insta.value}" target="_blank"><i class="fa-brands fa-instagram"></i></a>`)
                }else
                text.push(" ")
                if(contacts.facebook != '') { 
                    text.push(`<a href="${facebook.value}" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`)
                }else
                text.push(" ")
                if(contacts.linkedin != '') { 
                    text.push(`<a href="${linked.value}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`)
                }else {
                    text.push(" ")
                }
                text.push(`<a href="#" onclick="deleteContact(${contacts.id}); return false;"><i class="fa fa-trash" aria-hidden="true"></i></a>`);
                text.forEach(t => {
                    newSpan = document.createElement("span");
                    newSpan.innerHTML = t;
                    newDiv.appendChild(newSpan);
                });
            })
        })
}


//Put only favorite contacts into contact div
document.getElementById("favorites").addEventListener("click", favorites)

function favorites() {
    document.getElementById("contacts").innerText = "";
    let arr = []
    fetch("https://durante.herokuapp.com/api/v1/contacts",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('user')}`
        }
    })
        .then((res) => res.json())
        .then((data) => {  
            console.log(data)
            data.forEach(contacts => arr.push(contacts))
            arr.sort((a,b)=>{
                const firstnameA = a.firstname
                const firstnameB = b.firstname
                
                if(firstnameA < firstnameB){
                    return -1
                } if (firstnameA > firstnameB){
                    return 1
                } else {
                    return 0
                }
            }) 
            arr.forEach(function(contacts) {
                if(contacts.favorite == true){
                    contactDiv = document.getElementById("contacts");
                    newDiv = document.createElement("div");
                    contactDiv.appendChild(newDiv);
                    let text = [`<a href="#" onclick="getContacts(${contacts.id}); return false;">${contacts.firstname} ${contacts.lastname}</a>`];
                    if(contacts.phonenumber != '') {
                        text.push(`<i class="fa-solid fa-phone-flip"></i>`)
                    }else
                        text.push(" ")
                    if(contacts.twitter != '') { 
                        text.push(`<a href="${twitter.value}" target="_blank"><i class="fa-brands fa-twitter"></i></a>`)
                    }else
                        text.push(" ")
                    if(contacts.instagram != '') { 
                        text.push(`<a href="${insta.value}" target="_blank"><i class="fa-brands fa-instagram"></i></a>`)
                    }else
                        text.push(" ")
                    if(contacts.facebook != '') { 
                        text.push(`<a href="${facebook.value}" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`)
                    }else
                        text.push(" ")
                    if(contacts.linkedin != '') { 
                        text.push(`<a href="${linked.value}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`)
                    }else {
                        text.push(" ")
                    }
                    text.push(`<a href="#" onclick="deleteContact(${contacts.id}); return false;"><i class="fa fa-trash" aria-hidden="true"></i></a>`);
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
document.getElementById("network").addEventListener("click", network)

function network() {
    document.getElementById("contacts").innerText = "";
    let arr = []
    fetch("https://durante.herokuapp.com/api/v1/contacts",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('user')}`
        }
    })
        .then((res) => res.json())
        .then((data) => {  
            console.log(data)
            data.forEach(contacts => arr.push(contacts))
            arr.sort((a,b)=>{
                const firstnameA = a.firstname
                const firstnameB = b.firstname
                
                if(firstnameA < firstnameB){
                    return -1
                } if (firstnameA > firstnameB){
                    return 1
                } else {
                    return 0
                }
            }) 
            arr.forEach(function(contacts) {
                if(contacts.profnetwork == true){
                    contactDiv = document.getElementById("contacts");
                    newDiv = document.createElement("div");
                    contactDiv.appendChild(newDiv);
                    let text = [`<a href="#" onclick="getContacts(${contacts.id}); return false;">${contacts.firstname} ${contacts.lastname}</a>`];
                    if(contacts.phonenumber != '') {
                        text.push(`<i class="fa-solid fa-phone-flip"></i>`)
                    }else
                        text.push(" ")
                    if(contacts.twitter != '') { 
                        text.push(`<a href="${twitter.value}" target="_blank"><i class="fa-brands fa-twitter"></i></a>`)
                    }else
                        text.push(" ")
                    if(contacts.instagram != '') { 
                        text.push(`<a href="${insta.value}" target="_blank"><i class="fa-brands fa-instagram"></i></a>`)
                    }else
                        text.push(" ")
                    if(contacts.facebook != '') { 
                        text.push(`<a href="${facebook.value}" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`)
                    }else
                        text.push(" ")
                    if(contacts.linkedin != '') { 
                        text.push(`<a href="${linked.value}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`)
                    }else {
                        text.push(" ")
                    }
                    text.push(`<a href="#" onclick="deleteContact(${contacts.id}); return false;"><i class="fa fa-trash" aria-hidden="true"></i></a>`);
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
    document.getElementById("contacts").innerText = "";
    let param = document.getElementById('search').value.toLowerCase()
    let arr = []
    fetch("https://durante.herokuapp.com/api/v1/contacts",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('user')}`
        }
    })
        .then((res) => res.json())
        .then((data) => {  
            console.log(data)
            data.forEach(contacts => arr.push(contacts))
            arr.sort((a,b)=>{
                const firstnameA = a.firstname
                const firstnameB = b.firstname
                
                if(firstnameA < firstnameB){
                    return -1
                } if (firstnameA > firstnameB){
                    return 1
                } else {
                    return 0
                }
            }) 
            arr.forEach(function(contacts) {
                if(contacts.firstname.toLowerCase().includes(param) || contacts.lastname.toLowerCase().includes(param) ){
                    contactDiv = document.getElementById("contacts");
                    newDiv = document.createElement("div");
                    contactDiv.appendChild(newDiv);
                    let text = [`<a href="#" onclick="getContacts(${contacts.id}); return false;">${contacts.firstname} ${contacts.lastname}</a>`];
                    if(contacts.phonenumber != '') {
                        text.push(`<i class="fa-solid fa-phone-flip"></i>`)
                    }else
                        text.push(" ")
                    if(contacts.twitter != '') { 
                        text.push(`<a href="${twitter.value}" target="_blank"><i class="fa-brands fa-twitter"></i></a>`)
                    }else
                        text.push(" ")
                    if(contacts.instagram != '') { 
                        text.push(`<a href="${insta.value}" target="_blank"><i class="fa-brands fa-instagram"></i></a>`)
                    }else
                        text.push(" ")
                    if(contacts.facebook != '') { 
                        text.push(`<a href="${facebook.value}" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`)
                    }else
                        text.push(" ")
                    if(contacts.linkedin != '') { 
                        text.push(`<a href="${linked.value}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`)
                    }else {
                        text.push(" ")
                    }
                    text.push(`<a href="#" onclick="deleteContact(${contacts.id}); return false;"><i class="fa fa-trash" aria-hidden="true"></i></a>`);
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

// function editContact() {
//     let first = firstName.value;
//     let last = lastName.value;
//     let address = email.value;
//     let phone = number.value;
//     let gram = insta.value;
//     let tweet = twitter.value;
//     let bday = birthday.value;
//     let info = notes.value;

//     fetch("127.0.0.1:3000/api/v1/contacts", {
//         method: 'PUT',
//         headers: {
//             "Accept": "application/json, text/plain, */*",
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({firstName:first,lastName:last, email:address, number:phone, insta:gram, twitter:tweet, birthday:bday, notes:info})
//     })
//     .then ((res) => res.json())
//     .then ((data) => console.log(data))
//     .catch (err => console.error(err))
// }

//Delete existing Contact

// document.getElementById('delete').addEventListener('submit', (e) => {
//     e.preventDefault()

//     fetch(`https://durante.herokuapp.com/api/v1/contacts/${contactID.value}`, {
//         method: 'DELETE'
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     all()
// })
//Deletes user token from local storage and redirects user to landing page

function logOut(e){
    e.preventDefault()
    localStorage.removeItem('user')
    window.location.href="login.html"
}

function deleteContact(x) {
    fetch(`https://durante.herokuapp.com/api/v1/contacts/${x}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(res => console.log(res))
    all()
}
