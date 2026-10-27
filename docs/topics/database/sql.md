---
sidebar_label: "SQL"
description: "A linguagem padrão para definir, consultar e manipular bancos relacionais."
---

# SQL

**SQL** (*Structured Query Language*) é a linguagem padrão para definir, consultar e manipular dados em bancos de dados relacionais. Ela é declarativa: você descreve **o que** quer obter, e o banco decide **como** executar.

## Categorias de comandos

| Categoria | Significado                  | Comandos                            |
| :-------- | :--------------------------- | :---------------------------------- |
| **DDL**   | Definição de dados           | `CREATE`, `ALTER`, `DROP`           |
| **DML**   | Manipulação de dados         | `INSERT`, `UPDATE`, `DELETE`        |
| **DQL**   | Consulta de dados            | `SELECT`                            |
| **DCL**   | Controle de acesso           | `GRANT`, `REVOKE`                   |
| **TCL**   | Controle de transações       | `BEGIN`, `COMMIT`, `ROLLBACK`       |

## Exemplo

```sql
-- DDL: cria a tabela
CREATE TABLE customers (
    id    INT PRIMARY KEY,
    name  VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

-- DML: insere e atualiza dados
INSERT INTO customers (id, name, email) VALUES (1, 'João Silva', 'joao@email.com');
UPDATE customers SET name = 'João P. Silva' WHERE id = 1;

-- DQL: consulta dados
SELECT name, email
FROM customers
WHERE email LIKE '%@email.com'
ORDER BY name;

-- DML: remove dados
DELETE FROM customers WHERE id = 1;
```

## Aplicações

- Criar e alterar a estrutura do banco (tabelas, índices, visões)
- Inserir, atualizar e remover registros
- Consultar e combinar dados de várias tabelas (`JOIN`)
- Controlar permissões de acesso

## Boas práticas

- Sempre use `WHERE` em `UPDATE` e `DELETE`, e confira o filtro com um `SELECT` antes
- Liste as colunas em vez de usar `SELECT *` em código de produção
- Use parâmetros (*prepared statements*) em vez de concatenar valores, para evitar SQL injection
- Crie índices para as colunas usadas com frequência em filtros e `JOIN`s

## Relacionados

- [Banco de dados relacional](./relational-database.md)
- [DBMS e RDBMS](./definitions.md)
