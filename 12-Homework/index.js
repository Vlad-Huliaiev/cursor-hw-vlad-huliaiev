const BASE = 'http://swapi.dev/api/';

async function getFilm(films) {
    const filmsNumb = await fetch.json();
}


















/*
 *   Planets
 */
function getPlanets(page) {
    const config = {
        method: 'GET',
        url: `${BASE}planets/`,
        params: {
            page: page
        }
    };
    return axios(config).then((res) => {
        console.log(res.data);
        return res.data.results;
        }).catch(() => {
            if(page <= 0) {
                document.getElementById('previous').style.display = 'none';
                page = 1;
                return res.data.results;
            } else{
                document.getElementById('further').style.display = 'none';
                page -= 1;
                return res.data.results;
            }
        });
}

function renderPlanets(planets) {
    const container = document.querySelector('.planets');
    container.innerHTML = '';
    planets.forEach(i => {
        const iElement = document.createElement('div');
        iElement.className = 'planet';
        iElement.innerHTML = `
            <h3>${i.name}</h3>
            <div>
                <p class="climate_text">Climate:</p>
                <p class="climate">${i.climate}</p>
                <p class="diameter_text">Diameter:</p>
                <p class="diameter">${i.diameter}</p>
            </div>
        `;
        container.append(iElement);
    });
    document.getElementById('previous').style.display = 'block';
    document.getElementById('further').style.display = 'block';
}

function paginationInit() {
    let currentPage = 1;

    document.getElementById('previous').addEventListener('click', () => {
        if(currentPage < 1) return;
            getPlanets(--currentPage).then(renderPlanets);
        });
    document.getElementById('further').addEventListener('click', () => {
        if(currentPage > 6) return;
            getPlanets(++currentPage).then(renderPlanets);
        });
}
/*
 *  Films
 */


paginationInit();
getPlanets().then(renderPlanets);

