export const sample_data = [
    { genre: "Sports", sold: 275, income: 2300 },
    { genre: "Strategy", sold: 115, income: 667 },
    { genre: "Action", sold: 120, income: 982 },
    { genre: "Shooter", sold: 350, income: 5271 },
    { genre: "Other", sold: 150, income: 3710 },
];

export const sample_cols = {
    sold: { alias: "销售量" },
    genre: { alias: "游戏种类" },
};

// Same model same device, different batch size.

// T4
// latency 95th:  [19.10444498062133, 17.987751960754395, 24.278080463409424, 38.25854063034057, 69.5155143737793, 126.2059211730957, 242.6874041557312, 477.7075886726379]
// throughput:  [66.39660504285953, 122.10618632689604, 176.616147347364, 223.27035861482935, 243.6001193337727, 269.28261371710175, 274.9067639729919, 279.1917945095303]
// avg_utils:  [39.2833, 44.5192, 53.5278, 62.1071, 64.0385, 68.1739, 72.3913, 75.2727]

export const smsd_dbs_T4 = [
    {
        latency: 19.10444498062133,
        throughput: 66.39660504285953,
        bs: 1,
        util: 39.2833,
    },
    {
        latency: 17.987751960754395,
        throughput: 122.10618632689604,
        bs: 2,
        util: 44.5192,
    },
    {
        latency: 24.278080463409424,
        throughput: 176.616147347364,
        bs: 4,
        util: 53.5278,
    },
    {
        latency: 38.25854063034057,
        throughput: 223.27035861482935,
        bs: 8,
        util: 62.1071,
    },
    {
        latency: 69.5155143737793,
        throughput: 243.6001193337727,
        bs: 16,
        util: 64.0385,
    },
    {
        latency: 126.2059211730957,
        throughput: 269.28261371710175,
        bs: 32,
        util: 68.1739,
    },
    {
        latency: 242.6874041557312,
        throughput: 274.9067639729919,
        bs: 64,
        util: 72.3913,
    },
    {
        latency: 477.7075886726379,
        throughput: 279.1917945095303,
        bs: 128,
        util: 75.2727,
    },
];

// P4
// latency 95th:  [22.6202368736267, 24.36639070510864, 31.78173303604126, 50.4256248474121, 84.71701145172118, 152.9623508453369, 276.14104747772217, 530.91801404953]
// throughput:  [50.66973818615972, 88.55822924697829, 133.13008515852403, 169.2225431492324, 200.33322119189702, 223.38863324735894, 240.77713166220317, 248.97144596797813]
// avg_utils:  [54.7333, 57.4333, 62.0208, 66.6216, 69.871, 72.6786, 75.6538, 76.84]

export const smsd_dbs_P4 = [
    {
        latency: 22.6202368736267,
        throughput: 50.66973818615972,
        bs: 1,
        util: 54.7333,
    },
    {
        latency: 24.36639070510864,
        throughput: 88.55822924697829,
        bs: 2,
        util: 57.4333,
    },
    {
        latency: 31.78173303604126,
        throughput: 133.13008515852403,
        bs: 4,
        util: 62.0208,
    },
    {
        latency: 50.4256248474121,
        throughput: 169.2225431492324,
        bs: 8,
        util: 66.6216,
    },
    {
        latency: 84.71701145172118,
        throughput: 200.33322119189702,
        bs: 16,
        util: 69.871,
    },
    {
        latency: 152.9623508453369,
        throughput: 223.38863324735894,
        bs: 32,
        util: 72.6786,
    },
    {
        latency: 276.14104747772217,
        throughput: 240.77713166220317,
        bs: 64,
        util: 75.6538,
    },
    {
        latency: 530.91801404953,
        throughput: 248.97144596797813,
        bs: 128,
        util: 76.8427,
    },
];

export const smsd_dbs_latency = [
    {
        P4: 22.6202368736267,
        T4: 19.10444498062133,
    },
    {
        P4: 24.36639070510864,
        T4: 17.987751960754395,
    },
    {
        P4: 31.78173303604126,
        T4: 24.278080463409424,
    },
    {
        P4: 50.4256248474121,
        T4: 38.25854063034057,
    },
    {
        P4: 84.71701145172118,
        T4: 69.5155143737793,
    },
    {
        P4: 152.9623508453369,
        T4: 126.2059211730957,
    },
    {
        P4: 276.14104747772217,
        T4: 242.6874041557312,
    },
    {
        P4: 530.91801404953,
        T4: 477.7075886726379,
    },
];

