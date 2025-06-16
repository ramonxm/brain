# SQL

SQL (Structured Query Language) é uma linguagem padrão utilizada para gerenciar e manipular bancos de dados relacionais. Com SQL, é possível criar, modificar, consultar e excluir dados armazenados em tabelas de um banco de dados.

## Para que serve o SQL?

O SQL é utilizado para:
- Criar e modificar estruturas de banco de dados (tabelas, índices, visões, etc.)
- Inserir, atualizar e deletar dados
- Consultar dados de uma ou mais tabelas
- Controlar permissões de acesso aos dados

## Principais comandos SQL

- `SELECT`: Consulta dados em uma ou mais tabelas
- `INSERT`: Insere novos registros em uma tabela
- `UPDATE`: Atualiza dados existentes em uma tabela
- `DELETE`: Remove registros de uma tabela
- `CREATE`: Cria novas tabelas ou outros objetos no banco de dados
- `DROP`: Remove tabelas ou outros objetos do banco de dados

## Exemplo básico

```sql
-- Criação de uma tabela
CREATE TABLE clientes (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100)
);

-- Inserção de dados
INSERT INTO clientes (id, nome, email) VALUES (1, 'João Silva', 'joao@email.com');

-- Consulta de dados
SELECT * FROM clientes;
```
