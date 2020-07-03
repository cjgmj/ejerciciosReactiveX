// Es buena practica importar primero de rxjs y a continuación de los diferentes paquetes
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUsersResp } from '../interfaces/github-users.interface';
import { GithubUser } from '../interfaces/github-user.interface';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for(const usuario of usuarios) {
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// De esta forma es complicado el manejo de la cadena de observables y sus respectivos valores
// input$.pipe(
//     debounceTime(500),
//     // map(event => {
//     //     const texto = event.target['value'];

//     //     return ajax.getJSON(`https://api.github.com/users/${texto}`);
//     // })
//     // Estos dos operadores hacen la misma función que el map comentado, pero es una buena práctica que los operadores
//     // tengan una única función
//     pluck('target', 'value'),
//     map(texto => ajax.getJSON(`https://api.github.com/users/${texto}`))
// ).subscribe(resp => {
//     resp.pipe(
//         pluck('url')
//     ).subscribe(console.log)
// });

// Es importante poner el tipado del primer operador y del último, los operadores intermedios no son tan importantes,
// ya que si hay que cambiar el orden de los mismos también hay que cambiar el tipado
input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
    // Se suscribe al observable que devuelve getJSON y los operadores a continuación trabajan
    // con la respuesta de ese observable
    mergeAll<GithubUsersResp>(),
    pluck<GithubUsersResp, GithubUser[]>('items')
).subscribe(mostrarUsuarios);