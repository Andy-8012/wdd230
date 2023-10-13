const baseURL = "https://Andy-8012.github.io/wdd230/";
const linksURL = "https://Andy-8012.github.io/wdd230/data/links.json";
const cardList = document.querySelector('.cardList');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

getLinks();

function displayLinks(weeks){
    weeks.forEach(object => {
        let liElement = document.createElement('li');
        liElement.textContent = `${object.week}: `;

        object.links.forEach(object => {
            let aElement = document.createElement('a');
            aElement.setAttribute("href",object.url);
            aElement.textContent = ` ${object.title} |`;

            console.log(aElement);

            liElement.appendChild(aElement);
        });

        cardList.appendChild(liElement);
    });
}

