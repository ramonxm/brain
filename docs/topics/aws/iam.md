---
sidebar_label: "IAM"
sidebar_position: 2
description: "Identity and Access Management: controle de acesso aos recursos da AWS."
---

# IAM (Identity and Access Management)

O **IAM** é o serviço da AWS que controla **quem** pode acessar **quais** recursos e **o que** pode fazer com eles. É um serviço global e gratuito, presente em toda conta AWS.

## Como funciona

Toda requisição à AWS é feita por uma identidade autenticada. O IAM avalia as [policies](./policies.md) associadas a essa identidade e ao recurso para decidir se a ação é permitida. Por padrão, tudo é negado.

## Componentes

- **Usuários**: pessoas ou aplicações com credenciais de longo prazo (senha, chaves de acesso)
- **Grupos**: coleções de usuários que compartilham as mesmas permissões
- **Funções (*roles*)**: identidades com permissões temporárias, assumidas por usuários, serviços ou contas externas
- **Policies**: documentos JSON que definem as permissões
- **Provedores de identidade**: integração com logins externos (SAML, OIDC, diretórios corporativos)

## Aplicações

- Dar a cada pessoa da equipe apenas o acesso de que ela precisa
- Permitir que um serviço (como uma função Lambda) acesse outro (como um bucket S3) sem chaves fixas no código
- Conceder acesso temporário a outra conta AWS
- Exigir autenticação multifator (MFA) em operações sensíveis

## Boas práticas

- Não use o usuário *root* em tarefas do dia a dia
- Ative o MFA, especialmente para usuários privilegiados
- Conceda o mínimo de permissões necessário (princípio do menor privilégio)
- Prefira *roles* com credenciais temporárias a chaves de acesso de longo prazo
- Revise periodicamente as permissões e remova o que não é usado

## Perguntas de revisão

<details>
<summary>O que acontece com uma requisição que nenhuma policy permite?</summary>

Ela é negada. No IAM, tudo é negado por padrão.

</details>

<details>
<summary>Por que preferir *roles* a chaves de acesso de longo prazo?</summary>

*Roles* usam credenciais temporárias. Chaves fixas podem vazar e continuam válidas indefinidamente.

</details>

<details>
<summary>Qual a diferença entre usuário, grupo e *role*?</summary>

Usuário é uma identidade com credenciais de longo prazo. Grupo é um conjunto de usuários com as mesmas permissões. *Role* é uma identidade assumida temporariamente por usuários, serviços ou outras contas.

</details>

## Relacionados

- [Policies](./policies.md)
- [AWS](./index.md)
