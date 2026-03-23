# CSS Variables

Slider is customized by setting CSS variables on the **outer wrapper** (via `className`). These variables cascade to all internal parts (track, fill, thumb, marks, labels).

You do not need to target internal class names.

The reference below documents the **public variables** you can use.

## Colors

| Variable                  | Description               | Default                                                          |
| ------------------------- | ------------------------- | ---------------------------------------------------------------- |
| `--slider-fill`           | Filled portion color      | `#00b37e`                                                        |
| `--slider-fill-hover`     | Fill color on hover       | `#009966`                                                        |
| `--slider-track-bg`       | Track background          | `#d3d3d3`                                                        |
| `--slider-track-hover-bg` | Track background on hover | `#bfbfbf`                                                        |
| `--slider-tick-color`     | Mark/tick color           | `#bfbfbf`                                                        |
| `--slider-label-color`    | Mark/value label color    | `#aaa` (mark labels); value tooltip defaults to `white` if unset |

## Sizing

| Variable                | Description               | Default |
| ----------------------- | ------------------------- | ------- |
| `--slider-track-height` | Height of the track       | `6px`   |
| `--slider-thumb-size`   | Thumb size (width/height) | `18px`  |
| `--slider-mark-width`   | Mark/tick width           | `1px`   |
| `--slider-mark-height`  | Mark/tick height          | `12px`  |
| `--slider-mark-radius`  | Mark/tick border radius   | `0px`   |

## Shape

| Variable                | Description                    | Default |
| ----------------------- | ------------------------------ | ------- |
| `--slider-track-radius` | Track (and fill) border radius | `0px`   |

## Labels

| Variable                   | Description                                                     | Default                                                  |
| -------------------------- | --------------------------------------------------------------- | -------------------------------------------------------- |
| `--slider-label-size`      | Label font size                                                 | `11px` (mark labels); value tooltip uses `1rem` if unset |
| `--slider-value-unit-size` | Unit suffix font size inside the value tooltip (e.g. `%`, `cm`) | `12px`                                                   |
| `--slider-label-offset`    | Offset for mark labels above the track                          | `-18px`                                                  |

## Focus

| Variable              | Description               | Default   |
| --------------------- | ------------------------- | --------- |
| `--slider-focus-ring` | Keyboard focus ring color | `#4d90fe` |

## Thumb

| Variable                | Description                                 | Default                        |
| ----------------------- | ------------------------------------------- | ------------------------------ |
| `--slider-thumb-bg`     | Thumb background                            | `#ffffff`                      |
| `--slider-thumb-shadow` | Thumb shadow (also used for the focus ring) | `0 2px 4px rgba(0, 0, 0, 0.2)` |

## Example

```css
.mySlider {
  --slider-fill: #6366f1;
  --slider-thumb-size: 24px;
  --slider-track-radius: 999px;
}
```
