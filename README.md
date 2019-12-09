#projeto-final-meli
Projeto: AcolherAsManas

#Tema
Está aplicação é uma API que busca conectar  mulheres que sofrem ou sofreram violência de gênero a uma rede de apoio (terapeutas e advogadas) dispostas a ajudá-las de forma voluntária.

#Rotas/EndPoints

GET /postosDeSevicosDeAtendimento
Rota que retorna uma lista com todos os postos de serviços de atendimentos cadastrados.
HTTP 200 OK

GET/postosDeSevicosDeAtendimento/:id
Rota que retorna os detalhes sobre algum posto de serviço, baseado no seu id.
HTTP 200 OK

GET/voluntarioAcolhe
Rota que retorna uma lista com todas as profissionais (terapeutas  e advogadas) cadastradas para prestar seu serviço voluntariamente.
HTTP 200 OK

GET/voluntarioAcolhe/:id
Rota que retorna os detalhes sobre cada profissional cadastrada, com base no seu id.
HTTP 200 OK

POST /postosDeSevicosDeAtendimento
Rota que recebe e adiciona um novo posto de serviço de atendimento, retorna o item criado.
HTTP 201 CREATED

POST /voluntarioAcolhe
Rota que recebe e adiciona um novo profissional. Como resultado, retorna o item criado. 
HTTP 201 CREATED

PUT /postosDeSevicosDeAtendimento/:id
Rota que atualiza as informações de um certo posto de serviço por id e retorna o item atualizado
HTTP 200 OK

PUT /terapeutas/:id
Rota que atualiza as informações de um profissional por id e retorna o item atualizado
HTTP 200 OK

PUT /voluntarioAcolhe
Rota que recebe e adiciona um novo profissional. Como resultado, retorna o item criado. 
HTTP 201 CREATED
/:id
Rota que atualiza as informações de uma advogada por id e retorna o item atualizado
HTTP 200 OK

DELETE /postosDeSevicosDeAtendimento/:id
Rota que deleta um posto de serviço baseado em seu id.
HTTP 204 NO CONTENT

DELETE /voluntarioAcolhe/:id
Rota que deleta um profissional baseado em seu id.
HTTP 204 NO CONTENT




