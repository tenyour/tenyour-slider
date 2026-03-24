# Marks & Labels

Marks give users discrete positions along the track: plain ticks, uneven spacing, or a fully labeled scale (e.g. survey Likert items). Labels and snapping are optional layers on top.

For the full type, defaults, and behavior of each prop, see **[Props → Marks](./props.md#marks)**.

## No marks

Use this when you only want the track and thumb—no ticks.

```tsx
<Slider value={value} onChange={setValue} marks={false} />
```

## Evenly spaced marks

Pass a **number** `N` to place a mark every **N step positions** from `min` toward `max`. The spacing is based on the `step` value (`N × step`)

```tsx
<Slider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  step={1}
  marks={10}
/>
```

Here, ticks land at 0, 10, 20, …, 100. Adjust `min`, `max`, and `step` to match your domain (percentages, scores, etc.).

## Explicit mark positions

Use an array when spacing should **not** follow a fixed step interval—e.g. custom breakpoints or uneven emphasis.

```tsx
<Slider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  marks={[0, 25, 50, 75, 100]}
/>
```

Values outside `[min, max]` are ignored.

## Labeled scale

Use a **record** of `value → label` for scales where each stop has meaning (satisfaction, risk, agreement).

```tsx
<Slider
  value={value}
  onChange={setValue}
  min={1}
  max={5}
  step={1}
  marks={{
    1: "Strongly disagree",
    2: "Disagree",
    3: "Neutral",
    4: "Agree",
    5: "Strongly agree",
  }}
  markLabelMode="always"
/>
```

When the thumb is on a labeled mark, that label can appear in the value readout and in generated `aria-valuetext` (see [Accessibility](./accessibility.md)).

## When marks and labels appear

- **`markMode`** — controls when **tick marks** are shown: only while dragging (`"auto"`, default) or always (`"always"`). 
- **`markLabelMode`** — controls **text at each mark**:
  - `"none"` (default) — ticks only
  - `"auto"` — labels while the user is interacting (aligned with when marks show in `"auto"` mark mode)
  - `"always"` — labels always visible

Details: [Props → Marks](./props.md#marks).

## Snapping to marks

Set **`snapToMarks`** so the value jumps to the **nearest mark** while the user drags or uses arrow keys—useful for discrete choices or labeled scales.

```tsx
<Slider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  marks={[0, 25, 50, 75, 100]}
  snapToMarks
/>
```

Snapping applies whenever the value updates during interaction; pair with arrays or records when stops are not evenly spaced.

## Edge marks

By default, marks at **`min`** and **`max`** are included. For a cleaner track (only interior ticks), hide those two:

```tsx
<Slider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  marks={10}
  showEdgeMarks={false}
/>
```

See [Props → Marks](./props.md#marks) for default behavior.

## More examples

See [Examples](./examples.md) for additional combinations (presets, `units`, accessibility overrides).
