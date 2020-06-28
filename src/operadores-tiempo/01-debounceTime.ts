import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
    // El valor que se le pasa por parámetro es el tiempo que deberá transcurrir desde la última emisión
    // para obtener el valor de la misma
    debounceTime(3000)
)//.subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);