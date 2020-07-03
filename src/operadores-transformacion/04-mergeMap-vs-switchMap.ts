import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(
    // Crea un contador por cada click que se realiza en la pantalla
    // Mantiene todas las suscripciones activas
    // mergeMap(() => interval$)
    // Con cada click, cancela el contador si existe y crea uno nuevo
    // Solo mantiene una suscripción activa
    switchMap(() => interval$)
).subscribe(console.log);