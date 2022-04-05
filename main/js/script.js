let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let number = document.getElementById("number");
let insta = document.getElementById("insta");
let twitter = document.getElementById("twitter");
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
    fetch("127.0.0.1:3000/api/v1/contacts")
        .then((res) => res.json())
        .then((data) => {
            firstName.value = contact[0].firstName
            lastName.value = contact[0].lastName
            email.value = contact[0].email
            notes.value = contact[0].notes
        });
        // .then((data) => {
        //     firstName.value = data.firstName;
        //     lastName.value = data.lastName;
        //     email.value = data.email;
        //     number.value = data.number;
        //     insta.value = data.insta;
        //     twitter.value = data.twitter;
        //     birthday.value = data.birthday;
        //     notes.value = data.notes;
        // });
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

//Manually built contacts/objects to test out functions

let davidOrtiz = {

"firstName" : "David",
"lastName" : "Ortiz",
"birthDate" : "03/15/68",
"cellNumber" : "123-4567",
"workNumber" : "444-9000",
"email" : "bigpapi@redsox.com",
"address" : "Boston",
"twitter" : "@papi",
"instagram" : "#papi",
"facebook" : "facebook.com",
"circle" : "Inner Circle",
  
}

let albertPujols = {

    "firstName" : "Albert",
    "lastName" : "Pujols",
    "birthDate" : "03/15/68",
    "cellNumber" : "123-4567",
    "workNumber" : "444-9000",
    "email" : "bigpapi@redsox.com",
    "address" : "Boston",
    "twitter" : "@pujols",
    "instagram" : "#pujols",
    "facebook" : "facebook.com",
    "circle" : "Inner Circle",

}

let bartoloColon = {

    "firstName" : "Bartolo",
    "lastName" : "Colon",
    "birthDate" : "04/20/69",
    "cellNumber" : "123-4567",
    "workNumber" : "444-9000",
    "email" : "colon@getchecked.com",
    "address" : "DR",
    "twitter" : "@colon",
    "instagram" : "#colon",
    "facebook" : "facebook.com",
    "circle" : "Inner Circle",
      
}

let tonyPena = {

    "firstName" : "Tony",
    "lastName" : "Pena",
    "birthDate" : "04/20/69",
    "cellNumber" : "123-4567",
    "workNumber" : "444-9000",
    "email" : "colon@getchecked.com",
    "address" : "DR",
    "twitter" : "@bigpena",
    "instagram" : "#bigpena",
    "facebook" : "facebook.com",
    "circle" : "Inner Circle",
      
}
    
let sammySosa = {

"firstName" : "Sammy",
"lastName" : "Sosa",
"birthDate" : "01/01/66",
"cellNumber" : "867-5309",
"workNumber" : "888-4000",
"email" : "bigslugs@hotmail.com",
"address" : "123 Home Run Derby",
"twitter" : "@sosa",
"instagram" : "#sosa",
"facebook" : "facebook.com",
"circle" : "Outer Circle",
  
}

let vladimirGuerrero = {

    "firstName" : "Vladimir",
    "lastName" : "Guerrero",
    "birthDate" : "01/01/66",
    "cellNumber" : "867-5309",
    "workNumber" : "888-4000",
    "email" : "bigslugs@hotmail.com",
    "address" : "123 Home Run Derby",
    "twitter" : "@theimpaler",
    "instagram" : "#theimpaler",
    "facebook" : "facebook.com",
    "circle" : "Outer Circle",
      
} 

let mannyRamirez = {

    "firstName" : "Manny",
    "lastName" : "Ramirez",
    "birthDate" : "05/025/70",
    "cellNumber" : "867-5309",
    "workNumber" : "888-4000",
    "email" : "mananarama@hotmail.com",
    "address" : "123 Home Run Derby",
    "twitter" : "@manny",
    "instagram" : "#manny",
    "facebook" : "facebook.com",
    "circle" : "Outer Circle",
      
}

let joseBautista = {

    "firstName" : "Jose",
    "lastName" : "Bautista",
    "birthDate" : "05/025/70",
    "cellNumber" : "867-5309",
    "workNumber" : "888-4000",
    "email" : "mananarama@hotmail.com",
    "address" : "123 Home Run Derby",
    "twitter" : "@joeybats",
    "instagram" : "#joeybats",
    "facebook" : "facebook.com",
    "circle" : "Outer Circle",
      
} 

let robinsonCano = {

"firstName" : "Robinson",
"lastName" : "Cano",
"birthDate" : "02/10/67",
"cellNumber" : "567-8901",
"workNumber" : "555-0001",
"email" : "yankeeboy@gmail.com",
"address" : "456 New York Drive",
"twitter" : "@cano",
"instagram" : "#cano",
"facebook" : "facebook.com",
"circle" : "Network",

}

