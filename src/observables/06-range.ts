import { of, range, asyncScheduler } from 'rxjs';

// const src$ = of(1, 2, 3, 4, 5);

// Son observables síncronos
// La primera posición es el valor de la primera emisión y la segunda posición determina el número de emisiones
// que se realizarán
// Añadiendo  asyncScheduler lo transforma a un observable asíncrono
const src$ = range(1, 5, asyncScheduler);

console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');