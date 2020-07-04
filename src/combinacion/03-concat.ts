import { interval, concat, of } from 'rxjs';
import { take } from 'rxjs/operators';

const interval$ = interval(1000);

// Es una función que recibe observables, iterables o arrays como argumentos para crear un nuevo observable
// Hasta que no se complete el observable anterior no emite el siguiente observable
concat(interval$.pipe(take(3)), interval$.pipe(take(2)), [1, 2, 3, 4], of(1)).subscribe(console.log);