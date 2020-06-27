import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(
    tap(t => console.log('tap: ', t)),
    // Si el número de emisiones es menor que el número índicado finaliza con la última emisión
    take(3)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})