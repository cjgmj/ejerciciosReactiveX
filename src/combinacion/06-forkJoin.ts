import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

const numeros$ = of(1, 2, 3, 4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

// Es una función que puede recibir varios observables finitos como argumentos, devolviendo el último valor
// de cada uno de los observables como un array cuando todos ellos se hayan completados. La función
// devuelve un observable
// forkJoin(numeros$, intervalo$, letras$).subscribe(console.log);

// forkJoin(numeros$, intervalo$, letras$).subscribe(resp => {
//     console.log('numeros: ', resp[0]);
//     console.log('interval: ', resp[1]);
//     console.log('letras: ', resp[2]);
// });

// Si se manta como un objeto la respuesta obtenida también será un objeto
// forkJoin({numeros$, intervalo$, letras$}).subscribe(console.log);

// Los nombres del objeto resultante se puede personalizar
forkJoin({num: numeros$, int: intervalo$, let: letras$}).subscribe(console.log);