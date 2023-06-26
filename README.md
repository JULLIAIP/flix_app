## Flix App
O Flix App é um projeto que simula o funcionamento de uma locadora de filmes. Ele foi desenvolvido como parte de um exercício para aprimorar habilidades em desenvolvimento web utilizando Node.js.

## Entidades
O projeto possui três entidades principais:


### User: Representa um usuário do sistema. Cada usuário possui um nome de usuário único, um endereço de e-mail e uma senha para autenticação.

### Movie: Representa um filme disponível na locadora. Cada filme possui um título, uma descrição, uma categoria associada e outras informações relevantes.

### Category: Representa uma categoria de filmes. Cada categoria possui um nome único e é utilizada para classificar os filmes.

## Configuração do Projeto
Antes de executar o Flix App, é necessário configurar o ambiente. Siga os passos abaixo:

Certifique-se de ter o Node.js instalado em sua máquina. Você pode encontrar o Node.js em https://nodejs.org.

Faça o clone deste repositório para o seu ambiente de desenvolvimento local.

### No diretório do projeto, execute o seguinte comando para instalar as dependências necessárias:

npm install

Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias. Um exemplo do arquivo .env pode ser encontrado no arquivo .env.example.

### Execute o seguinte comando para iniciar o servidor de desenvolvimento:

npm run dev

## Endpoints
O Flix App fornece os seguintes endpoints para interação com a API:

### Sign Up
<li>URL: /signup</li>
Método: POST
Descrição: Cria um novo usuário na aplicação.
Parâmetros do corpo da requisição:
<li>username (string): Nome de usuário do novo usuário.</li>
<li>email (string): Endereço de e-mail do novo usuário.</li>
<li>password (string): Senha do novo usuário.</li>

### Login
<li>URL: /login</li>
Método: POST
Descrição: Realiza o login de um usuário existente.
Parâmetros do corpo da requisição:
<li>email (string): Endereço de e-mail do usuário.</li>
<li>password (string): Senha do usuário.</li>

### Ambos endpoints acima ganham um ID através do uso da lib uuid v4() e retornam um token de acesso através da lib JWT
