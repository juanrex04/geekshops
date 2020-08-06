import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

//El esquema permite que no se ingresen datos de mas teniendo asi mas seguridad en la API
const userSchema = new Schema({
    nombre_user: { type: String, required: [true, 'Nombre necesario'] },
    usuario_user: { type: String, unique:true, required: [true, 'NameTag necesario'] },
    password: { type: String, required: [true, 'Contraseña necesaria'] },
    email: { type: String, required: [true, 'Correo necesario'] },
    role: { type: String},
    activo: {type: Boolean, default: true},
    fechaCreacion: { type: Date, default: Date.now}
});

userSchema.methods.encryptContraseña = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    try {
        return bcrypt.hash(password, salt)
    } catch (error) {
        console.log(error)
    }
}

userSchema.methods.validarContraseña = function (password){
    return bcrypt.compare(password, this.password);
}

//Convertirlo en un modelo de mongoose
const User = mongoose.model('User', userSchema);

export default User;