---
nav:
  order: 2
  title: Benchmark
  path: /benchmark
sidemenu: false
---

## Benchmark

Deep learning (DL) models have become core modules for many applications. However, deploying these models without careful performance benchmarking that considers both hardware and software's impact often leads to poor service and costly operational expenditure. To facilitate DL models' deployment, we implement an automatic and comprehensive benchmark system for DL developers. To accomplish benchmark-related tasks, the developers only need to prepare a configuration file consisting of a few lines of code. Our system, deployed to a leader server in DL clusters, will dispatch users' benchmark jobs to follower workers. Next, the corresponding requests, workload, and even models can be generated automatically by the system to conduct DL serving benchmarks. Finally, developers can leverage many analysis tools and models in our system to gain insights into the trade-offs of different system configurations. In addition, a two-tier scheduler is incorporated to avoid unnecessary interference and improve average job compilation time by up to 1.43x (equivalent of 30\% reduction). Our system design follows the best practice in DL clusters operations to expedite day-to-day DL service evaluation efforts by the developers. We conduct many benchmark experiments to provide in-depth and comprehensive evaluations. We believe these results are of great values as guidelines for DL service configuration and resource allocation.

## Benchmark Settings

| ID  | Platform(Arch) |        Version        | Memory | Peak TFLOPS(FP32/FP16) | MemoryBandwidth (GB/s) | AWS(Instances) | Google Cloud(Instances) |
| :-: | :------------: | :-------------------: | :----: | :--------------------: | :--------------------: | :------------: | :---------------------: |
| C1  |      CPU       | Intel Xeon E502698 v4 | 128 GB |           -            |           -            |       -        |            -            |
| G1  |  GPU (Volta)   |      Tesla V100       | 32 GB  |      15.7 (31.4)       |          900           |       4        |            4            |
| G2  |  GPU (Turing)  |    GeForce 2080Ti     |  11GB  |      14.25 (28.5)      |          616           |       -        |            -            |
| G3  |  GPU (Turing)  |       Tesla T4        |  16GB  |       8.1 (16.2)       |          300           |       7        |            3            |
| G4  |  GPU (Pascal)  |       Tesla P4        |  8GB   |       5.5 (11.0)       |          192           |       -        |            3            |
