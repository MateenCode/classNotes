import random
import time

from sorting_algorithms import *

def timeit(name, algorithm, a):
  t1 = time.time()
  algorithm(a.copy())
  t2 = time.time()
  td = t2 - t1
  print(name, "took:", td * 1000)

def test_algorithms(a):
  timeit("bubble sort", bubble_sort, a)
  timeit("bucket sort", bucket_sort, a)
  timeit("insertion sort", insertion_sort, a)
  timeit("merge sort", merge_sort, a)
  print()

a = [5,4,3,3,5,7,8,9,6,5,3,2,2,4,5,6,4,4,3,3]
large_a = [random.randint(0,9999) for _ in range(1000)]

test_algorithms(a)
test_algorithms(large_a)


