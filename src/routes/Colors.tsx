import Section from "../components/Section";
import { css } from "@emotion/react";
import { hexToLuminance } from "../utils";
import TooltipCursor from "../components/TooltipCursor";
import { useRef, useState } from "react";

interface ColorSwatch {
  name: string;
  hex: string;
  rgb: string;
  pms: string;
}

export const primaryColors: ColorSwatch[] = [
  {
    name: "Night",
    hex: "#1C2632",
    rgb: "28 38 50",
    pms: "7547 C",
  },
  {
    name: "Slate",
    hex: "#2C3B4E",
    rgb: "44 59 78",
    pms: "7546 C",
  },
  {
    name: "Sand",
    hex: "#EDE9DE",
    rgb: "237 233 222",
    pms: "9043 C",
  },
];

export const secondaryColors: ColorSwatch[] = [
  {
    name: "Sawdust",
    hex: "#C9C2B2",
    rgb: "201 194 178",
    pms: "4239 C",
  },
  {
    name: "Maple",
    hex: "#FEB161",
    rgb: "254 177 97",
    pms: "1485 C",
  },
  {
    name: "Cherry",
    hex: "#A35139",
    rgb: "163 81 57",
    pms: "7593 C",
  },
];

const swatchStyles = css`
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

function Swatch({ color }: { color: ColorSwatch }) {
  const [tooltipContent, setTooltipContent] = useState("Copy hex code");

  const timeoutId = useRef<number>(0);

  const copyHex = async (hex: string) => {
    window.clearTimeout(timeoutId.current);

    await navigator.clipboard.writeText(hex);
    setTooltipContent("Copied!");

    timeoutId.current = window.setTimeout(() => {
      setTooltipContent("Copy hex code");
    }, 1000);
  };

  const borderColor = hexToLuminance(color.hex) > 0.75 ? "var(--color-sawdust)" : "transparent";
  const textColor = hexToLuminance(color.hex) > 0.5 ? "var(--color-slate)" : "var(--color-sand)";
  const tooltipStyle = hexToLuminance(color.hex) > 0.5 ? "dark" : "light";

  return (
    <TooltipCursor
      content={tooltipContent}
      delay={1000}
      tooltipStyle={tooltipStyle}
      css={{ flexGrow: 1, flexShrink: 0, width: "12rem" }}>
      <div
        css={[swatchStyles, { backgroundColor: color.hex, borderColor: borderColor, color: textColor }]}
        onClick={() => {
          copyHex(color.hex);
        }}>
        <span css={{ textTransform: "uppercase", fontFamily: "var(--ff-sans-alt)", fontWeight: "var(--fw-bold)" }}>
          {color.name}
        </span>
        <div css={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
          <span>HEX</span>
          <span>{color.hex}</span>
        </div>
        <div css={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
          <span>RGB</span>
          <span>{color.rgb}</span>
        </div>
        <div css={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
          <span>PMS</span>
          <span>{color.pms}</span>
        </div>
      </div>
    </TooltipCursor>
  );
}

function SwatchGrid({ colors }: { colors: ColorSwatch[] }) {
  return (
    <div
      css={{
        display: "flex",
        flexFlow: "row wrap",
        margin: "2rem 0",
      }}>
      {colors.map((color) => (
        <Swatch key={color.name} color={color} />
      ))}
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
