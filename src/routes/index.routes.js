const express = require("express");
const router = express.Router();
// controladores
const productosController = require("../controllers/producto.Controller");
const categoriasController = require("../controllers/categoria.controller");
const ventaController = require("../controllers/venta.controller");
const usuarioController = require("../controllers/usuario.controller");

// productos
router.get("/productos", productosController.getAll);
router.get("/productos/:id", productosController.getById);
router.post("/productos", productosController.create);
router.put("/productos/:id", productosController.update);
router.delete("/productos/:id", productosController.destroy);

// categorias
router.get("/categorias", categoriasController.getAll);
router.get("/categorias/:id", categoriasController.getById);
router.post("/categorias", categoriasController.create);
router.put("/categorias/:id", categoriasController.update);
router.delete("/categorias/:id", categoriasController.destroy);

//ventas
router.get("/ventas", ventaController.getAll);
router.get("/ventas/:id", ventaController.getById);
router.post("/ventas", ventaController.create);
router.put("/ventas/:id", ventaController.update);
router.delete("/ventas/:id", ventaController.destroy);

//usuarios 
router.get("/usuarios", usuarioController.getAll);
router.get("/usuarios/:id", usuarioController.getById);
router.post("/usuarios", usuarioController.create);
router.put("/usuarios/:id", usuarioController.update);
router.delete("/usuarios/:id", usuarioController.remove);

module.exports = router;
