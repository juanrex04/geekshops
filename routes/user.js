import express, { json } from 'express';
const router = express.Router();

//Importar modelo usuario
import User from '../models/user';

//Agregar usuario la accion es nuevoUser 
router.post('/nuevoUser', async (req, res) => {
    const body = req.body;
    try {

        const userDB = await User.create(body);
        res.status(200).json(userDB);

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Obtener usuario con parametros
router.get('/user/:id', async (req, res) => {
    const _id = req.params.id;

    try {

        const userDB = await User.findOne({ _id });
        res.json(userDB);

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Obtener todos los usuarios
router.get('/user', async (req, res) => {
    try {

        const userDB = await User.find();
        res.json(userDB);

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Eliminar usuarios
router.delete('/user/:id', async (req, res) => {
    const _id = req.params.id;

    try {

        const userDB = await User.findByIdAndDelete({ _id });

        if(!userDB){
            return res.status(400).json({
                mensaje: 'Usuario no encontrado',
                error
            })
        }
        res.json(userDB);

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})

//Actualizar usuario

router.put('/user/:id', async (req, res) =>{
    const _id = req.params.id;
    const body = req.body;

    try {
        
        const userDB = await User.findByIdAndUpdate(_id,body, {new : true});
        res.json(userDB);
    } catch (error) {
        
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})
//Exportacion del router Usuario
module.exports = router;