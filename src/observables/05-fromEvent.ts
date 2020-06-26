import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next', val)
}

// src1$.subscribe((event) => {
//     console.log(event.x);
//     console.log(event.y);
// });

// Hace lo mismo que el código comentado arriba, por la de desestructuración de EcmaScript 6
src1$.subscribe(({x, y}) => {
    console.log(x, y);
});

src2$.subscribe(event => {
    console.log(event.key);
});