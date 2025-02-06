# Hamburgueria - Registro de Pedidos

Este projeto é uma pequena aplicação desenvolvida com **React + Vite** e estilizada com **styled-components**. A aplicação permite o registro de pedidos em uma hamburgueria, seguindo uma ordem FIFO (First In, First Out), possibilitando a visualização e exclusão dos pedidos.

## Tecnologias Utilizadas
- **Frontend:** React, Vite, styled-components
- **Backend:** Node.js, Express
- **Banco de Dados:** Os pedidos são armazenados em uma constante no backend, sendo perdidos sempre que o servidor é reiniciado.

## Funcionalidades

### Home (Tela Inicial)
- Possui dois inputs:
  - **Pedido:** Campo para registrar o pedido completo do cliente.
  - **Nome do Cliente:** Identificação de quem fez o pedido.
- Um botão que, ao ser clicado, registra os dados na API Express.
- A API adiciona atributos extras como **ID** e outros detalhes necessários.

### Tela de Pedidos
- Exibe os pedidos registrados na API, organizados em **ordem FIFO**.
- Cada pedido é apresentado dentro de **WrapperOrders**, que mostra:
  - **Detalhes do Pedido**
  - **Nome do Cliente**
  - **Botão de Exclusão** para remover pedidos.
- Possibilidade de futuras alterações na ordem dos pedidos, dependendo da situação.

## Melhorias Futuras
- **Consultar Situação do Pedido**
- **Consultar Dados de um Pedido Específico**
- **Nova Tela para Pedidos Prontos**
- **Utilização de um Banco de Dados**
- **Correções e refatoração de código**
- **Modificação da Segunda Tela** para exibir a situação de cada pedido e alterar a cor da div quando o pedido estiver pronto.

## Como Rodar o Projeto
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Instale as dependências:
   ```bash
   cd nome-do-repositorio
   npm install
   ```
3. Inicie o servidor backend:
   ```bash
   npm run api
   ```
4. Inicie o frontend:
   ```bash
   npm run dev
   ```

Agora você pode acessar a aplicação em `http://localhost:5173`.

---
Este README será atualizado conforme novas funcionalidades forem implementadas! 🚀

