import { Global, css } from '@emotion/react';
import { fluid, SM, XXL } from './styles';
import Container from './components/Container';
import Section from './components/Section';
import File from './components/File';
import Logo from './assets/logo.svg';

const globalStyles = css`
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

const containerStyles = css`
  padding-top: 1px;
  padding-bottom: 1px;
`;

const headerStyles = css`
  margin: ${fluid(96, 192, SM, XXL)} 0;
`;

const mainStyles = css`
  margin: ${fluid(96, 192, SM, XXL)} 0;
`;

const footerStyles = css`
  margin: ${fluid(96, 192, SM, XXL)} 0;
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Container css={containerStyles}>
        <header css={headerStyles}>
          <img
            css={css`
              width: auto;
              height: 2rem;
              margin-bottom: ${fluid(96, 192, SM, XXL)};
            `}
            src={Logo}
            alt="Queen City Development Group logo"
          />
          <h1>Brand Toolkit</h1>
          <p className="lead">Use these resources to keep the Queen City brand consistent and looking it’s best.</p>
        </header>
        <main css={mainStyles}>
          <Section>
            <h2>Brand Guidelines</h2>
            <p>
              DM Sans should be used for body copy and other long passages of text. The geometric properties match well with
              Gotham for visual consistency, while the condensed letterforms and slighter heavier weight improve readability at
              small sizes.
            </p>
            <File href="/QCDG Brand Guidelines.pdf" name="/QCDG Brand Guidelines.pdf" size="12.5 MB" />
          </Section>
          <Section>
            <h2>
              Typography <span>Headings</span>
            </h2>
            <p>
              Gotham Bold should be used for headings to reinforce the connection to the brand. A combination of regular and bold
              weights can be used to emphasize certain words.
            </p>
            <File href="/fonts/Gotham.zip" name="Gotham.zip" size="12.5 MB" />
          </Section>
          <Section>
            <h2>
              Typography <span>Body Copy</span>
            </h2>
            <p>
              DM Sans should be used for body copy and other long passages of text. The geometric properties match well with
              Gotham for visual consistency, while the condensed letterforms and slighter heavier weight improve readability at
              small sizes.
            </p>
            <File href="/fonts/DM Sans.zip" name="DM Sans.zip" size="12.5 MB" />
          </Section>
          <Section>
            <h2>
              Typography <span>Details</span>
            </h2>
            <p>
              DM Mono can be used as a complement to DM Sans to indicate more technical content such as dimensions and
              specifications.
            </p>
            <p>
              As the name suggests, DM Mono is a monospaced font where each character is the same width. This improves legibility
              for tabular data and technical specs by maintaining consistent vertical alignment.
            </p>
            <File href="/fonts/DM Mono.zip" name="DM Mono.zip" size="12.5 MB" />
          </Section>
        </main>
        <footer css={footerStyles}>
          <div className="container">
            <p>&copy; 2024 Queen City Development Group</p>
          </div>
        </footer>
      </Container>
    </>
  );
}

export default App;
