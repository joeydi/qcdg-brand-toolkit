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

export const EASE_IN = [0.6, 0.1, 0.9, 0.4];
export const EASE_OUT = [0.1, 0.6, 0.4, 0.9];
export const EASE_IN_OUT = [0.1, 0.6, 0.9, 0.4];

export function fluid(minValue: number, maxValue: number, minWidth: number, maxWidth: number) {
  const slope = (maxValue - minValue) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minValue;

  return `clamp(${minValue}px, ${yAxisIntersection}px + ${slope * 100}vw, ${maxValue}px)`;
}

export const globalStyles = css`
  @font-face {
    font-display: swap;
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 400;
    src: url('/webfonts/subset-GothamBook.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 700;
    src: url('/webfonts/subset-GothamBold.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    src: url('/webfonts/dm-sans-v15-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'DM Sans';
    font-style: italic;
    font-weight: 400;
    src: url('/webfonts/dm-sans-v15-latin-italic.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    src: url('/webfonts/dm-sans-v15-latin-700.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'DM Sans';
    font-style: italic;
    font-weight: 700;
    src: url('/webfonts/dm-sans-v15-latin-700italic.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'DM Mono';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/dm-mono-v14-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'DM Mono';
    font-style: normal;
    font-weight: 500;
    src: url('../fonts/dm-mono-v14-latin-500.woff2') format('woff2');
  }

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
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-bold: 700;

    --ff-sans: 'DM Sans', sans-serif;
    --ff-sans-alt: 'Gotham', sans-serif;
    --ff-mono: 'DM Mono', monospace;

    // Grid
    --container-padding: ${fluid(20, 60, SM, XXL)};
    --container-max-width: 1320px;
    --grid-gutter-width: 20px;

    // Transitions
    --transition-ease-in: cubic-bezier(${EASE_IN.join(', ')});
    --transition-ease-out: cubic-bezier(${EASE_OUT.join(', ')});
    --transition-ease-in-out: cubic-bezier(${EASE_IN_OUT.join(', ')});

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
    font-family: var(--ff-sans);
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
    height: auto;
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
    font-family: var(--ff-sans-alt);
    font-weight: var(--fw-bold);
    overflow-wrap: break-word;

    span {
      font-family: var(--ff-sans-alt);
      font-weight: var(--fw-regular);
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
    max-width: 15em;
    line-height: ${9 / 8};
    font-size: ${fluid(32, 64, SM, XXL)};
  }
`;
