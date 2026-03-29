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
    className: "ty-slider-rounded ty-slider-lg ty-slider-indigo",
  },
  render: (args) => (
    <SliderWrapper
      args={args}
      width={520}
      className="ty-slider-rounded ty-slider-lg ty-slider-indigo"
    />
  ),
};

export const PresetModernOcean: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: 10,
    value: 50,
    markMode: "always",
    markLabelMode: "none",
    units: "%",
    className: "ty-slider-modern ty-slider-md ty-slider-ocean",
  },
  render: (args) => (
    <SliderWrapper
      args={args}
      width={520}
      className="ty-slider-modern ty-slider-md ty-slider-ocean"
    />
  ),
};

export const PresetPillSunset: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: 20,
    value: 50,
    markMode: "always",
    markLabelMode: "none",
    units: "%",
    className: "ty-slider-pill ty-slider-lg ty-slider-sunset",
  },
  render: (args) => (
    <SliderWrapper
      args={args}
      width={520}
      className="ty-slider-pill ty-slider-lg ty-slider-sunset"
    />
  ),
};

export const PresetSizeScaling: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: 10,
    value: 50,
    markMode: "always",
    markLabelMode: "none",
    units: "%",
    className: "ty-slider-rounded ty-slider-sm ty-slider-mint",
  },
  render: (args) => <SliderWrapper args={args} width={520} />,
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
      "ty-slider-minimal ty-slider-md ty-slider-ocean ty-slider-thumb-outline ty-slider-labels-bold",
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
      "ty-slider-chunky ty-slider-md ty-slider-danger ty-slider-contrast ty-slider-thumb-outline ty-slider-labels-bold",
  },
  render: (args) => <SliderWrapper args={args} width={560} />,
};

export const PresetGlassFuturistic: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: 10,
    value: 60,
    markMode: "always",
    markLabelMode: "none",
    units: "%",
    className:
      "ty-slider-glass ty-slider-lg ty-slider-ocean ty-slider-thumb-elevated",
  },
  render: (args) => <SliderWrapper args={args} width={560} />,
};