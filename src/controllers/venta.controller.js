const ventaService = require('../services/venta.service');

const getAll = async (req, res) => {
    try {
        const ventas = await ventaService.getAll();
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getById = async (req, res) => {
    try {
        const venta = await ventaService.getById(req.params.id);
        if (venta) {
            res.json(venta);
        } else {
            res.status(404).json({ message: "Venta no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const create = async (req, res) => {
    try {
        const venta = await ventaService.create(req.body);
        res.status(201).json(venta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const venta = await ventaService.update(req.params.id, req.body);
        if (venta) {
            res.json(venta);
        } else {
            res.status(404).json({ message: "Venta no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const destroy = async (req, res) => {
    try {
        await ventaService.destroy(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    destroy,
}
