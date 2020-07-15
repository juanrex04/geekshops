function verificarRol(req, res, next) {

    const rol = req.userId.role;

    if (rol !== 'USER') {
        return res.status(401).json({
            message: 'Rol no autorizado'
        })
    }
    console.log(rol);
    next();
}

module.exports = verificarRol;