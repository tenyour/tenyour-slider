import type { Meta, StoryObj } from "@storybook/react";
import Slider from "../Slider";
import { SliderWrapper } from "./SliderWrapper";

const meta = {
  title: "Components/Slider/Theming",
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Survey scale with custom labels (Record<number, string>). Value display shows the label. */
export const SurveyScale: Story = {
  args: {
    min: 1,
    max: 5,
    step: 1,
    marks: {
      1: "Strongly Disagree",
      2: "Disagree",
      3: "Neutral",
      4: "Agree",
      5: "Strongly Agree",
    },
    value: 3,
    markMode: "always",
    markLabelMode: "always",
  },
  render: (args) => <SliderWrapper args={args} width={420} />,
};

/** Risk level with a few labeled points. */
export const RiskLevel: Story = {
  args: {
    min: 0,
    max: 100,
    step: 5,
    marks: {
      0: "Low",
      50: "Medium",
      100: "High",
    },
    value: 50,
    markMode: "always",
    markLabelMode: "always",
  },
  render: (args) => <SliderWrapper args={args} width={360} />,
};

/** Temperature snap: demonstrates `snapToMarks` with a labeled, custom `marks` scale. */
export const TemperatureSnapWithCustomMarks: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    marks: {
      0: "0°C",
      20: "20°C",
      37: "37°C",
      100: "100°C",
    },
    value: 37,
    snapToMarks: true,
    markMode: "always",
    markLabelMode: "always",
    showValue: true,
  },
  render: (args) => <SliderWrapper args={args} width={380} />,
};

/** Custom theming (via `mySliderTheme` + CSS variables) with a labeled, custom `marks` scale to demonstrate how mark labels and the value tooltip work together. */
export const CustomTheme: Story = {
  args: {
    min: 0,
    max: 100,
    step: 5,
    marks: {
      0: "Low",
      50: "Medium",
      100: "High",
    },
    value: 50,
    markMode: "always",
    markLabelMode: "always",
    showValue: true,
    units: "",
  },
  render: (args) => (
    <SliderWrapper args={args} width={360} className="mySliderTheme" />
  ),
};

/** Pill-shaped track and full customization (radius, sizes, colors, label offset). */
export const RoundedTrack: Story = {
  args: {
    min: 0,
    max: 100,
    step: 5,
    marks: 2,
    value: 50,
    markMode: "always",
    markLabelMode: "always",
    units: "%",
  },
  render: (args) => (
    <SliderWrapper args={args} width={360} className="roundedCustomTheme" />
  ),
};
