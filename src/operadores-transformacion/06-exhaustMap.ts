import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    // Cuando recibe un nuevo observable y no ha completado el anterior, ignora el observable recibido
    // Si no hay ninguna suscripción activa y recibe un observable, comienza a observarlo
    exhaustMap(() => interval$)
).subscribe(console.log);