const service = require('../services/producto.service');

const getAll = async (req, res) => {
    try {
        const producto = await service.getAll();
        res.json(producto);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getById = async (req, res) => {
    try {
        const {id} = req.params;
        const producto = await service.getById(id);
        res.json(producto);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const create = async (req, res) => {
    try {
        const data = req.body;
        const producto = await service.create(data);
        res.json(producto);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const update = async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const producto = await service.update(id, data);
        res.json(producto);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const destroy = async (req, res) => {
    try {
        const {id} = req.params;
        const producto = await service.remove(id);
        res.json(producto);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    destroy
}