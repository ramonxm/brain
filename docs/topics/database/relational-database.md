---
sidebar_label: "Banco Relacional"
sidebar_position: 2
description: "Os elementos que compõem um banco de dados relacional."
---

# Anatomia de um banco de dados relacional

Um **banco de dados relacional** armazena dados em tabelas que se relacionam entre si por meio de chaves. O modelo relacional foi proposto por Edgar F. Codd em 1970 e continua sendo o mais usado, pela flexibilidade, integridade e facilidade de consulta.

## Elementos

- **Database**: conjunto organizado de tabelas, gerenciado por um [RDBMS](./definitions.md) como MySQL, PostgreSQL, Oracle ou SQL Server
- **Tabela**: representa uma entidade (por exemplo, `clientes` ou `pedidos`)
- **Coluna (atributo)**: uma propriedade da entidade, com nome e tipo de dado (inteiro, texto, data)
- **Linha (registro)**: uma ocorrência da entidade, com um valor para cada coluna
- **Chave primária**: coluna (ou conjunto de colunas) que identifica cada linha de forma única
- **Chave estrangeira**: coluna que referencia a chave primária de outra tabela, criando um relacionamento

## Exemplo

Uma tabela `clientes` e uma tabela `pedidos`, relacionadas pela coluna `cliente_id`:

| id (PK) | nome        | email            |
| :------ | :---------- | :--------------- |
| 1       | João Silva  | joao@email.com   |
| 2       | Maria Souza | maria@email.com  |

| id (PK) | cliente_id (FK) | total  |
| :------ | :-------------- | -----: |
| 10      | 1               | 150,00 |
| 11      | 1               | 89,90  |
| 12      | 2               | 42,00  |

Cada pedido aponta para um cliente existente; o RDBMS impede, por exemplo, um pedido com `cliente_id = 3` se esse cliente não existir.

## Relacionamentos

- **Um para um**: cada linha de A corresponde a no máximo uma linha de B
- **Um para muitos**: um cliente tem vários pedidos (o caso do exemplo)
- **Muitos para muitos**: alunos e disciplinas, representado por uma tabela intermediária

## Perguntas de revisão

<details>
<summary>Qual a diferença entre chave primária e chave estrangeira?</summary>

A chave primária identifica cada linha de forma única. A chave estrangeira referencia a chave primária de outra tabela.

</details>

<details>
<summary>Como se representa um relacionamento muitos para muitos?</summary>

Com uma tabela intermediária que tem chaves estrangeiras para as duas tabelas.

</details>

<details>
<summary>No exemplo, o que impede um pedido com `cliente_id = 3`?</summary>

A integridade referencial: o RDBMS rejeita uma chave estrangeira que não existe na tabela referenciada.

</details>

## Relacionados

- [DBMS e RDBMS](./definitions.md)
- [SQL](./sql.md)
