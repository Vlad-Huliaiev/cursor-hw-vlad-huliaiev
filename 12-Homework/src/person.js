/*
 *  Persons
 */
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
    const container = document.querySelector('.persons_container');
    container.innerHTML = '';
    users.forEach( async i => {
        i = i.replace(/^http:\/\//i, 'https://');

        const personI = await axios.get(i);

        const personEl =  document.createElement('div');
        personEl.className = 'person';

        const name = personI.data.name;

        personEl.innerHTML = `
            <div class = "${name}">
                <h3>${personI.data.name}</h3>
                <div class="persons_data">
                    <p> <b>Birth year:</b> ${personI.data.birth_year}</p>
                    <p> <b>Gender:</b> ${personI.data.gender}</p>
                </div>
            </div>
        `;
        container.append(personEl);
    });

}
getPersons().then(renderPersons);








//        let gender = personI.data.gender;
//        if (gender === `male`) { gender = `<img src="./ico/gender-male.png" alt="male">` } ;
//        if (gender === `female`) {  gender = `<img  src="./ico/gender-female.png" alt="female">`   } ;
//        if (gender === `n/a` || gender === `none`) { gender = `<img  src="./ico/droids.png" alt="droid">`};


