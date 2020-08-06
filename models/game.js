import mongoose, { Mongoose } from 'mongoose';
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    nombre_juego: {type: String, required :[true, 'Nombre del juego necesario']},
    desarrollador_juego: {type: String, required :[true, 'Desarrollador del juego necesario']},
    genero: {type: Array, required: [true, 'Genero(s) necesario']},
    PEGI:{type: String,required: [true, 'PEGI necesario']},
    precio:{type: Number,required: [true, 'Precio necesario']},
    //Formato <YYYY-mm-dd>
    fechaSalida : {type: Date, required:['Fecha necesaria']}
});

const Game = mongoose.model('Game', gameSchema);

export default Game;