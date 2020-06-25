import { Observable, Observer, Subscription } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.log('Complete')
};

const intervalo$ = new Observable<number>( subscriber => {
    let count = 0;

    const interval = setInterval(() => {
        count ++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    // Método que se ejecuta al hacer unsubscribe
    return () => {
        clearInterval(interval);

        console.log('Intervalo destruido');
    };
});

// Cuando se suscribe a un observable se crea una nueva instancia del mismo, por lo que se ejecuta todo el código que contenga
const subscription: Subscription =  intervalo$.subscribe(num => console.log('Num: ', num));
const subscription2: Subscription =  intervalo$.subscribe(num => console.log('Num: ', num));
const subscription3: Subscription =  intervalo$.subscribe(num => console.log('Num: ', num));

setTimeout(() => {
    subscription.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe();

    console.log('Completado timeout');
}, 3000);