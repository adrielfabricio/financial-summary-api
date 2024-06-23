# financial-summary-api
Financial Summary for iFood Social project

## Visão geral
Este projeto é uma API para o IFood Social. Ele é construído utilizando Node.js, Express, TypeORM, e MySQL, com um foco em uma arquitetura de camadas, incluindo repositórios, serviços e controladores. Este sistema suporta funcionalidades como a visualização de vendas por período, listagem de vendas por categoria, produto e localidade, e gestão de transações financeiras.

## Executando

### Pré-requisitos

- Node.js
- MySQL

### Configuração do banco de dados

1. Crie um banco de dados MySQL chamado `IFOODSOCIAL`
2. Atualize as credenciais do banco de dados no arquivo de configuração `.env`. Para isso, copie o `.env.example` e renomei para `.env`, o arquivo de configuração do banco pode ser localizado em `src/config/database`.

### Instalação
1. Clone o repositório
```
git clone https://github.com/adrielfabricio/financial-summary-api.git
```

2. Navegue até o diretório do projeto:
```
cd financial-summary-api/
```

3. Instale as dependênciasÇ
```
yarn
# ou
npm install
```

### Executando o servidor
1. Execute as migrações para configurar o banco de dados:
```
yarn migration:run
# ou
npm run migration:run
```

2. Inicie o servidor
```
yarn dev
# ou
npm start
```

### Executando testes
Para executar os testes unitários, utilize o comando:
```
yarn test
# ou
npm test
```

## Padrão de projeto
O projeto segue uma arquitetura de camadas composta por:

- **Controllers:** Responsáveis por receber as requisições HTTP e retornar as respostas HTTP.
- **Services:** Contêm a lógica de negócio e servem como intermediários entre os controllers e os repositórios.
- **Repositories:** Responsáveis pela interação direta com o banco de dados.

## Estrutura de diretórios
A estrutura de diretórios do projeto é a seguinte:

```
financial-summary-api/
|-- src/
|   |-- config/
|   |   |-- database.ts
|   |-- controllers/
|   |   |-- sales.controller.ts
|   |   |-- __tests__/
|   |       |-- sales.controller.test.ts
|   |-- models/
|   |   |-- city.model.ts
|   |   |-- customer.model.ts
|   |   |-- deliverer.model.ts
|   |   |-- employee.model.ts
|   |   |-- enterprise.model.ts
|   |   |-- financial-transaction.model.ts
|   |   |-- locality.model.ts
|   |   |-- menu-section.model.ts
|   |   |-- menu-section-product.model.ts
|   |   |-- menu-type.model.ts
|   |   |-- menu.model.ts
|   |   |-- neighborhood.model.ts
|   |   |-- order.model.ts
|   |   |-- payment-method.model.ts
|   |   |-- product-type.model.ts
|   |   |-- product.model.ts
|   |   |-- sale.model.ts
|   |-- repositories/
|   |   |-- interfaces/
|   |   |   |-- ISalesRepository.ts
|   |   |-- implementations/
|   |   |   |-- sale.repository.ts
|   |   |   |-- __tests__/
|   |   |       |-- sale.repository.test.ts
|   |-- services/
|   |   |-- interfaces/
|   |   |   |-- ISalesService.ts
|   |   |-- implementations/
|   |   |   |-- sales.service.ts
|   |   |   |-- __tests__/
|   |   |       |-- sales.service.test.ts
|   |-- migrations/
|   |   |-- 1625072334000-SeedDatabase.ts
|   |-- routes/
|   |   |-- transactionRoutes.ts
|   |-- app.ts
|   |-- server.ts
|-- tsconfig.json
|-- jest.config.js
|-- package.json
```

## Licença
Este projeto é licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes