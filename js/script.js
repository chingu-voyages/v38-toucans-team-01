const contact = {
    firstName: "",
    lastName: "",
    birthDate: "",
    cellNumber: "",
    workNumber: "",
    email: "",
    address: "",
    twitter: "",
    instagram: "",
    facebook: "",
    circle: "",
};

const davidOrtiz = Object.create(contact);

davidOrtiz.firstName = "David";
davidOrtiz.lastName = "Ortiz";
davidOrtiz.birthDate = "03/15/68";
davidOrtiz.cellNumber = "123-4567";
davidOrtiz.workNumber = "444-9000";
davidOrtiz.email = "bigpapi@redsox.com";
davidOrtiz.address = "Boston";
davidOrtiz.twitter = "@papi";
davidOrtiz.instagram = "#papi";
davidOrtiz.facebook = "facebook.com";
davidOrtiz.circle = "Inner Circle";

const sammySosa = Object.create(contact);

sammySosa.firstName = "Sammy";
sammySosa.lastName = "Sosa";
sammySosa.birthDate = "01/01/66";
sammySosa.cellNumber = "867-5309";
sammySosa.workNumber = "888-4000";
sammySosa.email = "bigslugs@hotmail.com";
sammySosa.address = "123 Home Run Derby";
sammySosa.twitter = "@sosa";
sammySosa.instagram = "#sosa";
sammySosa.facebook = "facebook.com";
sammySosa.circle = "Outer Circle";

const robinsonCano = Object.create(contact);

robinsonCano.firstName = "Robinson";
robinsonCano.lastName = "Cano";
robinsonCano.birthDate = "02/10/67";
robinsonCano.cellNumber = "567-8901";
robinsonCano.workNumber = "555-0001";
robinsonCano.email = "yankeeboy@gmail.com";
robinsonCano.address = "456 New York Drive";
robinsonCano.twitter = "@cano";
robinsonCano.instagram = "#cano";
robinsonCano.facebook = "facebook.com";
robinsonCano.circle = "Network";

let contacts = [
    {
        davidOrtiz
    },
    {
        robinsonCano
    },
    {
        sammySosa
    },
]

document.getElementById("inner").addEventListener("click",innerCircle);

function innerCircle() {
    for(i=0;i>contacts.length;i++) {
        if(contact.circle == "Inner") {
            document.getElementById("contacts").innerText += contact.firstName;
        }
    }
}

document.getElementById("outer").addEventListener("click",outerCircle);

document.getElementById("network").addEventListener("click",network);