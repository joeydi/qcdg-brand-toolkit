import Section from '../components/Section';
import { css } from '@emotion/react';

interface ColorSwatch {
  name: string;
  hex: string;
  rgb: string;
}

const primaryColors: ColorSwatch[] = [
  {
    name: 'Night',
    hex: '#1C2632',
    rgb: '28 38 50',
  },
  {
    name: 'Slate',
    hex: '#2C3B4E',
    rgb: '44 59 78',
  },
  {
    name: 'Sand',
    hex: '#EDE9DE',
    rgb: '237 233 222',
  },
];

const secondaryColors: ColorSwatch[] = [
  {
    name: 'Sawdust',
    hex: '#C9C2B2',
    rgb: '201 194 178',
  },
  {
    name: 'Maple',
    hex: '#FEB161',
    rgb: '254 177 97',
  },
  {
    name: 'Cherry',
    hex: '#A35139',
    rgb: '163 81 57',
  },
];

const swatchStyles = css`
  flex-grow: 1;
  flex-shrink: 0;
  width: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.25rem;
  padding: 1rem;
  font-family: var(--ff-mono);
  aspect-ratio: 1;
  background: var(--color-sawdust);
  border: 1px solid transparent;
`;

function hexToLuminance(hex: string) {
  // Remove the leading hash (#) if present
  hex = hex.replace(/^#/, '');

  // Parse the r, g, b values
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Convert RGB to the sRGB range
  r /= 255;
  g /= 255;
  b /= 255;

  // Apply gamma correction
  r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  // Calculate the luminance
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function SwatchGrid({ colors }: { colors: ColorSwatch[] }) {
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        margin: 2rem 0;
      `}>
      {colors.map((color) => {
        const borderColor = hexToLuminance(color.hex) > 0.75 ? 'var(--color-sawdust)' : 'transparent';
        const textColor = hexToLuminance(color.hex) > 0.5 ? 'var(--color-slate)' : 'var(--color-sand)';

        return (
          <div key={color.name} css={[swatchStyles, { backgroundColor: color.hex, borderColor: borderColor, color: textColor }]}>
            <span css={{ textTransform: 'uppercase', fontFamily: 'var(--ff-sans-alt)', fontWeight: 'var(--ff-bold)' }}>
              {color.name}
            </span>
            <div css={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
              <span>HEX</span>
              <span>{color.hex}</span>
            </div>
            <div css={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
              <span>RGB</span>
              <span>{color.rgb}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Colors() {
  return (
    <>
      <Section>
        <h2>Primary Colors</h2>
        <p>
          The QCDG color palette is a modern interpretation of earth tones and building materials. Where possible, utilize the
          primary colors for backgrounds and typography throughout brand touchpoints.
        </p>
        <SwatchGrid colors={primaryColors} />
      </Section>
      <Section>
        <h2>Secondary Colors</h2>
        <p>The secondary palette is an area where a bit more dimension and energy can be injected into the brand.</p>
        <SwatchGrid colors={secondaryColors} />
      </Section>
    </>
  );
}
