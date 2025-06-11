# Regiões e AZs


## O que são Regiões na AWS?

As regiões da AWS são áreas geográficas distintas que contêm múltiplos data centers fisicamente separados, chamados de Zonas de Disponibilidade (AZs). Cada região é isolada das demais para garantir maior segurança e resiliência.


![Mapa das regiões AWS](/img/regions.png)


## Zonas de Disponibilidade (AZs)

Uma Zona de Disponibilidade é composta por um ou mais data centers independentes, com energia, rede e conectividade redundantes. As AZs de uma mesma região são interligadas por conexões de alta velocidade e baixa latência, permitindo a criação de aplicações tolerantes a falhas.



## Data Centers

Os data centers são instalações físicas que abrigam servidores, sistemas de armazenamento e equipamentos de rede. A AWS distribui seus data centers estrategicamente pelo mundo para garantir disponibilidade, redundância e proximidade dos usuários finais.

## Interconexão e Estrutura

As regiões não compartilham recursos entre si por padrão, o que aumenta a segurança e a independência. Já as AZs dentro de uma mesma região são conectadas para facilitar a replicação de dados e a alta disponibilidade das aplicações.

## Impacto em Custos e Desempenho

A escolha da região pode impactar diretamente o custo dos serviços e a latência das aplicações. Regiões mais próximas dos usuários finais tendem a oferecer melhor desempenho. Além disso, os preços dos serviços podem variar entre regiões devido a fatores como impostos, custos operacionais e demanda local.
