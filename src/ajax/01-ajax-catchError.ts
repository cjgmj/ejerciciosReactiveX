import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';
const urlError = 'https://api.github.com/usersXXXX?per_page=5';

const manejaErrores = (resp: Response) => {
    if(!resp.ok) {
        throw new Error(resp.statusText);
    }

    return resp;
}

const capturaError = (err: AjaxError) => {
    console.warn('error en: ', err);
    return of([]);
}

// const fetchPromesa = fetch(url);
// const fetchPromesaError = fetch(urlError);

// fetchPromesa
//     .then(resp => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error: ', err));

// fetchPromesaError
//     .then(resp => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error: ', err));

// fetchPromesa
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error: ', err));

// fetchPromesaError
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error: ', err));

ajax(url).pipe(
    // map(resp => resp.response)
    // Hace lo mismo que el código comentado arriba
    pluck('response')
).subscribe(console.log);

ajax(urlError).pipe(
    // No solo sirve para capturar errores en HTTP, captura cualquier error que ocurra en el observable
    // Puede devolver otro observable
    catchError(capturaError)
).subscribe(users => console.log('usuarios: ', users));