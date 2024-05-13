const Venta = require("../models/venta");
const Usuario = require("../models/usuario");
const Producto = require("../models/producto");

const getAll = async () => {
  return await Venta.findAll({
    include: [
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["id", "nombre", "apellido"],
      },
      {
        model: Producto,
        as: "Producto",
        attributes: ["id", "nombre", "precio"],
      },
    ],
  });
};

const getById = async (id) => {
  return await Venta.findByPk(id, {
    include: [
      {
        model: Usuario,
        as: "Usuario",
        attributes: ["id", "nombre", "apellido"],
      },
      {
        model: Producto,
        as: "Producto",
        attributes: ["id", "nombre", "precio"],
      },
    ],
  });
};

const create = async (data) => {
  return await Venta.create(data);
};

const update = async (id, data) => {
  await Venta.update({ ...data }, { where: { id: id } });
  return await getById(id);
};

const remove = async (id) => {
  await Venta.destroy({ where: { id: id } });
  return {};
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
