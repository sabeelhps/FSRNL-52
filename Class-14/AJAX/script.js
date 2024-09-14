const list = document.querySelector('#list');
const form = document.querySelector('form');

const BASE_URL = "https://api.tvmaze.com";

function displayShows(shows) {
    while (list.firstChild) {
        list.firstChild.remove();
    }
    for (let item of shows) {
        const img = document.createElement('img');
        img.setAttribute('src', item.show.image.medium);
        img.classList.add('m-2');
        list.append(img);
    }
}


function fetchShows(showName) {
    const url = `${BASE_URL}/search/shows?q=${showName}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayShows(data));
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInp = form.elements[1].value;
    fetchShows(searchInp);
});