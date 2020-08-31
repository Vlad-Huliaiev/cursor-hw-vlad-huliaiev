
const BASE = 'https://gorest.co.in/public-api/';


function getUsers(page) {
    const config ={
        method: 'GET',
        url: BASE + 'users',
        params: {
            page: page
        }
    };
    return axios(config).then((res) => {
            return res.data.data;
        }).catch(() => {
            console.log('something went wrong');
        });
}

function renderUsers(users = []) {
    const container = document.querySelector('.users');
    container.innerHTML = '';
    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.className = 'user';
        userElement.innerHTML = `
        <h3>${user.name}</h3>
        <h4>${user.email}</h4>
        `;
        container.append(userElement);
    });
    console.log('user: ', users);

}

//
//function createUsers() {
//    const name = document.createUser.name.value;
//    const email = document.createUser.email.value;
//    if(!name || !email) return;
//    axios.post(BASE + 'users', {
//            name,
//            email,
//            gender: 'Female',
//            status: 'Active'
////    }, {
////         headers: {'Authorization': 'Bearer ' + KEY},
//         }).then((res) => {
//           document.createUser.name.value = '';
//           document.createUser.email.value = '';
//
//           saveUser(res.data.data.id);
//         }).catch(() => {
//           console.log('ooops');
//         });
//}
//document.getElementById('create').addEventListener('click', createUsers);

//function saveUser(id) {
//  if (!id) return;
//
//  let users = localStorage.getItem('users');
//  if (!users) users = [];
//  else users = JSON.parse(users);
//
//  users.push(id);
//
//  localStorage.setItem('users', JSON.stringify(users));
//}
//

function paginationInit() {
    let currentPage = 1;

    document.getElementById('prev').addEventListener('click', () => {
        if(currentPage < 1) return;
            getUsers(--currentPage).then(renderUsers);
        });
    document.getElementById('next').addEventListener('click', () => {
            getUsers(++currentPage).then(renderUsers);
        });
}
paginationInit();

getUsers().then(renderUsers);