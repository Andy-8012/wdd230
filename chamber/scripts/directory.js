const baseURL = "https://Andy-8012.github.io/wdd230/";
//const linksURL = "https://Andy-8012.github.io/wdd230/chamber/data/members.json";
const linksURL = "data/members.json"
const directoryList = document.querySelector('.directoryCards');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.members);
}

getLinks();

function displayLinks(members){
    members.forEach(object => {
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let website = document.createElement('a');
        let websiteHolder = document.createElement('p')
        let image = document.createElement('img');
        let membership = document.createElement('p');
        let information = document.createElement('div')

        information.setAttribute("id","informationDiv")

        name.textContent = object.name;
        address.textContent = object.address;
        phoneNumber.textContent = `Phone: ${object.phone}`;
        website.setAttribute("href",object.url);
        website.textContent = `Website: ${object.url}`;
        image.setAttribute("src",object.image);
        image.setAttribute("alt",object.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute('max-width', '200');
        image.setAttribute('height', 'auto');
        membership.textContent = `Membership Level: ${object.membership}`;

        let card = document.createElement('div');

        websiteHolder.appendChild(website)

        card.appendChild(name);
        card.appendChild(image);
        information.appendChild(address);
        information.appendChild(phoneNumber);
        information.appendChild(websiteHolder);
        information.appendChild(membership);
        card.appendChild(information)

        directoryList.appendChild(card)

    });


    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    
    // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
    
    gridbutton.addEventListener("click", () => {
        // example using arrow function
        directoryList.classList.add("toggleGrid");
        directoryList.classList.remove("toggleList");
    });
    
    listbutton.addEventListener("click", showList); // example using defined function
    
    function showList() {
        directoryList.classList.add("toggleList");
        directoryList.classList.remove("toggleGrid");
    }
}
