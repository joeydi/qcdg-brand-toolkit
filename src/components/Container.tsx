import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { fluid, SM, XXL } from '../styles';

const styles = css`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${fluid(20, 60, SM, XXL)};
`;

const Container: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <div css={styles} {...rest}>
      {children}
    </div>
  );
};

export default Container;
