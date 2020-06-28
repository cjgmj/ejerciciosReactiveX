import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap<MouseEvent>(console.log),
    
    // Desestructuración del objeto
    // map(event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }))
    map(({clientX, clientY}) => ({clientY, clientX})),

    // Obtiene el primer valor y completa el observable
    // first()
    // Se puede añadir condiciones para obtener el primer evento que cumpla la condición
    // Una vez cumpla la condición completa el observable
    // first<MouseEvent>(event => event.clientY >= 150)

    // Adaptado al map
    first(event => event.clientY >= 150)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});