# AWS IAM (Identity and Access Management)

AWS IAM (Identity and Access Management) is the service that lets you securely manage access to AWS resources.
With IAM you control **who** can access **which resources** and **what actions** they are allowed to perform.

## Core Concepts

- **Users:** Identities that represent people or applications.
- **Groups:** Collections of users that share permissions.
- **Roles:** Identities that can be assumed temporarily by users, applications, or services.
- **Policies:** JSON documents that define permissions (allow or deny actions on resources).

## Best Practices

- Follow the **principle of least privilege**: grant only the permissions that are strictly necessary.
- Prefer **roles** over long-lived access keys.
- Use **IAM groups** to manage permissions for multiple users.
- Regularly review and rotate credentials.

