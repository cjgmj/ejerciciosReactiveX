import { of, from } from 'rxjs';

/**
 * of -> toma argumentos y genera una secuencia de valores
 * from -> array, promise, iterable, observable
 */

 const observer = {
     next: val => console.log('next', val),
     complete: () => console.log('complete')
 }

 // Emite el siguiente elemento cuando se invoca el método
 // El * indica que es una función generadora
 const miGenerador = function*() {
     // yield se utiliza para pausar y reanudar una función  generadora
     yield 1;
     yield 2;
     yield 3;
     yield 4;
     yield 5;
 }

const miIterable = miGenerador();

// for(let id of miIterable) {
//     console.log(id);
// }

// Hace lo mismo que el código comentado arriba
from(miIterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// Añadiendo ... delante del array obtenemos lo mismo que con el from
// const source$ = of(...[1, 2, 3, 4, 5]);

// const source$ = from('John');
// const source$ = of('John');

// source$.subscribe(observer);

// const source$ = from(fetch('https://www.balldontlie.io/api/v1/players'));

// source$.subscribe(async (resp) => {
//     console.log(resp.ok);

//     const data = await resp.json();
//     console.log(data);
// });