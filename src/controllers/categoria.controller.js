const service = require('../services/categoria.service');

const getAll = async (req, res) => {
    try {
        const categoria = await service.getAll();
        res.json(categoria);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getById = async (req, res) => {
    try {
        const {id} = req.params;
        const categoria = await service.getById(id);
        res.json(categoria);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const create = async (req, res) => {
    try {
        const data = req.body;
        const categoria = await service.create(data);
        res.json(categoria);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const update = async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const categoria = await service.update(id, data);
        res.json(categoria);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const destroy = async (req, res) => {
    try {
        const {id} = req.params;
        const categoria = await service.remove(id);
        res.json(categoria);
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