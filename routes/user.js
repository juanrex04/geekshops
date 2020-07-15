import express, { json } from 'express';
const router = express.Router();
const verificarToken = require('../middlewares/verificarToken');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

//Importar modelo usuario
import User from '../models/user';

//Agregar usuario la accion es la ruta nuevoUser 
router.post('/nuevoUser',/*verificarToken,*/ async (req, res, next) => {
    const {usuario_user, password, nombre_user, email}= req.body;
    const user = new User ({
        nombre_user: nombre_user,
        email: email,
        usuario_user : usuario_user,
        password: password
    });
    user.password = await user.encryptContraseña(user.password)
    await user.save();

    res.json({user})
})

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
router.get('/user', /*verificarToken,*/ async (req, res) => {
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
    const user = req.body;
    try {
        const userDB = await User.findByIdAndUpdate(_id,user, {new : true});
        res.json(userDB);

    } catch (error) {
        
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
        })
        console.log(error)
    }
})
//Exportacion del router Usuario
module.exports = router;