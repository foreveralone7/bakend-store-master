const Usuario = require('../models/usuario');


async function getAll() {
    return await Usuario.findAll();
}

async function getById(id) {
    return await Usuario.findByPk(id);
}

async function create(data) {
    return await Usuario.create(data);
}

async function update(id, data) {
    await Usuario.update(data, { where: { id: id } });
    return await getById(id);
}

async function remove(id) {
    await Usuario.destroy({ where: { id: id } });
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
