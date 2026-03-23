export type UnitFormatRule = {
  visualSingular: string;
  visualPlural: string;
  visualNoSpace: boolean;
  ariaSingular: string;
  ariaPlural: string;
};

const UNIT_FORMAT_RULES: Record<string, UnitFormatRule> = {
  "%": {
    visualSingular: "%",
    visualPlural: "%",
    visualNoSpace: true,
    ariaSingular: "percent",
    ariaPlural: "percent",
  },
  "°C": {
    visualSingular: "°C",
    visualPlural: "°C",
    visualNoSpace: true,
    ariaSingular: "degree celsius",
    ariaPlural: "degrees celsius",
  },
  "°F": {
    visualSingular: "°F",
    visualPlural: "°F",
    visualNoSpace: false,
    ariaSingular: "degree fahrenheit",
    ariaPlural: "degrees fahrenheit",
  },
  kg: {
    visualSingular: "kg",
    visualPlural: "kg",
    visualNoSpace: false,
    ariaSingular: "kilogram",
    ariaPlural: "kilograms",
  },
  g: {
    visualSingular: "g",
    visualPlural: "g",
    visualNoSpace: false,
    ariaSingular: "gram",
    ariaPlural: "grams",
  },
  lb: {
    visualSingular: "lb",
    visualPlural: "lb",
    visualNoSpace: false,
    ariaSingular: "pound",
    ariaPlural: "pounds",
  },
  oz: {
    visualSingular: "oz",
    visualPlural: "oz",
    visualNoSpace: false,
    ariaSingular: "ounce",
    ariaPlural: "ounces",
  },
  km: {
    visualSingular: "km",
    visualPlural: "km",
    visualNoSpace: false,
    ariaSingular: "kilometer",
    ariaPlural: "kilometers",
  },
  m: {
    visualSingular: "m",
    visualPlural: "m",
    visualNoSpace: false,
    ariaSingular: "meter",
    ariaPlural: "meters",
  },
  cm: {
    visualSingular: "cm",
    visualPlural: "cm",
    visualNoSpace: false,
    ariaSingular: "centimeter",
    ariaPlural: "centimeters",
  },
  mm: {
    visualSingular: "mm",
    visualPlural: "mm",
    visualNoSpace: false,
    ariaSingular: "millimeter",
    ariaPlural: "millimeters",
  },
  mi: {
    visualSingular: "mi",
    visualPlural: "mi",
    visualNoSpace: false,
    ariaSingular: "mile",
    ariaPlural: "miles",
  },
  ft: {
    visualSingular: "ft",
    visualPlural: "ft",
    visualNoSpace: false,
    ariaSingular: "foot",
    ariaPlural: "feet",
  },
  feet: {
    visualSingular: "foot",
    visualPlural: "feet",
    visualNoSpace: false,
    ariaSingular: "foot",
    ariaPlural: "feet",
  },
  in: {
    visualSingular: "in",
    visualPlural: "in",
    visualNoSpace: false,
    ariaSingular: "inch",
    ariaPlural: "inches",
  },
  inch: {
    visualSingular: "inch",
    visualPlural: "inches",
    visualNoSpace: false,
    ariaSingular: "inch",
    ariaPlural: "inches",
  },
  inches: {
    visualSingular: "inch",
    visualPlural: "inches",
    visualNoSpace: false,
    ariaSingular: "inch",
    ariaPlural: "inches",
  },
  s: {
    visualSingular: "s",
    visualPlural: "s",
    visualNoSpace: false,
    ariaSingular: "second",
    ariaPlural: "seconds",
  },
  min: {
    visualSingular: "min",
    visualPlural: "min",
    visualNoSpace: false,
    ariaSingular: "minute",
    ariaPlural: "minutes",
  },
  h: {
    visualSingular: "h",
    visualPlural: "h",
    visualNoSpace: false,
    ariaSingular: "hour",
    ariaPlural: "hours",
  },
};

export function resolveUnitFormatRule(
  units: string,
): UnitFormatRule | undefined {
  return UNIT_FORMAT_RULES[units];
}

export function singularizeWordUnit(unit: string): string {
  const lower = unit.toLowerCase();
  if (lower === "inches") return "inch";
  if (lower === "feet") return "foot";
  if (lower.endsWith("s")) return unit.slice(0, -1);
  return unit;
}
