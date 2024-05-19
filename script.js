var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Deyci Bustos')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Estudiante de Mecatrónica')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Jugadora de Basquetbol')
    .pauseFor(1500)
    .start();