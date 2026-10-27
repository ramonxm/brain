---
sidebar_label: "Regiões e AZs"
description: "Como a infraestrutura global da AWS é organizada em regiões e zonas de disponibilidade."
---

# Regiões e zonas de disponibilidade

A infraestrutura global da AWS é organizada em **regiões**, áreas geográficas isoladas entre si, e cada região é formada por várias **zonas de disponibilidade** (AZs), grupos de data centers fisicamente separados.

![Mapa das regiões AWS](/img/regions.png)

## Regiões

- **Isolamento**: regiões não compartilham recursos entre si por padrão, o que aumenta a segurança e a independência
- **Identificação**: cada região tem um código, como `us-east-1` (Norte da Virgínia) ou `sa-east-1` (São Paulo)
- **Escopo**: a maioria dos serviços é regional; alguns, como o IAM, são globais

## Zonas de disponibilidade (AZs)

- **Composição**: um ou mais data centers independentes, com energia, rede e conectividade redundantes
- **Conexão**: as AZs de uma região são interligadas por links de alta velocidade e baixa latência
- **Objetivo**: distribuir uma aplicação entre AZs permite que ela continue no ar se um data center falhar

## Data centers

Instalações físicas que abrigam servidores, armazenamento e equipamentos de rede. A AWS os distribui pelo mundo para garantir disponibilidade, redundância e proximidade dos usuários finais.

## Como escolher a região

- **Latência**: regiões próximas aos usuários respondem mais rápido
- **Custo**: preços variam entre regiões, por impostos, custos operacionais e demanda
- **Conformidade**: leis de proteção de dados podem exigir que os dados fiquem em um país
- **Disponibilidade de serviços**: nem todo serviço existe em todas as regiões

## Boas práticas

- Distribua aplicações críticas em pelo menos duas AZs
- Escolha a região considerando latência, custo e requisitos legais
- Use múltiplas regiões apenas quando houver necessidade real de recuperação de desastres ou alcance global

## Relacionados

- [AWS](./index.md)
- [IAM](./iam.md)
