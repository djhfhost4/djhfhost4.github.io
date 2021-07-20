---
nav:
  order: 3
  title: Contact
  path: /contact
sidemenu: false
---

## About Us

```tsx
/**
 * inline: true
 */
import React, { useState } from 'react';
import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

export default () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Card style={{ width: '40%', marginLeft: '20px' }}>
          <Avatar
            style={{ marginBottom: '20px' }}
            src="https://huaizhengzhang.github.io/self-avatar.png"
          />
          <Meta
            title="Huaizheng Zhang"
            description="Huaizheng Zhang am a fourth-year Ph.D. student at the School of Computer Science and Engineering, Nanyang Technological University, Singapore. I am maintaining several open-source projects like Awesome-system-for-machine-learning on GitHub. I did a six-month internship at ByteDance AI Lab as an AI system research intern. My major research interests include large scale machine learning system, deep multimodal learning, video analysis, etc. I am leading a very exciting project termed MLModelCI. If you have an interest in it, please drop me an e-mail."
          />
        </Card>
        <Card style={{ width: '40%', marginLeft: '20px' }}>
          <Avatar
            style={{ marginBottom: '20px' }}
            src="https://i.loli.net/2021/07/20/LYiJGjBuov9CmtA.png"
          />
          <Meta
            title="Yizheng Huang"
            description="Yizheng Huang is a researcher in Nanyang Technological University, Singapore. His research interests are large-scale ML serving system and network system. Before joining MLModelCI, he is a research intern in Microsoft Research Asia and Google Summer of Code. He has over 6K stars under the personal Github profile. "
          />
        </Card>
        <Card style={{ width: '40%', marginLeft: '20px' }}>
          <Avatar
            style={{ marginBottom: '20px' }}
            src="https://i.loli.net/2021/07/20/O8rseYGjfwcgtxZ.png"
          />
          <Meta
            title="Yuanming Li"
            description="Yuanming Li is an undergraduate student and part-time researcher at Nanyang Technological University. He is one of the initiators, main contributors, and active maintainers of MLModelCI. He is awarded Singapore government full scholarship for his university’s study. He is also a member of NTUVibe, a knowledge-sharing platform for students at NTU to search the university courses information and leave comments. His current research interest is scaleable accelerated system for Machine Learning applications."
          />
        </Card>
      </div>
    </>
  );
};
```

## Contact Us

- ModelCI Related: huaizhen001@e.ntu.edu.sg
- Benchmark Related: yizheng.huang@ntu.edu.sg
