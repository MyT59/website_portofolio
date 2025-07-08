from generate_random
import time
import threading

if __name__ == '__main__':
    start_time = start_time()
    size = 10_000_000
    threads = 10
    jobs = []

    for i in range(threads):
        out_list = []
        threads = threading.thread(target=generate_random, args=(size, out_list))
        jobs.append(thread)

        for j in jobs:
            j.start()

            for j in jobs:
                j.join()

            print('List processing complete')
            end_time + time.time()
            print('Multithreading time=', end_time - start_time)