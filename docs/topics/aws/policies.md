# Policies (Políticas)

## O que são Policies?

Policies (ou Políticas) na AWS são documentos em formato JSON que definem permissões para acessar e gerenciar recursos da AWS. Elas especificam quem pode fazer o quê, em quais recursos e sob quais condições.

## Tipos de Policies

- **Managed Policies (Políticas Gerenciadas):** Criadas e mantidas pela AWS ou pelo próprio usuário. Podem ser reutilizadas em múltiplos usuários, grupos ou funções.
- **Inline Policies (Políticas Inline):** Associadas diretamente a um único usuário, grupo ou função. São usadas para permissões específicas e não podem ser reutilizadas.

## Estrutura de uma Policy

Uma policy é composta por:
- **Version:** Versão do documento da policy.
- **Statement:** Um ou mais blocos que definem as permissões.
  - **Effect:** Permite (Allow) ou nega (Deny) a ação.
  - **Action:** Ações da AWS que a policy permite ou nega (ex: `s3:ListBucket`).
  - **Resource:** Recursos aos quais a policy se aplica (ex: ARN de um bucket S3).
  - **Condition (opcional):** Condições adicionais para aplicar a policy.

Exemplo básico:
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

- Prefira políticas gerenciadas para facilitar a manutenção.
- Use o princípio do menor privilégio: conceda apenas as permissões necessárias.
- Revise e atualize as policies regularmente.
- Utilize condições para restringir ainda mais o acesso quando possível.
