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



document.getElementById("all").addEventListener("click",all);

function all() {
    document.getElementById("contacts").innerText = "";
    for(i=0;i<contacts.length;i++) {
        contactDiv = document.getElementById("contacts");
        contactName = document.createTextNode(`${contacts[i].firstName} ${contacts[i].lastName}`);
        phoneNumber = document.createTextNode(`${contacts[i].cellNumber}`)
        newDiv = document.createElement("div");
        let text = [`${contacts[i].firstName} ${contacts[i].lastName}`, `${contacts[i].twitter}`, `${contacts[i].instagram}`, `${contacts[i].facebook}`];
        contactDiv.appendChild(newDiv);
        for(j=0;j<text.length;j++) {
            newSpan = document.createElement("span");
            newSpan.innerText = text[j];
            newDiv.appendChild(newSpan);
        };
    }
}

document.getElementById("inner").addEventListener("click",innerCircle);

function innerCircle() {
    document.getElementById("contacts").innerText = "";
    for(i=0;i<contacts.length;i++) {
        if(contacts[i].circle == "Inner Circle") {
            contactDiv = document.getElementById("contacts");
            contactName = document.createTextNode(`${contacts[i].firstName} ${contacts[i].lastName}`);
            phoneNumber = document.createTextNode(`${contacts[i].cellNumber}`)
            newDiv = document.createElement("div");      
            let text = [`${contacts[i].firstName} ${contacts[i].lastName}`, `${contacts[i].twitter}`, `${contacts[i].instagram}`, `${contacts[i].facebook}`];
            contactDiv.appendChild(newDiv);
            for(j=0;j<text.length;j++) {
                newSpan = document.createElement("span");
                newSpan.innerText = text[j];
                newDiv.appendChild(newSpan);
            };
        }
    }
}

document.getElementById("outer").addEventListener("click",outerCircle);

function outerCircle() {
    document.getElementById("contacts").innerText = "";
    for(i=0;i<contacts.length;i++) {
        if(contacts[i].circle == "Outer Circle") {
            contactDiv = document.getElementById("contacts");
            contactName = document.createTextNode(`${contacts[i].firstName} ${contacts[i].lastName}`);
            phoneNumber = document.createTextNode(`${contacts[i].cellNumber}`)
            newDiv = document.createElement("div");      
            let text = [`${contacts[i].firstName} ${contacts[i].lastName}`, `${contacts[i].twitter}`, `${contacts[i].instagram}`, `${contacts[i].facebook}`];
            contactDiv.appendChild(newDiv);
            for(j=0;j<text.length;j++) {
                newSpan = document.createElement("span");
                newSpan.innerText = text[j];
                newDiv.appendChild(newSpan);
            };
        }
    }
}

document.getElementById("network").addEventListener("click",network);

function network() {
    document.getElementById("contacts").innerText = "";
    for(i=0;i<contacts.length;i++) {
        if(contacts[i].circle == "Network") {
            contactDiv = document.getElementById("contacts");
            contactName = document.createTextNode(`${contacts[i].firstName} ${contacts[i].lastName}`);
            phoneNumber = document.createTextNode(`${contacts[i].cellNumber}`)
            newDiv = document.createElement("div");      
            let text = [`${contacts[i].firstName} ${contacts[i].lastName}`, `${contacts[i].twitter}`, `${contacts[i].instagram}`, `${contacts[i].facebook}`];
            contactDiv.appendChild(newDiv);
            for(j=0;j<text.length;j++) {
                newSpan = document.createElement("span");
                newSpan.innerText = text[j];
                newDiv.appendChild(newSpan);
            };
        }
    }
}