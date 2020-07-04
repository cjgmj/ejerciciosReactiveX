import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

const numeros$ = of(1, 2, 3).pipe(
    // La primera emisión que tendrá será la indicada, el resto de valores serán los del propio observable
    startWith('a', 'b', 'c'),
    // Se reciben los valores del observable y la última emisión antes del complete será la indicada
    endWith('x', 'y', 'z')
);

numeros$.subscribe(console.log);