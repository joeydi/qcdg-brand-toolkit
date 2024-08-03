import { css } from '@emotion/react';
import { MaterialSymbolsFileSaveRounded } from '../icons';

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
  line-height: 1;
  color: var(--color-slate);
  transition: background-color 0.25s, color 0.25s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: var(--color-night);
  }

  .name {
    font-weight: var(--fw-bold);
  }
`;

interface FileProps extends React.ComponentPropsWithoutRef<'a'> {
  name: string;
  size: string;
}

function File({ name, size, ...rest }: FileProps) {
  return (
    <a css={fileStyles} {...rest}>
      <div className="icon">
        <MaterialSymbolsFileSaveRounded />
      </div>
      <span className="name">{name}</span>
      <div css={{ whiteSpace: 'nowrap' }}>{size}</div>
    </a>
  );
}

export default File;
