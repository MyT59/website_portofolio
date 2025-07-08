from generate_random import *
import time


if __name__ == '__main__':
    start_time =time.time()
    size = 10_000_000
    n_exec = 10 

    for i in range(n_exec):
        our_list = []
        generate_random(size, out_list)
        
    print('list processing completed')
    end_time = time.time()
    print('serial time =', end_time - start_time)