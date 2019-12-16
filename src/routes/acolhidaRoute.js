const express = require("express")
const router = express.Router()
const controller = require("../controllers/acolhidaControllers")


/**
 * @api {get} /queroSerAcolhida
 * @apiName Get queroSerAcolhida
 * @apiGroup Acolhida
 *
 *
 * @apiSuccess {Object[]} Retorna todas pessoas que desejam serem acolhidas cadastradas
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{
 *      "nome": "Teste",
 *      "sobrenome": "Teste",
 *      "idade": 32,
 *      "email": "teste@teste.com",
 *       "genero": 
 *          [{
 *              "mulherCis": true,
 *              "mulherTrans": false
 *          }],
 *       "tipoAjuda": 
 *          [{
 *              "piscologico": false,
 *              "juridico": true
 *          }],
 *      "cidade": "teste",
 *      "bairro": "teste",
 *      "estado": "teste"
 *  }]
 * 
 */
router.get("/", controller.get)
router.get("/:id", controller.getById)


/**
 * @api {POST} /queroSerAcolhida
 * @apiName POST queroSerAcolhida
 * @apiGroup Acolhida
 *
 *
 * @apiSuccess {Object[]} Cadastra a pessoa que deseja ser acolhida
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{
 *      "nome": "Teste",
 *      "sobrenome": "Teste",
 *      "idade": 32,
 *      "email": "teste@teste.com",
 *       "genero": 
 *          [{
 *              "mulherCis": true,
 *              "mulherTrans": false
 *          }],
 *       "tipoAjuda": 
 *          [{
 *              "piscologico": false,
 *              "juridico": true
 *          }],
 *      "cidade": "teste",
 *      "bairro": "teste",
 *      "estado": "teste"
 *  }]
 * 
 */
router.post("/", controller.post)



/**
 * @api {PUT} /queroSerAcolhida/:id
 * @apiName PUT /queroSerAcolhida
 * @apiGroup Acolhida
 *
 *
 * @apiSuccess {Object[]} Atualiza informações da pessoa que deseja ser acolhida pelo seu ID
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{
 *      "nome": "Teste",
 *      "sobrenome": "Teste",
 *      "idade": 32,
 *      "email": "teste@teste.com",
 *      "genero": 
 *          [{
 *              "mulherCis": true,
 *              "mulherTrans": false
 *          }],
 *       "tipoAjuda": 
 *          [{
 *              "piscologico": false,
 *              "juridico": true
 *          }],
 *      "cidade": "teste",
 *      "bairro": "teste",
 *      "estado": "teste"
 *  }]
 * 
 */
router.put("/:id", controller.update)


router.delete("/:id", controller.deletarPosto)

module.exports = router