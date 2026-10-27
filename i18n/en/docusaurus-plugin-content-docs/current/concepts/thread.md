---
sidebar_label: "Threads"
description: "The smallest unit of execution in an operating system and how to use it for concurrency."
---

# Threads

A **thread** is the smallest unit of execution the operating system can schedule. A process can have several threads running concurrently, all sharing the same memory space.

## How it works

- Each thread has its own call stack and registers
- All threads in a process share the [heap](./memory-stack-heap.md), the code and open files
- The operating system switches between threads (or runs them in parallel on different cores)

Sharing memory makes communication between threads cheap, but requires **synchronization** (locks, semaphores, queues) to avoid race conditions, where the result depends on the order of execution.

## Implementation

Downloading a file and processing data at the same time instead of sequentially:

```python
import threading
import time


def download_file():
    print("Downloading file...")
    time.sleep(5)  # simulates the download
    print("File downloaded")


def process_data():
    print("Processing data...")
    time.sleep(3)  # simulates the processing
    print("Data processed")


download = threading.Thread(target=download_file)
process = threading.Thread(target=process_data)

download.start()
process.start()

download.join()  # wait for both threads to finish
process.join()

print("Tasks finished")  # after ~5 s, not 8 s
```

:::info[Python's GIL]

In CPython, the *Global Interpreter Lock* prevents two threads from running Python bytecode at the same time. Threads still help with I/O-bound work (network, disk); for CPU-bound work, use `multiprocessing`.

:::

## Pros and cons

### Advantages

- Makes use of idle time during I/O operations
- Cheap communication through shared memory
- Lighter to create than processes

### Disadvantages

- Race conditions and deadlocks
- Hard to debug, since bugs depend on execution order
- A failure in one thread can bring down the whole process

## When to use

- When the program spends a lot of time waiting on I/O (network requests, file reads)
- When the interface must stay responsive during a long task

## Related

- [Stack and heap memory](./memory-stack-heap.md)
- [FIFO](./fifo.md)
