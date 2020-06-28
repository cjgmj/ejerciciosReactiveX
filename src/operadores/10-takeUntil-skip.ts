import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    // Sirve para omitir un determinado número de emisiones iniciales, lo que hay después del skip no se ejecuta
    // hasta que se cumpla la condición del skip
    skip(1),
    tap(() => console.log('tap después de skip'))
);

counter$.pipe(
    // Recibe por parámetros un observable. Está suscrito al observable hasta que el que recibe como parámetro
    // emite su primer valor
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});