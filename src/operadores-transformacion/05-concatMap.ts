import { interval, fromEvent } from 'rxjs';
import { take, concatMap } from 'rxjs/operators';


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    // Cada nueva suscripción entra en una cola y no se empieza a observar hasta que el anterior se complete
    concatMap(() => interval$)
).subscribe(console.log);