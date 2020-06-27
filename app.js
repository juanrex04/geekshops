import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// Middleware para Vue.js router modo history || Siempre debe ir por debajo de las rutas
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//process.env.PORT toma el puerto que provea el host y en caso contrario toma el dado por nosotros
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
    console.log('Port used ' + app.get('puerto'));
});