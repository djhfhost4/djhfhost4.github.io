---
hero:
  title: Machine Learning Model CI
  desc: one-stop machine learning MLOps platform on clouds
  actions:
    - text: Getting Started
      link: /document
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: Continuous Integration
    desc: MLModelCI applys the concept of DevOps in software engineering, and can help users to continuous manage the lifecycle of ML services.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: From Research to Product
    desc: Bridge the gaps between research models and industrial applications, MLModelCI offers a set of tools to help AI landing without pains.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: Automatic Profiling
    desc: Simulates the behavior of online ML services, and provide a detailed report about the model runtime performance in production.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/b3e102cd-5dad-4046-a02a-be33241d1cc7/kj9t8oji_w144_h144.png
    title: Model Visualizer/Editor
    desc: MLModelCI supports deep learning model structures visualization, and can edit and fine-tune the models like Microsoft Office.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/f093e060-726e-471c-a53e-e988ed3f560c/kj9t9sk7_w144_h144.png
    title: Self-evolution Serving
    desc: With the help of runtime model monitoring and a powerful continual learning engine, MLModelCI allows you to update and maintain a high quality model serving.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/3863e74a-7870-4874-b1e1-00a8cdf47684/kj9t7ww3_w144_h144.png
    title: Team Collaoration
    desc: MLModelCI can manage and track the model history, and share the workspace with your teammates, make team work clear and easily.
# footer: Copyright © 2020 MLModelCI <br />
---

## Publication

```tsx
/**
 * inline: true
 */
import React, { useState } from 'react';
import { Card } from 'antd';

export default () => {
  return (
    <>
      <Card
        type="inner"
        title="MLModelCI: An Automatic Cloud Platform for Efficient MLaaS"
        extra={<a href="https://arxiv.org/abs/2006.05096">PDF</a>}
      >
        Huaizheng Zhang, Yuanming Li, Yizheng Huang, Yonggang Wen, Jianxiong
        Yin, Kyle Guan
        <p> ACM Multimedia OSC (MM 2020) </p>
      </Card>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Hysia: Serving DNN-Based Video-to-Retail Applications in Cloud"
        extra={<a href="https://arxiv.org/abs/2006.05117">PDF</a>}
      >
        Huaizheng Zhang, Yuanming Li, Qiming Ai, Yong Luo, Yonggang Wen, Yichao
        Jin, Nguyen Binh Duong Ta
        <p> ACM Multimedia OSC (MM 2020) </p>
      </Card>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="ModelPS: An Interactive and Collaborative Platform for Editing Pre-trained Models at Scale"
        extra={<a href="https://arxiv.org/pdf/2105.08275">PDF</a>}
      >
        Yuanming Li, Huaizheng Zhang, Shanshan Jiang, Fan Yang, Yonggang Wen,
        Yong Luo
        <p> ACM SIGKDD Pretrain Workshop (KDD 2021) </p>
      </Card>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="InferBench: Understanding Deep Learning Inference Serving with an Automatic Benchmarking System"
        extra={<a href="https://arxiv.org/abs/2011.02327">PDF</a>}
      >
        Huaizheng Zhang, Yizheng Huang, Yonggang Wen, Jianxiong Yin, Kyle Guan
      </Card>
    </>
  );
};
```
