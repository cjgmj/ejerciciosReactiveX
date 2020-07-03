// Es buena practica importar primero de rxjs y a continuación de los diferentes paquetes
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, pluck, mergeMap, switchMap } from 'rxjs/operators';
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

// Es importante poner el tipado del primer operador y del último, los operadores intermedios no son tan importantes,
// ya que si hay que cambiar el orden de los mismos también hay que cambiar el tipado
// input$.pipe(
//     debounceTime<KeyboardEvent>(500),
//     pluck<KeyboardEvent, string>('target', 'value'),
//     mergeMap<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
//     pluck<GithubUsersResp, GithubUser[]>('items')
// ).subscribe(mostrarUsuarios);

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    // Cuando se lanza un nuevo observable finaliza el anterior cancelando la petición del mismo
    switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log);