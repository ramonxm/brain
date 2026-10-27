---
sidebar_label: "SQL"
description: "The standard language to define, query and manipulate relational databases."
---

# SQL

**SQL** (*Structured Query Language*) is the standard language to define, query and manipulate data in relational databases. It is declarative: you describe **what** you want, and the database decides **how** to execute it.

## Command categories

| Category | Meaning               | Commands                         |
| :------- | :-------------------- | :------------------------------- |
| **DDL**  | Data definition       | `CREATE`, `ALTER`, `DROP`        |
| **DML**  | Data manipulation     | `INSERT`, `UPDATE`, `DELETE`     |
| **DQL**  | Data query            | `SELECT`                         |
| **DCL**  | Access control        | `GRANT`, `REVOKE`                |
| **TCL**  | Transaction control   | `BEGIN`, `COMMIT`, `ROLLBACK`    |

## Example

```sql
-- DDL: create the table
CREATE TABLE customers (
    id    INT PRIMARY KEY,
    name  VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

-- DML: insert and update data
INSERT INTO customers (id, name, email) VALUES (1, 'John Smith', 'john@email.com');
UPDATE customers SET name = 'John P. Smith' WHERE id = 1;

-- DQL: query data
SELECT name, email
FROM customers
WHERE email LIKE '%@email.com'
ORDER BY name;

-- DML: delete data
DELETE FROM customers WHERE id = 1;
```

## Applications

- Creating and changing the database structure (tables, indexes, views)
- Inserting, updating and deleting records
- Querying and combining data from several tables (`JOIN`)
- Controlling access permissions

## Best practices

- Always use `WHERE` in `UPDATE` and `DELETE`, and check the filter with a `SELECT` first
- List columns instead of using `SELECT *` in production code
- Use parameters (*prepared statements*) instead of concatenating values, to avoid SQL injection
- Index columns frequently used in filters and `JOIN`s

## Related

- [Relational database](./relational-database.md)
- [DBMS and RDBMS](./definitions.md)
