<div align="center">
  <img width="200" height="200" src="https://avatars.githubusercontent.com/u/117131140?s=400&u=b19290c748027d2dfd622fe0287c5956683e587a&v=4" alt="logo" />
</div>

<div align="center">
<h1>
[ Orange Evolution ]
</h1>
<p>
Aplicação desenvolvida durante o Hackathon do <a href="https://digital.fcamara.com.br/programadeformacao">programa de formação</a> da <a href="https://fcamara.com.br/">FCamara</a> pelo Squad 2.
</p>
</div>

## Tabela de conteúdos

1. [Informações Gerais](#informações-gerais)
1. [Tecnologias](#tecnologias)
1. [Requisitos](#requisitos)
1. [Instalação](#instalação)
1. [Como Contribuir](#como-contribuir)
1. [Licença](#licença)

## Informações Gerais

O objetivo desse projeto é criar o front-end da plataforma do [Orange Evolution](https://digital.fcamara.com.br/orange-evolution) onde o back-end se encontra nesse [repositório](https://github.com/Hackathon-Squad-2/back-end), com o objetivo de que as pessoas possam ter acesso de forma mais organizada a trilhas disponibilizadas, e que possam visualizar melhor sua evolução conforme consomem os conteúdos.

## Tecnologias

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Typescript](https://github.com/Microsoft/TypeScript)
- [Axios](https://axios-http.com/)

## Requisitos

- [NodeJS](https://nodejs.org/en/): Version 16.16.0
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install): Version 1.22.19

## Instalação

Verifique que o seu sistema tenha as dependências listadas em [Requisitos](#requisitos), antes de iniciar a aplicação. E certifique-se que o back-end está rodando, por padrão essa aplicação assume que o back-end roda na porta `3000` caso tenha alterado, por favor mude a opção `VITE_API_URL=` do arquivo `.env`, para URL e porta corretas.

<br>

> Essa documentação assume que você está usando **yarn**, caso prefira usar npm, pnpm e afins ajuste os comandos.

1. Clone o projeto:
   ```sh
   git clone https://github.com/Hackathon-Squad-2/front-end.git
   ```
1. Acesse a pasta do projeto:
   ```sh
   cd front-end
   ```
1. Instale as dependências:
   ```sh
   yarn
   ```
1. Inicie a aplicação:
   ```sh
   yarn dev --open
   ```

## Rotas relevantes

- `login` - /login
- `register`- /register

Para acesso as trilhas como administrador, entre no login com os seguintes dados:

**E-mail**:

```
admin@squad2.com
```

**Senha**:

```
squad2admin
```

Você será automaticamente redirecionado para o `Dashboard` onde poderá adicionar/remover trilhas e conteúdos.

## Como Contribuir

Para contribuir com o projeto, siga estas etapas:

1. Faça um **fork** deste repositório.
2. Crie um branch: `git checkout -b <feature/<nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m 'feat(scope): <mensagem_commit>'`
4. Envie para o branch original: `git push origin feature/<nome_branch>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

> Neste projeto nos seguidos o padrão de **git flow** e usamos commits semânticos, caso tenha duvidas sobre esses tópicos leia os links abaixo.

<br>

<div align="center">
[
<span>
<a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">Git Flow</a>
</span>
|
<span>
<a href="https://sparkbox.com/foundry/semantic_commit_messages">Commit Semânticos</a>
</span>
]
</div>

## Licença

Esse projeto está sob licença **MIT**. Veja o arquivo [LICENÇA](LICENSE) para mais detalhes.
