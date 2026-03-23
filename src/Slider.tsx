import React, { useState, useRef, useMemo } from "react";
import styles from "./Slider.module.css";
import {
  clamp,
  valueToPercentage,
  normalizeMarks,
  displayUnits,
  type MarksProp,
  snapToNearestMark,
  formatAriaValue,
} from "./slider.utils";
import { SliderMarks } from "./SliderMarks";

export type { MarksProp, NormalizedMark } from "./slider.utils";

type NativeInputProps = React.ComponentPropsWithoutRef<"input">;

export interface SliderProps extends Omit<
  NativeInputProps,
  "value" | "onChange"
> {
  value: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  marks?: MarksProp;
  showEdgeMarks?: boolean;
  snapToMarks?: boolean;
  markMode?: "auto" | "always";
  markLabelMode?: "auto" | "always" | "none";
  showValue?: boolean;
  units?: string;
}

function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(value);
      } else {
        (ref as { current: T | null }).current = value;
      }
    });
  };
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      value,
      onChange,
      min = 1,
      max = 10,
      step = 1,
      marks = 1,
      showEdgeMarks = true,
      snapToMarks = false,
      markMode = "auto",
      markLabelMode = "none",
      showValue,
      units = "",
      className,
      disabled = false,
      "aria-valuetext": ariaValueTextProp,
      ...rest
    },
    forwardedRef,
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const ref = mergeRefs<HTMLInputElement>(internalRef, forwardedRef);

    const [isDragging, setIsDragging] = useState(false);
    const [hasMoved, setHasMoved] = useState(false);

    const shouldShowValue =
      showValue === true || (showValue !== false && (hasMoved || isDragging));

    /* ---------------- Derived Layout ---------------- */
    const range = max - min;
    const safeValue = clamp(value, min, max);

    const percentage = valueToPercentage(safeValue, min, max);
    const isSingleValue = range === 0;

    const inputMin = isSingleValue ? 0 : min;
    const inputMax = isSingleValue ? 1 : max;
    const inputValue = isSingleValue ? 0.5 : safeValue;

    const normalizedMarks = useMemo(
      () => normalizeMarks(marks, min, max, step),
      [marks, min, max, step],
    );

    const marksEnabled = normalizedMarks.length > 0;

    const showMarks =
      markMode === "always" || (markMode === "auto" && isDragging);

    const showLabels =
      markLabelMode === "always" || (markLabelMode === "auto" && showMarks);

    const currentMark = normalizedMarks.find((m) => m.value === safeValue);

    const ariaValueTextGenerated = currentMark?.label
      ? `${currentMark.label} (${formatAriaValue(safeValue, units)})`
      : formatAriaValue(safeValue, units);

    /* ---------------- Event Handler ---------------- */
    const handleChange = (newValue: number) => {
      if (range === 0 || disabled) return;

      let finalValue = newValue;

      if (snapToMarks && normalizedMarks.length) {
        finalValue = snapToNearestMark(newValue, normalizedMarks);
      }

      setHasMoved(true);
      onChange?.(finalValue);
    };

    return (
      <div
        className={`
                ${styles.sliderWrapper}
                ${disabled ? styles.disabled : ""}
                ${showMarks ? styles.marksVisible : ""}
                ${showLabels ? styles.markLabelsVisible : ""}
                ${className ?? ""}
            `}
      >
        <div className={styles.track}>
          <div
            className={styles.fill}
            style={{
              width: `${isSingleValue ? 100 : percentage * 100}%`,
            }}
          />
        </div>
        {marksEnabled && (
          <SliderMarks
            marks={normalizedMarks}
            min={min}
            max={max}
            markLabelMode={markLabelMode}
            showEdgeMarks={showEdgeMarks}
          />
        )}
        <input
          ref={ref}
          type="range"
          value={inputValue}
          min={inputMin}
          max={inputMax}
          step={isSingleValue ? 0.01 : step}
          disabled={disabled}
          aria-valuetext={ariaValueTextProp ?? ariaValueTextGenerated}
          onChange={(e) => handleChange(Number(e.target.value))}
          onPointerDown={(e) => {
            if (disabled) return;
            setIsDragging(true);
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
          }}
          onPointerUp={() => {
            if (disabled) return;
            setIsDragging(false);
          }}
          onPointerCancel={() => {
            if (disabled) return;
            setIsDragging(false);
          }}
          className={styles.slider}
          {...rest}
        />
        <div className={styles.valueLayer}>
          <span
            className={`${styles.valueDisplay} ${
              shouldShowValue ? styles.visible : ""
            }`}
            style={{ left: `${percentage * 100}%` }}
          >
            {currentMark?.label ?? safeValue}
            <span style={{ fontSize: "12px" }}>
              {currentMark?.label ? "" : displayUnits(units, safeValue)}
            </span>
          </span>
        </div>
      </div>
    );
  },
);

Slider.displayName = "Slider";

export default Slider;
