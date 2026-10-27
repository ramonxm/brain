---
sidebar_label: "Regions and AZs"
description: "How AWS global infrastructure is organized into regions and availability zones."
---

# Regions and availability zones

AWS global infrastructure is organized into **regions**, geographic areas isolated from one another, and each region is made of several **availability zones** (AZs), groups of physically separate data centers.

![AWS regions map](/img/regions.png)

## Regions

- **Isolation**: regions do not share resources by default, which improves security and independence
- **Identification**: each region has a code, such as `us-east-1` (Northern Virginia) or `sa-east-1` (São Paulo)
- **Scope**: most services are regional; a few, such as IAM, are global

## Availability zones (AZs)

- **Composition**: one or more independent data centers, with redundant power, networking and connectivity
- **Connection**: the AZs of a region are linked by high-speed, low-latency connections
- **Purpose**: spreading an application across AZs keeps it running if a data center fails

## Data centers

Physical facilities that house servers, storage and networking equipment. AWS spreads them around the world to ensure availability, redundancy and proximity to end users.

## Choosing a region

- **Latency**: regions close to users respond faster
- **Cost**: prices vary between regions, due to taxes, operating costs and demand
- **Compliance**: data protection laws may require data to stay in a given country
- **Service availability**: not every service exists in every region

## Best practices

- Spread critical applications across at least two AZs
- Choose the region based on latency, cost and legal requirements
- Use multiple regions only when there is a real need for disaster recovery or global reach

## Related

- [AWS](./index.md)
- [IAM](./iam.md)
