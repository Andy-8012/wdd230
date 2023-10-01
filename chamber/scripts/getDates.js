const copyright = document.querySelector('#copyright');
let current_year = new Date().getFullYear();
const current_date = Date.now();
const last_Visit_Message = document.querySelector('#lastVisitMessage')

copyright.innerHTML = `&copy${current_year} - Andrew Riley - Utah, United States`;

const last_Modified = document.querySelector('#lastModified');
let date_modified = new Date(document.lastModified);
last_Modified.innerHTML = `Last Modification: ${date_modified.getMonth()}/${date_modified.getDate()}/${date_modified.getFullYear()}`;

if (getLastVisitDate() == null) {
    last_Visit_Message.innerHTML = 'Welcome! Let us know if you have any questions';
    setLastVisitDate();
}

else if (current_date - getLastVisitDate() < 86400000) {
    last_Visit_Message.innerHTML = 'Back so soon! Awesome!';
    setLastVisitDate();
}

else {
    let daysLastVisited = Math.floor((current_date - getLastVisitDate())/86400000)
    last_Visit_Message.innerHTML = `You last visited ${daysLastVisited} days ago.`
}

function setLastVisitDate() {
    localStorage.setItem('lastVisitDate', current_date);
}

function getLastVisitDate() {
    return localStorage.getItem('lastVisitDate')
}