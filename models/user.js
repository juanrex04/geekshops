import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//El esquema permite que no se ingresen datos de mas teniendo asi mas seguridad en la API
const userSchema = new Schema({
    nombre_user: { type: String, required: [true, 'Nombre necesario'] },
    usuario_user: { type: String, required: [true, 'NameTag necesario'] },
    password: { type: String, required: [true, 'Contraseña necesaria'] },
    email: { type: String, required: [true, 'Correo necesario'] },
    activo: {type: Boolean, default: true},
    fechaCreacion: { type: Date, default: Date.now}
});

//Convertirlo en un modelo de mongoose
const User = mongoose.model('User', userSchema);

export default User;