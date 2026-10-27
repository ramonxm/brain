---
sidebar_label: "Relational Database"
description: "The building blocks of a relational database."
---

# Anatomy of a relational database

A **relational database** stores data in tables that relate to one another through keys. The relational model was proposed by Edgar F. Codd in 1970 and is still the most widely used, thanks to its flexibility, integrity and ease of querying.

## Elements

- **Database**: an organized set of tables, managed by an [RDBMS](./definitions.md) such as MySQL, PostgreSQL, Oracle or SQL Server
- **Table**: represents an entity (for example, `customers` or `orders`)
- **Column (attribute)**: a property of the entity, with a name and a data type (integer, text, date)
- **Row (record)**: one occurrence of the entity, with a value for each column
- **Primary key**: column (or set of columns) that uniquely identifies each row
- **Foreign key**: column that references another table's primary key, creating a relationship

## Example

A `customers` table and an `orders` table, related by the `customer_id` column:

| id (PK) | name        | email            |
| :------ | :---------- | :--------------- |
| 1       | John Smith  | john@email.com   |
| 2       | Mary Jones  | mary@email.com   |

| id (PK) | customer_id (FK) | total  |
| :------ | :--------------- | -----: |
| 10      | 1                | 150.00 |
| 11      | 1                | 89.90  |
| 12      | 2                | 42.00  |

Each order points to an existing customer; the RDBMS prevents, for example, an order with `customer_id = 3` if that customer does not exist.

## Relationships

- **One to one**: each row in A matches at most one row in B
- **One to many**: a customer has many orders (the example above)
- **Many to many**: students and courses, represented by a junction table

## Related

- [DBMS and RDBMS](./definitions.md)
- [SQL](./sql.md)
