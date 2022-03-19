let contacts = [];

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

contacts.push(robinsonCano);
contacts.push(sammySosa);
contacts.push(davidOrtiz);
  

document.getElementById("all").addEventListener("click",all);

function all() {
    document.getElementById("contacts").innerText = "";
    for(i=0;i<contacts.length;i++) {
        document.getElementById("contacts").innerText += contacts[i].firstName + " " + contacts[i].lastName;   
    }
}

document.getElementById("inner").addEventListener("click",innerCircle);

function innerCircle() {
    document.getElementById("contacts").innerText = "";
    for(i=0;i<contacts.length;i++) {
        if(contacts[i].circle == "Inner Circle") {
            document.getElementById("contacts").innerText += contacts[i].firstName + " " + contacts[i].lastName;
        }
    }
}

document.getElementById("outer").addEventListener("click",outerCircle);

function outerCircle() {
    document.getElementById("contacts").innerText = "";
    for(i=0;i<contacts.length;i++) {
        if(contacts[i].circle == "Outer Circle") {
            document.getElementById("contacts").innerText += contacts[i].firstName + " " + contacts[i].lastName;
        }
    }
}

document.getElementById("network").addEventListener("click",network);

function network() {
    document.getElementById("contacts").innerText = "";
    for(i=0;i<contacts.length;i++) {
        if(contacts[i].circle == "Network") {
            document.getElementById("contacts").innerText += contacts[i].firstName + " " + contacts[i].lastName;
        }
    }
}