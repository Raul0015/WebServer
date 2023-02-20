const http = require('http');


// Create server
// req: lo que se esta solicitando
// res: lo que va a responder al cliente
http.createServer((req, res) =>{

    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    // const persona = {
    //     id: 1,
    //     nombre: 'Raul'
    // }
    // Serializar la persona como si fuera json
    // res.write(JSON.stringify(persona));
    // --------------------------------------------
    // res.write('id, nombre\n');
    // res.write('1, Pedro\n');
    // res.write('2, Maria\n');
    // res.write('3, Fernanda\n');

    res.write('Hola mundo')
    res.end()
})
.listen(8081);

console.log('Escuchando en el puerto: ', 8081);