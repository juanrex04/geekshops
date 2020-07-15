import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
const mongoose = require('mongoose');

const app = express();

//Conexion DB localhost
//const uri = 'mongodb://localhost:27017/DB_GeekShop';

//Conexion en la nube
const uri = "mongodb+srv://juan:juan2404@db-njjv5.mongodb.net/<dbname>?retryWrites=true&w=majority";
const options ={
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
}
mongoose.connect(uri, options).then(
    () => { console.log('Conexion con la DB exitosa')},
    err => { err }
  ); 

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/game'));
app.use('/api', require('./routes/authController'));

// Middleware para Vue.js router modo history || Siempre debe ir por debajo de las rutas
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//process.env.PORT toma el puerto que provea el host y en caso contrario toma el dado por nosotros
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
    console.log('Port used ' + app.get('puerto'));
});