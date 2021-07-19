---
nav:
  order: 3
  title: Contact
  path: /contact
sidemenu: false
---

## Contact Us

```tsx
/**
 * inline: true
 */
import React, { useState } from 'react';
import { DatePicker } from 'antd';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <DatePicker />
      <button
        type="button"
        data-action="addon"
        onClick={() => setCount(count + 1)}
      >
        add
      </button>
      <button
        type="button"
        data-action="reset"
        onClick={() => setCount(0)}
        style={{ marginLeft: 8 }}
      >
        reset
      </button>
    </>
  );
};
```
