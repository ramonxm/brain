---
sidebar_label: "IAM"
description: "Identity and Access Management: controlling access to AWS resources."
---

# IAM (Identity and Access Management)

**IAM** is the AWS service that controls **who** can access **which** resources and **what** they can do with them. It is a global, free service available in every AWS account.

## How it works

Every request to AWS is made by an authenticated identity. IAM evaluates the [policies](./policies.md) attached to that identity and to the resource to decide whether the action is allowed. By default, everything is denied.

## Components

- **Users**: people or applications with long-term credentials (password, access keys)
- **Groups**: collections of users that share the same permissions
- **Roles**: identities with temporary permissions, assumed by users, services or external accounts
- **Policies**: JSON documents that define permissions
- **Identity providers**: integration with external logins (SAML, OIDC, corporate directories)

## Applications

- Giving each team member only the access they need
- Letting one service (such as a Lambda function) access another (such as an S3 bucket) without hard-coded keys
- Granting temporary access to another AWS account
- Requiring multi-factor authentication (MFA) for sensitive operations

## Best practices

- Do not use the *root* user for everyday tasks
- Enable MFA, especially for privileged users
- Grant the minimum permissions required (principle of least privilege)
- Prefer roles with temporary credentials over long-term access keys
- Review permissions regularly and remove what is unused

## Related

- [Policies](./policies.md)
- [AWS](./index.md)
