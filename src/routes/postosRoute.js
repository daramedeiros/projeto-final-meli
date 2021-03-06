const express = require("express")
const router = express.Router()
const controller = require("../controllers/postosControllers")

/**
 * @api {get} /postosDeSevicosDeAtendimento
 * @apiName Get postosDeSevicosDeAtendimento
 * @apiGroup Postos
 *
 *
 * @apiSuccess {Object[]} Retorna todos os Postos de serviço de atendimento para mulherescadastrados
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{
 *      "nome": "DDM - Barueri",
 *      "logadouro": "Av. Sebastião Davini dos Rei",
 *      "numero": 756,
 *      "complemento": "",
 *      "cidade": "Barueri",
 *      "bairro": "Jardim Barueri",,
 *      "estado": "São Paulo",
 *      "contato": "(11) 4198-0522"
 *  }]
 * 
 */
router.get("/", controller.get)
router.get("/:id", controller.getById)


/**
 * @api {POST} /postosDeSevicosDeAtendimento
 * @apiName POST postosDeSevicosDeAtendimento
 * @apiGroup Postos
 *
 *
 * @apiSuccess {Object[]} Cadastra o um novo posto de serviço de atendimento para mulheres
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{
 *      "nome": "DDM - Barueri",
 *      "logadouro": "Av. Sebastião Davini dos Rei",
 *      "numero": 756,
 *      "complemento": "",
 *      "cidade": "Barueri",
 *      "bairro": "Jardim Barueri",,
 *      "estado": "São Paulo",
 *      "contato": "(11) 4198-0522"
 *  }]
 * 
 */
router.post("/", controller.post)


/**
 * @api {PUT} /postosDeSevicosDeAtendimento/:id
 * @apiName PUT postosDeSevicosDeAtendimento
 * @apiGroup Postos
 *
 *
 * @apiSuccess {Object[]} Atualiza informações do posto de serviço de atendimento
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{
 *      "nome": "DDM - Barueri",
 *      "logadouro": "Av. Sebastião Davini dos Rei",
 *      "numero": 756,
 *      "complemento": "",
 *      "cidade": "Barueri",
 *      "bairro": "Jardim Barueri",,
 *      "estado": "São Paulo",
 *      "contato": "(11) 4198-0522"
 *  }]
 * 
 */
router.put("/:id", controller.update)


router.delete("/:id", controller.deletarPosto)

module.exports = router