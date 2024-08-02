import { css } from '@emotion/react';

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

export const globalStyles = css`
  :root {
    // Color
    --color-black: #000000;
    --color-white: #ffffff;

    --color-sand: #ede9de;
    --color-night: #1c2632;
    --color-slate: #2c3b4e;
    --color-sawdust: #c9c2b2;
    --color-maple: #feb161;
    --color-cherry: #a35139;

    // Type
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    --font-family-sans: 'DM Sans', sans-serif;
    --font-family-sans-alt: 'Gotham Book', sans-serif;
    --font-family-sans-alt-bold: 'Gotham Bold', sans-serif;
    --font-family-mono: 'DM Mono', monospace;

    // Grid
    // --container-padding: ${fluid(20, 60, SM, XXL)};
    --container-max-width: 1320px;
    --grid-gutter-width: 20px;

    // Transitions
    --transition-snappy: cubic-bezier(0.42, 0, 0.05, 0.99);
    --transition-ease-in: cubic-bezier(0.42, 0, 0.9, 0.51);
    --transition-ease-out: cubic-bezier(0, 0.5, 0.5, 1);
    --transition-ease-in-out: cubic-bezier(0.57, 0.18, 0.49, 0.97);
    --transition-ease-out-back: cubic-bezier(0.35, 1.6, 0.54, 0.96);

    // Spacing
    // --header-height: ${fluid(60, 80, SM, XXL)};

    // Shadows
    --box-shadow-small: 0px 0.6px 1.7px rgba(0, 0, 0, 0.008), 0px 1.4px 4px rgba(0, 0, 0, 0.012),
      0px 2.6px 7.5px rgba(0, 0, 0, 0.015), 0px 4.7px 13.4px rgba(0, 0, 0, 0.018), 0px 8.8px 25.1px rgba(0, 0, 0, 0.022),
      0px 21px 60px rgba(0, 0, 0, 0.03);
    --box-shadow-large: 0px 1.7px 2.2px rgba(0, 0, 0, 0.017), 0px 4px 5.3px rgba(0, 0, 0, 0.024),
      0px 7.5px 10px rgba(0, 0, 0, 0.03), 0px 13.4px 17.9px rgba(0, 0, 0, 0.036), 0px 25.1px 33.4px rgba(0, 0, 0, 0.043),
      0px 60px 80px rgba(0, 0, 0, 0.06);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
    line-height: 1.5;
    font-size: ${fluid(16, 24, SM, XXL)};
    font-family: var(--font-family-sans);
    color: var(--color-slate);
    background-color: var(--color-sand);
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p {
    max-width: 32em;
    margin-bottom: 0.5rem;
    overflow-wrap: break-word;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5rem;
    font-family: var(--font-family-sans-alt-bold);
    overflow-wrap: break-word;

    span {
      font-family: var(--font-family-sans-alt);
    }
  }

  h1 {
    text-transform: uppercase;
    line-height: ${7 / 8};
    font-size: ${fluid(64, 128, SM, XXL)};
  }

  h2 {
    text-transform: uppercase;
    line-height: ${9 / 8};
    font-size: ${fluid(32, 64, SM, XXL)};
  }

  h3 {
    line-height: ${9 / 8};
    font-size: ${fluid(16, 32, SM, XXL)};
  }

  .lead {
    max-width: 14.25em;
    line-height: ${9 / 8};
    font-size: ${fluid(32, 64, SM, XXL)};
  }
`;
