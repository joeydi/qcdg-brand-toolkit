export const SM = 576;
export const MD = 768;
export const LG = 992;
export const XL = 1200;
export const XXL = 1440;

export const MQ_SM = `@media(min-width: ${SM}px)`;
export const MQ_MD = `@media(min-width: ${MD}px)`;
export const MQ_LG = `@media(min-width: ${LG}px)`;
export const MQ_XL = `@media(min-width: ${XL}px)`;
export const MQ_XXL = `@media(min-width: ${XXL}px)`;

export function fluid(minValue: number, maxValue: number, minWidth: number, maxWidth: number) {
  const slope = (maxValue - minValue) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minValue;

  return `clamp(${minValue}px, ${yAxisIntersection}px + ${slope * 100}vw, ${maxValue}px)`;
}
