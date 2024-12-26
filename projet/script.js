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

function getTicketsFromLocalStorage() {
    const tickets = localStorage.getItem("backlog");
    return tickets ? JSON.parse(tickets) : [];
}

function saveTicketsToLocalStorage(tickets) {
    localStorage.setItem("backlog", JSON.stringify(tickets));
}



let arrayticket = getTicketsFromLocalStorage();

function modalticket() {
    const ajouternouveaubakcklog = returngetelementbyidinput().value.trim();

    if (ajouternouveaubakcklog !== '') {
        arrayticket.unshift(ajouternouveaubakcklog); 
        saveTicketsToLocalStorage(arrayticket);
        console.log(arrayticket);
        returngetelementbyidinput().value = '';
    }
}

function afficherTickets() {
    const backlog = returnnouveauticket();   
    backlog.innerHTML = ''; 
    arrayticket.forEach(ticket => {
        backlog.innerHTML += `<div class="nouveau-tache">${ticket}</div>`; 
    });
}

function ajouterticket() {
    returngetelementbyid().addEventListener('click', function () {
        modalticket(); 
        afficherTickets();  
    });
}

ajouterticket(); 
afficherTickets(); 


