import { css } from '@emotion/react';
import { fluid, SM, XXL } from '../styles';

const fileStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.25);
  border: 1px solid var(--color-sawdust);
  border-radius: 4px;
  text-decoration: none;
  color: var(--color-slate);
  transition: background-color 0.25s, color 0.25s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: var(--color-night);
  }

  .name {
    font-weight: var(--font-weight-bold);
  }
`;

export function MaterialSymbolsFileSaveRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m17.3 20.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l.9.9v-3.175q0-.425.288-.712t.712-.288t.713.288t.287.712V17.2l.9-.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-2.6 2.6q-.3.3-.7.3t-.7-.3M15 24q-.425 0-.712-.288T14 23t.288-.712T15 22h6q.425 0 .713.288T22 23t-.288.713T21 24zm-9-4q-.825 0-1.412-.587T4 18V4q0-.825.588-1.412T6 2h6.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762v1.2q0 .425-.288.712t-.712.288h-4q-.825 0-1.412.588T12 13.025V19q0 .425-.288.713T11 20zm7.5-11H17l-5-5l5 5l-5-5v3.5q0 .625.438 1.063T13.5 9"></path>
    </svg>
  );
}

function File({ href, name, size }) {
  return (
    <a href={href} css={fileStyles}>
      <div className="icon">
        <MaterialSymbolsFileSaveRounded />
      </div>
      <span className="name">{name}</span>
      <div className="size">{size}</div>
    </a>
  );
}

export default File;
