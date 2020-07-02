import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.get(url, {
    'mi-token': 'ABC123'
});

ajax.post(url, {
    id: 1,
    nombre: 'John'
}, {
    'mi-token': 'ABC123'
});

ajax.put(url, {
    id: 1,
    nombre: 'John'
}, {
    'mi-token': 'ABC123'
});

ajax.delete(url, {
    'mi-token': 'ABC123'
});

// Crear peticiones de forma dinámica
ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'John'
    }
}).subscribe(console.log);