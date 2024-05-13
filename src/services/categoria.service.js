const respository = require('../repositories/categoria.repository');

const getAll = async () => {
    return await respository.getAll();
}

const getById = async (id) => {
    return await respository.getById(id);
}

const create = async (data) => {
    return await respository.create(data);
}

const update = async (id, data) => {
    return await respository.update(id, data);
}

const remove = async (id) => {
    return await respository.remove(id);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}