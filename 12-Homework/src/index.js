const BASE = 'https://swapi.dev/api/';
/*
 *   Planets
 */
document.getElementById("renderPlanet").addEventListener("click", () => {
    getPlanets().then(renderPlanets);
});

function getPlanets(page) {
    const config = {
        method: 'GET',
        url: `${BASE}planets/`,
        params: {
            page: page
        }
    };
    return axios(config).then((res) => {
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
    document.getElementById('person').innerHTML = "";

    planets.forEach(i => {
        const iElement = document.createElement('div');
        iElement.className = 'planet';
        iElement.innerHTML = `
            <h3>${i.name}</h3>
            <div class="planets_data">
                <p>orbital period: ${i.orbital_period} day</p>
                <p>diameter: ${i.diameter} km</p>

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
        if(currentPage > 5) return;
            getPlanets(++currentPage).then(renderPlanets);
        });
}
paginationInit();


/*
 *  Persons
 */
document.getElementById("renderPerson").addEventListener("click", () => {
    getPersons().then(renderPersons);
});

function getPersons() {
    const config = {
        method: 'GET',
        url: `${BASE}films/2/`,
        };

    return axios(config).then((res) => {
        return res.data.characters;
        }).catch(() => {
                console.dir('Trouble');
                return [];
        });
}

function renderPersons(users) {
    const container = document.querySelector('.persons');
    container.innerHTML = '';
    document.getElementById('planet').innerHTML = "";

    users.forEach( async character => {
        const i = character.replace(/^http:\/\//i, 'https://');

        const personI = await axios.get(i);

        const personEl =  document.createElement('div');
        personEl.className = 'person';


        const name = personI.data.name;

        personEl.innerHTML = `
            <div class="persons_data" id = "${name}">
                <h3>${personI.data.name}</h3>
                <p> <b>Birth year:</b> ${personI.data.birth_year}</p>
                <p> <b>Gender:</b> ${personI.data.gender}</p>
            </div>
        `;
        container.append(personEl);
    });

}