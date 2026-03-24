import type { Meta, StoryObj } from "@storybook/react";
import Slider from "../Slider";
import { SliderWrapper } from "./SliderWrapper";

const meta = {
  title: "Components/Slider/Presets",
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PresetRounded: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: 10,
    value: 50,
    markMode: "always",
    markLabelMode: "none",
    showEdgeMarks: false,
    units: "%",
    className: "ty-slider-rounded ty-slider-lg",
  },
  render: (args) => (
    <SliderWrapper
      args={args}
      width={520}
      className="ty-slider-rounded ty-slider-lg"
    />
  ),
};

export const PresetDots: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: 10,
    value: 50,
    markMode: "always",
    markLabelMode: "none",
    units: "%",
    className: "ty-slider-dots dotsMarks",
  },
  render: (args) => (
    <SliderWrapper
      args={args}
      width={520}
      className="ty-slider-dots dotsMarks"
    />
  ),
};

export const PresetComposed: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: 20,
    value: 50,
    markMode: "always",
    markLabelMode: "none",
    units: "%",
    className: "ty-slider-rounded ty-slider-chunky .composedMarks",
  },
  render: (args) => (
    <SliderWrapper
      args={args}
      width={520}
      className="ty-slider-rounded ty-slider-chunky composedMarks"
    />
  ),
};

export const PresetSizesAndColors: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: 10,
    value: 50,
    markMode: "always",
    markLabelMode: "none",
    units: "%",
    className: "ty-slider-rounded ty-slider-lg ty-slider-primary",
  },
  render: (args) => <SliderWrapper args={args} width={560} />,
};

export const PresetThumbOutlineAndLabelsBold: Story = {
  args: {
    min: 1,
    max: 5,
    step: 1,
    marks: {
      1: "Low",
      2: "Mid",
      3: "Good",
      4: "Great",
      5: "Max",
    },
    value: 3,
    markMode: "always",
    markLabelMode: "always",
    showValue: true,
    units: "",
    className:
      "ty-slider-minimal ty-slider-neutral ty-slider-thumb-outline ty-slider-labels-bold",
  },
  render: (args) => <SliderWrapper args={args} width={520} />,
};

export const NumberDangerOutlineBoldLabels: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: 10,
    value: 75,
    markMode: "always",
    markLabelMode: "always",
    showValue: true,
    units: "%",
    className:
      "ty-slider-chunky ty-slider-md ty-slider-danger ty-slider-contrast ty-slider-thumb-outline ty-slider-labels-bold ty-slider-relaxed",
  },
  render: (args) => <SliderWrapper args={args} width={560} />,
};