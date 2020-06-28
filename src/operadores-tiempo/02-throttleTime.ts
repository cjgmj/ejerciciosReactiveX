import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
    // Obtiene los valores emitidos ignorando las emisiones que se lleven a cabo durante el tiempo de espera, 
    // una vez transcurrido el tiempo de espera obtendra la primera emisión
    throttleTime(3000)
)//.subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    // Configuración para obtener el primer elemento y el último
    // Poniendo el leading a false funcionaría parecido al debounceTime, ya que emitiría valores cuando
    // transcurra el tiempo indicado
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);