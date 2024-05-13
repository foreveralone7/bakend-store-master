const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../connectDB');
const Categoria = require('./categoria');

class Producto extends Model {}

Producto.init({
  nombre: DataTypes.STRING,
  precio: DataTypes.FLOAT,
  descripcion: DataTypes.STRING,
  idCategoria: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Productos',
});

Producto.Categoria = Producto.belongsTo(Categoria, {foreignKey: 'idCategoria', as: 'categoria'});

module.exports = Producto;