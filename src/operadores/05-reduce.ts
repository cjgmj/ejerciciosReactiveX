import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

// Reduce en JavaScript
const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
};

const total = numbers.reduce(totalReducer, 0);
console.log('Total arr', total);

// Reduce en RxJS
interval(500).pipe(
    // Completa el observable después de la cantidad de veces indicada
    take(6),
    tap(console.log),
    // El reduce no emite valor hasta que se completa el observable
    reduce(totalReducer)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})