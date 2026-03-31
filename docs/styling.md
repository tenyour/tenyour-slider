# Styling

## How styling works

Slider is styled via CSS variables. You apply them through `className`.
Import the stylesheet once before using `Slider`:

```tsx
import "tenyour-slider/styles.css";
```

## Important: className and style behavior

`className` is applied to the outer wrapper, not the `<input>`.
`style` is also applied to the outer wrapper.

This allows CSS variables to cascade to all internal parts (track, thumb, marks).

You do not need to target internal class names to style the slider.

## Styling Approaches

To style `Slider`, choose one of these three methods:

### 1) CSS variables (full control)

Use CSS variables to fully customize the slider.

```css
.myCustomSlider {
  --slider-fill: #6366f1;
  --slider-thumb-size: 24px;
  --slider-track-radius: 999px;
}
```

```tsx
<Slider className="myCustomSlider" ... />
```

See [CSS variables reference](./css-variables.md) for all available options.

---

### 2) Presets (quick styling)

Use built-in preset classes for common styles.

```tsx
<Slider className="ty-slider-rounded ty-slider-indigo ty-slider-lg" />
```

See [Presets](./presets.md) for available options.

---

### 3) Combine both

Presets and custom variables can be combined:

```css
.mySlider {
  --slider-thumb-size: 28px;
}
```

```tsx
<Slider className="ty-slider-rounded mySlider" />
```

## Common styling examples

### Rounded slider

```css
.mySlider {
  --slider-track-radius: 999px;
}
```

### Larger thumb

```css
.mySlider {
  --slider-thumb-size: 24px;
}
```

### Hide track

```css
.mySlider {
  --slider-track-bg: transparent;
}
```
