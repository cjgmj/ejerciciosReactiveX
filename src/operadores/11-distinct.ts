import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numeros$ = of<number|string>(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');

numeros$.pipe(
    // Filtra para que recibamos los valores que no se hayan emitido previamente por el observable
    distinct()
).subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    }
];

from(personajes).pipe(
    // Para objetos se puede pasar el return de la condición del filtro
    distinct(p => p.nombre)
).subscribe(console.log);