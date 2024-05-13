const Categoria = require('../models/categoria');

const getAll = async () => {
    return await Categoria.findAll();
}

const getById = async (id) => {
    return await Categoria.findByPk(id);
}

const create = async (data) => {
    return await Categoria.create(data);
}

const update = async (id, data) => {
    await Categoria.update({...data}, {where: {id: id}});
    return await getById(id);
}

const remove = async (id) => {
    await Categoria.destroy({where: {id: id}});
    return {};
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}