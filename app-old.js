

const http = require('http');

http.createServer((req, res) => {
     // MANDAR UN JSON A LA PAGINA
    // res.writeHead(200, {'Content-Type': 'application/json'})

    // const persona= {
    //     id: 1,
    //     nombre: 'Eduardo'
    // }

    // res.write(JSON.stringify(persona))
    // res.end();

    // HACER QUE LA PAGINA DESCARGUE UN CSV

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'})

    
    // res.write('id, nombre\n');
    // res.write('1, Eduardo\n');
    // res.write('2, Juanita\n');
    // res.write('3, Laura\n');
    // res.write('4, Maria\n');
    // res.write('5, Abelardo\n');
    // res.end();

    // 

    res.write('Hola Mundo')
    res.end()
    
})
.listen(8080);

console.log('listening on http://localhost',8080)
