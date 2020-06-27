import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1, 5);

numeros$.pipe(
    // El tap no cambia el flujo de información aunque tenga añadido un return, por este motivo puede ser útil
    // para depurar el código
    tap(x => {
        console.log('tap', x);
        return 100;
    }),
    map( val => val * 10),
    tap({
        next: valor => console.log('tap 2', valor),
        // Se dispara al terminar el subscribe
        complete: () => console.log('Terminado')
    })
).subscribe(val => console.log('subs', val));