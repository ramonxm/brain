# Serverless

Serverless é um modelo de computação em nuvem onde o desenvolvedor não precisa se preocupar com a infraestrutura do servidor. Em vez de gerenciar servidores físicos ou virtuais, você escreve funções ou pequenos trechos de código que são executados sob demanda, geralmente em resposta a eventos (como requisições HTTP, uploads de arquivos, etc.).

## Principais características
- **Sem gerenciamento de servidor:** O provedor de nuvem (como AWS Lambda, Azure Functions, Google Cloud Functions) cuida de toda a infraestrutura, escalabilidade, manutenção e disponibilidade.
- **Escalabilidade automática:** As funções escalam automaticamente conforme a demanda, sem necessidade de configuração manual.
- **Pagamento por uso:** Você paga apenas pelo tempo de execução do código e pela quantidade de recursos consumidos, não por servidores ociosos.
- **Foco no código:** O desenvolvedor pode focar na lógica de negócio, sem se preocupar com provisionamento, patching ou monitoramento de servidores.

## Exemplos de uso
- APIs RESTful
- Processamento de arquivos (imagens, vídeos)
- Automação de tarefas
- Integração entre sistemas

## Vantagens
- Redução de custos operacionais
- Maior agilidade no desenvolvimento
- Escalabilidade e alta disponibilidade automáticas

## Desvantagens
- Limitações de tempo de execução e recursos
- Possível vendor lock-in (dependência do provedor)
- Dificuldade de depuração e monitoramento em alguns casos