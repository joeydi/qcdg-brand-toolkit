import { NavLink } from 'react-router-dom';
import { fluid, SM, XXL } from '../styles';
import { MenuItem } from '../data';

export default function Nav({ menu }: { menu: MenuItem[] }) {
  return (
    <nav
      css={{
        display: 'flex',
        flexFlow: 'row wrap',
        gap: '1rem',
        margin: `${fluid(48, 96, SM, XXL)} 0`,
      }}>
      {menu.map((item) => {
        return (
          <NavLink
            key={item.name}
            to={item.url}
            css={{
              padding: '0.5rem 1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              border: '1px solid var(--color-sawdust)',
              borderRadius: '4px',
              textAlign: 'center',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.03125rem',
              fontFamily: 'var(--ff-mono)',
              fontWeight: 'var(--fw-medium)',
              color: 'var(--color-slate)',
              transition: 'background-color 0.25s, color 0.25s',

              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                color: 'var(--color-night)',
              },

              '&.active': {
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                color: 'var(--color-night)',
              },
            }}>
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
