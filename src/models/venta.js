const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../connectDB');
const Usuario = require('./usuario');
const Producto = require('./producto');

class Venta extends Model {}

Venta.init({
  idUsuario: DataTypes.INTEGER,
  idProducto: DataTypes.INTEGER,
  cantidad: DataTypes.INTEGER,
  precioTotal: DataTypes.FLOAT,
  creadoEn: DataTypes.DATE
}, {
  sequelize,
  modelName: 'Ventas',
});

Venta.Usuario = Venta.belongsTo(Usuario, { foreignKey: 'idUsuario', as: 'usuario' });
Venta.Producto = Venta.belongsTo(Producto, { foreignKey: 'idProducto', as: 'producto' });

module.exports = Venta;
