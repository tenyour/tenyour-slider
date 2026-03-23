import type { Meta, StoryObj } from "@storybook/react";
import Slider from "../Slider";
import { SliderWrapper } from "./SliderWrapper";

const meta = {
  title: "Components/Slider/Features",
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Marks every 10 steps, always visible (no drag to reveal). */
export const Marks: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: 10,
    value: 40,
    markMode: "always",
  },
  render: (args) => <SliderWrapper args={args} width={420} />,
};

/** Hide edge marks: removes min/max marks for a cleaner look. */
export const HideEdgeMarks: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: 10,
    value: 50,
    showEdgeMarks: false,
    markMode: "always",
    markLabelMode: "always",
  },
  render: (args) => <SliderWrapper args={args} width={520} />,
};

/** Mark labels always visible. */
export const MarkLabelsAlways: Story = {
  args: {
    min: 0,
    max: 5,
    step: 1,
    marks: 1,
    value: 3,
    markMode: "always",
    markLabelMode: "always",
  },
  render: (args) => <SliderWrapper args={args} />,
};

/** Discrete steps: snaps to the nearest mark. */
export const DiscreteSteps: Story = {
  args: {
    min: 0,
    max: 100,
    marks: [0, 25, 50, 75, 100],
    snapToMarks: true,
    markMode: "always",
    markLabelMode: "always",
    value: 50,
  },
  render: (args) => <SliderWrapper args={args} width={420} />,
};
