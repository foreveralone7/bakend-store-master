const repository = require('../repositories/usuario.repository');

async function getAll() {
    return await repository.getAll();
}

async function getById(id) {
    return await repository.getById(id);
}

async function create(data) {
    return await repository.create(data);
}

async function update(id, data) {
    return await repository.update(id, data);
}

async function remove(id) {
    return await repository.remove(id);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
