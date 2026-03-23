import React from "react";
import type { NormalizedMark } from "./slider.utils";
import { valueToPercentage } from "./slider.utils";
import styles from "./Slider.module.css";

export const SliderMarks = React.memo(function SliderMarks({
  marks,
  min,
  max,
  markLabelMode,
  showEdgeMarks = true,
}: {
  marks: NormalizedMark[];
  min: number;
  max: number;
  markLabelMode: "auto" | "always" | "none";
  showEdgeMarks?: boolean;
}) {
  const visibleMarks = showEdgeMarks ? marks : marks.slice(1, -1);

  return (
    <div className={styles.marks}>
      {visibleMarks.map((mark, index) => {
        const percentage = valueToPercentage(mark.value, min, max);
        const delay = (index / visibleMarks.length) * 0.3;

        return (
          <React.Fragment key={mark.value}>
            <div
              className={styles.mark}
              style={
                {
                  left: `${percentage * 100}%`,
                  "--mark-delay": `${delay}s`,
                } as React.CSSProperties
              }
            />
            {markLabelMode !== "none" && (
              <span
                className={styles.markLabel}
                style={
                  {
                    left: `${percentage * 100}%`,
                    "--mark-label-delay": `${delay}s`,
                  } as React.CSSProperties
                }
              >
                {mark.label ?? mark.value}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
});

SliderMarks.displayName = "SliderMarks";
