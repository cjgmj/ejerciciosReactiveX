import { fromEvent } from "rxjs";
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');



click$.pipe(
    map(({ x, y }) => ({x, y})),
    // Recibe valores mientrás la condición se cumpla, cuando la condición no se cumple, se completa el observable
    // takeWhile(({y}) => y <= 150)
    // Se puede añadir un inclusive a true, por defecto es false, si queremos obtener el valor que hizo que 
    // se cumpliera la condición
    takeWhile(({y}) => y <= 150, true)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})