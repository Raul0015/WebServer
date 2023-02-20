require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;


// Renderizar vistas sencillas
// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

// Para hacer publica la carpeta de public hacemos uso de middelware

// Servir contenido estatico
app.use(express.static('public'));
// Al hacer lo de arriba estamos entrando al path del slash por lo que lo de abajo no nos sirve
// app.get('/', (req, res) => {
//     res.send('Home page!!!');
// })

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Raúl Uriel',
        titulo: 'Curso de NodeJS'
    }); 
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Raúl Uriel',
        titulo: 'Curso de NodeJS'
    });
});


app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Raúl Uriel',
        titulo: 'Curso de NodeJS'
    })
})


// app.get('/generic', (req, res) => { // Hacemos que al momento de entar a la pagina se elimine el .html
//     res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// })


// Comodin que sirve para rutas que no existan
// Para mandar un archivo usamos el sendFile
// Hacemos path absoluto
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Corriendo en el puerto http://localhost:${port}`);
});