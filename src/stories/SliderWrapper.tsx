import { useState } from "react";
import Slider from "../Slider";
import type { SliderProps } from "../Slider";
import "../slider.presets.css";
import "./sliderThemes.css";

const storyFrameStyle: React.CSSProperties = {
  width: "100%",
  minWidth: 680,
  minHeight: 320,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const sliderWrapperStyle: React.CSSProperties = {
  backgroundColor: "#1e1e1e",
  color: "#e5e5e5",
  width: "100%",
  maxWidth: 920,
  minHeight: 240,
  borderRadius: 12,
  paddingTop: 56,
  paddingRight: 64,
  paddingBottom: 56,
  paddingLeft: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const lightSliderWrapperStyle: React.CSSProperties = {
  ...sliderWrapperStyle,
  backgroundColor: "#f8fafc",
  color: "#0f172a",
};

export function SliderWrapper({
  args,
  width = 320,
  className,
  tone = "dark",
}: {
  args: SliderProps;
  width?: number;
  className?: string;
  tone?: "dark" | "light";
}) {
  const [value, setValue] = useState(args.value ?? 5);
  const mergedClassName = [args.className, className].filter(Boolean).join(" ");

  return (
    <div style={storyFrameStyle}>
      <div style={tone === "light" ? lightSliderWrapperStyle : sliderWrapperStyle}>
        <div style={{ width }}>
          <Slider
            {...args}
            value={value}
            onChange={setValue}
            className={mergedClassName || undefined}
          />
        </div>
      </div>
    </div>
  );
}
