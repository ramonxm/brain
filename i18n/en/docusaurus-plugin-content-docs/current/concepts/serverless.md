---
sidebar_label: "Serverless"
description: "A cloud computing model where the provider manages all of the infrastructure."
---

# Serverless

**Serverless** is a cloud computing model in which the provider manages all of the infrastructure. Instead of maintaining servers, you publish functions that run on demand, in response to events such as HTTP requests or file uploads.

## How it works

1. Write a function with the business logic.
2. Attach the function to a trigger (HTTP request, queue message, uploaded file).
3. On each event, the provider creates or reuses an environment, runs the function and bills for the execution time.

- **No server management**: provisioning, patching and availability are handled by the provider (AWS Lambda, Azure Functions, Google Cloud Functions)
- **Automatic scaling**: the number of executions follows demand
- **Pay per use**: no cost for idle servers

## Implementation

An AWS Lambda function in Python that answers an HTTP request:

```python
import json


def handler(event, context):
    name = (event.get("queryStringParameters") or {}).get("name", "world")
    return {
        "statusCode": 200,
        "body": json.dumps({"message": f"Hello, {name}!"}),
    }
```

## Applications

- REST APIs
- File processing (images, videos)
- Scheduled task automation
- Event-driven system integration

## Pros and cons

### Advantages

- Lower operational costs
- Faster development, focused on business logic
- Scalability and high availability with no configuration

### Disadvantages

- Limits on execution time and resources
- *Cold start*: extra latency on the first run after an idle period
- Vendor lock-in
- Harder debugging and monitoring

## When to use

- Intermittent or unpredictable workloads
- Short, event-triggered tasks
- Prototypes and early-stage products

## Related

- [AWS](../topics/aws/index.md)
- [IAM](../topics/aws/iam.md)
