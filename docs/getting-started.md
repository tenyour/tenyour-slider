# Getting Started

## Installation

```bash
npm install tenyour-react-slider
# or
yarn add tenyour-react-slider
```

## Basic usage

```tsx
import { useState } from "react";
import { Slider } from "tenyour-react-slider";

export function Example() {
  const [value, setValue] = useState(50);

  return (
    <Slider
      value={value}
      onChange={setValue}
      min={0}
      max={100}
      step={1}
      marks={10}
      markMode="always"
      markLabelMode="none"
    />
  );
}
```

## Ref & extra DOM props

`Slider` uses **`forwardRef`**: the ref points at the underlying `<input type="range">` (e.g. for `.focus()`). Other native attributes are passed through to that input; see [Props](./props.md#native-input-props--ref) and [Examples](./examples.md#native-input-props--ref).

## Controlled behavior

Slider is a controlled component.

You must update `value` in `onChange`.

If you do not update the value, the thumb will not move.
