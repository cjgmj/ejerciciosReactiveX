import { asyncScheduler } from 'rxjs';

const saludar = () =>  console.log('Hola mundo');
const saludar2 = nombre =>  console.log(`Hola ${nombre}`);

// Funciona como un setTimeout
// asyncScheduler.schedule(saludar, 2000);

// El state solo permite un argumento
// asyncScheduler.schedule(saludar2, 2000, 'John');

// No se puede ser una función de flechas
// Funciona como un setInterval
const subs = asyncScheduler.schedule(function(state) {
    console.log('state', state);

    // El segundo parámetro indica cada cuanto tiempo se ejecutará
    this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

// Hace lo mismo que el código comentado arriba
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);