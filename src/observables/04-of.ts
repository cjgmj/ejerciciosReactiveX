import { of } from 'rxjs';

// const obs$ = of<number>(1, 2, 3, 4, 5, 6);

// Con los ... delante del array manda el contenido de forma individual
// const obs$ = of<number>(...[1, 2, 3, 4, 5, 6]);

const obs$ = of([1, 2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

// Son observables síncronos
console.log('Inicio del obs$');
obs$.subscribe(next => console.log('next', next), null, () => console.log('Secuencia terminada'));
console.log('Fin del obs$');