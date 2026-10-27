---
sidebar_label: "DBMS and RDBMS"
description: "What database management systems are, and their relational variant."
---

# DBMS and RDBMS

A **DBMS** (*Database Management System*) is the software that creates, manages and manipulates databases, acting as the interface between data, users and applications. An **RDBMS** is a DBMS based on the relational model, in which data lives in tables related to one another.

## DBMS

### Functions

- **Storage**: organizes data on disk and in memory
- **Query and manipulation**: lets you insert, read, update and delete data
- **Security**: controls who can access what
- **Integrity**: ensures data follows the defined rules
- **Transactions**: groups operations that must all happen or none at all
- **Backup and recovery**: protects against data loss

### Examples

- MySQL
- PostgreSQL
- Oracle Database
- Microsoft SQL Server
- MongoDB (non-relational)

## RDBMS

### Characteristics

- **Tables**: data organized into rows (records) and columns (attributes)
- **SQL**: the standard language to define, query and manipulate data
- **Referential integrity**: relationships enforced by primary and foreign keys
- **ACID transactions**: atomicity, consistency, isolation and durability

### Examples

- MySQL
- PostgreSQL
- Oracle Database
- Microsoft SQL Server
- SQLite

## Comparison

| Characteristic | DBMS                              | RDBMS                       |
| :------------- | :-------------------------------- | :-------------------------- |
| Model          | Any (document, key-value...)      | Relational (tables)         |
| Language       | Depends on the system             | SQL                         |
| Relationships  | Not always supported              | Primary and foreign keys    |
| Example        | MongoDB                           | PostgreSQL                  |

Every RDBMS is a DBMS, but not every DBMS is relational.

## Related

- [Relational database](./relational-database.md)
- [SQL](./sql.md)
