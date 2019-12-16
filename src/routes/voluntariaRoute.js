const express = require("express")
const router = express.Router()
const controller = require("../controllers/voluntariaController")

/**
 * @api {get} /voluntariaRoute
 * @apiName GetVoluntaria
 * @apiGroup voluntaria
 *
 *
 * @apiSuccess {Object[]} Retorna todas profissionais voluntarias cadastrados
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{
 *      "nome": "teste",
 *      "sobrenome": "teste",
 *      "email": "testelaw@gmail.com",
 *      "cepAtendimento": "06330-001",
 *      "telefoneAtendimento": "(11) 4188-9947",
 *      "whatsapp": "(11)98767-9945",
 *       "tipoDeServicoPrestado": 
 *          [{
 *               "piscologico": false,
 *               "juridico": true
 *          }]
 *  }]
 * 
 */
router.get("/", controller.get)
router.get("/:id", controller.getById)

/**
 * @api {POST} /voluntariaRoute
 * @apiName POST voluntaria
 * @apiGroup voluntaria
 *
 *
 * @apiSuccess {Object[]} Cadastra uma nova profissional voluntaria 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{
 *      "nome": "teste",
 *      "sobrenome": "teste",
 *      "email": "testelaw@gmail.com",
 *      "cepAtendimento": "06330-001",
 *      "telefoneAtendimento": "(11) 4188-9947",
 *      "whatsapp": "(11)98767-9945",
 *       "tipoDeServicoPrestado": 
 *          [{
 *               "piscologico": false,
 *               "juridico": true
 *          }]
 *  }]
 * 
 */
router.post("/", controller.post)



/**
 * @api {PUT} router.put("/:id", controller.put),
 * @apiName PUT Posto
 * @apiGroup Posto
 *
 *
 * @apiSuccess {Object[]} Atualiza informações da profissional voluntaria cadastrada
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{
 *      "nome": "teste",
 *      "sobrenome": "teste",
 *      "email": "testelaw@gmail.com",
 *      "cepAtendimento": "06330-001",
 *      "telefoneAtendimento": "(11) 4188-9947",
 *      "whatsapp": "(11)98767-9945",
 *       "tipoDeServicoPrestado": 
 *          [{
 *               "piscologico": false,
 *               "juridico": true
 *          }]
 *  }]
 * 
 */
router.put("/:id", controller.update)


router.delete("/:id", controller.deletarVoluntaria)

module.exports = router