const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const verificarToken = require('../middlewares/verificarToken');

const config = require('../middlewares/token');
import User from '../models/user';

//Registrar usuario
router.post('/register', async (req, res, next) => {
    const { usuario_user, password, nombre_user, email ,role} = req.body;
    const user = new User({
        nombre_user: nombre_user,
        email: email,
        usuario_user: usuario_user,
        password: password,
        role: 'USER'
    });
    user.password = await user.encryptContraseña(user.password)
    await user.save();

    const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 60 * 60 * 24
    })
    res.json({ auth: true, token })
})

//Loguear al usuario
router.post('/login', async (req, res, next) => {
    const { usuario_user, password } = req.body;
    const user = await User.findOne({ usuario_user: usuario_user });
    if (!user) {
        return res.status(404).send('El usuario no existe')
    }
    const passwordValida = await user.validarContraseña(password)
    if (!passwordValida) {
        return res.status(401).json('Contraseña incorrecta');
    }

    const token = jwt.sign({ id: user._id, role: user.role }, config.secret, {
        expiresIn: 60 * 60 * 24
    })
    const rolUser = user.role
    res.json({ auth: true, token, rolUser})
})

//Obtener datos del usuario
router.get('/profile/:id', async (req, res, next) => {
    const _id = req.params.id;
    try {
        const userDB = await User.findOne({ _id });
        res.json(userDB);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
        })
    }
})

module.exports = router;