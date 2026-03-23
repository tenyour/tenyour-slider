# Props

## Native `<input>` props & `ref`

`Slider` is implemented with `React.forwardRef`. The **`ref` is attached to the underlying `<input type="range">`**, so you can focus it, measure it, or use it with form libraries that expect a real input.

`SliderProps` extends the native range input’s attribute types (with `value` / `onChange` replaced by Slider’s controlled API). Any other standard prop is passed through to the `<input>` via **`{...rest}`** (spread **after** Slider’s own attributes).

**Handy examples:** `id` (pair with `<label htmlFor>`), `name` / `form` (forms), `autoFocus`, `tabIndex`, `data-*` / `data-testid`, extra `aria-*` beyond what Slider sets, `style` on the input, etc.

**Avoid overriding** `type` (must stay `range`) and the pointer handlers **`onPointerDown` / `onPointerUp` / `onPointerCancel`** unless you compose them yourself—Slider uses those for drag state and mark visibility.

**Note:** `className` applies to the **outer wrapper**, not the `<input>`, so presets and layout theming work on the whole control. Use CSS variables or a wrapper element if you need to target visuals.

See [Examples](./examples.md#native-input-props--ref) for code snippets.

## `marks`

Type: `false | number | number[] | Record<number, string>`

- `false` → no marks
- `number` → marks every N steps
- `number[]` → marks at exact values
- `Record<number, string>` → custom value → label mapping

## Edge marks

### `showEdgeMarks`

Optional. **If you omit it, edge marks at `min` and `max` are shown** (same as `true`). Pass **`false`** only when you want to hide those two marks for a cleaner look (internally `marks.slice(1, -1)`).

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
