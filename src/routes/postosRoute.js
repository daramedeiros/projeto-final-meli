const express = require("express")
const router = express.Router()
const controller = require("../controllers/postosControllers")

router.get("/", controller.get)

router.post("/", controller.post)

router.delete("/:id", controller.deletarPosto)

module.exports = router