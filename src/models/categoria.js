const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../connectDB');
class Categoria extends Model {
  static associate(models) {
    // Puedes definir otras asociaciones aquí si es necesario
  }
}

Categoria.init({
  nombre: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Categorias',
});

module.exports = Categoria;