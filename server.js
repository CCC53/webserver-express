const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
/*Un middleware es una instruccion o un callback que siempre se va a ejecutar sin importar que url sea solicitado
Para crear un middleware es*/
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //Si queremos mandar variables en el html se puede hacer de esta forma, primero se manda el archivo hbs y despues un objeto con las variables que queremos
    res.render('home', {
        nombre: 'carlos'
    });
});
//Este listen tambien recibe un callback que se dispara cuando inicias el servidor
app.get('/about', (req, res) => {
    res.render('about');
});
app.listen(port, () => {
    console.log(`Escuchando peticiones el puerto ${port}`);
});
0