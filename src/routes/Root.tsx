import { css } from '@emotion/react';
import { fluid, SM, XXL } from '../styles';
import Container from '../components/Container';
import Logo from '../assets/logo.svg';
import { NavLink, Outlet } from 'react-router-dom';

const containerStyles = css`
  padding-top: 1px;
  padding-bottom: 1px;
`;

const headerStyles = css`
  margin-top: ${fluid(96, 192, SM, XXL)};
`;

const navStyles = css`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  margin: ${fluid(48, 96, SM, XXL)} 0;

  a {
    padding: 0.5rem 1.25rem;
    background-color: rgba(255, 255, 255, 0.25);
    border: 1px solid var(--color-sawdust);
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.03125rem;
    font-family: var(--font-family-mono);
    font-weight: var(--font-weight-medium);
    color: var(--color-slate);
    transition: background-color 0.25s, color 0.25s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
      color: var(--color-night);
    }

    &.active {
      background-color: rgba(255, 255, 255, 0.75);
      color: var(--color-night);
    }
  }
`;

const mainStyles = css`
  margin: ${fluid(96, 192, SM, XXL)} 0;
`;

const footerStyles = css`
  margin: ${fluid(96, 192, SM, XXL)} 0;
`;

export default function Root() {
  return (
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
      <nav css={navStyles}>
        <NavLink to="">Guidelines</NavLink>
        <NavLink to="logo">Logo</NavLink>
        <NavLink to="colors">Colors</NavLink>
        <NavLink to="typography">Typography</NavLink>
        <NavLink to="applications">Applications</NavLink>
      </nav>
      <main css={mainStyles}>
        <Outlet />
      </main>
      <footer css={footerStyles}>
        <div className="container">
          <p>&copy; 2024 Queen City Development Group</p>
        </div>
      </footer>
    </Container>
  );
}
