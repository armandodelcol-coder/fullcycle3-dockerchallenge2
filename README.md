# FullCycle 3.0 - Desafio Docker

## Descrição do desafio

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.

## Buildando e executando a aplicação

A aplicação está configurada para rodar em localhost na porta 8080, basta rodar o docker compose up que irá baixar, buildar e configurar todo o necessário.

**Ao rodar o docker-compose up, irá startar o database primeiro, talvez demore alguns segundos para disponibilizar a aplicação no endpoint 8080**

`docker compose up -d`

## Referências

- [docker compose site](https://docs.docker.com/compose/)
- [nginx load balancer node js](https://docs.nginx.com/nginx/deployment-guides/load-balance-third-party/node-js/)
- [faker js](https://github.com/faker-js/faker) Para gerar nomes aleatórios
- [node + nginx tutorial](https://ashwin9798.medium.com/nginx-with-docker-and-node-js-a-beginners-guide-434fe1216b6b)
- [Node + Mysql video](https://www.youtube.com/watch?v=YNN3nSrT-lc)