const express = require("express")
const router = express.Router()
const controller = require("../controllers/postosControllers")

router.get("/", controller.get)


router.post("/", controller.post)
router.get("/:id", controller.getById)

router.put("/:id", controller.update)
router.delete("/:id", controller.deletarPosto)

module.exports = router