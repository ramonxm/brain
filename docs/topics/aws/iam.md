# IAM (Identity and Access Management)

## O que é o IAM?

O IAM (Identity and Access Management) é o serviço da AWS responsável por controlar o acesso aos recursos da nuvem. Ele permite que você:

- Crie usuários e grupos para pessoas ou aplicações que precisam acessar a AWS.
- Defina permissões detalhadas usando políticas, determinando exatamente o que cada usuário ou grupo pode ou não pode fazer.
- Implemente o princípio do menor privilégio, concedendo apenas as permissões necessárias para cada tarefa.
- Gerencie credenciais de acesso, como senhas, chaves de acesso e autenticação multifator (MFA).
- Permita o acesso federado, integrando com provedores de identidade externos (como Google, Facebook, ou diretórios corporativos).

## Principais componentes do IAM

- **Usuários:** Representam pessoas ou aplicações que precisam acessar a AWS.
- **Grupos:** Coleções de usuários com permissões semelhantes.
- **Políticas:** Documentos em JSON que definem permissões.
- **Funções:** Permitem conceder permissões temporárias a usuários ou serviços.
- **Provedores de identidade:** Permitem autenticação de usuários externos.

## Boas práticas

- Nunca use o usuário root para tarefas diárias.
- Ative a autenticação multifator (MFA) para usuários privilegiados.
- Conceda apenas as permissões necessárias (princípio do menor privilégio).
- Revise e atualize permissões regularmente.