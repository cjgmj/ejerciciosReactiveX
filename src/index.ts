import { fromEvent } from 'rxjs';
import { debounceTime, map, pluck } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// De esta forma es complicado el manejo de la cadena de observables y sus respectivos valores
input$.pipe(
    debounceTime(500),
    // map(event => {
    //     const texto = event.target['value'];

    //     return ajax.getJSON(`https://api.github.com/users/${texto}`);
    // })
    // Estos dos operadores hacen la misma función que el map comentado, pero es una buena práctica que los operadores
    // tengan una única función
    pluck('target', 'value'),
    map(texto => ajax.getJSON(`https://api.github.com/users/${texto}`))
).subscribe(resp => {
    resp.pipe(
        pluck('url')
    ).subscribe(console.log)
});