let pedroMartinez = {

    "firstName" : "Pedro",
    "lastName" : "Martinez",
    "birthDate" : "02/10/67",
    "cellNumber" : "567-8901",
    "workNumber" : "555-0001",
    "email" : "yankeeboy@gmail.com",
    "address" : "456 New York Drive",
    "twitter" : "@pedro",
    "instagram" : "#pedro",
    "facebook" : "facebook.com",
    "circle" : "Network",
    
}

let felipeAlou = {

    "firstName" : "Felipe",
    "lastName" : "Alou",
    "birthDate" : "02/10/67",
    "cellNumber" : "567-8901",
    "workNumber" : "555-0001",
    "email" : "yankeeboy@gmail.com",
    "address" : "456 New York Drive",
    "twitter" : "@alou",
    "instagram" : "#alou",
    "facebook" : "facebook.com",
    "circle" : "Network",
    
}

let adrianBeltre = {

    "firstName" : "Adrian",
    "lastName" : "Beltre",
    "birthDate" : "02/10/67",
    "cellNumber" : "567-8901",
    "workNumber" : "555-0001",
    "email" : "yankeeboy@gmail.com",
    "address" : "456 New York Drive",
    "twitter" : "@belt",
    "instagram" : "#belt",
    "facebook" : "facebook.com",
    "circle" : "Network",
    
}

//Creates and fills contacts array with manual contacts/objects

let contacts = [];

contacts.push(robinsonCano);
contacts.push(sammySosa);
contacts.push(davidOrtiz);
contacts.push(adrianBeltre);
contacts.push(felipeAlou);
contacts.push(pedroMartinez);
contacts.push(joseBautista);
contacts.push(mannyRamirez);
contacts.push(vladimirGuerrero);
contacts.push(tonyPena);
contacts.push(albertPujols);
contacts.push(bartoloColon);


//Sets function all() to run on click of filter 

document.getElementById("all").addEventListener("click",all);

//Clears "Contacts" div. Creates div and spans within "Contacts", populated by all contacts in array

// function all() {
//     document.getElementById("contacts").innerText = "";
//     for(i=0;i<contacts.length;i++) {
//         contactDiv = document.getElementById("contacts");
//         contactName = document.createTextNode(`${contacts[i].firstName} ${contacts[i].lastName}`);
//         phoneNumber = document.createTextNode(`${contacts[i].cellNumber}`)
//         newDiv = document.createElement("div");
//         let text = [`${contacts[i].firstName} ${contacts[i].lastName}`, `<i class="fa-solid fa-phone-flip"></i>`, `<a href="https://twitter.com/home" target="_blank"><i class="fa-brands fa-twitter"></i></a>`, `<a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>`, `<a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`, `<i class="fa-solid fa-pencil"></i>`];
//         contactDiv.appendChild(newDiv);
//         for(j=0;j<text.length;j++) {
//             newSpan = document.createElement("span");
//             newSpan.innerHTML = text[j];
//             newDiv.appendChild(newSpan);
//         };
//     }
// }

function all() {
    document.getElementById("contacts").innerText = "";
    contacts.forEach(contact => {
        contactDiv = document.getElementById("contacts");

            contactName = document.createTextNode(`${contact.firstName} ${contact.lastName}`);
            phoneNumber = document.createTextNode(`${contact.cellNumber}`)
            newDiv = document.createElement("div");
            let text = [`${contact.firstName} ${contact.lastName}`, `<i class="fa-solid fa-phone-flip"></i>`, `<a href="https://twitter.com/home" target="_blank"><i class="fa-brands fa-twitter"></i></a>`, `<a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>`, `<a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`, `<i class="fa-solid fa-pencil"></i>`];
            contactDiv.appendChild(newDiv);
            text.forEach(t => {
                newSpan = document.createElement("span");
                newSpan.innerHTML = t;
                newDiv.appendChild(newSpan);
            });
    })

        contactName = document.createTextNode(`${contacts[i].firstName} ${contacts[i].lastName}`);
        phoneNumber = document.createTextNode(`${contacts[i].cellNumber}`)
        newDiv = document.createElement("div");
        let text = [`${contacts[i].firstName} ${contacts[i].lastName}`, `<a href="tel:6048883662"><i class="fa-solid fa-phone-flip"></i></a>`, `<a href="https://twitter.com/home" target="_blank"><i class="fa-brands fa-twitter"></i></a>`, `<a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>`, `<a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`];
        contactDiv.appendChild(newDiv);
        for(j=0;j<text.length;j++) {
            newSpan = document.createElement("span");
            newSpan.innerHTML = text[j];
            newDiv.appendChild(newSpan);
        };
    }



//Sets function innerCircle() to run on click of filter 

document.getElementById("inner").addEventListener("click",innerCircle);

//Clears "Contacts" div. Creates div and spans within "Contacts", populated by contacts in array that meet the requirement of being Inner Circle

