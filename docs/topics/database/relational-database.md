# Anatomia de um Banco de Dados Relacional

Um banco de dados relacional é um tipo de banco de dados que armazena e fornece acesso a dados relacionados entre si por meio de tabelas. Cada tabela representa uma entidade e é composta por linhas (registros) e colunas (atributos). O modelo relacional foi proposto por Edgar F. Codd em 1970 e é amplamente utilizado devido à sua flexibilidade, integridade e facilidade de uso.

## Atributos / Colunas

Atributos, também conhecidos como colunas, representam as propriedades ou características de uma entidade armazenada em uma tabela. Cada coluna possui um nome e um tipo de dado associado (por exemplo: inteiro, texto, data). Por exemplo, em uma tabela de clientes, as colunas podem ser: id, nome, email e data_de_nascimento.

## Database

Um database (ou banco de dados) é um conjunto organizado de dados estruturados, geralmente armazenados eletronicamente em um sistema de computador. No contexto relacional, um database contém múltiplas tabelas que podem se relacionar entre si por meio de chaves primárias e estrangeiras. O gerenciamento dessas relações é feito por um Sistema Gerenciador de Banco de Dados Relacional (SGBDR), como MySQL, PostgreSQL, Oracle ou SQL Server.