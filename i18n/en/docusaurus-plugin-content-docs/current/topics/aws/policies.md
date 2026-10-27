---
sidebar_label: "Policies"
description: "JSON documents that define permissions in AWS."
---

# Policies

A **policy** is a JSON document that defines permissions in AWS: **who** can perform **which actions**, on **which resources** and under **which conditions**. Policies are attached to [IAM](./iam.md) identities or directly to resources.

## How it works

1. Every request starts out denied by default.
2. AWS evaluates every policy that applies to the identity and the resource.
3. If any policy has an explicit `Deny` for the action, it is denied.
4. Otherwise, if any policy has an `Allow`, it is allowed.

## Types

- **AWS managed**: created and maintained by AWS for common cases (for example, `ReadOnlyAccess`)
- **Customer managed**: created by you and reusable across users, groups and roles
- **Inline**: embedded in a single identity, not reusable
- **Resource-based**: attached to the resource itself, such as an S3 *bucket policy*

## Structure

- **Version**: policy language version (always use `2012-10-17`)
- **Statement**: list of rules, each with:
  - **Effect**: `Allow` or `Deny`
  - **Action**: actions allowed or denied (for example, `s3:ListBucket`)
  - **Resource**: ARN of the affected resources
  - **Condition** (optional): extra conditions, such as source IP or MFA usage

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::my-bucket"
    }
  ]
}
```

## Best practices

- Grant only the permissions required (principle of least privilege)
- Prefer managed policies over inline ones, for easier maintenance
- Avoid wildcards (`"Action": "*"`, `"Resource": "*"`) outside test environments
- Use `Condition` to restrict access further
- Validate policies with IAM Access Analyzer

## Related

- [IAM](./iam.md)
- [AWS](./index.md)
