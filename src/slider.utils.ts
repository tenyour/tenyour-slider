export type MarksProp = number | false | number[] | Record<number, string>;

import { resolveUnitFormatRule, singularizeWordUnit } from "./slider.units";

export type NormalizedMark = { value: number; label?: string };

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function valueToPercentage(
  value: number,
  min: number,
  max: number,
): number {
  const range = max - min;
  return range === 0 ? 0.5 : (value - min) / range;
}

export function normalizeMarks(
  marks: MarksProp,
  min: number,
  max: number,
  step: number,
): NormalizedMark[] {
  if (marks === false) return [];

  if (typeof marks === "number") {
    const stepCount = Math.floor((max - min) / step);
    const values: NormalizedMark[] = [];

    for (let i = 0; i <= stepCount; i += marks) {
      const value = Number((min + i * step).toFixed(10));
      values.push({ value });
    }

    if (values[values.length - 1]?.value !== max) {
      values.push({ value: max });
    }

    return values;
  }

  if (Array.isArray(marks)) {
    return [...marks]
      .filter((v) => v >= min && v <= max)
      .sort((a, b) => a - b)
      .map((value) => ({ value }));
  }

  if (marks && typeof marks === "object") {
    return Object.entries(marks)
      .map(([value, label]) => ({ value: Number(value), label }))
      .filter((m) => !Number.isNaN(m.value) && m.value >= min && m.value <= max)
      .sort((a, b) => a.value - b.value);
  }

  return [];
}

export function snapToNearestMark(
  value: number,
  marks: { value: number }[],
): number {
  if (!marks.length) return value;

  let closest = marks[0].value;
  let minDistance = Math.abs(value - closest);

  for (const mark of marks) {
    const distance = Math.abs(value - mark.value);

    if (distance < minDistance) {
      minDistance = distance;
      closest = mark.value;
    }
  }

  return closest;
}

function isSingular(value: number) {
  return Math.abs(value) === 1;
}

export function displayUnits(units: string, value: number): string {
  if (!units) return "";

  const mapped = resolveUnitFormatRule(units);
  if (mapped) {
    const visualUnit = isSingular(value)
      ? mapped.visualSingular
      : mapped.visualPlural;
    return mapped.visualNoSpace ? visualUnit : ` ${visualUnit}`;
  }

  // Fallback behavior for unknown unit strings.
  if (units.endsWith("s")) {
    return isSingular(value) ? ` ${singularizeWordUnit(units)}` : ` ${units}`;
  }

  return ` ${units}`;
}

export function formatAriaValue(value: number, units?: string) {
  if (!units) return `${value}`;

  const mapped = resolveUnitFormatRule(units);
  if (mapped) {
    return `${value} ${isSingular(value) ? mapped.ariaSingular : mapped.ariaPlural}`;
  }

  // Fallback behavior for unknown unit strings.
  return `${value} ${isSingular(value) ? singularizeWordUnit(units) : units}`;
}
