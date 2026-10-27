---
sidebar_label: "Serverless"
description: "Modelo de computação em nuvem em que o provedor gerencia toda a infraestrutura."
---

# Serverless

**Serverless** é um modelo de computação em nuvem em que o provedor gerencia toda a infraestrutura. Em vez de manter servidores, você publica funções que são executadas sob demanda, em resposta a eventos como requisições HTTP ou uploads de arquivos.

## Como funciona

1. Escreva uma função com a lógica de negócio.
2. Associe a função a um gatilho (requisição HTTP, mensagem em fila, arquivo enviado).
3. A cada evento, o provedor cria ou reutiliza um ambiente, executa a função e cobra pelo tempo de execução.

- **Sem gerenciamento de servidor**: provisionamento, patches e disponibilidade ficam com o provedor (AWS Lambda, Azure Functions, Google Cloud Functions)
- **Escalabilidade automática**: o número de execuções acompanha a demanda
- **Pagamento por uso**: não há custo com servidores ociosos

## Implementação

Uma função AWS Lambda em Python que responde a uma requisição HTTP:

```python
import json


def handler(event, context):
    name = (event.get("queryStringParameters") or {}).get("name", "mundo")
    return {
        "statusCode": 200,
        "body": json.dumps({"message": f"Olá, {name}!"}),
    }
```

## Aplicações

- APIs REST
- Processamento de arquivos (imagens, vídeos)
- Automação de tarefas agendadas
- Integração entre sistemas por eventos

## Vantagens e desvantagens

### Vantagens

- Menor custo operacional
- Desenvolvimento mais ágil, focado na lógica de negócio
- Escalabilidade e alta disponibilidade sem configuração

### Desvantagens

- Limites de tempo de execução e de recursos
- *Cold start*: latência extra na primeira execução após um período ocioso
- Dependência do provedor (*vendor lock-in*)
- Depuração e monitoramento mais difíceis

## Quando usar

- Cargas intermitentes ou imprevisíveis
- Tarefas curtas disparadas por eventos
- Protótipos e produtos em fase inicial

## Relacionados

- [AWS](../topics/aws/index.md)
- [IAM](../topics/aws/iam.md)
