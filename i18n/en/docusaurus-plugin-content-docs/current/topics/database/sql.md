# SQL (Structured Query Language)

SQL (Structured Query Language) is the standard language used to interact with relational databases.  
With SQL you can create structures, insert data, query, update, and delete records.

## Main Types of SQL Commands

- **DDL (Data Definition Language):** Defines and modifies database structures.
  - `CREATE`, `ALTER`, `DROP`
- **DML (Data Manipulation Language):** Manipulates data within tables.
  - `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- **DCL (Data Control Language):** Controls access and permissions.
  - `GRANT`, `REVOKE`
- **TCL (Transaction Control Language):** Manages transactions.
  - `COMMIT`, `ROLLBACK`, `SAVEPOINT`

## Example Query

```sql
SELECT name, email
FROM users
WHERE active = true
ORDER BY created_at DESC;
```

SQL is fundamental for anyone working with relational databases and is widely supported across the main RDBMS on the market.

