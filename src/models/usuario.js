const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../connectDB');

class Usuario extends Model {}

Usuario.init({
  nombre: DataTypes.STRING,
  correo: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Usuarios', 
});

module.exports = Usuario;
