const repository = require('../repositories/venta.repository');

const getAll = async () => {
    return await repository.getAll();
}

const getById = async (id) => {
    return await repository.getById(id);
}

const create = async (data) => {
    return await repository.create(data);
}

const update = async (id, data) => {
    return await repository.update(id, data);
}

const remove = async (id) => {
    return await repository.remove(id);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}
