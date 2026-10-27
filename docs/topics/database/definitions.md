---
sidebar_label: "DBMS e RDBMS"
description: "O que são sistemas gerenciadores de banco de dados e a variante relacional."
---

# DBMS e RDBMS

Um **DBMS** (*Database Management System*, ou SGBD) é o software que cria, gerencia e manipula bancos de dados, servindo de interface entre os dados, os usuários e as aplicações. Um **RDBMS** é um DBMS baseado no modelo relacional, em que os dados ficam em tabelas relacionadas entre si.

## DBMS

### Funções

- **Armazenamento**: organiza os dados em disco e em memória
- **Consulta e manipulação**: permite inserir, ler, atualizar e remover dados
- **Segurança**: controla quem pode acessar o quê
- **Integridade**: garante que os dados respeitem as regras definidas
- **Transações**: agrupa operações que devem acontecer juntas ou não acontecer
- **Backup e recuperação**: protege contra perda de dados

### Exemplos

- MySQL
- PostgreSQL
- Oracle Database
- Microsoft SQL Server
- MongoDB (não relacional)

## RDBMS

### Características

- **Tabelas**: dados organizados em linhas (registros) e colunas (atributos)
- **SQL**: linguagem padrão para definir, consultar e manipular os dados
- **Integridade referencial**: relacionamentos garantidos por chaves primárias e estrangeiras
- **Transações ACID**: atomicidade, consistência, isolamento e durabilidade

### Exemplos

- MySQL
- PostgreSQL
- Oracle Database
- Microsoft SQL Server
- SQLite

## Comparativo

| Característica | DBMS                                 | RDBMS                          |
| :------------- | :----------------------------------- | :----------------------------- |
| Modelo         | Qualquer (documento, chave-valor...) | Relacional (tabelas)           |
| Linguagem      | Depende do sistema                   | SQL                            |
| Relacionamentos | Nem sempre suportados               | Chaves primárias e estrangeiras |
| Exemplo        | MongoDB                              | PostgreSQL                     |

Todo RDBMS é um DBMS, mas nem todo DBMS é relacional.

## Relacionados

- [Banco de dados relacional](./relational-database.md)
- [SQL](./sql.md)
