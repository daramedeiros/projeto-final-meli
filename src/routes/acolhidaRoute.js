const express = require("express")
const router = express.Router()
const controller = require("../controllers/acolhidaControllers")

router.get("/", controller.get)


module.exports = routerJ