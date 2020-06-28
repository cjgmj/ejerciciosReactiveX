import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x}) => x),
    tap(val => console.log('tap', val)),
    // Cuenta el tiempo pasado por parámetro desde la primera emisión para devolver la última emisión realizada
    // Si una vez transcurrido el tiempo de espera no se ha realizado una nueva emisión, no devolverá nada
    // Si durante el tiempo de espera se completa el observable, no recibirá ningún valor
    auditTime(2000)
).subscribe(console.log);