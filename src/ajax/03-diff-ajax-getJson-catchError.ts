import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';
const urlError = 'https://httpbinxx.org/delay/1';

const manejaError = (resp: AjaxError) => {
    console.warn('error: ', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
}

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(manejaError)
// );
// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
// );

const obs$ = ajax.getJSON(urlError);

// No se ejecuta el next ni el complete
// obs$.subscribe({
//     next: val => console.log('next: ', val),
//     error: err => console.warn('error en subs: ', err),
//     complete: () => console.log('complete')
// });

// Se ejecutar el next y el complete pero no el error
obs$.pipe(
    catchError(manejaError)
).subscribe({
    next: val => console.log('next: ', val),
    error: err => console.warn('error en subs: ', err),
    complete: () => console.log('complete')
});