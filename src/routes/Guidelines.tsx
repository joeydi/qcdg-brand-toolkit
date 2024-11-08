import { getRandom } from '../utils';
import { fluid, MQ, SM, XXL } from '../styles';
import Section from '../components/Section';
import File from '../components/File';

const pages = [
  '/guidelines/Intro.jpg',
  '/guidelines/Logo.jpg',
  '/guidelines/Logo-1.jpg',
  '/guidelines/Logo-2.jpg',
  '/guidelines/Logo-3.jpg',
  '/guidelines/Logo-4.jpg',
  '/guidelines/Logo-5.jpg',
  '/guidelines/Logo-6.jpg',
  '/guidelines/Logo-7.jpg',
  '/guidelines/Logo-8.jpg',
  '/guidelines/Logo-9.jpg',
  '/guidelines/Color.jpg',
  '/guidelines/Color-1.jpg',
  '/guidelines/Intro-1.jpg',
  '/guidelines/Color-2.jpg',
  '/guidelines/Color-3.jpg',
  '/guidelines/Typography.jpg',
  '/guidelines/Typography-1.jpg',
  '/guidelines/Typography-2.jpg',
  '/guidelines/Typography-3.jpg',
  '/guidelines/Typography-4.jpg',
  '/guidelines/Typography-5.jpg',
  '/guidelines/Typography-6.jpg',
  '/guidelines/Typography-7.jpg',
  '/guidelines/Typography-8.jpg',
  '/guidelines/Applications.jpg',
  '/guidelines/Applications-1.jpg',
  '/guidelines/Applications-2.jpg',
  '/guidelines/Applications-3.jpg',
  '/guidelines/Applications-4.jpg',
  '/guidelines/Final.jpg',
];

export default function Guidelines() {
  return (
    <Section>
      <h2>Brand Guidelines</h2>
      <p>
        DM Sans should be used for body copy and other long passages of text. The geometric properties match well with Gotham for
        visual consistency, while the condensed letterforms and slighter heavier weight improve readability at small sizes.
      </p>
      <File href="/QCDG Brand Guidelines.pdf" target="_blank" name="QCDG Brand Guidelines.pdf" size="12.5 MB" />
      <div css={{ marginTop: fluid(36, 96, SM, XXL) }}>
        <div
          css={{
            '--marginX': fluid(8, 24, SM, XXL),
            marginLeft: 'calc(var(--marginX) * -1)',
            marginRight: 'calc(var(--marginX) * -1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',

            [MQ.xxl]: {
              marginLeft: 'calc((100vw - var(--container-max-width)) / -3)',
              marginRight: 'calc((100vw - var(--container-max-width)) / -3)',
            },
          }}>
          {pages.map((page) => {
            return (
              <img
                key={page}
                src={page}
                alt=""
                css={{
                  width: '100%',
                  aspectRatio: 1920 / 1080,
                  objectFit: 'cover',
                  transform: `rotate(${getRandom(-1, 1)}deg)`,
                  border: '4px solid white',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.125)',

                  '@media (min-aspect-ratio: 1920 / 1080)': {
                    width: 'auto',
                    height: '90vh',
                  },
                }}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}
