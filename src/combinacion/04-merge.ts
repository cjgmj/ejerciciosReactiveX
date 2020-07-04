import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

// Es una función que recibe un observable o más y que el resultado será el producto de los 
// observables combinados simultáneamente. Hasta que no se complete todos los observables, no se completa
// la suscripción
// El orden de salida depende del primero que emita un valor, si los dos emiten el primero en el mismo
// momento, la salida dependerá del orden en los parámetros
merge(keyup$.pipe(pluck('type')), click$.pipe(pluck('type'))).subscribe(console.log);