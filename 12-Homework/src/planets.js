const BASE = 'https://swapi.dev/api/';
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
            <div class="planets_data">
                <p>Orbital period: ${i.orbital_period} day</p>
                <p>Diameter: ${i.diameter} km</p>
                <p>Terrain: ${i.terrain}</p>
                <p>Population: ${i.population} humanoids</p>
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

paginationInit();
getPlanets().then(renderPlanets);

