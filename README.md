# Tenyour Slider

A controlled, accessible slider built on top of the native `<input type="range">`,
with marks, labels, snapping, and fully customizable styling via CSS variables.

## Features

- Accessible: built on native `<input type="range">`
- Controlled API (`value` + `onChange`)
- Marks & labels (step-based, custom positions, or labeled scales)
- Optional snapping to marks
- CSS variable theming via `className` (no need to target internal elements)
- Composable preset classes (`ty-slider-*`)
- Ref forwarding to the underlying input

## Installation

```bash
npm install tenyour-slider
# or
yarn add tenyour-slider
```

## Run Storybook locally

Use Storybook to preview presets, marks/labels behavior, and theming examples on your machine.

```bash
npm install
npm run storybook
```

Then open [http://localhost:6006](http://localhost:6006).

## Basic example

```tsx
import { useState } from "react";
import { Slider } from "tenyour-slider";

export function Example() {
  const [value, setValue] = useState(50);

  return (
    <Slider
      value={value}
      onChange={setValue}
      min={0}
      max={100}
      marks={10}
      markMode="always"
    />
  );
}
```

> **Note:** Slider is a controlled component.  
> You must update `value` in `onChange` for the thumb to move.

## Custom styling

Styling is done via CSS variables applied through `className`.

```css
.mySlider {
  --slider-fill: #6366f1;
  --slider-track-radius: 999px;
  --slider-thumb-size: 20px;
}
```

```tsx
<Slider
  className="mySlider"
  value={value}
  onChange={setValue}
  min={0}
  max={100}
/>
```

See [Styling](./docs/styling.md) for all variables and [Presets](./docs/presets.md) for built-in classes.

## Why Slider?

The native `<input type="range">` is difficult to style consistently and does not support marks or labels.

Slider keeps the accessibility and performance of the native input, while adding:

- marks and labels
- snapping behavior
- a controlled React API
- full theming via CSS variables

## Documentation

- [Getting Started](./docs/getting-started.md)
- [Props](./docs/props.md)
- [Marks & Labels](./docs/marks.md)
- [Styling](./docs/styling.md)
- [Accessibility](./docs/accessibility.md)
- [Presets](./docs/presets.md)
- [Examples](./docs/examples.md)

## Quick visuals

Danger (red) preset:

```tsx
<Slider
  value={75}
  onChange={(v) => console.log(v)}
  min={0}
  max={100}
  marks={10}
  markMode="always"
  className="ty-slider-rounded ty-slider-md ty-slider-danger ty-slider-contrast ty-slider-thumb-outline ty-slider-relaxed"
/>
```

Cleaner look (hide edge marks):

```tsx
<Slider
  value={30}
  onChange={(v) => console.log(v)}
  min={0}
  max={100}
  marks={10}
  showEdgeMarks={false}
  markMode="always"
  className="ty-slider-rounded ty-slider-dots ty-slider-lg ty-slider-primary ty-slider-soft ty-slider-thumb-elevated ty-slider-relaxed"
/>
```
