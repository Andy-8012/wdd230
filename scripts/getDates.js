const copyright = document.querySelector('#copyright');
let current_year = new Date().getFullYear();

copyright.innerHTML = `&copy${current_year} - Andrew Riley - Utah, United States`;

const last_Modified = document.querySelector('#lastModified');
let date_modified = new Date(document.lastModified);
last_Modified.innerHTML = `Last Modification: ${date_modified.getMonth()}/${date_modified.getDate()}/${date_modified.getFullYear()}`;