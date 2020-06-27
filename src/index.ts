import { range, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

// range(1, 5).pipe(
//     // El primer tipo es lo que recibe y el segundo lo que devuelve
//     map<number, string>(val => (val * 10).toString())
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map( event => event.code)
);

const keyupPlick$ = keyup$.pipe(
    // pluck('key')
    pluck('target', 'baseURI')
);

keyup$.subscribe(console.log);
keyupCode$.subscribe(code => console.log('map', code));
keyupPlick$.subscribe(code => console.log('pluck', code));