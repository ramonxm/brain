# Threads

A thread is the smallest unit of execution in an operating system. In a program, a thread is a sequence of instructions that can be executed independently. Modern operating systems support the simultaneous execution of multiple threads, allowing processes to perform tasks concurrently. Threads share the same address space, facilitating communication between them. However, this can lead to synchronization issues, such as race conditions.

## Thread Example

Consider a scenario where a program needs to download a file from the internet and process data simultaneously. Instead of executing these tasks sequentially, threads can be employed for concurrent execution.

```python
import threading
import time

def download_file():
    # Simulate downloading a file
    print("Downloading file...")
    time.sleep(5)  # Simulating time taken to download
    print("File downloaded successfully")

def process_data():
    # Simulate processing data
    print("Processing data...")
    time.sleep(3)  # Simulating time taken to process
    print("Data processed successfully")

# Create two threads for downloading and processing
download_thread = threading.Thread(target=download_file)
process_thread = threading.Thread(target=process_data)

# Start the threads
download_thread.start()
process_thread.start()

# Wait for both threads to finish
download_thread.join()
process_thread.join()

print("Both tasks completed.")
