# Threads

Uma thread é a menor unidade de execução em um sistema operacional. Em um programa, uma thread é uma sequência de instruções que pode ser executada independentemente. Os sistemas operacionais modernos suportam a execução simultânea de múltiplas threads, permitindo que os processos realizem tarefas concorrentemente. As threads compartilham o mesmo espaço de endereço, facilitando a comunicação entre elas. No entanto, isso pode levar a problemas de sincronização, como condições de corrida (race conditions).

## Exemplo de Thread

Considere um cenário onde um programa precisa baixar um arquivo da internet e processar dados simultaneamente. Em vez de executar essas tarefas sequencialmente, threads podem ser empregadas para execução concorrente.

```python
import threading
import time

def download_file():
    # Simula o download de um arquivo
    print("Baixando arquivo...")
    time.sleep(5)  # Simulando o tempo necessário para download
    print("Arquivo baixado com sucesso")

def process_data():
    # Simula o processamento de dados
    print("Processando dados...")
    time.sleep(3)  # Simulando o tempo necessário para processamento
    print("Dados processados com sucesso")

# Cria duas threads para download e processamento
download_thread = threading.Thread(target=download_file)
process_thread = threading.Thread(target=process_data)

# Inicia as threads
download_thread.start()
process_thread.start()

# Aguarda ambas as threads terminarem
download_thread.join()
process_thread.join()

print("Ambas as tarefas foram concluídas.")
```
