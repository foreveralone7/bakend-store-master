const Producto = require('../models/producto');
const Categoria = require('../models/categoria');

const getAll = async () => {
    return await Producto.findAll({
        nest: true,
        include: [
            {
                association: Producto.Categoria,
                attributes: ['id', 'nombre']
            },
        ]
    });
}

const getById = async (id) => {
    return await Producto.findByPk(id, {
        nest: true,
        include: [
            {
                association: Producto.Categoria,
                attributes: ['id', 'nombre']
            },
        ]
    });
}

const create = async (data) => {
    return await Producto.create(data);
}

const update = async (id, data) => {
    await Producto.update({...data}, {where: {id: id}});
    return await getById(id);
}

const remove = async (id) => {
    await Producto.destroy({where: {id: id}});
    return {};
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}