import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.log('Complete')
};

// Es un estándar añadir el $ como sufijo del nombre de la variable para indicar que es un observable
// const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');
    
    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error
    // const a = undefined;
    // a.nombre = 'John';

    // Lo que emita tras el complete no se notificará a los suscriptores
    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

// Se puede pasar un Observer en la suscripción, para no definir el comportamiento dentro del método
obs$.subscribe(observer);

// Para que un observable se ejecute necesita al menos una suscripción
// obs$.subscribe(resp =>
//     console.log('next: ', resp), err =>
//     console.warn('error: ', err), () =>
//     console.log('Complete'));