// P4  avg_utils:  [54.7333, 57.4333, 62.0208, 66.6216, 69.871, 72.6786, 75.6538, 76.84]
// T4  avg_utils:  [39.2833, 44.5192, 53.5278, 62.1071, 64.0385, 68.1739, 72.3913, 75.2727]
// RTX2080Ti  avg_utils:  [33.1228, 36.8605, 41.4167, 50.1875, 56.5, 60.0, 62.4167, 64.8182]
// V100  avg_utils:  [31.7333, 34.08, 38.5926, 45.5882, 50.2143, 53.3636, 57.5, 60.2]

export const smsd_dbs_util = [
    {
        bs: 1,
        P4: 54.7333,
        T4: 39.2833,
        RTX2080Ti: 33.1228,
        V100: 31.7333,
    },
    {
        bs: 2,
        P4: 57.4333,
        T4: 44.5192,
        RTX2080Ti: 36.8605,
        V100: 34.08,
    },
    {
        bs: 4,
        P4: 62.0208,
        T4: 53.5278,
        RTX2080Ti: 41.4167,
        V100: 38.5926,
    },
    {
        bs: 8,
        P4: 66.6216,
        T4: 62.1071,
        RTX2080Ti: 50.1875,
        V100: 45.5882,
    },
    {
        bs: 16,
        P4: 69.871,
        T4: 64.0385,
        RTX2080Ti: 56.5,
        V100: 50.2143,
    },
    {
        bs: 32,
        P4: 72.6786,
        T4: 68.1739,
        RTX2080Ti: 60.0,
        V100: 53.3636,
    },
    {
        bs: 64,
        P4: 75.6538,
        T4: 72.3913,
        RTX2080Ti: 62.4167,
        V100: 57.5,
    },
    {
        bs: 128,
        P4: 76.84,
        T4: 75.2727,
        RTX2080Ti: 64.8182,
        V100: 60.2,
    },
];

export const smsd_dbs_throughput = [
    {
        P4: 50.66973818615972,
        T4: 66.39660504285953,
    },
    {
        P4: 88.55822924697829,
        T4: 122.10618632689604,
    },
    {
        P4: 133.13008515852403,
        T4: 176.616147347364,
    },
    {
        P4: 169.2225431492324,
        T4: 223.27035861482935,
    },
    {
        P4: 200.33322119189702,
        T4: 243.6001193337727,
    },
    {
        P4: 223.38863324735894,
        T4: 269.28261371710175,
    },
    {
        P4: 240.77713166220317,
        T4: 274.9067639729919,
    },
    {
        P4: 248.97144596797813,
        T4: 279.1917945095303,
    },
];

// P4  all_batch_throughput:  [88.55822924697829, 102.20803865591428, 56.720457717415876, 85.24703181349611]
// T4  all_batch_throughput:  [122.10618632689604, 150.26316370754694, 58.20733298176469, 99.8868079190161]

// T4  latencies_95th [17.987751960754395, 16.987788677215576, 40.16159772872924, 23.040485382080078]
// P4  latencies_95th [24.36639070510864, 20.343661308288574, 39.256298542022705, 26.20035409927368]

export const dp_throughput_bs2 = [
    {
        platform: "TensorFlow",
        P4: 88.55822924697829,
        T4: 122.10618632689604,
    },
    {
        platform: "TensorRT",
        P4: 102.20803865591428,
        T4: 150.26316370754694,
    },
    {
        platform: "TorchScript",
        P4: 56.720457717415876,
        T4: 58.20733298176469,
    },
    {
        platform: "ONNX",
        P4: 85.24703181349611,
        T4: 99.8868079190161,
    },
];

// T4  avg_utils:
//                 [  , , ],
//                 [ , , ],
//                 [ , , ],
//                 [ , , ]

export const dp_util_T4 = [
    {
        bs: 1,
        TensorFlow: 39.2833,
        TensorRT: 46.9149,
        TorchScript: 5.0,
        ONNX: 4.0,
    },
    {
        bs: 2,
        TensorFlow: 44.5192,
        TensorRT: 50.3333,
        TorchScript: 13.6667,
        ONNX: 10.0,
    },
    {
        bs: 4,
        TensorFlow: 53.5278,
        TensorRT: 47.8148,
        TorchScript: 25.0,
        ONNX: 22.3333,
    },
    {
        bs: 8,
        TensorFlow: 62.1071,
        TensorRT: 45.7143,
        TorchScript: 21.0,
        ONNX: 20.4286,
    },
    {
        bs: 16,
        TensorFlow: 64.0385,
        TensorRT: 46.1304,
        TorchScript: 17.9231,
        ONNX: 19.0,
    },
    {
        bs: 32,
        TensorFlow: 68.1739,
        TensorRT: 44.3846,
        TorchScript: 22.4091,
        ONNX: 24.3636,
    },
    {
        bs: 64,
        TensorFlow: 72.3913,
        TensorRT: 49.5,
        TorchScript: 27.7179,
        ONNX: 28.2927,
    },
];