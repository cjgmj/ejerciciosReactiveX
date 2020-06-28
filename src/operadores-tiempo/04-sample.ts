import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';

// const interval$ = interval(500);
const interval$ = interval(5000);
const click$ = fromEvent(document, 'click');

interval$.pipe(
    // Recibe por parámetros un observable. Obtiene el último valor emitido por el observador al que está suscrito cuando
    // el observable que recibe por parámetros emite un valor. Si el observable que recibe por parámetro emite un valor pero
    // al que está suscrito no emite uno, no recibe ningún valor.
    sample(click$)
).subscribe(console.log);