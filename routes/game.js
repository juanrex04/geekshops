import express, {json} from 'express';
const router = express.Router();

//Import model game
import Game from '../models/game';

//Agregar game
router.post('/nuevoGame', async (req, res) => {
    const body = req.body;
    try {
        const gameDB = await Game.create(body);
        res.status(200).json(gameDB);

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Obtener game con parametros
router.get('/game/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const gameDB = await Game.findOne({ _id });
        res.json(gameDB);

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Obtener todos los usuarios
router.get('/game', async (req, res) => {
    try {
        const gameDB = await Game.find();
        res.json(gameDB);

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Eliminar usuarios
router.delete('/game/:id', async (req, res) => {
    const _id = req.params.id;

    try {

        const gameDB = await Game.findByIdAndDelete({ _id });

        if(!gameDB){
            return res.status(400).json({
                mensaje: 'Usuario no encontrado',
                error
            })
        }
        res.json(gameDB);

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})

//Actualizar usuario

router.put('/game/:id', async (req, res) =>{
    const _id = req.params.id;
    const body = req.body;

    try {
        const gameDB = await Game.findByIdAndUpdate(_id,body, {new : true});
        res.json(gameDB);
    } catch (error) {
        
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})
//Exportacion del router Usuario
module.exports = router;