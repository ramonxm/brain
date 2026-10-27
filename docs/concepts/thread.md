---
sidebar_label: "Threads"
description: "A menor unidade de execução de um sistema operacional e como usá-la para concorrência."
---

# Threads

Uma **thread** é a menor unidade de execução que o sistema operacional consegue escalonar. Um processo pode ter várias threads executando concorrentemente, todas compartilhando o mesmo espaço de memória.

## Como funciona

- Cada thread tem sua própria pilha de chamadas e seus registradores
- Todas as threads de um processo compartilham a [heap](./memory-stack-heap.md), o código e os arquivos abertos
- O sistema operacional alterna entre as threads (ou as executa em paralelo, em núcleos diferentes)

Compartilhar memória torna a comunicação entre threads barata, mas exige **sincronização** (locks, semáforos, filas) para evitar condições de corrida (*race conditions*), em que o resultado depende da ordem de execução.

## Implementação

Baixar um arquivo e processar dados ao mesmo tempo, em vez de sequencialmente:

```python
import threading
import time


def download_file():
    print("Baixando arquivo...")
    time.sleep(5)  # simula o download
    print("Arquivo baixado")


def process_data():
    print("Processando dados...")
    time.sleep(3)  # simula o processamento
    print("Dados processados")


download = threading.Thread(target=download_file)
process = threading.Thread(target=process_data)

download.start()
process.start()

download.join()  # aguarda as duas threads terminarem
process.join()

print("Tarefas concluídas")  # após ~5 s, e não 8 s
```

:::info[GIL do Python]

No CPython, o *Global Interpreter Lock* impede que duas threads executem bytecode Python ao mesmo tempo. Threads ainda ajudam em tarefas de I/O (rede, disco); para tarefas de CPU, use `multiprocessing`.

:::

## Vantagens e desvantagens

### Vantagens

- Aproveita o tempo ocioso de operações de I/O
- Comunicação barata, por memória compartilhada
- Mais leves de criar que processos

### Desvantagens

- Condições de corrida e *deadlocks*
- Depuração difícil, pois os erros dependem da ordem de execução
- Uma falha em uma thread pode derrubar o processo inteiro

## Quando usar

- Quando o programa espera muito por I/O (requisições de rede, leitura de arquivos)
- Quando a interface precisa continuar responsiva durante uma tarefa longa

## Relacionados

- [Memória stack e heap](./memory-stack-heap.md)
- [FIFO](./fifo.md)
