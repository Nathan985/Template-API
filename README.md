<h1 align="center">Standard API Template</h1>

### Description:

<p>
  API-Restfull template for use. Made with Express and NodeJs using Typescript syntax
</p>

<div>

  ### Stacks:
  
  <div align="center" >
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  </div>
  
  ### Template:
  
  <p>
    The Template is configured with necessary dependencies for api development, and also development aid dependencies, if you don't want to use any of them, just delete the configuration.
  </p>
  
  #### Main dependencies:
  <ul>
     <li>Express</li>
     <li>Cors</li>
     <li>Server-favicon</li>
  </ul>
  
  #### Secondary dependencies:
  <ul>
     <li>Dotenv</li>
     <li>Jest</li>
     <li>Ts-jest</li>
     <li>Supertest</li>
     <li>Typescript</li>
     <li>Morgan</li>
     <li>Types/*</li>
  </ul>
  
  ### Scripts API:
  
  <p>
    To use the scripts below open the console in the root directory of the application and run the desired script with the prefix <b>'yarn'</b> and then the script name
  </p>
  <p>Inicialização da API em modo de Produção</p>
  
  ```
    yarn start
  ```
  <p>Inicialização da API em modo de Desenvolvimento</p>
  
  ```
    yarn dev
  ```
  <p>Inicialização dos Testes da API</p>
  
  ```
    yarn test
  ```
  
  ### Variaveis de Ambiente:
  
  <p>The Template has two environment variable files the <b>.env</b> and the <b>.env.test</b> they are for different types of project initialization the .env loads all variables related to the api, .env.test loads variables related to the test environment.
 </p>
  
  ### Routes:
  
  <p>
    The template has a default startup route located in the <b>./src/routes.ts</b> file, where there is the <b>/initialRoute</b> route with the GET method, to access it, make a request to <b>"/api/initialRoute"</b> using GET method. In addition to this route, the template has route handling configured when an invalid url is typed.
  </p>
  
  ### Api test:
  
  <p>To consume the API in development mode we recommend using the following applications:</p>
  <img src="https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
  
  <p>
To make this api request, inform the ip: "<b>https://localhost:3333/api/</b>". If you are in development mode, otherwise change the url. If you have changed the default api port, it is necessary to change the url too</p>
</div>
