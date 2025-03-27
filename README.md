# Todo List App

Este é um aplicativo de lista de tarefas desenvolvido com **Next.js** e **React**. Ele permite que os usuários gerenciem suas tarefas de forma eficiente, com uma interface amigável e responsiva.

### Principais Arquivos e Diretórios

- **`src/app/page.tsx`**: Página principal do aplicativo.
- **`src/app/components/`**: Contém os componentes reutilizáveis, como `Footer`, `Main` e `Layout`.
- **`.next/`**: Diretório gerado automaticamente pelo Next.js após o build.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Toastify**: Biblioteca para exibição de notificações.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **PostCSS**: Ferramenta para transformar CSS com plugins.

## Funcionalidades

- Adicionar, editar e remover tarefas.
- Exibição de notificações utilizando o `react-toastify`.
- Layout responsivo com componentes reutilizáveis.

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Gerenciador de pacotes npm ou yarn

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/todo-list-app.git
   cd todo-list-app
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra o navegador e acesse `http://localhost:3000`.

## Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Gera o build de produção.
- **`npm run start`**: Inicia o servidor em modo de produção.
- **`npm run lint`**: Executa o linter para verificar problemas no código.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
