import { interval, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click');

counter$.pipe(
    // Recibe por parámetros un observable. Está suscrito al observable hasta que el que recibe como parámetro
    // emite su primer valor
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});