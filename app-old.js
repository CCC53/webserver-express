//Para crear un webserver se usa el paquete http que viene preinstalado en Node

const http = require('http');

/*Para escuchar peticiones http primero se tiene que crear el servidor
Para crear el servidor se realiza de la siguiente manera
Esto recibe un callback como parametro y este callback recibe como parametros las req o peticiones y las res o respuestas*/
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Carlos',
            edad: 18,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();
    })
    /*Una vez creado el servidor hay que especificar que puerto es el que va a estar escuchando
    Por lo general va en el puerto 3000 o el 8080 si es en modo local
    */
    .listen(8080)

console.log('Escuchando el puerto 8080');