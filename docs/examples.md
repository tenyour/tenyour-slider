# Examples

## Percentage slider

```tsx
const [value, setValue] = useState(50);

<Slider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  marks={10}
  units="%"
/>;
```

Related docs: [Getting Started](./getting-started.md), [Props](./props.md#units)

## Discrete options (snap to marks)

```tsx
const [value, setValue] = useState(10);

<Slider
  value={value}
  onChange={setValue}
  marks={[10, 25, 50, 75, 100]}
  snapToMarks
/>;
```

Related docs: [Marks & Labels](./marks.md), [Props](./props.md#snapping)

## Survey scale

```tsx
const [value, setValue] = useState(2);

<Slider
  value={value}
  onChange={setValue}
  marks={{
    1: "Low",
    2: "Medium",
    3: "High",
  }}
  markLabelMode="always"
/>;
```

Related docs: [Marks & Labels](./marks.md)

## Units

```tsx
const [value, setValue] = useState(50);

<Slider value={value} onChange={setValue} min={0} max={100} units="%" />
// Visual: 50%
// Aria: 50 percent

<Slider value={value} onChange={setValue} min={0} max={100} units="in" />
// Visual: 50 in
// Aria: 50 inches
```

If you need exact wording, pass your own `aria-valuetext`.

Related docs: [Props](./props.md#units), [Accessibility](./accessibility.md#aria-valuetext-auto-generated)

## Native input props & ref

Slider forwards **`ref`** to the real `<input type="range">` and passes extra DOM props through with **`{...rest}`**.

### `ref` — focus or imperative access

```tsx
import { useRef, useState } from "react";

function Example() {
  const [value, setValue] = useState(50);
  const sliderRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Slider
        ref={sliderRef}
        value={value}
        onChange={setValue}
        min={0}
        max={100}
      />
      <button type="button" onClick={() => sliderRef.current?.focus()}>
        Focus slider
      </button>
    </>
  );
}
```

### `id` + `<label htmlFor>`

```tsx
<Slider
  id="volume"
  aria-label="Volume"
  value={value}
  onChange={setValue}
  min={0}
  max={100}
/>
<label htmlFor="volume">Volume</label>
```

(You can use `aria-label` / `aria-labelledby` instead; both patterns are valid.)

### Forms: `name`

```tsx
<form
  onSubmit={(e) => {
    e.preventDefault();
    /* read FormData or controlled values */
  }}
>
  <Slider
    name="brightness"
    value={value}
    onChange={setValue}
    min={0}
    max={100}
  />
</form>
```

Use the `form` attribute on `Slider` if the input lives outside the `<form>` but should still participate in that form’s submit data.

### Tests: `data-testid` / `data-*`

```tsx
<Slider
  data-testid="price-slider"
  value={price}
  onChange={setPrice}
  min={0}
  max={1000}
/>
```

Related docs: [Props](./props.md#native-input-props--ref), [Accessibility](./accessibility.md#labels-recommended)
