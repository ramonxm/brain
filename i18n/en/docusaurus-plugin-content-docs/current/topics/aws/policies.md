# AWS IAM Policies

IAM policies are JSON documents that define permissions in AWS.  
They specify **which actions** are allowed or denied on **which resources**, and under **which conditions**.

## Policy Structure

An IAM policy is made up of one or more statements, each containing:

- **Effect:** `Allow` or `Deny`
- **Action:** The operations that are being controlled (for example, `s3:GetObject`)
- **Resource:** The ARN of the resource(s) the statement applies to
- **Condition (optional):** Additional constraints for when the statement is in effect

## Examples of Use

- Grant read-only access to an S3 bucket.
- Allow starting and stopping EC2 instances in a specific Region.
- Restrict access based on IP address, time, or tags.

Design policies carefully to avoid over-privileged access and always test them in a controlled environment before applying them broadly.

