import { Observer, Observable, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.log('Complete')
};

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => {
        subs.next(Math.random());
    }, 1000);

    // En los "Hot Observable" solo se ejecuta cuando se llama al unsubscribe del Subject
    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    };
});

/**
 * Características Subject:
 * 1- Casteo múltiple
 * 2- También es un observer
 * 3- Next, error y complete
 */
const subject$ = new Subject();

const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    // Permite insertar información en el flujo de datos
    // Cuando los datos son producidos por el observable es considerado un "Cold Observable", pero cuando los datos son producidos 
    // desde fuera se considera un "Hot Observable"
    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();
}, 3500);