import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Divider, Alert } from "antd";
import "antd/dist/antd.css";
import * as DataClass from "./data";
import {
    Label,
    Legend,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ComposedChart,
    Bar,
} from "recharts";

function App() {
    return (
        <div className="App">
            <img src={logo} width="160" alt="..." />
            <h1 align="center" style={{ marginTop: "15px", fontSize: 25 }}>
                DLModelCI: A Scalable and Elastic Model Management Platformfor
                DNN Inference Serving in Clouds
            </h1>
            <p style={{ marginTop: "-10px" }}>
                Huaizheng Zhang, Yuanming Li, Yizheng Huang, Kyle Guan,
                Jianxiong Yin, Yonggang Wen
            </p>
            <p style={{ marginTop: "-8px" }}>
                Nanyang Technological University, Singapore; Nokia Bell Labs;
                NVIDIA AI Tech Center;
            </p>
            <p align="center" style={{ marginTop: "15px" }}>
                <a href="https://github.com/cap-ntu/ML-Model-CI">Code</a>{" "}
                •&nbsp;
                <a href="https://github.com/cap-ntu/ML-Model-CI">Paper</a>{" "}
                •&nbsp;
                <a href="https://github.com/cap-ntu/ML-Model-CI#tutorial">
                    Tutorial
                </a>{" "}
                •&nbsp;
                <a href="https://github.com/cap-ntu/ML-Model-CI">Slides</a>{" "}
                •&nbsp;
                <a href="https://github.com/cap-ntu/ML-Model-CI">
                    Citation
                </a>{" "}
                •&nbsp;
                <a href="https://github.com/cap-ntu/ML-Model-CI">News</a>
            </p>
            <Divider orientation="left">Profiling Result of ResNet50</Divider>
            <div style={{ display: "flex" }}>
                <Alert
                    style={{
                        width: "800px",
                        textAlign: "left",
                        marginLeft: "100px",
                    }}
                    description="Your Model (ResNet-50) has been profiled successfully."
                    type="success"
                    showIcon
                />
            </div>
            <br />
            <div className="showDataClass">
                <ComposedChart
                    width={600}
                    height={550}
                    data={DataClass.smsd_dbs_T4}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 15,
                        bottom: 50,
                    }}
                >
                    <Legend verticalAlign="top" height={36} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="bs">
                        <Label
                            offset="-23"
                            value="Batch Size"
                            position="insideBottom"
                            style={{ textAnchor: "middle", fontSize: 20 }}
                        />
                    </XAxis>
                    <YAxis
                        yAxisId="latency"
                        orientation="right"
                        type="number"
                        domain={[0, 550]}
                    >
                        <Label
                            value="95th Percentile Latency (ms)"
                            position="insideRight"
                            angle={-90}
                            style={{ textAnchor: "middle", fontSize: 20 }}
                        />
                    </YAxis>
                    <YAxis
                        yAxisId="throughput"
                        orientation="left"
                        type="number"
                        domain={[0, 320]}
                    >
                        <Label
                            value="Throughput on Tesla T4 (req/sec)"
                            position="insideLeft"
                            angle={-90}
                            style={{ textAnchor: "middle", fontSize: 20 }}
                        />
                    </YAxis>
                    <Tooltip />
                    <Bar
                        dataKey="throughput"
                        barSize={30}
                        fill="#4169E1"
                        yAxisId="throughput"
                    />
                    <Line
                        strokeWidth={2}
                        type="monotone"
                        dataKey="latency"
                        stroke="#ff7300"
                        yAxisId="latency"
                    />
                </ComposedChart>
                <ComposedChart
                    width={600}
                    height={550}
                    data={DataClass.same_device_diff_gpu}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 15,
                        bottom: 50,
                    }}
                >
                    <Legend verticalAlign="top" height={36} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="gpu">
                        <Label
                            offset="-23"
                            value="Serving Device"
                            position="insideBottom"
                            style={{ textAnchor: "middle", fontSize: 20 }}
                        />
                    </XAxis>
                    <YAxis
                        yAxisId="latency"
                        orientation="right"
                        type="number"
                        domain={[0, 100]}
                    >
                        <Label
                            value="95th Percentile Latency (ms)"
                            position="insideRight"
                            angle={-90}
                            style={{ textAnchor: "middle", fontSize: 20 }}
                        />
                    </YAxis>
                    <YAxis
                        yAxisId="throughput"
                        orientation="left"
                        type="number"
                        domain={[0, 600]}
                    >
                        <Label
                            value="Throughput for Batch Size 16 (req/sec)"
                            position="insideLeft"
                            angle={-90}
                            style={{ textAnchor: "middle", fontSize: 20 }}
                        />
                    </YAxis>
                    <Tooltip />
                    <Bar
                        dataKey="throughput"
                        barSize={30}
                        fill="#20B2AA"
                        yAxisId="throughput"
                    />
                    <Bar
                        dataKey="latency"
                        barSize={30}
                        fill="#EEAD0E"
                        yAxisId="latency"
                    />
                </ComposedChart>
                {/* <ComposedChart
                    width={550}
                    height={550}
                    data={DataClass.smsd_dbs_util}
                    margin={{
                        top: 5,
                        right: 15,
                        left: 15,
                        bottom: 50,
                    }}
                >
                    <Legend verticalAlign="top" height={36} />
                    <Line
                        type="monotone"
                        dataKey="P4"
                        stroke="#ff7300"
                        strokeWidth={1.5}
                    />
                    <Line
                        type="monotone"
                        dataKey="T4"
                        stroke="#3CB371"
                        strokeWidth={1.5}
                    />
                    <Line
                        type="monotone"
                        dataKey="V100"
                        stroke="#CD1076"
                        strokeWidth={1.5}
                    />
                    <Line
                        type="monotone"
                        dataKey="RTX2080Ti"
                        stroke="#FFD700"
                        strokeWidth={1.5}
                    />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="bs">
                        <Label
                            offset="-23"
                            value="Batch Size"
                            position="insideBottom"
                            style={{ textAnchor: "middle", fontSize: 20 }}
                        />
                    </XAxis>
                    <YAxis type="number" domain={[0, 100]}>
                        <Label
                            value="Average GPU Utilization (%)"
                            position="insideLeft"
                            angle={-90}
                            style={{ textAnchor: "middle", fontSize: 20 }}
                        />
                    </YAxis>
                    <Tooltip />
                </ComposedChart> */}
            </div>
            <div className="showDataClass">
                <ComposedChart
                    width={550}
                    height={550}
                    data={DataClass.dp_util_T4}
                    margin={{
                        top: 5,
                        right: 15,
                        left: 15,
                        bottom: 50,
                    }}
                >
                    <Legend verticalAlign="top" height={36} />
                    <Line
                        type="monotone"
                        dataKey="TensorFlow"
                        stroke="#ff7300"
                        strokeWidth={1.5}
                    />
                    <Line
                        type="monotone"
                        dataKey="TorchScript"
                        stroke="#3CB371"
                        strokeWidth={1.5}
                    />
                    <Line
                        type="monotone"
                        dataKey="TensorRT"
                        stroke="#CD1076"
                        strokeWidth={1.5}
                    />
                    <Line
                        type="monotone"
                        dataKey="ONNX"
                        stroke="#FFD700"
                        strokeWidth={1.5}
                    />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="bs">
                        <Label
                            offset="-23"
                            value="Batch Size"
                            position="insideBottom"
                            style={{ textAnchor: "middle", fontSize: 20 }}
                        />
                    </XAxis>
                    <YAxis type="number" domain={[0, 100]}>
                        <Label
                            value="Average GPU Utilization (%)"
                            position="insideLeft"
                            angle={-90}
                            style={{ textAnchor: "middle", fontSize: 20 }}
                        />
                    </YAxis>
                    <Tooltip />
                </ComposedChart>
                <ComposedChart
                    width={550}
                    height={550}
                    data={DataClass.dp_throughput_bs2}
                    margin={{
                        top: 5,
                        right: 15,
                        left: 15,
                        bottom: 50,
                    }}
                >
                    <Legend verticalAlign="top" height={36} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="platform">
                        <Label
                            offset="-23"
                            value="Serving Platform"
                            position="insideBottom"
                            style={{ textAnchor: "middle", fontSize: 20 }}
                        />
                    </XAxis>
                    <YAxis orientation="left" type="number" domain={[0, 220]}>
                        <Label
                            value="Throughput (req/sec)"
                            position="insideLeft"
                            angle={-90}
                            style={{ textAnchor: "middle", fontSize: 20 }}
                        />
                    </YAxis>
                    <Tooltip />
                    <Bar dataKey="T4" barSize={25} fill="#4169E1" />
                    <Bar dataKey="P4" barSize={25} fill="#3CB371" />
                </ComposedChart>
            </div>
        </div>
    );
}

export default App;
