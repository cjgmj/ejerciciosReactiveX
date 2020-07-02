const url = 'https://api.github.com/users?per_page=5';

const fetchPromesa = fetch(url);

fetchPromesa
    .then(resp => resp.json())
    .then(data => console.log('data: ', data))
    .catch(err => console.warn('error: ', err));