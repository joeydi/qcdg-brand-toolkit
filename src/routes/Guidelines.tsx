import { useEffect, useRef, RefObject, MutableRefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getRandom } from '../utils';
import { fluid, MQ, SM, XXL } from '../styles';
import Section from '../components/Section';
import File from '../components/File';
import { css } from '@emotion/react';

gsap.registerPlugin(ScrollTrigger);

const pages = [
  '/guidelines/Intro.jpg',
  '/guidelines/Intro-1.jpg',
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
  const pinRef = useRef(null);
  const carouselRef: RefObject<HTMLDivElement> = useRef(null);
  const scrollTrigger: MutableRefObject<gsap.core.Tween | null> = useRef(null);

  useEffect(() => {
    if (!scrollTrigger.current) {
      scrollTrigger.current = gsap.to(carouselRef.current, {
        x: () => {
          const carouselWidth = carouselRef?.current?.clientWidth;
          const scrollWidth = carouselRef?.current?.scrollWidth;
          if (carouselWidth && scrollWidth) {
            return scrollWidth * -1 + carouselWidth;
          }
          return 0;
        },
        scrollTrigger: {
          trigger: pinRef.current,
          pin: true,
          start: 'center center',
          end: () => {
            const scrollWidth = carouselRef?.current?.scrollWidth || 1;
            return `+=${scrollWidth * 0.5}`;
          },
          scrub: 1,
        },
        ease: 'none',
      });
    }
  }, []);

  return (
    <Section>
      <h2>Brand Guidelines</h2>
      <p>
        DM Sans should be used for body copy and other long passages of text. The geometric properties match well with Gotham for
        visual consistency, while the condensed letterforms and slighter heavier weight improve readability at small sizes.
      </p>
      <File href="/QCDG Brand Guidelines.pdf" target="_blank" name="QCDG Brand Guidelines.pdf" size="12.5 MB" />
      <div ref={pinRef} css={{ marginTop: fluid(36, 96, SM, XXL) }}>
        <div
          ref={carouselRef}
          css={{
            '--marginX': fluid(8, 24, SM, XXL),
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginLeft: 'calc(var(--marginX) * -1)',
            marginRight: 'calc(var(--marginX) * -1)',

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
                  flexShrink: 0,
                  aspectRatio: 1920 / 1080,
                  width: '100%',
                  objectFit: 'cover',
                  transform: `rotate(${getRandom(-1, 1)}deg)`,
                  border: '4px solid white',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.125)',
                }}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}
