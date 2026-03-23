# Marks & Labels

## `marks` formats

### No marks

- `marks={false}`

### Even marks (step-based)

- `marks={N}` places marks every N steps

### Explicit positions

- `marks={[10, 25, 50]}`

### Labeled scale

- `marks={{ 1: "Low", 2: "Medium", 3: "High" }}`

## Mark labels

### `markLabelMode`

- `"none"` (default): no labels
- `"auto"`: labels appear while dragging the thumb
- `"always"`: labels always visible

## Edge marks

### `showEdgeMarks`

Optional — you usually **don’t pass this**. Omitting it is the same as **`true`**: min/max marks are included. Set **`showEdgeMarks={false}`** when you want to hide only the edge marks.

## Snapping

### `snapToMarks`

- When `true`, the value snaps to the nearest mark as the value updates (not only on release).
