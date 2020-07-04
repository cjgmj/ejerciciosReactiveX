import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

const numeros$ = of(1, 2, 3).pipe(
    // La primera emisión que tendrá será la indicada, el resto de valores serán los del propio observable
    startWith(0)
);

numeros$.subscribe(console.log);