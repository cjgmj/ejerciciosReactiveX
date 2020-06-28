import { fromEvent } from 'rxjs';
import { sampleTime, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    // Se emitirá el último valor emitido en el transcurso de la cantidad indicada, si no se ha emitido valores en ese 
    // rango de tiempo no se emitirá nada
    sampleTime(2000),
    // Añadimos el map después del sampleTime para no procesar los objetos que no se emitan
    map(({x, y}) => ({x, y}))
).subscribe(console.log);