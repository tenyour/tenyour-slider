# Accessibility

Slider wraps a native `<input type="range">`, so keyboard interaction works out of the box (Tab to focus, Arrow keys to move, Home/End, etc.).

## Screen reader labels

Always provide an accessible name:

```tsx
<Slider
  aria-label="Brightness"
  value={value}
  onChange={setValue}
  min={0}
  max={100}
/>
```

## Labels (recommended)

Prefer using a `<label>` element when possible:

```tsx
<label htmlFor="volume">Volume</label>
<Slider id="volume" ... />
```

This provides better accessibility than `aria-label` alone.

## `aria-valuetext` (auto-generated)

By default, Slider sets `aria-valuetext` automatically:

- If your `marks` have labels (e.g. `marks={{ 1: "Low", 2: "High" }}`), it announces:
  - `<mark label> (<formatted value>)`
  - Example: with `marks={{ 50: "Medium" }}` and `units="%"`, it becomes `Medium (50 percent)`.
- Otherwise it uses the current value plus speech-friendly unit wording:
  - Example: `50 percent`, `50 months`, `37 degrees celsius`, `2 kilograms`.
  - Common abbreviations/symbols are normalized for speech (e.g. `%`, `kg`, `lb`, `km`, `mi`, `in`, `ft`, `°C`, `°F`, `min`, `h`).
  - Unknown units fall back to `${value} ${units}`.

So in most cases, you can just pass `units` and get good visual + aria formatting by default.

Note: visual value display can still use `%` while aria text uses `percent`. For full control, provide your own `aria-valuetext`.

If you want to override the auto-generated announcement, pass your own `aria-valuetext`.

```tsx
import { useState } from "react";
import { Slider } from "tenyour-slider";
import "tenyour-slider/styles.css";

export function DistanceSlider() {
  const [value, setValue] = useState(50);

  return (
    <Slider
      aria-label="Model confidence"
      aria-valuetext={`${value} confidence points`}
      value={value}
      onChange={setValue}
      min={0}
      max={100}
    />
  );
}
```

## Focus styling

On keyboard focus (`:focus-visible`), the ring is drawn **around the thumb** (via `box-shadow`), not around the whole `<input>`.

The default ring color is **`#4d90fe`**.

To customize the ring color:

```css
.mySlider {
  --slider-focus-ring: #ffffff;
}
```
