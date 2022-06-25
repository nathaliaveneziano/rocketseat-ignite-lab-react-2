# Ignite Lab 02 - Plataforma de Vídeos

Essa plataforma, muito comum em semanas de treinamento online, contém uma página de cadastro e a tela do treinamento composta de vídeo, descrição, cronograma de aulas (liberadas ou desabilitadas por data), comentários.

## Ferramentas utilizadas:

- Vite
- TailwindCSS
- PostCSS
- GraphQL
- Apollo
- GraphCMS

## Extensões VS Code:

- [GraphQL](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

## [Layout Figma](https://www.figma.com/community/file/1120711251998877938)

## Desenvolvimento:

### Dia 01

1. Iniciaremos o projeto baseado em Vite, usando o código abaixo:

```bash
npm create vite@latest
```

Adicionamos a seguinte configuração:

- **Project Name:** nome do projeto (ex.: event-platform)
- **Select a framework:** react
- **Select a variant:** react-ts

Com essas configurações selecionadas, nosso projeto está criado.

2. Ao acessar a pasta, devemos instalar todas as dependências básicas do projeto:

```bash
npm i
```

3. Agora adicionaremos o TailwindCSS, PostCSS e o autoprefixer ao projeto:

```bash
npm i tailwindcss postcss autoprefixer -D
```

Após a instalação, criaremos o arquivo de configuração:

```bash
npx tailwindcss init -p
```

4. Com tudo configurado, vamos no arquivo `taildwind.config.js` e adicionamos os arquivos que poderão ter alguma estilização e poderão ser processados por ele:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // informação adicionada
    './src/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

5. Removemos os arquivos `App.css`, `favicon.png`, `index.css` e `logo.svg`, deixando o projeto com os arquivos necessários para o projeto. Com essas remoções, devemos ir nos arquivos `main.tsx` e apagar a referência a eles.

6. No arquivo `App.tsx`, removemos todo o código dentro do `return ()` e toda a referência ao `useState` e os imports do logo e `App.css`.

7. Depois desses ajustes, criamos um diretório `styles` e adicionamos o arquivo `global.css` que conterá toda a estrutura básica de CSS do projeto.Dentro do arquivo criado, adicionamos o setup do Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

8. Para que o projeto interprete o Tailwind, no arquivo `main.tsx` adicionamos o seguinte import:

```tsx
import './styles/global.css';
```

Agora iniciaremos a configuração do CMS. O CMS (Content Management System) é o painel de ADMIN, onde configuramos e armazenamos informações no banco de dados e os dados são fornecidos através de uma API REST ou GraphQL. O GraphCMS, que utilizaremos no projeto, segue esse padrão, conhecido como 'Headless'. O WordPress é um grande conhecido mas além do painel de ADMIN, trás também o parte do front-end(temas). A vantagem de se usar um CMS Headless é que temos a liberdade de desenvolver o front-end com qualquer framework (react, vue, laravel, entre outros).

9. Faremos o clone do projeto GraphCMS através do [link](https://rseat.in/lab-graphcms) e defina um nome para o projeto.

10. Após o clone, adicione alguns campos nas colunas `Teacher`, `Lesson` para teste.

No GraphQL temos dois tipos de operações:

- query: busca dados
- mutation: criar, alterar ou deletar dados

11. Ainda no GraphCMS, vamos na opção 'Project Settings' / 'API Access', copiamos o link do 'Content API'.

12. Depois disso, retornamos ao VS Code e instalamos o Apollo e GraphQL para fazer a integração dos dados com o React. Para issmo, usamos o código abaixo:

```bash
npm i @apollo/client graphql
```
