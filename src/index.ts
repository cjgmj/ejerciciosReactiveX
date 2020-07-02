const url = 'https://api.github.com/usersXXXX?per_page=5';

const manejaErrores = (resp: Response) => {
    if(!resp.ok) {
        throw new Error(resp.statusText);
    }

    return resp;
}

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(resp => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error: ', err));

fetchPromesa
    .then(manejaErrores)
    .then(resp => resp.json())
    .then(data => console.log('data: ', data))
    .catch(err => console.warn('error: ', err));