function innerCircle() {
    document.getElementById("contacts").innerText = "";
    for(i=0;i<contacts.length;i++) {
        if(contacts[i].circle == "Inner Circle") {
            contactDiv = document.getElementById("contacts");
            contactName = document.createTextNode(`${contacts[i].firstName} ${contacts[i].lastName}`);
            phoneNumber = document.createTextNode(`${contacts[i].cellNumber}`)
            newDiv = document.createElement("div");      
            let text = [`${contacts[i].firstName} ${contacts[i].lastName}`, `<i class="fa-solid fa-phone-flip"></i>`, `<a href="https://twitter.com/home" target="_blank"><i class="fa-brands fa-twitter"></i></a>`, `<a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>`, `<a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`];
            contactDiv.appendChild(newDiv);
            for(j=0;j<text.length;j++) {
                newSpan = document.createElement("span");
                newSpan.innerHTML = text[j];
                newDiv.appendChild(newSpan);
            };
        }
    }
}

//Sets function outerCircle() to run on click of filter

// document.getElementById("outer").addEventListener("click",outerCircle);

//Clears "Contacts" div. Creates div and spans within "Contacts", populated by contacts in array that meet the requirement of being Outer Circle

// function outerCircle() {
//     document.getElementById("contacts").innerText = "";
//     for(i=0;i<contacts.length;i++) {
//         if(contacts[i].circle == "Outer Circle") {
//             contactDiv = document.getElementById("contacts");
//             contactName = document.createTextNode(`${contacts[i].firstName} ${contacts[i].lastName}`);
//             phoneNumber = document.createTextNode(`${contacts[i].cellNumber}`)
//             newDiv = document.createElement("div");      
//             let text = [`${contacts[i].firstName} ${contacts[i].lastName}`, `<i class="fa-solid fa-phone-flip"></i>`, `<a href="https://twitter.com/home" target="_blank"><i class="fa-brands fa-twitter"></i></a>`, `<a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>`, `<a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`, `<i class="fa-solid fa-pencil"></i>`];
//             contactDiv.appendChild(newDiv);
//             for(j=0;j<text.length;j++) {
//                 newSpan = document.createElement("span");
//                 newSpan.innerHTML = text[j];
//                 newDiv.appendChild(newSpan);
//             };
//         }
//     }
// }

//Sets function network() to run on click of filter

document.getElementById("network").addEventListener("click",network);

//Clears "Contacts" div. Creates div and spans within "Contacts", populated by contacts in array that meet the requirement of being Network

function network() {
    document.getElementById("contacts").innerText = "";
    for(i=0;i<contacts.length;i++) {
        if(contacts[i].circle == "Network") {
            contactDiv = document.getElementById("contacts");
            contactName = document.createTextNode(`${contacts[i].firstName} ${contacts[i].lastName}`);
            phoneNumber = document.createTextNode(`${contacts[i].cellNumber}`)
            newDiv = document.createElement("div");      
            let text = [`${contacts[i].firstName} ${contacts[i].lastName}`, `<i class="fa-solid fa-phone-flip"></i>`, `<a href="https://twitter.com/home" target="_blank"><i class="fa-brands fa-twitter"></i></a>`, `<a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>`, `<a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`];
            contactDiv.appendChild(newDiv);
            for(j=0;j<text.length;j++) {
                newSpan = document.createElement("span");
                newSpan.innerHTML = text[j];
                newDiv.appendChild(newSpan);
            };
        }
    }
}

//Sets function search() to run every time a key is released in the Search Bar

//Clears "Contacts" div. Compares Search Bar entry to objects in contacts array, and returns any matches by adding divs/spans to "Contacts" div, as well as the contacts information

document.getElementById("search").addEventListener("keyup", search);
let param = document.getElementById("search").value;

function search() {
    document.getElementById("contacts").innerHTML = "";
    let param = document.getElementById("search").value.toLowerCase();
    for(i=0;i<contacts.length;i++) {
        if(contacts[i].firstName.toLowerCase().includes(param) || contacts[i].lastName.toLowerCase().includes(param)) {
            contactDiv = document.getElementById("contacts");
            contactName = document.createTextNode(`${contacts[i].firstName} ${contacts[i].lastName}`);
            phoneNumber = document.createTextNode(`${contacts[i].cellNumber}`)
            newDiv = document.createElement("div");      
            let text = [`${contacts[i].firstName} ${contacts[i].lastName}`, `<i class="fa-solid fa-phone-flip"></i>`, `<a href="https://twitter.com/home" target="_blank"><i class="fa-brands fa-twitter"></i></a>`, `<a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>`, `<a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>`];
            contactDiv.appendChild(newDiv);
            for(j=0;j<text.length;j++) {
                newSpan = document.createElement("span");
                newSpan.innerHTML = text[j];
                newDiv.appendChild(newSpan);
            };
        }
    }
}
