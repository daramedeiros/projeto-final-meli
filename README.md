# projeto-final-meli
Projeto: AcolherAsManas

# Tema
Está aplicação é uma API que busca conectar  mulheres que sofrem ou sofreram violência de gênero a uma rede de apoio (terapeutas e advogadas) dispostas a ajudá-las de forma voluntária.

# Rotas/EndPoints

GET /postosDeSevicosDeAtendimento <br/>
Rota que retorna uma lista com todos os postos de serviços de atendimentos cadastrados.<br/>
HTTP 200 OK


GET/queroSerAcolhida <br/>
Rota que retorna lista com todas pessoas que querem ser acolhidas por algum serviço voluntário. <br/>
HTTP 200 OK


GET/voluntarioAcolhe <br/>
Rota que retorna uma lista com todas as profissionais (terapeutas  e advogadas) cadastradas para prestar seu serviço voluntariamente. <br/>
HTTP 200 OK


POST /postosDeSevicosDeAtendimento <br/>
Rota que recebe e adiciona um novo posto de serviço de atendimento, retorna o item criado. <br/>
HTTP 201 CREATED

POST /queroSerAcolhida <br/>
Rota que recebe e adiciona um nova pessoa que quer ser acolhida. Como resultado, retorna o item criado. <br/>
HTTP 201 CREATED

POST /voluntarioAcolhe <br/>
Rota que recebe e adiciona um novo profissional. Como resultado, retorna o item criado. <br/>
HTTP 201 CREATED

PUT /postosDeSevicosDeAtendimento/:id <br/>
Rota que atualiza as informações de um certo posto de serviço por id e retorna o item atualizado. <br/>
HTTP 200 OK

PUT /queroSerAcolhida/:id <br/>
Rota que atualiza as informações de uma pessoa que quer ser acolhida, com base no seu id e retorna o item atualizado <br/>
HTTP 200 OK

PUT /voluntarioAcolhe/:id <br/>
Rota que atualiza as informações de um voluntário por id e retorna o item atualizado <br/>
HTTP 200 OK

DELETE /postosDeSevicosDeAtendimento/:id <br/>
Rota que deleta um posto de serviço baseado em seu id. <br/>
HTTP 204 NO CONTENT

DELETE /queroSerAcolhida/:id <br/>
Rota que deleta uma vítima baseado em seu id. <br/>
HTTP 204 NO CONTENT

DELETE /voluntarioAcolhe/:id <br/>
Rota que deleta um profissional baseado em seu id. <br/>
HTTP 204 NO CONTENT




