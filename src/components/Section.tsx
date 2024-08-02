import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { fluid, SM, XXL } from '../styles';

const Section: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <div
      css={css`
        margin: ${fluid(96, 192, SM, XXL)} 0;
      `}
      {...rest}>
      {children}
    </div>
  );
};

export default Section;
