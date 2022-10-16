export const breakpoints = [480, 700, 1100, 1472, 1728];

// mobile first
export const from = {
  xs: `@media screen and (min-width: ${breakpoints[0]}px)`,
  sm: `@media screen and (min-width: ${breakpoints[1]}px)`,
  md: `@media screen and (min-width: ${breakpoints[2]}px)`,
  lg: `@media screen and (min-width: ${breakpoints[3]}px)`,
  xl: `@media screen and (min-width: ${breakpoints[4]}px)`
};

// desktop first
export const to = {
  xs: `@media screen and (max-width: ${breakpoints[0] - 1}px)`,
  sm: `@media screen and (max-width: ${breakpoints[1] - 1}px)`,
  md: `@media screen and (max-width: ${breakpoints[2] - 1}px)`,
  lg: `@media screen and (max-width: ${breakpoints[3] - 1}px)`,
  xl: `@media screen and (max-width: ${breakpoints[4] - 1}px)`
};
