function returngetelementbyid() {
    const ajouterticket = document.getElementById('button-ajouter');
    return ajouterticket;
}

function returngetelementbyidinput() {
    const input = document.getElementById('message-text');
    return input;
}

function returnnouveauticket() {
    const nouveaubakclog = document.getElementById('nouveau-backlog');
    return nouveaubakclog;
}

let arrayticket = [];

function modalticket() {
    const ajouternouveaubakcklog = returngetelementbyidinput().value.trim();
    
    if (ajouternouveaubakcklog !== '') {
        arrayticket.unshift(ajouternouveaubakcklog); 
        console.log(arrayticket);
        returngetelementbyidinput().value = ''; 
    }
}

function afficherTickets() {
    const backlog = returnnouveauticket();   
        backlog.innerHTML += `<div class ="nouveau-tache">${arrayticket[0]}</div>`;
}

function ajouterticket() {
    returngetelementbyid().addEventListener('click', function () {
        modalticket(); 
        afficherTickets();  
    });
}
ajouterticket();
