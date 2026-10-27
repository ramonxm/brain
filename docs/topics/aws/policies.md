---
sidebar_label: "Policies"
description: "Documentos JSON que definem permissões na AWS."
---

# Policies (políticas)

Uma **policy** é um documento JSON que define permissões na AWS: **quem** pode executar **quais ações**, em **quais recursos** e sob **quais condições**. Policies são associadas a identidades do [IAM](./iam.md) ou diretamente a recursos.

## Como funciona

1. Toda requisição começa negada por padrão.
2. A AWS avalia todas as policies aplicáveis à identidade e ao recurso.
3. Se alguma policy tiver um `Deny` explícito para a ação, ela é negada.
4. Caso contrário, se alguma policy tiver um `Allow`, ela é permitida.

## Tipos

- **Gerenciadas pela AWS**: criadas e mantidas pela AWS para casos comuns (por exemplo, `ReadOnlyAccess`)
- **Gerenciadas pelo cliente**: criadas por você e reutilizáveis entre usuários, grupos e *roles*
- **Inline**: embutidas em uma única identidade, sem reutilização
- **Baseadas em recurso**: associadas ao próprio recurso, como a *bucket policy* de um S3

## Estrutura

- **Version**: versão da linguagem de policies (use sempre `2012-10-17`)
- **Statement**: lista de regras, cada uma com:
  - **Effect**: `Allow` ou `Deny`
  - **Action**: ações permitidas ou negadas (por exemplo, `s3:ListBucket`)
  - **Resource**: ARN dos recursos afetados
  - **Condition** (opcional): condições extras, como IP de origem ou uso de MFA

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::meu-bucket"
    }
  ]
}
```

## Boas práticas

- Conceda apenas as permissões necessárias (princípio do menor privilégio)
- Prefira policies gerenciadas a inline, para facilitar a manutenção
- Evite curingas (`"Action": "*"`, `"Resource": "*"`) fora de ambientes de teste
- Use `Condition` para restringir ainda mais o acesso
- Valide as policies com o IAM Access Analyzer

## Relacionados

- [IAM](./iam.md)
- [AWS](./index.md)
