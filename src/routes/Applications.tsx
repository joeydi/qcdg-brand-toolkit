import { css } from '@emotion/react';
import Section from '../components/Section';

const imageStyles = css`
  margin: 2rem 0;
  aspect-ratio: 1920 / 1080;
  object-fit: cover;
`;

export default function Applications() {
  return (
    <>
      <Section>
        <h2>Signage</h2>
        <img width={1920} height={1080} css={imageStyles} src="/large-banner-mockup.jpg" alt="" />
      </Section>
      <Section>
        <h2>Print</h2>
        <img width={1920} height={1080} css={imageStyles} src="magazine-mockup.jpg" alt="" />
      </Section>
      <Section>
        <h2>Digital</h2>
        <img width={1920} height={1080} css={imageStyles} src="device-mockup.jpg" alt="" />
      </Section>
      <Section>
        <h2>Apparel</h2>
        <img width={1920} height={1080} css={imageStyles} src="/polo-shirt-mockup.jpg" alt="" />
      </Section>
    </>
  );
}
