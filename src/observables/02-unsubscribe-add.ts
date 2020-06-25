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

    setTimeout(() => {
        subscriber.complete();
    }, 2500)

    // Método que se ejecuta al hacer unsubscribe o después del complete
    return () => {
        clearInterval(interval);

        console.log('Intervalo destruido');
    };
});

// Cuando se suscribe a un observable se crea una nueva instancia del mismo, por lo que se ejecuta todo el código que contenga
const subscription: Subscription =  intervalo$.subscribe(observer);
const subscription2: Subscription =  intervalo$.subscribe(observer);
const subscription3: Subscription =  intervalo$.subscribe(observer);

subscription.add(subscription2).add(subscription3);

setTimeout(() => {
    subscription.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    console.log('Completado timeout');
}, 6000);