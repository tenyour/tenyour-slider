# Presets

Presets are built using CSS variables. You can combine them with your own custom variables for fine control.

## Naming

All built-in preset classes use the `ty-slider-*` prefix.

## Quick example

```tsx
<Slider
  value={75}
  onChange={console.log}
  min={0}
  max={100}
  marks={10}
  markMode="always"
  markLabelMode="none"
  className="ty-slider-rounded ty-slider-md ty-slider-danger ty-slider-contrast ty-slider-thumb-outline ty-slider-relaxed"
/>
```

## Available preset groups

- Shape: `ty-slider-rounded`, `ty-slider-dots`, `ty-slider-minimal`, `ty-slider-chunky`
- Size: `ty-slider-sm`, `ty-slider-md`, `ty-slider-lg`
- Color: `ty-slider-primary`, `ty-slider-neutral`, `ty-slider-danger`, `ty-slider-warning`
- Track: `ty-slider-soft`, `ty-slider-contrast`, `ty-slider-invisible-track`
- Thumb: `ty-slider-thumb-flat`, `ty-slider-thumb-elevated`, `ty-slider-thumb-outline`
- Density: `ty-slider-dense`, `ty-slider-relaxed`
- Labels: `ty-slider-labels-muted`, `ty-slider-labels-bold`
