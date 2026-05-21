export { colors } from "./colors";
export { typography } from "./typography";
export { spacing } from "./spacing";
export { borderRadius } from "./borderRadius";
export { shadows } from "./shadows";
export { gradients } from "./gradients";

import { colors } from "./colors";
import { spacing } from "./spacing";
import { borderRadius } from "./borderRadius";
import { shadows } from "./shadows";
import { gradients } from "./gradients";
import { typography } from "./typography";

export const theme = {
  colors,
  spacing,
  borderRadius,
  fontSize: typography.fontSize,
  shadows,
  gradients,
};

export type Theme = typeof theme;
