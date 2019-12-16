define({ "api": [
  {
    "type": "get",
    "url": "/AcolhidaRoute",
    "title": "",
    "name": "GetAcolhida",
    "group": "AColhida",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>todas pessoas que desejam serem acolhidas cadastradas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n [{\n    \"nome\": \"Teste\",\n    \"sobrenome\": \"Teste\",\n    \"idade\": 32,\n    \"email\": \"teste@teste.com\",\n     \"genero\": \n        [{\n            \"mulherCis\": true,\n            \"mulherTrans\": false\n        }],\n     \"tipoAjuda\": \n        [{\n            \"piscologico\": false,\n            \"juridico\": true\n        }],\n    \"cidade\": \"teste\",\n    \"bairro\": \"teste\",\n    \"estado\": \"teste\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/acolhidaRoute.js",
    "groupTitle": "AColhida"
  },
  {
    "type": "POST",
    "url": "/AcolhidaRoute",
    "title": "",
    "name": "POST_Acolhida",
    "group": "Acolhida",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Cadastra",
            "description": "<p>a pessoa que deseja ser acolhida</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n [{\n    \"nome\": \"Teste\",\n    \"sobrenome\": \"Teste\",\n    \"idade\": 32,\n    \"email\": \"teste@teste.com\",\n     \"genero\": \n        [{\n            \"mulherCis\": true,\n            \"mulherTrans\": false\n        }],\n     \"tipoAjuda\": \n        [{\n            \"piscologico\": false,\n            \"juridico\": true\n        }],\n    \"cidade\": \"teste\",\n    \"bairro\": \"teste\",\n    \"estado\": \"teste\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/acolhidaRoute.js",
    "groupTitle": "Acolhida"
  },
  {
    "type": "PUT",
    "url": "router.put(\"/:id\",",
    "title": "controller.put),",
    "name": "PUT_Acolhida",
    "group": "Acolhida",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Atualiza",
            "description": "<p>informações da pessoa que deseja ser acolhida</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n [{\n    \"nome\": \"Teste\",\n    \"sobrenome\": \"Teste\",\n    \"idade\": 32,\n    \"email\": \"teste@teste.com\",\n     \"genero\": \n        [{\n            \"mulherCis\": true,\n            \"mulherTrans\": false\n        }],\n     \"tipoAjuda\": \n        [{\n            \"piscologico\": false,\n            \"juridico\": true\n        }],\n    \"cidade\": \"teste\",\n    \"bairro\": \"teste\",\n    \"estado\": \"teste\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/acolhidaRoute.js",
    "groupTitle": "Acolhida"
  },
  {
    "type": "get",
    "url": "/postosRoute",
    "title": "",
    "name": "GetPosto",
    "group": "Posto",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>todos os Postos de serviço de atendimento para mulherescadastrados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n [{\n    \"nome\": \"DDM - Barueri\",\n    \"logadouro\": \"Av. Sebastião Davini dos Rei\",\n    \"numero\": 756,\n    \"complemento\": \"\",\n    \"cidade\": \"Barueri\",\n    \"bairro\": \"Jardim Barueri\",,\n    \"estado\": \"São Paulo\",\n    \"contato\": \"(11) 4198-0522\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/postosRoute.js",
    "groupTitle": "Posto"
  },
  {
    "type": "POST",
    "url": "/postosRoute",
    "title": "",
    "name": "POST_Posto",
    "group": "Posto",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Cadastra",
            "description": "<p>o um novo posto de serviço de atendimento para mulheres</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n [{\n    \"nome\": \"DDM - Barueri\",\n    \"logadouro\": \"Av. Sebastião Davini dos Rei\",\n    \"numero\": 756,\n    \"complemento\": \"\",\n    \"cidade\": \"Barueri\",\n    \"bairro\": \"Jardim Barueri\",,\n    \"estado\": \"São Paulo\",\n    \"contato\": \"(11) 4198-0522\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/postosRoute.js",
    "groupTitle": "Posto"
  },
  {
    "type": "PUT",
    "url": "router.put(\"/:id\",",
    "title": "controller.put),",
    "name": "PUT_Posto",
    "group": "Posto",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Atualiza",
            "description": "<p>informações do posto de serviço de atendimento</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n [{\n    \"nome\": \"DDM - Barueri\",\n    \"logadouro\": \"Av. Sebastião Davini dos Rei\",\n    \"numero\": 756,\n    \"complemento\": \"\",\n    \"cidade\": \"Barueri\",\n    \"bairro\": \"Jardim Barueri\",,\n    \"estado\": \"São Paulo\",\n    \"contato\": \"(11) 4198-0522\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/postosRoute.js",
    "groupTitle": "Posto"
  },
  {
    "type": "PUT",
    "url": "router.put(\"/:id\",",
    "title": "controller.put),",
    "name": "PUT_Posto",
    "group": "Posto",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Atualiza",
            "description": "<p>informações da profissional voluntaria cadastrada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n [{\n    \"nome\": \"teste\",\n    \"sobrenome\": \"teste\",\n    \"email\": \"testelaw@gmail.com\",\n    \"cepAtendimento\": \"06330-001\",\n    \"telefoneAtendimento\": \"(11) 4188-9947\",\n    \"whatsapp\": \"(11)98767-9945\",\n     \"tipoDeServicoPrestado\": \n        [{\n             \"piscologico\": false,\n             \"juridico\": true\n        }]\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/voluntariaRoute.js",
    "groupTitle": "Posto"
  },
  {
    "type": "get",
    "url": "/voluntariaRoute",
    "title": "",
    "name": "GetVoluntaria",
    "group": "voluntaria",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>todas profissionais voluntarias cadastrados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n [{\n    \"nome\": \"teste\",\n    \"sobrenome\": \"teste\",\n    \"email\": \"testelaw@gmail.com\",\n    \"cepAtendimento\": \"06330-001\",\n    \"telefoneAtendimento\": \"(11) 4188-9947\",\n    \"whatsapp\": \"(11)98767-9945\",\n     \"tipoDeServicoPrestado\": \n        [{\n             \"piscologico\": false,\n             \"juridico\": true\n        }]\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/voluntariaRoute.js",
    "groupTitle": "voluntaria"
  },
  {
    "type": "POST",
    "url": "/voluntariaRoute",
    "title": "",
    "name": "POST_voluntaria",
    "group": "voluntaria",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Cadastra",
            "description": "<p>uma nova profissional voluntaria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n [{\n    \"nome\": \"teste\",\n    \"sobrenome\": \"teste\",\n    \"email\": \"testelaw@gmail.com\",\n    \"cepAtendimento\": \"06330-001\",\n    \"telefoneAtendimento\": \"(11) 4188-9947\",\n    \"whatsapp\": \"(11)98767-9945\",\n     \"tipoDeServicoPrestado\": \n        [{\n             \"piscologico\": false,\n             \"juridico\": true\n        }]\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/voluntariaRoute.js",
    "groupTitle": "voluntaria"
  }
] });