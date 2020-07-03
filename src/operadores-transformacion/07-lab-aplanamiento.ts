import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Helper
const peticionHttpLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
    pluck('response', 'token'),
    catchError(err => of('xxx'))
);

// Crear formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Login';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    // Se suscribe a cada observable que lanza el método
    // mergeMap(peticionHttpLogin)
    // Si hay una suscripción la cancela para suscribirse al nuevo observable, solo obtiene el resultado del
    // último observable
    // switchMap(peticionHttpLogin)
    // Mientras se está suscrito a un observable, el resto de observable son ignorados, una vez terminada la suscripción
    // no hará nada hasta recibir un nuevo observable
    exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe(token => {
    console.log(token);
});