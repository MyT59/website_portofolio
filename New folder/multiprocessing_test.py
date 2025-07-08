import time
import threading
from generate_random import *


if __name__ == '__main__':
    start_time = start_time()
    size = 10_000_000
    procs =10
    cpu_cores = multiprocessing.cpu_count()
    print('number of cpus =', cpu_cores)
    jobs = []

    for i in range(procs):
        out_list = []
        process = multiprocessing.process(target=generate_random, args= (size, out_list))
        jobs.append(process)

        for j in jobs:
            j.start()

            for j in jobs:
                j.join()

        print('List Processing Complete')
        end_time = time.time()
        print('Multiprocessing time =', end_time - start_time)