const jwt = require('jsonwebtoken')
const config = require('./token')
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
    next();
}

module.exports = verificarToken;