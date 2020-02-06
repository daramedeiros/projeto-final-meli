![Sororidade entre as mulhers](https://github.com/daramedeiros/projeto-final-meli/blob/master/recursos/img/tenor.gif)


# projeto-final-meli
Projeto: AcolherAsManas<br/>

## Por que isso é importante?

- Pelo fim da cultura do estupro!<br/>
A cada 11 minutos, uma mulher é estuprada do Brasil¹ e 85% têm medo de ser vítima de violência sexual². Essa luta é urgente e é de todas nós. Precisamos romper este ciclo!

- A violência acontece dentro de casa. <br/>
3 em cada 5 mulheres já sofreram alguma violência dentro do relacionamento³. Nos casos de estupro em que o autor é conhecido, 78,6% acontecem no local de residência³.

- NOSSA VOZ SEŔA OUVIDA!<br/>
Entre 2012 e 2016, houve um aumento de 155% nas notificações dos casos de violência⁴. Apesar do fortalecimento da lutas das mulheres, a maior parte dos casos ainda não são registrados.

#### (1) Fórum Brasileiro de Segurança Pública, 2015. (2) Datafolha, 2016. (3) Instituto Avon e Data Popular, 2016. (4) Atlas da Violência, 2018.

#### Objetivo da API
Está aplicação é uma API que busca conectar  mulheres que sofrem ou sofreram violência de gênero a uma rede de apoio (terapeutas e advogadas) dispostas a ajudá-las de forma voluntária.


#### Linguagens
- Javascript

#### Plataforma
- NodeJS

#### Banco de Dados
- MongoDB Atlas

#### Dependências
- Express
- Nodemon
- Mongoose
- Body-parser

#### Link do Postman 
https://www.getpostman.com/collections/7b18ce4964ae7765bc1a

#### Hospedado no Heroku
https://acolhe-as-manas.herokuapp.com/


#### Rotas/EndPoints
**GET /postosDeSevicosDeAtendimento** <br/>
Rota que retorna uma lista com todos os postos de serviços de atendimentos cadastrados. <br/>
HTTP 200 OK


**GET/postosDeSevicosDeAtendimento/:id** <br/>
Rota que retorna os detalhes sobre algum posto de serviço, baseado no seu id. <br/>
HTTP 200 OK


**GET/voluntarioAcolhe** <br/>
Rota que retorna uma lista com todas as profissionais (terapeutas e advogadas) cadastradas para prestar seu serviço voluntariamente. <br/>
HTTP 200 OK


**GET/voluntarioAcolhe/:id** <br/>
Rota que retorna os detalhes sobre cada profissional cadastrada, com base no seu id. <br/>
HTTP 200 OK

**GET/queroSerAcolhida** <br/>
Rota que retorna uma lista com todas as vítimas cadastradas que desejam uns dos serviços prestados.<br/>
HTTP 200 OK

**GET/queroSerAcolhida/:id**  <br/>
Rota que retorna os detalhes sobre cada vítima cadastrada, com base no seu id. <br/>
HTTP 200 OK

**POST /postosDeSevicosDeAtendimento**  <br/>
Rota que recebe e adiciona um novo posto de serviço de atendimento, retorna o item criado. <br/>
HTTP 201 CREATED


**POST /queroSerAcolhida**  <br/>
Rota que recebe e adiciona uma nova mulher que deseja ser acolhida no projeto. Como resultado, retorna o item criado. <br/>
HTTP 201 CREATED

**POST /voluntarioAcolhe**  <br/>
Rota que recebe e adiciona um novo profissional. Como resultado, retorna o item criado.  <br/>
HTTP 201 CREATED

**PUT /postosDeSevicosDeAtendimento/:id**  <br/>
Rota que atualiza as informações de um certo posto de serviço por id e retorna o item atualizado.  <br/>
HTTP 200 OK

**PUT /voluntarioAcolhe/:id** <br/>
Rota que atualiza as informações de um profissional por id e retorna o item atualizado.  <br/>
HTTP 200 OK

**PUT /queroSerAcolhida/:id**  <br/>
Rota que atualiza as informações de uma vítima por id e retorna o item atualizado.  <br/>
HTTP 200 OK

**DELETE /postosDeSevicosDeAtendimento/:id**  <br/>
Rota que deleta um posto de serviço baseado em seu id.  <br/>
HTTP 204 NO CONTENT

**DELETE /voluntarioAcolhe/:id**  <br/>
Rota que deleta um profissional baseado em seu id.  <br/>
HTTP 204 NO CONTENT

**DELETE /queroSerAcolhida/:id**  <br/>
Rota que deleta uma vítima cadastrada baseado em seu id.  <br/>
HTTP 204 NO CONTENT


