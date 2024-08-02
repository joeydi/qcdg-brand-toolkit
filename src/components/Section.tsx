import { css } from '@emotion/react';
import { fluid, SM, XXL } from '../styles';

function Section({ children, className }) {
  return (
    <div
      css={css`
        margin: ${fluid(96, 192, SM, XXL)} 0;
      `}
      className={className}>
      {children}
    </div>
  );
}

export default Section;
