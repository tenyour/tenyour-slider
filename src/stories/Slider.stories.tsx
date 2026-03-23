import { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Slider from "../Slider";

import "./sliderThemes.css";
import "../slider.presets.css";

const meta = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      description: {
        component:
          "A controlled, accessible single-thumb range slider built on native `<input type='range'>`. It supports marks and labels, optional snapping, value display with unit formatting, ref forwarding to the underlying input, and full theming through CSS variables or preset `ty-slider-*` classes.",
      },
    },
  },
  args: {
    value: 5,
    min: 1,
    max: 10,
    step: 1,
    marks: 1,
    markMode: "auto",
    markLabelMode: "none",
    units: "",
  },
  argTypes: {
    value: {
      control: "number",
      description:
        "Current value (controlled). You must update this in `onChange` for the thumb to move. Clamped internally to [min, max] when needed.",
    },
    onChange: {
      description:
        "Called with the new number when the user changes the value.",
      table: {
        type: { summary: "(value: number) => void" },
      },
    },
    min: {
      control: "number",
      description: "Minimum value. Default: 1.",
    },
    max: {
      control: "number",
      description: "Maximum value. Default: 10.",
    },
    step: {
      control: "number",
      description:
        "Step increment. Default: 1. When min === max, step is ignored and the thumb is fixed.",
    },
    marks: {
      control: "select",
      options: [false, 1, 2, 5, 10],
      description:
        "Mark source and positions. `false` = no marks. `number` N = mark every N steps. `number[]` = exact positions. `Record<number, string>` = custom labeled scale.",
      table: {
        type: {
          summary: "false | number | number[] | Record<number, string>",
        },
      },
    },
    markMode: {
      control: "select",
      options: ["auto", "always"],
      description:
        "When to show mark notches. `auto` = only while interacting (dragging). `always` = always visible. Default: auto.",
    },
    markLabelMode: {
      control: "select",
      options: ["auto", "always", "none"],
      description:
        "When to show labels at marks. `auto` = only while dragging the thumb. `always` = always visible. `none` = no labels. Default: none.",
    },
    showValue: {
      control: "boolean",
      description:
        "If true, the value tooltip is always visible. If false, it is always hidden. If undefined (default), it becomes visible after the first value change and stays visible.",
      table: {
        type: { summary: "boolean" },
      },
    },
    units: {
      control: "text",
      description:
        'Optional unit suffix for value display (e.g. "%", "months"). Common units are auto-formatted for visual display and aria text (e.g. `50%` visual and `50 percent` aria). Unknown units fall back to `${value} ${units}`.',
    },
    className: {
      description:
        "Applied to the outer wrapper (not the `<input>`). Use to set CSS variables and/or preset classes (`ty-slider-*`) for theming.",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description: "When true, the slider is non-interactive. Default: false.",
    },
    snapToMarks: {
      control: "boolean",
      description:
        "When true, the value snaps to the nearest mark whenever it updates (while you interact). Use with marks (array or record) for discrete choices.",
    },
    showEdgeMarks: {
      control: "boolean",
      description:
        "Optional. Omit or `true`: show marks at `min` and `max`. `false`: hide only those edge marks.",
      table: {
        defaultValue: { summary: "true (omit prop)" },
      },
    },
    "aria-label": {
      control: "text",
      description:
        "Accessible name for screen readers. Provide this when you do not use a visible `<label htmlFor='...'>`.",
      table: {
        type: { summary: "string" },
      },
    },
    "aria-valuetext": {
      control: "text",
      description:
        "Optional override for spoken value text. By default, Slider auto-generates this from current value, units, and mark label (for labeled marks: `<label> (<formatted value>)`).",
      table: {
        type: { summary: "string" },
      },
    },
    id: {
      control: "text",
      description:
        "Passed through to the native range input. Use with `<label htmlFor='id'>` for recommended labeling.",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

const mainStoryWrapperStyle: React.CSSProperties = {
  backgroundColor: "#1e1e1e",
  color: "#e5e5e5",
  paddingTop: 48,
  paddingRight: 48,
  paddingBottom: 24,
  paddingLeft: 48,
  borderRadius: 8,
};

/** Modify props interactively. */
export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 5);

    useEffect(() => {
      setValue(args.value ?? 5);
    }, [args.value]);

    return (
      <div style={mainStoryWrapperStyle}>
        <div style={{ width: 320 }}>
          <Slider {...args} value={value} onChange={setValue} />
        </div>
      </div>
    );
  },
};
