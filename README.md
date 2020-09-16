<img src="https://github.com/guilhermesantoss/proffy-nlw02/blob/master/printscreens/proffy_logo.png" alt="Proffy Logo" width="240" height="92" />
<hr/>
<p>
  <img src="https://img.shields.io/github/repo-size/guilhermesantoss/proffy-nlw02" alt="Repository Size" />
  <img src="https://img.shields.io/github/last-commit/guilhermesantoss/proffy-nlw02" alt="Last Commit" />
  <img src="https://img.shields.io/github/languages/count/guilhermesantoss/proffy-nlw02?color=red" alt="Languages Used" />
  <img src="https://img.shields.io/github/license/guilhermesantoss/proffy-nlw02?color=yellow" alt="License" />
</p>

## Sobre o projeto

O projeto **Proffy** é uma aplicação com o objetivo de conectar Alunos com Professores para terem aulas online.

## Executando o servidor

Navegue até o diretório "server/" e instale todas as dependências do projeto utilizando o comando:
```bash
$ npm install

# OR

$ yarn install
```

Agora vamos criar o Banco de Dados utilizando o comando:
```bash
$ npm run knex:migrate

# OR

$ yarn knex:migrate
```

Por fim, para deixar o servidor rodando, vamos executar o comando:
```bash
$ npm start

# OR

$ yarn start
```

OBS: (Dentro da pasta server, tem um arquivo chamado ```requests_proffy.http```, que contém todas as requisições criadas durante a aula, para executa-las no seu Visual Studio Code, você precisa instalar um Plugin chamado [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)).

## Executando a aplicação Web

Navegue até o diretório "web/" e instale as dependências do projeto utilizando o comando:
```bash
$ npm install

# OR

$ yarn install
```

Agora que as dependências estão devidamente instaladas, vamos executar utilizando o comando:
```bash
$ npm start

# OR

$ yarn start
```

## Tecnologias utilizadas

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/pt-br/)
* [SQlite](https://www.sqlite.org/index.html)
* [Knex.js](http://knexjs.org/)
* [React](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
