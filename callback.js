function hola(nombre, miCallback) {
    console.log('Hola, soy una función asíncrona');
    setTimeout(function() {
        console.log('Hola '+ nombre)
        miCallback();
    },1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios '+nombre)
    },1000)
}

console.log('Iniciando proceso...')

hola('Vryahn', function() {
    adios('Vryahn', function() {
        console.log('Terminando proceso...');
    });
});