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
  className="ty-slider-rounded ty-slider-md ty-slider-indigo"
/>
```

## Preset model

Compose presets in 3 layers:

1. **Visual style**: overall shape and feel
2. **Size**: proportional scale
3. **Theme**: color palette

```tsx
<Slider className="ty-slider-rounded ty-slider-lg ty-slider-indigo" />
```

## Available preset groups

- Visual style: `ty-slider-rounded`, `ty-slider-minimal`, `ty-slider-chunky`, `ty-slider-modern`, `ty-slider-pill`, `ty-slider-glass`
- Size: `ty-slider-sm`, `ty-slider-md`, `ty-slider-lg`
- Theme: `ty-slider-indigo`, `ty-slider-sunset`, `ty-slider-mint`, `ty-slider-ocean`, `ty-slider-danger`
- Track: `ty-slider-soft`, `ty-slider-contrast`
- Thumb: `ty-slider-thumb-flat`, `ty-slider-thumb-elevated`, `ty-slider-thumb-outline`
- Labels: `ty-slider-labels-muted`, `ty-slider-labels-bold`

## Real-world combinations

```tsx
// Calm, modern default-like look
<Slider className="ty-slider-modern ty-slider-md ty-slider-ocean" />

// Strong, survey-style scale
<Slider className="ty-slider-chunky ty-slider-lg ty-slider-danger ty-slider-labels-bold" />

// Minimal and compact
<Slider className="ty-slider-minimal ty-slider-sm ty-slider-mint ty-slider-thumb-flat" />

// Translucent futuristic look
<Slider className="ty-slider-glass ty-slider-lg ty-slider-ocean ty-slider-thumb-elevated" />
```
