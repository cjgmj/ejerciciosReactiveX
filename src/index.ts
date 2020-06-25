import { Observable } from 'rxjs';

// Es un estándar añadir el $ como sufijo del nombre de la variable para indicar que es un observable
// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    // Lo que emita tras el complete no se notificará a los suscriptores
    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

// Para que un observable se ejecute necesita al menos una suscripción
obs$.subscribe(console.log);