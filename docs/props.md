# Props

## Overview

`Slider` accepts:

> Reminder: import `tenyour-slider/styles.css` once when using this package.

- All custom `SliderProps` documented below
- All native `<input type="range">` props (except `value` and `onChange`, which are replaced by Slider's controlled API)
- A forwarded `ref` to the underlying `<input>`

> This is a controlled component. If `onChange` is not provided, the slider is read-only.

```tsx
const [value, setValue] = useState(50)

<Slider value={value} onChange={setValue} />
```

### Custom `SliderProps` (complete list)

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `value` | `number` | *(required)* | Controlled value. Clamped to `min`/`max` internally for rendering. |
| `onChange` | `(value: number) => void` | `undefined` | Called when the user changes the value. If omitted, slider is read-only. |
| `min` | `number` | `1` | Minimum slider value. |
| `max` | `number` | `10` | Maximum slider value. |
| `step` | `number` | `1` | Step size between values. |
| `marks` | `false \| number \| number[] \| Record<number, string>` | `1` | Mark configuration; see [Marks & Labels](./marks.md). |
| `showEdgeMarks` | `boolean` | `true` | Show `min` and `max` marks/labels. |
| `snapToMarks` | `boolean` | `false` | Snap to nearest mark on each change. |
| `markMode` | `"auto" \| "always"` | `"auto"` | When tick marks are visible (`auto`: while the thumb is dragged). |
| `markLabelMode` | `"none" \| "auto" \| "always"` | `"none"` | When text beside ticks is visible; see [Mark visibility](#mark-visibility). |
| `showValue` | `boolean` | `undefined` | See [Value display](#value-display). On narrow screens, interacts with mark layout when labels are on ([details](./marks.md#mobile-layout-narrow-viewports)). |
| `units` | `string` | `""` | Unit suffix and aria formatting hint. |
| `className` | `string` | `undefined` | Applied to the outer slider wrapper (not the `<input>`). |
| `style` | `React.CSSProperties` | `undefined` | Applied to the outer slider wrapper. Inline `style` wins over conflicting rules from `className`. |


### Native `<input>` props often used with Slider

Because `SliderProps` extends native input props, all standard input attributes (besides overridden `value`/`onChange`) are supported. Common ones:


| Prop                                 | Default in Slider           | Notes                                            |
| ------------------------------------ | --------------------------- | ------------------------------------------------ |
| `disabled`                           | `false`                     | Also disables drag state behavior and styles.    |
| `id`                                 | `undefined`                 | Useful for `<label htmlFor>`.                    |
| `name`                               | `undefined`                 | Useful for forms.                                |
| `form`                               | `undefined`                 | Associate with a specific form.                  |
| `autoFocus`                          | `undefined`                 | Native autofocus behavior.                       |
| `tabIndex`                           | `undefined`                 | Keyboard focus order.                            |
| `aria-valuetext`                     | auto-generated when omitted | If provided, your value is used as-is.           |
| `data-`* / `aria-*` / etc.           | native defaults             | Passed through to the `<input>` via `{...rest}`. |


## Native `<input>` props & `ref`

`Slider` is implemented with `React.forwardRef`. The **`ref`** is attached to the underlying `<input type="range">`, so you can focus it, measure it, or use it with form libraries that expect a real input.

`SliderProps` extends the native range input’s attribute types (with `value` / `onChange` replaced by Slider’s controlled API). All other native props are forwarded to the underlying `<input>` via `{...rest}` (spread **after** Slider’s own attributes).

**Handy examples:** `id` (pair with `<label htmlFor>`), `name` / `form` (forms), `autoFocus`, `tabIndex`, `data-*` / `data-testid`, extra `aria-*` beyond what Slider sets, etc.

Pointer event handlers (`onPointerDown`, `onPointerUp`, `onPointerCancel`) are used internally for drag behavior. If you provide your own handlers, they are composed with Slider’s internal logic.

**Note:** `className` and `style` apply to the **outer wrapper**, not the `<input>`, so presets and layout theming work on the whole control. Use `style` for one-off overrides and `className` for reusable themes.

See [Examples](./examples.md#native-input-props--ref) for code snippets.

## `marks`

See [Marks & Labels](./marks.md) for usage patterns and examples.

Type: `false | number | number[] | Record<number, string>`

- `false` → no marks
- `number` → marks every N *steps* (i.e. N × `step`)
- `number[]` → marks at exact values
- `Record<number, string>` → custom value → label mapping

## Edge marks

### `showEdgeMarks`

Optional. **If you omit it, edge marks at `min` and `max` are shown** (same as `true`). Pass **`false`** only when you want to hide those two marks for a cleaner look.

## Mark visibility

### `markMode`

- `"auto"` (default): marks appear while dragging the thumb
- `"always"`: marks always visible

### `markLabelMode`

- `"none"` (default): no labels
- `"auto"`: labels appear while dragging the thumb
- `"always"`: labels always visible

## Value display

### `showValue`

- `true`: value tooltip always visible
- `false`: value tooltip is always hidden
- `undefined` (default): tooltip becomes visible after the first value change and stays visible for the rest of the session

Narrow screens: see [Marks & Labels → Mobile layout](./marks.md#mobile-layout-narrow-viewports).

### `units`

Optional unit string shown next to the value (e.g. `"%"`, `"months"`).

Slider auto-formats many common units for both visual display and accessibility.

- Visual examples: `50%`, `50°C`, `50°F`, `50 cm`, `50 in`, `50 months`
- Aria examples: `50 percent`, `50 degrees celsius`, `50 centimeters`, `50 inches`

Known abbreviations/symbols are normalized for speech (e.g. `%`, `°C`, `°F`, `kg`, `lb`, `km`, `mi`, `in`, `ft`, `min`, `h`).

Unknown/custom unit strings fall back to `${value} ${units}`. If you need exact announcement wording, pass your own `aria-valuetext`.

See the custom override example in [Accessibility](./accessibility.md#aria-valuetext-auto-generated).

## Snapping

### `snapToMarks`

- `false` (default): free movement
- `true`: snaps to the nearest mark whenever the value updates (while you interact: drag or use arrow keys).

## Styling hook

### `className`

Applied to the slider wrapper. This is how built-in presets (`ty-slider-*`) and CSS variable overrides work.