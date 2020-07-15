const jwt = require('jsonwebtoken')
const config = require('./token')
const jwt_decode = require('jwt-decode');
function verificarToken(req, res, next) {
    const token = req.headers['x-access-token']

    if (!token) {
        return res.status(401).json({
            auth: false,
            message: `Token no proveido ${token}`
        })
    }

    const decoded = jwt.verify(token, config.secret);
    req.userId = decoded.id;

    const desToken = jwt_decode(token);

    if (desToken.role !== 'EMPL' && desToken.role !== 'ADMIN') {
        return res.status(401).json({
            auth: false,
            message: `Rol no autorizado ${desToken.role}`
        })
    }
    next();
}

module.exports = verificarToken;