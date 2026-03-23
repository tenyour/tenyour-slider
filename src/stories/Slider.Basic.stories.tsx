import type { Meta, StoryObj } from "@storybook/react";
import Slider from "../Slider";
import { SliderWrapper } from "./SliderWrapper";

const meta = {
  title: "Components/Slider/Basic",
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Basic 1–10 slider. Marks and labels appear on drag (auto). */
export const Default: Story = {
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
  render: (args) => <SliderWrapper args={args} />,
};

/** Minimal slider: clean UI, no marks. */
export const Minimal: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    marks: false,
  },
  render: (args) => <SliderWrapper args={args} />,
};

/** 0–100 with percentage units and a mark every 10. */
export const Percentage: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: 10,
    value: 50,
    units: "%",
  },
  render: (args) => <SliderWrapper args={args} width={360} />,
};

/** Word unit example (`inches`) with discrete inch steps. */
export const UnitsInchesWord: Story = {
  args: {
    min: 0,
    max: 12,
    step: 1,
    marks: 2,
    value: 6,
    units: "inches",
    markMode: "always",
    showValue: true,
  },
  render: (args) => <SliderWrapper args={args} width={360} />,
};

/** Metric unit abbreviation (`cm`) keeps a spaced visual suffix. */
export const UnitsCentimeters: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: 10,
    value: 50,
    units: "cm",
    markMode: "always",
    showValue: true,
  },
  render: (args) => <SliderWrapper args={args} width={360} />,
};

/** Slider is non-interactive; value and marks still visible. */
export const Disabled: Story = {
  args: {
    value: 5,
    min: 1,
    max: 10,
    step: 1,
    marks: 1,
    disabled: true,
  },
  render: (args) => <SliderWrapper args={args} />,
};
